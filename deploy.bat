@echo off
echo ========================================
echo    PREPARANDO DESPLIEGUE EN HOSTINGER
echo ========================================
echo.

echo 1. Limpiando construcción anterior...
if exist dist rmdir /s /q dist
echo ✓ Limpieza completada
echo.

echo 2. Instalando dependencias...
npm install
echo ✓ Dependencias instaladas
echo.

echo 3. Construyendo aplicación para producción...
npm run build
echo ✓ Construcción completada
echo.

echo 4. Verificando archivos de producción...
if exist dist\index.html (
    echo ✓ index.html encontrado
) else (
    echo ✗ ERROR: index.html no encontrado
    pause
    exit /b 1
)

if exist dist\.htaccess (
    echo ✓ .htaccess encontrado
) else (
    echo ✗ ERROR: .htaccess no encontrado
    pause
    exit /b 1
)

echo.
echo ========================================
echo    ¡CONSTRUCCIÓN COMPLETADA!
echo ========================================
echo.
echo Archivos listos para subir a Hostinger:
echo - Carpeta: dist/
echo - Archivo principal: dist/index.html
echo - Configuración: dist/.htaccess
echo.
echo Próximos pasos:
echo 1. Accede a tu panel de Hostinger
echo 2. Ve al File Manager
echo 3. Navega a public_html
echo 4. Sube todos los archivos de la carpeta dist/
echo.
echo Presiona cualquier tecla para abrir la carpeta dist...
pause >nul
start dist 