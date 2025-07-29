import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      company: "TechCorp Argentina",
      role: "Directora de Operaciones",
      testimonial: "Los agentes IA desarrollados por el equipo transformaron completamente nuestro proceso de atención al cliente. Reducimos el tiempo de respuesta en un 80%.",
      rating: 5,
    },
    {
      name: "Carlos Mendoza",
      company: "InnovaBrasil Ltda.",
      role: "CEO",
      testimonial: "La automatización con n8n que implementaron nos permitió eliminar tareas repetitivas y enfocar al equipo en actividades estratégicas. ROI excepcional.",
      rating: 5,
    },
    {
      name: "Ana Rodríguez",
      company: "StartupColombia",
      role: "Cofundadora",
      testimonial: "Como startup, necesitábamos optimizar recursos. Sus agentes IA nos dieron capacidades de empresa grande con presupuesto de startup. Increíble trabajo.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Lo Que Dicen Nuestros Clientes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Testimonios reales de empresas que han transformado sus operaciones con nuestros agentes IA.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.testimonial}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;