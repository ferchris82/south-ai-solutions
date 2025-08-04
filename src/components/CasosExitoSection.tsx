import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const casosExito = [
  {
    id: 1,
    titulo: "E-commerce Automatizado",
    descripcion: "Sistema completo de gestión de pedidos, inventario y atención al cliente automatizado con n8n.",
    beneficios: [
      "Reducción del 70% en tiempo de procesamiento",
      "Aumento del 40% en ventas",
      "Gestión automática de inventario",
      "Chatbot 24/7 para atención al cliente"
    ],
    tecnologias: ["n8n", "Shopify", "WhatsApp", "OpenAI"],
    imagen: "🛒",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    titulo: "CRM Inteligente",
    descripcion: "Automatización de seguimiento de leads, recordatorios y análisis de datos de clientes.",
    beneficios: [
      "Automatización del 80% de tareas repetitivas",
      "Mejora del 60% en conversión de leads",
      "Análisis automático de sentimientos",
      "Integración con múltiples plataformas"
    ],
    tecnologias: ["n8n", "HubSpot", "Gmail", "Google Sheets"],
    imagen: "📊",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    titulo: "Sistema de Facturación",
    descripcion: "Automatización completa del proceso de facturación, recordatorios y conciliación bancaria.",
    beneficios: [
      "Reducción del 90% en errores manuales",
      "Ahorro del 50% en tiempo administrativo",
      "Facturación automática recurrente",
      "Conciliación bancaria automática"
    ],
    tecnologias: ["n8n", "QuickBooks", "Excel", "Telegram"],
    imagen: "💰",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    titulo: "Gestión de Recursos Humanos",
    descripcion: "Automatización de reclutamiento, onboarding y gestión de empleados con IA.",
    beneficios: [
      "Screening automático de candidatos",
      "Onboarding automatizado",
      "Gestión de vacaciones y ausencias",
      "Análisis de rendimiento automático"
    ],
    tecnologias: ["n8n", "Airtable", "Slack", "Notion"],
    imagen: "👥",
    color: "from-orange-500 to-red-500"
  }
];

const CasosExitoSection = () => {
  return (
    <section id="casos-exito" className="py-16 sm:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Casos de Éxito
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 break-words">
            Descubre cómo hemos transformado empresas sudamericanas con automatización inteligente usando n8n.
            Cada proyecto es único y diseñado específicamente para las necesidades de tu negocio.
          </p>
        </motion.div>

        {/* Casos de Éxito Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {casosExito.map((caso, index) => (
            <motion.div
              key={caso.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="px-4 sm:px-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`text-2xl sm:text-3xl lg:text-4xl p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${caso.color} text-white`}>
                      {caso.imagen}
                    </div>
                    <div className="flex gap-1 sm:gap-2 flex-wrap">
                      {caso.tecnologias.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground break-words">
                    {caso.titulo}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground break-words">
                    {caso.descripcion}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary text-sm sm:text-base break-words">Beneficios Logrados:</h4>
                    <ul className="space-y-2">
                      {caso.beneficios.map((beneficio, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <span className="text-primary mt-1 flex-shrink-0">✓</span>
                          <span className="break-words">{beneficio}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 break-words">
              ¿Quieres un caso de éxito similar para tu empresa?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl mx-auto px-4 break-words">
              Nuestros expertos analizarán tu negocio y crearán una solución personalizada 
              que se adapte perfectamente a tus necesidades específicas.
            </p>
            <div className="flex justify-center">
              <a href="#contacto" className="block w-full sm:w-auto">
                <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
                  Solicitar Consulta Gratuita
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CasosExitoSection; 