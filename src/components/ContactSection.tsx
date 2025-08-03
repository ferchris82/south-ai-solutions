import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

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
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Comienza Tu Transformación
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conversemos sobre cómo los agentes IA pueden revolucionar tu negocio. 
            Consulta gratuita sin compromiso.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-card shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nombre *
                    </label>
                    <Input 
                      placeholder="Tu nombre" 
                      value={formData.nombre}
                      onChange={(e) => handleInputChange('nombre', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Empresa
                    </label>
                    <Input 
                      placeholder="Nombre de tu empresa" 
                      value={formData.empresa}
                      onChange={(e) => handleInputChange('empresa', e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="tu@email.com" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Teléfono
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+54 11 1234-5678" 
                    value={formData.telefono}
                    onChange={(e) => handleInputChange('telefono', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <Textarea 
                    placeholder="Describe qué procesos te gustaría automatizar y cómo podemos ayudarte..."
                    rows={4}
                    value={formData.proyecto}
                    onChange={(e) => handleInputChange('proyecto', e.target.value)}
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  variant="hero" 
                  size="lg" 
                  className="w-full text-lg py-6"
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
          
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">contacto@aiagentssa.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">Teléfono</div>
                      <div className="text-muted-foreground">+54 11 4000-0000</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Ubicación</div>
                      <div className="text-muted-foreground">Sudamérica - Servicio Regional</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">¿Listo para Automatizar?</h3>
                <p className="text-muted-foreground mb-6">
                  Agenda una demo personalizada y descubre el potencial de los agentes IA para tu empresa.
                </p>
                <Button variant="cta" size="lg" className="w-full">
                  Agendar Demo Gratuita
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;