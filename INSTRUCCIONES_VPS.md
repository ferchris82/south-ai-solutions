# 🚀 Instrucciones Paso a Paso: VPS de Hostinger

## 📋 Preparación inicial

### 1. Acceso al VPS
```bash
# Opción A: SSH desde tu PC
ssh root@tu-ip-del-vps

# Opción B: Terminal web de Hostinger
# Panel de Hostinger → VPS → Terminal
```

### 2. Subir archivos al VPS

#### Método A: SCP (desde tu PC)
```bash
# Subir el script de configuración
scp deploy-vps.sh root@tu-ip-del-vps:/root/

# Subir archivos de producción
scp -r dist/* root@tu-ip-del-vps:/var/www/south-ai-solutions/
```

#### Método B: File Manager de Hostinger
1. Accede al panel de Hostinger
2. Ve a tu VPS → File Manager
3. Navega a `/root/` y sube `deploy-vps.sh`
4. Navega a `/var/www/` y crea la carpeta `south-ai-solutions`
5. Sube todos los archivos de `dist/` a `/var/www/south-ai-solutions/`

#### Método C: Git (en el VPS)
```bash
# En el VPS
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
npm install
npm run build
sudo cp -r dist/* /var/www/south-ai-solutions/
```

## 🔧 Configuración del servidor

### 3. Ejecutar script de configuración
```bash
# Dar permisos de ejecución
chmod +x deploy-vps.sh

# Ejecutar como root
sudo bash deploy-vps.sh
```

### 4. Verificar configuración
```bash
# Verificar que Nginx esté corriendo
sudo systemctl status nginx

# Verificar configuración
sudo nginx -t

# Verificar archivos
ls -la /var/www/south-ai-solutions/
```

## 🌐 Configuración de dominio (opcional)

### 5. Configurar dominio
```bash
# Editar configuración de Nginx
sudo nano /etc/nginx/sites-available/south-ai-solutions

# Cambiar esta línea:
# server_name _;
# Por:
# server_name tu-dominio.com www.tu-dominio.com;

# Reiniciar Nginx
sudo systemctl restart nginx
```

### 6. Configurar SSL (recomendado)
```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtener certificado SSL
sudo certbot --nginx -d tu-dominio.com -d www.tu-dominio.com
```

## 🔍 Verificación final

### 7. Probar el sitio
- Visita `http://tu-ip-del-vps` en tu navegador
- Verifica que la aplicación cargue correctamente
- Prueba la navegación entre páginas
- Revisa la consola del navegador para errores

### 8. Comandos de monitoreo
```bash
# Ver logs en tiempo real
sudo tail -f /var/log/nginx/error.log

# Ver estado de Nginx
sudo systemctl status nginx

# Ver puertos abiertos
sudo netstat -tlnp
```

## 🆘 Solución de problemas comunes

### Error: "Permission denied"
```bash
# Corregir permisos
sudo chown -R www-data:www-data /var/www/south-ai-solutions
sudo chmod -R 755 /var/www/south-ai-solutions
```

### Error: "502 Bad Gateway"
```bash
# Verificar que Nginx esté corriendo
sudo systemctl status nginx

# Reiniciar Nginx
sudo systemctl restart nginx

# Verificar logs
sudo tail -f /var/log/nginx/error.log
```

### Error: "nginx: configuration test failed"
```bash
# Verificar sintaxis
sudo nginx -t

# Si hay errores, revisar configuración
sudo nano /etc/nginx/sites-available/south-ai-solutions
```

### Error: "Connection refused"
```bash
# Verificar firewall
sudo ufw status

# Abrir puertos necesarios
sudo ufw allow 80
sudo ufw allow 443
sudo ufw allow OpenSSH
```

## 📞 Recursos de ayuda

### Documentación disponible
- `VPS_DEPLOYMENT.md` - Guía completa de despliegue
- `VPS_RESUMEN.md` - Resumen rápido
- `deploy-vps.sh` - Script de automatización

### Soporte de Hostinger
- **Panel de control**: Acceso completo al VPS
- **Terminal web**: Acceso SSH desde el navegador
- **File Manager**: Gestión de archivos web
- **Soporte técnico**: Especializado en VPS

### Comandos útiles
```bash
# Reiniciar Nginx
sudo systemctl restart nginx

# Ver logs de Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Verificar espacio en disco
df -h

# Verificar uso de memoria
free -h

# Verificar procesos
ps aux | grep nginx
```

## 🎉 ¡Listo!

Tu aplicación React estará funcionando en tu VPS de Hostinger con:
- ✅ Rendimiento óptimo
- ✅ Control total del servidor
- ✅ Configuración personalizada
- ✅ SSL gratuito (si configuras dominio)
- ✅ Múltiples dominios posibles

¡Disfruta de tu aplicación en el VPS! 