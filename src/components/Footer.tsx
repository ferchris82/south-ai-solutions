const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12 border-t">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {/* Logo */}
              <div className="w-8 h-8 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#3B82F6", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "#1E40AF", stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  
                  {/* Background circle */}
                  <circle cx="16" cy="16" r="15" fill="url(#footerGrad1)" stroke="#1E40AF" strokeWidth="1"/>
                  
                  {/* Robot head */}
                  <rect x="8" y="10" width="16" height="12" rx="2" fill="#FFFFFF" stroke="#1E40AF" strokeWidth="1"/>
                  
                  {/* Eyes */}
                  <circle cx="11" cy="14" r="1.5" fill="#3B82F6"/>
                  <circle cx="21" cy="14" r="1.5" fill="#3B82F6"/>
                  
                  {/* Mouth */}
                  <rect x="12" y="18" width="8" height="2" rx="1" fill="#3B82F6"/>
                  
                  {/* Antenna */}
                  <line x1="16" y1="10" x2="16" y2="6" stroke="#1E40AF" strokeWidth="2"/>
                  <circle cx="16" cy="6" r="1" fill="#3B82F6"/>
                  
                  {/* AI text */}
                  <text x="16" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6" fontWeight="bold" fill="#FFFFFF">AI</text>
                </svg>
              </div>
              
              {/* Brand name */}
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TopIA's
              </div>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-md break-words">
              Especializados en agentes de inteligencia artificial personalizados para empresas.
              Transformamos procesos con tecnología n8n.
            </p>
            <div className="text-xs sm:text-sm text-muted-foreground break-words">
              © 2025 TopIA's. Todos los derechos reservados.
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base break-words">Servicios</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors text-xs sm:text-sm break-words">Agentes IA</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-xs sm:text-sm break-words">Automatización n8n</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-xs sm:text-sm break-words">Chatbots</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-xs sm:text-sm break-words">Agentes de voz</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-xs sm:text-sm break-words">Consultoría</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base break-words">Empresa</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#nosotros" className="hover:text-primary transition-colors text-xs sm:text-sm break-words">Sobre Nosotros</a></li>
              <li><a href="#casos-exito" className="hover:text-primary transition-colors text-xs sm:text-sm break-words">Casos de Éxito</a></li>
              <li><a href="#contacto" className="hover:text-primary transition-colors text-xs sm:text-sm break-words">Contacto</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-xs sm:text-sm break-words">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p className="break-words">• Especialistas en IA para tu negocio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;