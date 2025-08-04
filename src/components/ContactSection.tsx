import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    proyecto: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.proyecto) {
      toast.error('Por favor completa los campos requeridos');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Enviar directamente a tu webhook de n8n
      const response = await fetch('https://n8n.srv940471.hstgr.cloud/webhook/74e41df6-92fd-44f7-bd79-71404a8c9be4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          fecha: new Date().toISOString(),
          fuente: 'Website'
        })
      });
      
      if (response.ok) {
        toast.success('¡Mensaje enviado! Te contactaremos pronto.');
        setFormData({ nombre: '', empresa: '', email: '', telefono: '', proyecto: '' });
      } else {
        throw new Error('Error al enviar');
      }
    } catch (error) {
      toast.error('Error al enviar el mensaje. Intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-16 sm:py-20">
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
              Comienza Tu Transformación
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 break-words">
            Conversemos sobre cómo los agentes IA pueden revolucionar tu negocio. 
            Consulta gratuita sin compromiso.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card shadow-lg">
              <CardHeader className="px-4 sm:px-6">
                <CardTitle className="text-xl sm:text-2xl">Envíanos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                        Nombre *
                      </label>
                      <Input 
                        placeholder="Tu nombre" 
                        value={formData.nombre}
                        onChange={(e) => handleInputChange('nombre', e.target.value)}
                        required
                        className="text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                        Empresa
                      </label>
                      <Input 
                        placeholder="Nombre de tu empresa" 
                        value={formData.empresa}
                        onChange={(e) => handleInputChange('empresa', e.target.value)}
                        className="text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input 
                      type="email" 
                      placeholder="tu@email.com" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                      Teléfono
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="+57 11 1234-5678" 
                      value={formData.telefono}
                      onChange={(e) => handleInputChange('telefono', e.target.value)}
                      className="text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                      Cuéntanos sobre tu proyecto *
                    </label>
                    <Textarea 
                      placeholder="Describe qué procesos te gustaría automatizar y cómo podemos ayudarte..."
                      rows={4}
                      value={formData.proyecto}
                      onChange={(e) => handleInputChange('proyecto', e.target.value)}
                      required
                      className="text-sm sm:text-base"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    variant="hero" 
                    size="lg" 
                    className="w-full text-base sm:text-lg py-4 sm:py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      'Solicitar Consulta Gratuita'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center break-words">Información de Contacto</h3>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm sm:text-base">Email</div>
                        <div className="text-xs sm:text-sm text-muted-foreground break-words">desarrollochristian@gmail.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm sm:text-base">Teléfono</div>
                        <div className="text-xs sm:text-sm text-muted-foreground break-words">+57 310 547 11 06</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm sm:text-base">Ubicación</div>
                        <div className="text-xs sm:text-sm text-muted-foreground break-words">Cali - Valle del Cauca - Colombia</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
                <CardContent className="p-6 sm:p-8 text-center">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 break-words">¿Listo para Automatizar?</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 break-words">
                    Agenda una demo personalizada y descubre el potencial de los agentes IA para tu empresa.
                  </p>
                  <a href="#contacto" className="block w-full">
                    <Button variant="cta" size="lg" className="w-full text-sm sm:text-base">
                      Agendar Demo Gratuita
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;