import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Workflow, MessageSquare, BarChart3, Zap, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const ServicesSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const dynamicTexts = [
    "Desarrollamos agentes IA personalizados que se adaptan perfectamente a las necesidades específicas de tu empresa en cualquier sector del mercado.",
    "Creamos soluciones inteligentes que automatizan procesos y optimizan la productividad de tu negocio.",
    "Implementamos tecnología de vanguardia que transforma la manera en que tu empresa interactúa con clientes y datos.",
    "Diseñamos agentes conversacionales que mejoran la experiencia del usuario y reducen costos operativos."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nuestros Servicios
            </span>
          </h2>
          <div className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto min-h-[4rem] flex items-center justify-center px-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTextIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-center break-words"
              >
                {dynamicTexts[currentTextIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, delay: index * 0.15, type: "spring" }}
            >
              <Card className="bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg sm:text-xl break-words">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm sm:text-base leading-relaxed break-words">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;