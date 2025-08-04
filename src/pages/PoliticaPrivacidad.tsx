import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Política de Privacidad
            </span>
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Información que Recopilamos</h2>
              <p className="text-muted-foreground mb-4">
                Recopilamos información que usted nos proporciona directamente, como cuando completa formularios de contacto, 
                solicita servicios o se comunica con nosotros a través de nuestro chat de inteligencia artificial.
              </p>
              <p className="text-muted-foreground mb-4">
                Esta información puede incluir: nombre, dirección de correo electrónico, número de teléfono, 
                información de la empresa y detalles sobre su proyecto.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Uso de la Información</h2>
              <p className="text-muted-foreground mb-4">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 mb-4">
                <li>Proporcionar y mejorar nuestros servicios de agentes IA</li>
                <li>Comunicarnos con usted sobre nuestros servicios</li>
                <li>Personalizar la experiencia del usuario</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Compartir Información</h2>
              <p className="text-muted-foreground mb-4">
                No vendemos, alquilamos ni compartimos su información personal con terceros, excepto:
              </p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 mb-4">
                <li>Con su consentimiento explícito</li>
                <li>Para cumplir con obligaciones legales</li>
                <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Seguridad de Datos</h2>
              <p className="text-muted-foreground mb-4">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal 
                contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Cookies y Tecnologías Similares</h2>
              <p className="text-muted-foreground mb-4">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web, 
                analizar el tráfico y personalizar el contenido.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Sus Derechos</h2>
              <p className="text-muted-foreground mb-4">
                Usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 mb-4">
                <li>Acceder a su información personal</li>
                <li>Corregir información inexacta</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Retirar su consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Cambios en esta Política</h2>
              <p className="text-muted-foreground mb-4">
                Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos sobre cualquier cambio 
                significativo publicando la nueva política en nuestro sitio web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Contacto</h2>
              <p className="text-muted-foreground mb-4">
                Si tiene preguntas sobre esta política de privacidad o sobre cómo manejamos sus datos, contáctenos:
              </p>
              <ul className="list-disc list-inside text-muted-foreground ml-4">
                <li>Email: desarrollochristian@gmail.com</li>
                <li>Teléfono: +57 310 547 11 06</li>
                <li>Ubicación: Cali - Valle del Cauca - Colombia</li>
              </ul>
            </section>

            <div className="text-center mt-12">
              <p className="text-sm text-muted-foreground">
                Última actualización: {new Date().toLocaleDateString('es-ES')}
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidad; 