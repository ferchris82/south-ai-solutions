import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import n8nLogo from "@/assets/n8n.svg";
import notionLogo from "@/assets/notion.svg";
import postgreSQLLogo from "@/assets/postgresql.svg";
import airtableLogo from "@/assets/airtable.svg";
import gmailLogo from "@/assets/gmail.svg";
import googleCalendarLogo from "@/assets/google-calendar.svg";
import microsoftLogo from "@/assets/microsoft.svg";
import outlookLogo from "@/assets/outlook.svg";
import WhatsAppLogo from "@/assets/whatsapp.svg";
import telegramLogo from "@/assets/telegram.svg";
import deepseekLogo from "@/assets/deepseek.svg";
import excelLogo from "@/assets/excel.svg";
import googleSheetLogo from "@/assets/google-sheets.svg";
import mysqlLogo from "@/assets/mysql.svg";
import openAILogo from "@/assets/openai.svg";
import discordLogo from "@/assets/discord.svg";
import wordLogo from "@/assets/Word.svg";

const logos = [
  notionLogo,
  postgreSQLLogo,
  n8nLogo,
  airtableLogo,
  gmailLogo,
  googleCalendarLogo,
  microsoftLogo,
  outlookLogo,
  WhatsAppLogo,
  telegramLogo,
  deepseekLogo,
  excelLogo,
  googleSheetLogo,
  mysqlLogo,
  openAILogo,
  discordLogo,
  wordLogo,
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1 max-w-full overflow-hidden"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-full">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Especialistas en IA
              </span>
              <br />
              <span className="text-foreground">para tu negocio</span>
            </h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-full break-words overflow-wrap-anywhere"
            >
              Somos una agencia especializada en el desarrollo de agentes de
              inteligencia artificial personalizados para empresas. Utilizamos
              la potente plataforma n8n para crear soluciones de automatización
              que transforman la manera en que las empresas operan.
            </motion.p>

            <div className="space-y-4 sm:space-y-6 max-w-full">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 sm:space-x-4 max-w-full overflow-hidden"
              >
                <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                <div className="flex-1 min-w-0 overflow-hidden">
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-2 max-w-full break-words">
                    ¿Tu flujo de trabajo ya conversa contigo? 
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed break-words overflow-wrap-anywhere">
                    Gracias a nuestros
                    nodos de inteligencia artificial integrados, ahora es
                    posible. Interactúa con tus datos de forma dinámica y
                    utiliza agentes de múltiples pasos para resumir información
                    o resolver preguntas complejas.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 sm:space-x-4 max-w-full overflow-hidden"
              >
                <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                <div className="flex-1 min-w-0 overflow-hidden">
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-2 max-w-full break-words">Tecnología n8n</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed break-words overflow-wrap-anywhere">
                    Aprovechamos el poder de n8n para crear workflows complejos
                    y agentes inteligentes que se integran perfectamente con tus
                    sistemas existentes.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 sm:space-x-4 max-w-full overflow-hidden"
              >
                <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                <div className="flex-1 min-w-0 overflow-hidden">
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-2 max-w-full break-words">
                    Soporte Continuo
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed break-words overflow-wrap-anywhere">
                    Ofrecemos acompañamiento completo desde el diseño hasta la
                    implementación y mantenimiento de tus agentes IA.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-2 sm:pt-4 max-w-full"
            >
              <a href="#contacto" className="block w-full sm:w-auto max-w-full">
                <Button variant="cta" size="lg" className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 w-full sm:w-auto max-w-full">
                  Conoce Nuestro Equipo
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 max-w-full overflow-hidden"
          >
            <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-16 z-10 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-16 z-10 bg-gradient-to-l from-white via-white/80 to-transparent" />

            {/* Carrusel de tres filas */}
            <div className="space-y-2 sm:space-y-4 max-w-full overflow-hidden">
              {/* Primera fila */}
              <div className="overflow-hidden w-full h-20 sm:h-24 md:h-32 lg:h-40 relative">
                <div
                  className="flex items-center animate-marquee space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 whitespace-nowrap"
                  style={{ minWidth: "max-content" }}
                >
                  {[...logos, ...logos].map((logo, idx) => (
                    <div
                      key={`row1-${idx}`}
                      className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 mt-1 sm:mt-2 md:mt-3 rounded-lg sm:rounded-xl border border-gray-300 bg-gradient-to-br from-gray-100 via-gray-300 to-gray-500 shadow-lg shadow-gray-500/30 transition duration-300 hover:scale-110 hover:shadow-2xl hover:from-gray-200 hover:to-gray-700 flex-shrink-0"
                    >
                      <img
                        src={logo}
                        alt={`Logo ${idx}`}
                        className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Segunda fila */}
              <div className="overflow-hidden w-full h-20 sm:h-24 md:h-32 lg:h-40 relative">
                <div
                  className="flex items-center animate-marquee-reverse space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 whitespace-nowrap"
                  style={{ minWidth: "max-content" }}
                >
                  {[...logos, ...logos].map((logo, idx) => (
                    <div
                      key={`row2-${idx}`}
                      className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 mt-1 sm:mt-2 md:mt-3 rounded-lg sm:rounded-xl border border-gray-300 bg-gradient-to-br from-gray-100 via-gray-300 to-gray-500 shadow-lg shadow-gray-500/30 transition duration-300 hover:scale-110 hover:shadow-2xl hover:from-gray-200 hover:to-gray-700 flex-shrink-0"
                    >
                      <img
                        src={logo}
                        alt={`Logo ${idx}`}
                        className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Tercera fila */}
              <div className="overflow-hidden w-full h-20 sm:h-24 md:h-32 lg:h-40 relative">
                <div
                  className="flex items-center animate-marquee space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 whitespace-nowrap"
                  style={{ minWidth: "max-content" }}
                >
                  {[...logos, ...logos]
                    .sort(() => Math.random() - 0.3)
                    .map((logo, idx) => (
                      <div
                        key={`row3-${idx}`}
                        className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 mt-1 sm:mt-2 md:mt-3 rounded-lg sm:rounded-xl border border-gray-300 bg-gradient-to-br from-gray-100 via-gray-300 to-gray-500 shadow-lg shadow-gray-500/30 transition duration-300 hover:scale-110 hover:shadow-2xl hover:from-gray-200 hover:to-gray-700 flex-shrink-0"
                      >
                        <img
                          src={logo}
                          alt={`Logo ${idx}`}
                          className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 object-contain"
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-2 sm:-bottom-3 md:-bottom-6 right-0 sm:right-2 md:right-4 bg-card border border-border rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-6 shadow-lg max-w-fit"
            >
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;