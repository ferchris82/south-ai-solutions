import { Button } from "@/components/ui/button";
import robotsVideo from "@/assets/robots2.mp4";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-16 sm:pt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                <Typewriter
                  words={['Agentes IA']}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
              <br />
              <span className="text-foreground">
                <Typewriter
                  words={['Personalizados']}
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
              <br />
              <span className="text-muted-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                <Typewriter
                  words={['Para tu negocio']}
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg break-words"
            >
              <Typewriter
                words={[
                  "Transformamos tu negocio con agentes automatizados inteligentes usando tecnología n8n. Soluciones a medida que optimizan procesos y aumentan la productividad."
                ]}
                cursor
                cursorStyle="|"
                typeSpeed={40}
                deleteSpeed={30}
                delaySpeed={1000}
              />
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contacto" className="block w-full sm:w-auto">
                <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
                  Comenzar Ahora
                </Button>
              </a>
              <a href="#casos-exito" className="block w-full sm:w-auto">
                <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
                  Ver Casos de Éxito
                </Button>
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center sm:justify-start gap-4 sm:gap-8 pt-6 sm:pt-8"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Integraciones
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent">95%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Tiempo optmizado
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">200+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Horas ahorradas
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-first lg:order-last"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl"></div>
            <video
              src={robotsVideo}
              autoPlay
              loop
              muted
              playsInline
              className="relative z-10 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-none object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;