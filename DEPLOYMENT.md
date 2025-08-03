# Guía de Despliegue en Hostinger

## Pasos para desplegar tu aplicación React en Hostinger

### 1. Preparación del proyecto
- ✅ El proyecto ya está construido con `npm run build`
- ✅ Los archivos de producción están en la carpeta `dist/`
- ✅ Se ha creado el archivo `.htaccess` para manejar las rutas de React

### 2. Acceso a Hostinger
1. Inicia sesión en tu panel de control de Hostinger
2. Ve a la sección "File Manager" o "Administrador de archivos"
3. Navega a la carpeta `public_html` de tu dominio

### 3. Subir archivos
**Opción A: Usando File Manager de Hostinger**
1. En el File Manager, navega a `public_html`
2. Sube todos los archivos de la carpeta `dist/` a `public_html`
3. Asegúrate de que el archivo `index.html` esté en la raíz de `public_html`

**Opción B: Usando FTP**
1. Descarga un cliente FTP como FileZilla
2. Conecta a tu servidor usando las credenciales FTP de Hostinger
3. Sube todos los archivos de `dist/` a la carpeta `public_html`

### 4. Verificar la estructura
Tu `public_html` debe tener esta estructura:
```
public_html/
├── index.html
├── favicon.ico
├── robots.txt
├── placeholder.svg
├── .htaccess
└── assets/
    ├── index-CWAgS43_.css
    ├── index-BFWhLdDV.js
    └── [otros archivos de assets]
```

### 5. Configuración adicional (opcional)
Si tienes problemas con las rutas, verifica que:
- El archivo `.htaccess` esté en la raíz de `public_html`
- El módulo `mod_rewrite` esté habilitado en tu hosting
- No haya conflictos con otros archivos `.htaccess`

### 6. Verificar el despliegue
1. Visita tu dominio en el navegador
2. Verifica que la aplicación cargue correctamente
3. Prueba la navegación entre páginas
4. Revisa la consola del navegador para errores

### Solución de problemas comunes

**Problema: Página en blanco**
- Verifica que `index.html` esté en la raíz de `public_html`
- Revisa que el archivo `.htaccess` esté presente

**Problema: Error 404 en rutas**
- Asegúrate de que el archivo `.htaccess` esté configurado correctamente
- Verifica que `mod_rewrite` esté habilitado

**Problema: Archivos CSS/JS no cargan**
- Verifica que la carpeta `assets/` esté completa
- Revisa las rutas en el archivo `index.html`

### Comandos útiles para desarrollo
```bash
# Construir para producción
npm run build

# Previsualizar la construcción
npm run preview

# Desarrollo local
npm run dev
```

### Notas importantes
- Hostinger soporta aplicaciones SPA (Single Page Applications)
- El archivo `.htaccess` maneja el enrutamiento del lado del cliente
- Los archivos están optimizados y comprimidos para producción
- Se ha configurado caché del navegador para mejor rendimiento 