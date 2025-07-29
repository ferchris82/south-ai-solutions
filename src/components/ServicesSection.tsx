import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Workflow, MessageSquare, BarChart3, Zap, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Bot className="h-12 w-12 text-primary" />,
      title: "Agentes IA Conversacionales",
      description: "Chatbots inteligentes que entienden el contexto y responden de manera natural, mejorando la experiencia del cliente 24/7.",
    },
    {
      icon: <Workflow className="h-12 w-12 text-accent" />,
      title: "Automatización con n8n",
      description: "Workflows personalizados que conectan tus sistemas y automatizan procesos complejos sin código.",
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-primary" />,
      title: "Asistentes Virtuales",
      description: "Agentes especializados que ayudan a tus equipos con tareas específicas, aumentando la productividad.",
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-accent" />,
      title: "Análisis Inteligente",
      description: "Agentes que procesan datos y generan insights automáticamente para tomar mejores decisiones.",
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Integración Rápida",
      description: "Implementación ágil que se adapta a tu infraestructura existente sin interrupciones.",
    },
    {
      icon: <Shield className="h-12 w-12 text-accent" />,
      title: "Seguridad Garantizada",
      description: "Protocolos de seguridad robustos que protegen tus datos y cumplen con regulaciones locales.",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nuestros Servicios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desarrollamos agentes IA personalizados que se adaptan perfectamente a las necesidades 
            específicas de tu empresa en el mercado sudamericano.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;