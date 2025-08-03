#!/bin/bash

echo "========================================"
echo "   DESPLIEGUE EN VPS DE HOSTINGER"
echo "========================================"
echo

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para imprimir con colores
print_status() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# Verificar si estamos en el VPS
if [ "$EUID" -ne 0 ]; then
    print_warning "Este script debe ejecutarse como root en el VPS"
    print_warning "Ejecuta: sudo bash deploy-vps.sh"
    exit 1
fi

echo "1. Actualizando sistema..."
apt update && apt upgrade -y
print_status "Sistema actualizado"

echo
echo "2. Instalando Nginx..."
apt install nginx -y
systemctl start nginx
systemctl enable nginx
print_status "Nginx instalado y configurado"

echo
echo "3. Creando directorio del sitio..."
mkdir -p /var/www/south-ai-solutions
print_status "Directorio creado: /var/www/south-ai-solutions"

echo
echo "4. Configurando permisos..."
chown -R www-data:www-data /var/www/south-ai-solutions
chmod -R 755 /var/www/south-ai-solutions
print_status "Permisos configurados"

echo
echo "5. Creando configuración de Nginx..."
cat > /etc/nginx/sites-available/south-ai-solutions << 'EOF'
server {
    listen 80;
    server_name _;
    root /var/www/south-ai-solutions;
    index index.html;

    # Configuración para React Router
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Configuración para archivos estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|mp4)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Configuración de seguridad
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    
    # Configuración de compresión
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss;
}
EOF

print_status "Configuración de Nginx creada"

echo
echo "6. Activando sitio..."
ln -sf /etc/nginx/sites-available/south-ai-solutions /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
print_status "Sitio activado"

echo
echo "7. Verificando configuración de Nginx..."
if nginx -t; then
    print_status "Configuración de Nginx válida"
    systemctl restart nginx
    print_status "Nginx reiniciado"
else
    print_error "Error en la configuración de Nginx"
    exit 1
fi

echo
echo "8. Configurando firewall..."
ufw allow 'Nginx Full'
ufw allow OpenSSH
ufw --force enable
print_status "Firewall configurado"

echo
echo "========================================"
echo "   ¡CONFIGURACIÓN COMPLETADA!"
echo "========================================"
echo
echo "Próximos pasos:"
echo "1. Sube los archivos de la carpeta dist/ a:"
echo "   /var/www/south-ai-solutions/"
echo
echo "2. Puedes usar estos métodos:"
echo "   - SCP: scp -r dist/* root@tu-ip:/var/www/south-ai-solutions/"
echo "   - File Manager de Hostinger"
echo "   - Git: clona tu repositorio y ejecuta npm run build"
echo
echo "3. Para configurar SSL:"
echo "   sudo apt install certbot python3-certbot-nginx -y"
echo "   sudo certbot --nginx -d tu-dominio.com"
echo
echo "4. Para verificar el estado:"
echo "   sudo systemctl status nginx"
echo "   sudo tail -f /var/log/nginx/error.log"
echo
echo "Tu sitio estará disponible en: http://tu-ip-del-vps" 