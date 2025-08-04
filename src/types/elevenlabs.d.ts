declare namespace JSX {
  interface IntrinsicElements {
    'elevenlabs-convai': {
      'agent-id': string;
      [key: string]: any;
    };
  }
}

declare global {
  interface Window {
    ElevenLabsConvai?: any;
  }
} 