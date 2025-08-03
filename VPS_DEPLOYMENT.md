# 🚀 Despliegue en VPS de Hostinger

## ✅ Diferencias con hosting compartido
- **VPS**: Tienes control total del servidor
- **Node.js**: Puedes ejecutar aplicaciones Node.js directamente
- **Nginx/Apache**: Configuración personalizada del servidor web
- **SSL**: Certificados SSL personalizados
- **Dominios**: Múltiples dominios y subdominios

## 🔧 Opciones de despliegue en VPS

### Opción 1: Servidor Web (Recomendado para sitios estáticos)
Usar Nginx o Apache para servir los archivos estáticos.

### Opción 2: Node.js con PM2
Ejecutar la aplicación React como servidor Node.js.

### Opción 3: Docker
Containerizar la aplicación para fácil despliegue.

## 📋 Preparación del VPS

### 1. Acceso al VPS
```bash
# Conectar por SSH
ssh root@tu-ip-del-vps

# O usar el terminal web de Hostinger
# Panel de Hostinger → VPS → Terminal
```

### 2. Actualizar el sistema
```bash
# Ubuntu/Debian
sudo apt update && sudo apt upgrade -y

# CentOS/RHEL
sudo yum update -y
```

### 3. Instalar Node.js (si usas Opción 2)
```bash
# Instalar Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verificar instalación
node --version
npm --version
```

## 🎯 Opción 1: Nginx (Recomendado)

### 1. Instalar Nginx
```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 2. Configurar el sitio
```bash
# Crear directorio para tu sitio
sudo mkdir -p /var/www/tu-dominio.com

# Subir archivos de dist/ a /var/www/tu-dominio.com/
# Puedes usar SCP, SFTP, o el File Manager de Hostinger
```

### 3. Configurar Nginx
```bash
# Crear configuración del sitio
sudo nano /etc/nginx/sites-available/tu-dominio.com
```

Contenido del archivo:
```nginx
server {
    listen 80;
    server_name tu-dominio.com www.tu-dominio.com;
    root /var/www/tu-dominio.com;
    index index.html;

    # Configuración para React Router
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Configuración para archivos estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Configuración de seguridad
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
}
```

### 4. Activar el sitio
```bash
# Crear enlace simbólico
sudo ln -s /etc/nginx/sites-available/tu-dominio.com /etc/nginx/sites-enabled/

# Verificar configuración
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
```

### 5. Configurar SSL (Let's Encrypt)
```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtener certificado SSL
sudo certbot --nginx -d tu-dominio.com -d www.tu-dominio.com
```

## 🎯 Opción 2: Node.js con PM2

### 1. Preparar la aplicación
```bash
# En tu VPS, clonar el repositorio
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio

# Instalar dependencias
npm install

# Construir para producción
npm run build
```

### 2. Instalar PM2
```bash
npm install -g pm2
```

### 3. Configurar PM2
Crear archivo `ecosystem.config.js`:
```javascript
module.exports = {
  apps: [{
    name: 'south-ai-solutions',
    script: 'npm',
    args: 'run preview',
    cwd: '/ruta/a/tu-proyecto',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

### 4. Ejecutar con PM2
```bash
pm2 start ecosystem.config.js
pm2 startup
pm2 save
```

### 5. Configurar Nginx como proxy
```nginx
server {
    listen 80;
    server_name tu-dominio.com www.tu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🎯 Opción 3: Docker

### 1. Instalar Docker
```bash
# Instalar Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Agregar usuario al grupo docker
sudo usermod -aG docker $USER
```

### 2. Crear Dockerfile
```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Instalar serve para servir archivos estáticos
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
```

### 3. Crear docker-compose.yml
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    restart: unless-stopped
```

### 4. Ejecutar con Docker
```bash
docker-compose up -d
```

## 📁 Subir archivos al VPS

### Método 1: SCP
```bash
# Desde tu computadora local
scp -r dist/* root@tu-ip-del-vps:/var/www/tu-dominio.com/
```

### Método 2: Git
```bash
# En el VPS
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
npm install
npm run build
```

### Método 3: File Manager de Hostinger
1. Accede al panel de Hostinger
2. Ve a tu VPS → File Manager
3. Navega a `/var/www/tu-dominio.com/`
4. Sube los archivos de la carpeta `dist/`

## 🔍 Verificación

### Verificar que el sitio funcione
```bash
# Verificar que Nginx esté corriendo
sudo systemctl status nginx

# Verificar puertos abiertos
sudo netstat -tlnp

# Verificar logs
sudo tail -f /var/log/nginx/error.log
```

### Comandos útiles
```bash
# Reiniciar Nginx
sudo systemctl restart nginx

# Ver estado de PM2
pm2 status

# Ver logs de PM2
pm2 logs

# Reiniciar aplicación PM2
pm2 restart south-ai-solutions
```

## 🆘 Solución de problemas

### Problema: Error 502 Bad Gateway
- Verificar que la aplicación esté corriendo
- Revisar logs de Nginx: `sudo tail -f /var/log/nginx/error.log`

### Problema: Error de permisos
```bash
# Dar permisos correctos
sudo chown -R www-data:www-data /var/www/tu-dominio.com
sudo chmod -R 755 /var/www/tu-dominio.com
```

### Problema: Puerto bloqueado
```bash
# Verificar firewall
sudo ufw status
sudo ufw allow 80
sudo ufw allow 443
```

## 📞 Soporte VPS
- **Hostinger VPS**: Soporte técnico especializado
- **Documentación**: Revisa la documentación de tu VPS en el panel de Hostinger
- **Comunidad**: Foros de Hostinger para VPS 