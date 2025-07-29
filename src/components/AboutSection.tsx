import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import n8nImage from "@/assets/n8n-automation.jpg";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Especialistas en IA
              </span>
              <br />
              <span className="text-foreground">para Sudamérica</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos una agencia especializada en el desarrollo de agentes de inteligencia artificial 
              personalizados para empresas sudamericanas. Utilizamos la potente plataforma n8n para 
              crear soluciones de automatización que transforman la manera en que las empresas operan.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Experiencia Regional</h3>
                  <p className="text-muted-foreground">
                    Entendemos las necesidades específicas del mercado sudamericano y desarrollamos 
                    soluciones adaptadas a la cultura empresarial local.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tecnología n8n</h3>
                  <p className="text-muted-foreground">
                    Aprovechamos el poder de n8n para crear workflows complejos y agentes 
                    inteligentes que se integran perfectamente con tus sistemas existentes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Soporte Continuo</h3>
                  <p className="text-muted-foreground">
                    Ofrecemos acompañamiento completo desde el diseño hasta la implementación 
                    y mantenimiento de tus agentes IA.
                  </p>
                </div>
              </div>
            </div>
            
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Conoce Nuestro Equipo
            </Button>
          </div>
          
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <img 
                  src={n8nImage} 
                  alt="n8n Automation Platform" 
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
            
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">n8n</div>
                <div className="text-sm text-muted-foreground">Plataforma Principal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;