import { useEffect } from 'react';

const ElevenLabsBrandingRemover = () => {
  useEffect(() => {
    const removeBranding = () => {
      // Wait for the widget to load
      const checkForWidget = setInterval(() => {
        const widget = document.querySelector('elevenlabs-convai');
        if (widget) {
          clearInterval(checkForWidget);
          
          // Try multiple approaches to remove branding
          const removeBrandingElements = () => {
            // Method 1: Remove by text content
            const walker = document.createTreeWalker(
              widget,
              NodeFilter.SHOW_TEXT,
              null,
              false
            );

            let node;
            while (node = walker.nextNode()) {
              if (node.textContent?.includes('Powered by ElevenLabs') || 
                  node.textContent?.includes('ElevenLabs') ||
                  node.textContent?.includes('Conversational AI')) {
                const parent = node.parentElement;
                if (parent) {
                  parent.style.display = 'none';
                  parent.style.visibility = 'hidden';
                  parent.style.opacity = '0';
                  parent.style.height = '0';
                  parent.style.width = '0';
                  parent.style.overflow = 'hidden';
                }
              }
            }

            // Method 2: Remove by common class names
            const selectors = [
              '[data-testid="powered-by"]',
              '.powered-by',
              '.branding',
              '.footer-branding',
              '[class*="powered"]',
              '[class*="branding"]',
              '[class*="footer"]',
              '[class*="elevenlabs"]',
              '[class*="convai"]'
            ];

            selectors.forEach(selector => {
              const elements = widget.querySelectorAll(selector);
              elements.forEach(element => {
                (element as HTMLElement).style.display = 'none';
                (element as HTMLElement).style.visibility = 'hidden';
                (element as HTMLElement).style.opacity = '0';
                (element as HTMLElement).style.height = '0';
                (element as HTMLElement).style.width = '0';
                (element as HTMLElement).style.overflow = 'hidden';
              });
            });

            // Method 3: Remove by attribute patterns
            const allElements = widget.querySelectorAll('*');
            allElements.forEach(element => {
              const el = element as HTMLElement;
              const className = el.className || '';
              const id = el.id || '';
              const textContent = el.textContent || '';
              
              if (className.toLowerCase().includes('powered') ||
                  className.toLowerCase().includes('branding') ||
                  className.toLowerCase().includes('elevenlabs') ||
                  className.toLowerCase().includes('convai') ||
                  id.toLowerCase().includes('powered') ||
                  id.toLowerCase().includes('branding') ||
                  textContent.includes('Powered by ElevenLabs') ||
                  textContent.includes('ElevenLabs') ||
                  textContent.includes('Conversational AI')) {
                el.style.display = 'none';
                el.style.visibility = 'hidden';
                el.style.opacity = '0';
                el.style.height = '0';
                el.style.width = '0';
                el.style.overflow = 'hidden';
              }
            });
          };

          // Initial removal
          removeBrandingElements();

          // Set up observer to handle dynamic content
          const observer = new MutationObserver(() => {
            removeBrandingElements();
          });

          observer.observe(widget, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class', 'style']
          });

          // Cleanup
          return () => {
            observer.disconnect();
          };
        }
      }, 1000);

      // Cleanup interval after 30 seconds
      setTimeout(() => {
        clearInterval(checkForWidget);
      }, 30000);
    };

    removeBranding();
  }, []);

  return null;
};

export default ElevenLabsBrandingRemover; 