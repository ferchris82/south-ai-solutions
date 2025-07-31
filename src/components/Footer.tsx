const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12 border-t">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              TopIA's
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Especializados en agentes de inteligencia artificial personalizados para empresas.
              Transformamos procesos con tecnología n8n.
            </p>
            <div className="text-sm text-muted-foreground">
              © 2025 TopIA's. Todos los derechos reservados.
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Agentes IA</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Automatización n8n</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Chatbots</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Agentes de voz</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consultoría</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#nosotros" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Casos de Éxito</a></li>
              <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>• Especialistas en IA para tu negocio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;