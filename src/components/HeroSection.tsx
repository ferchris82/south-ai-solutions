import { Button } from "@/components/ui/button";
import heroImage from "@/assets/wallpaper1.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Agentes IA
              </span>
              <br />
              <span className="text-foreground">
                Personalizados
              </span>
              <br />
              <span className="text-muted-foreground text-3xl lg:text-4xl">
                para tu negocio
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Transformamos tu negocio con agentes automatizados inteligentes usando tecnología n8n. 
              Soluciones a medida que optimizan procesos y aumentan la productividad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Comenzar Ahora
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Ver Casos de Éxito
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Agentes Creados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Satisfacción Cliente</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Empresas Atendidas</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img 
              src={heroImage} 
              alt="AI Agency Technology" 
              className="relative z-10 rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;