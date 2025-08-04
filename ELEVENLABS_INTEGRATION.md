# Integración de ElevenLabs Convai Widget

## ✅ Implementación Actual

El widget de ElevenLabs Convai ya está integrado en tu página web usando la **Opción 1** (recomendada).

### Ubicación
- **Archivo**: `index.html`
- **Posición**: Al final del `<body>`, justo antes del cierre

### Código Implementado
```html
<!-- ElevenLabs Convai Widget -->
<elevenlabs-convai 
  agent-id="agent_5601k1v22vm3f6aa3wvk24tb6ww2"
  data-terms-url="/terminos-y-condiciones"
  data-privacy-url="/politica-privacidad"
  data-language="es"
></elevenlabs-convai>
<script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
```

## 🔧 Opciones de Implementación

### Opción 1: HTML Directo (✅ Implementada)
- **Ventajas**: Carga más rápida, menos complejidad
- **Ubicación**: `index.html`
- **Estado**: ✅ Activa

### Opción 2: Componente React (Alternativa)
- **Ventajas**: Más control, mejor integración con React
- **Ubicación**: `src/components/ElevenLabsWidget.tsx`
- **Uso**: Descomenta las líneas en `src/pages/Index.tsx`

```tsx
import ElevenLabsWidget from "@/components/ElevenLabsWidget";

// En tu componente:
<ElevenLabsWidget agentId="agent_5601k1v22vm3f6aa3wvk24tb6ww2" />
```

## 🎯 Configuración del Agente

- **Agent ID**: `agent_5601k1v22vm3f6aa3wvk24tb6ww2`
- **Plataforma**: ElevenLabs Convai
- **Tipo**: Widget embebido

## 🚀 Personalización

### ✅ Términos y Condiciones Personalizados

**Problema**: El widget muestra términos y condiciones en inglés por defecto.

**Solución Implementada**:
1. ✅ **Páginas creadas**: 
   - `/terminos-y-condiciones` - Términos y condiciones en español
   - `/politica-privacidad` - Política de privacidad en español

2. ✅ **Widget configurado** con atributos personalizados:
   ```html
   data-terms-url="/terminos-y-condiciones"
   data-privacy-url="/politica-privacidad"
   data-language="es"
   ```

3. ✅ **Enlaces en el footer** para fácil acceso

### 🔥 Quitar el Branding "Powered by ElevenLabs"

**Problema**: El widget muestra "Powered by ElevenLabs Conversational AI" por defecto.

**Soluciones Implementadas**:

#### Opción 1: Atributos HTML (✅ Implementada)
```html
<elevenlabs-convai 
  agent-id="agent_5601k1v22vm3f6aa3wvk24tb6ww2"
  data-terms-url="/terminos-y-condiciones"
  data-privacy-url="/politica-privacidad"
  data-language="es"
  data-branding="false"
  data-white-label="true"
  data-custom-footer=""
></elevenlabs-convai>
```

#### Opción 2: CSS Personalizado (✅ Implementada)
```css
/* Hide ElevenLabs branding */
elevenlabs-convai [data-testid="powered-by"],
elevenlabs-convai .powered-by,
elevenlabs-convai .branding,
elevenlabs-convai .footer-branding,
elevenlabs-convai [class*="powered"],
elevenlabs-convai [class*="branding"],
elevenlabs-convai [class*="footer"],
elevenlabs-convai [class*="elevenlabs"],
elevenlabs-convai [class*="convai"] {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  height: 0 !important;
  width: 0 !important;
  overflow: hidden !important;
}
```

#### Opción 3: JavaScript Remover (✅ Implementada)
- **Componente**: `ElevenLabsBrandingRemover.tsx`
- **Funcionalidad**: Remueve dinámicamente el branding usando múltiples métodos
- **Ubicación**: Automáticamente activo en la página principal

#### Opción 4: Dashboard de ElevenLabs (Recomendada)
1. Ve a tu dashboard de ElevenLabs Convai
2. Selecciona tu agente
3. Busca opciones como:
   - "Branding"
   - "Custom Branding"
   - "Remove Powered by"
   - "White Label"
   - "Custom Footer Text"

### Cambiar el Agent ID
1. Ve a tu dashboard de ElevenLabs Convai
2. Copia el nuevo Agent ID
3. Reemplaza en `index.html`:
```html
<elevenlabs-convai agent-id="TU_NUEVO_AGENT_ID"></elevenlabs-convai>
```

### Estilos CSS Personalizados
Puedes agregar estilos CSS para personalizar la apariencia del widget:

```css
/* En src/index.css */
elevenlabs-convai {
  /* Tus estilos personalizados */
  z-index: 1000;
  position: fixed;
  bottom: 20px;
  right: 20px;
}
```

## 📱 Responsividad

El widget de ElevenLabs Convai es automáticamente responsive y se adapta a diferentes tamaños de pantalla.

## 🔍 Verificación

Para verificar que el widget funciona correctamente:

1. Abre tu página web
2. Busca el ícono del chat en la esquina inferior derecha
3. Haz clic para abrir el chat
4. **Verifica que los términos y condiciones aparecen en español**
5. **Verifica que el branding "Powered by ElevenLabs" está oculto**
6. Verifica que el agente responde correctamente

### Verificación del Branding
- ✅ **Atributos HTML**: `data-branding="false"` y `data-white-label="true"`
- ✅ **CSS**: Múltiples selectores para ocultar elementos de branding
- ✅ **JavaScript**: Componente que remueve dinámicamente el branding
- ✅ **Dashboard**: Verifica si hay opciones de white label en ElevenLabs

## 🛠️ Solución de Problemas

### El widget no aparece
1. Verifica que el Agent ID sea correcto
2. Asegúrate de que el script se cargue correctamente
3. Revisa la consola del navegador para errores

### Los términos siguen en inglés
1. Verifica que las URLs en el widget sean correctas
2. Asegúrate de que las páginas `/terminos-y-condiciones` y `/politica-privacidad` funcionen
3. Limpia la caché del navegador
4. Verifica en el dashboard de ElevenLabs si hay configuraciones adicionales

### El branding sigue apareciendo
1. **Verifica el dashboard de ElevenLabs** para opciones de white label
2. **Limpia la caché del navegador** y recarga la página
3. **Inspecciona el elemento** con las herramientas de desarrollador para ver las clases CSS
4. **Verifica que el componente JavaScript** se esté ejecutando correctamente
5. **Contacta al soporte de ElevenLabs** para preguntar sobre opciones de white label
6. **Considera actualizar a un plan premium** que incluya opciones de branding personalizado

### Errores de TypeScript
- Los tipos están definidos en `src/types/elevenlabs.d.ts`
- Si hay errores, reinicia el servidor de desarrollo

### Problemas de carga
- El script se carga de forma asíncrona
- Puede tomar unos segundos en aparecer
- Verifica tu conexión a internet

## 📞 Soporte

Si tienes problemas con la integración:
1. Revisa la documentación oficial de ElevenLabs
2. Verifica que tu Agent ID esté activo
3. Contacta al soporte de ElevenLabs si es necesario

## 📄 Páginas Legales Creadas

### `/terminos-y-condiciones`
- ✅ Términos y condiciones completos en español
- ✅ Diseño consistente con tu sitio web
- ✅ Información de contacto actualizada

### `/politica-privacidad`
- ✅ Política de privacidad completa en español
- ✅ Cumple con estándares de protección de datos
- ✅ Información sobre el manejo de datos del chat IA 