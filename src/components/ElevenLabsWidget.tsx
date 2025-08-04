import { useEffect } from 'react';

interface ElevenLabsWidgetProps {
  agentId: string;
  className?: string;
}

const ElevenLabsWidget = ({ agentId, className = '' }: ElevenLabsWidgetProps) => {
  useEffect(() => {
    // Verificar si el script ya está cargado
    const existingScript = document.querySelector('script[src*="elevenlabs/convai-widget-embed"]');
    
    if (!existingScript) {
      // Cargar el script de ElevenLabs
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
      script.async = true;
      script.type = 'text/javascript';
      document.head.appendChild(script);
    }

    // Crear el elemento del widget si no existe
    const existingWidget = document.querySelector('elevenlabs-convai');
    if (!existingWidget) {
      const widget = document.createElement('elevenlabs-convai');
      widget.setAttribute('agent-id', agentId);
      document.body.appendChild(widget);
    }

    // Cleanup function
    return () => {
      const widget = document.querySelector('elevenlabs-convai');
      if (widget) {
        widget.remove();
      }
    };
  }, [agentId]);

  return null; // Este componente no renderiza nada visible
};

export default ElevenLabsWidget; 