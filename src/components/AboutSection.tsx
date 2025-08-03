import { Button } from "@/components/ui/button";
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
    <section id="nosotros" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Especialistas en IA
              </span>
              <br />
              <span className="text-foreground">para tu negocio</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos una agencia especializada en el desarrollo de agentes de
              inteligencia artificial personalizados para empresas. Utilizamos
              la potente plataforma n8n para crear soluciones de automatización
              que transforman la manera en que las empresas operan.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    ¿Tu flujo de trabajo ya conversa contigo? 
                  </h3>
                  <p className="text-muted-foreground">
                    Gracias a nuestros
                    nodos de inteligencia artificial integrados, ahora es
                    posible. Interactúa con tus datos de forma dinámica y
                    utiliza agentes de múltiples pasos para resumir información
                    o resolver preguntas complejas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tecnología n8n</h3>
                  <p className="text-muted-foreground">
                    Aprovechamos el poder de n8n para crear workflows complejos
                    y agentes inteligentes que se integran perfectamente con tus
                    sistemas existentes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Soporte Continuo
                  </h3>
                  <p className="text-muted-foreground">
                    Ofrecemos acompañamiento completo desde el diseño hasta la
                    implementación y mantenimiento de tus agentes IA.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Conoce Nuestro Equipo
            </Button>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white via-white/80 to-transparent" />

            {/* Carrusel de tres filas */}
            <div className="space-y-4">
              {/* Primera fila */}
              <div className="overflow-hidden w-full h-40 relative">
                <div
                  className="flex items-center animate-marquee space-x-12 whitespace-nowrap"
                  style={{ minWidth: "max-content" }}
                >
                  {[...logos, ...logos].map((logo, idx) => (
                    <div
                      key={`row1-${idx}`}
                      className="flex items-center justify-center h-20 w-20 mt-3 rounded-xl border border-gray-300 bg-gradient-to-br from-gray-100 via-gray-300 to-gray-500 shadow-lg shadow-gray-500/30 transition duration-300 hover:scale-110 hover:shadow-2xl hover:from-gray-200 hover:to-gray-700"
                    >
                      <img
                        src={logo}
                        alt={`Logo ${idx}`}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Segunda fila */}
              <div className="overflow-hidden w-full h-40 relative">
                <div
                  className="flex items-center animate-marquee-reverse space-x-12 whitespace-nowrap"
                  style={{ minWidth: "max-content" }}
                >
                  {[...logos, ...logos].map((logo, idx) => (
                    <div
                      key={`row2-${idx}`}
                      className="flex items-center justify-center h-20 w-20 mt-3 rounded-xl border border-gray-300 bg-gradient-to-br from-gray-100 via-gray-300 to-gray-500 shadow-lg shadow-gray-500/30 transition duration-300 hover:scale-110 hover:shadow-2xl hover:from-gray-200 hover:to-gray-700"
                    >
                      <img
                        src={logo}
                        alt={`Logo ${idx}`}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Tercera fila */}
              <div className="overflow-hidden w-full h-40 relative">
                <div
                  className="flex items-center animate-marquee space-x-12 whitespace-nowrap"
                  style={{ minWidth: "max-content" }}
                >
                  {[...logos, ...logos]
                    .sort(() => Math.random() - 0.3)
                    .map((logo, idx) => (
                      <div
                        key={`row3-${idx}`}
                        className="flex items-center justify-center h-20 w-20 mt-3 rounded-xl border border-gray-300 bg-gradient-to-br from-gray-100 via-gray-300 to-gray-500 shadow-lg shadow-gray-500/30 transition duration-300 hover:scale-110 hover:shadow-2xl hover:from-gray-200 hover:to-gray-700"
                      >
                        <img
                          src={logo}
                          alt={`Logo ${idx}`}
                          className="h-12 w-12 object-contain"
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">n8n</div>
                <div className="text-sm text-muted-foreground">
                  Plataforma Principal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
