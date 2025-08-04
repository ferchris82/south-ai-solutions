import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Lo Que Dicen Nuestros Clientes
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 break-words">
            Testimonios reales de empresas que han transformado sus operaciones con nuestros agentes IA.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-card hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-accent fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-sm sm:text-base text-muted-foreground mb-6 italic leading-relaxed break-words">
                    "{testimonial.testimonial}"
                  </blockquote>
                  
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground text-sm sm:text-base break-words">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-primary font-medium break-words">{testimonial.role}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground break-words">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;