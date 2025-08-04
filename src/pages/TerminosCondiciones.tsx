import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TerminosCondiciones = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Términos y Condiciones
            </span>
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Aceptación de los Términos</h2>
              <p className="text-muted-foreground mb-4">
                Al utilizar nuestro servicio de agentes de inteligencia artificial, usted acepta estar sujeto a estos términos y condiciones. 
                Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Descripción del Servicio</h2>
              <p className="text-muted-foreground mb-4">
                Proporcionamos servicios de desarrollo e implementación de agentes de inteligencia artificial personalizados 
                utilizando tecnología n8n y otras herramientas avanzadas de automatización.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Uso Aceptable</h2>
              <p className="text-muted-foreground mb-4">
                Usted se compromete a utilizar nuestros servicios únicamente para fines legales y éticos. 
                No está permitido el uso de nuestros servicios para actividades ilegales o que puedan dañar a terceros.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Privacidad y Datos</h2>
              <p className="text-muted-foreground mb-4">
                Nos comprometemos a proteger su privacidad y los datos que nos proporcione. 
                Consulte nuestra Política de Privacidad para obtener más información sobre cómo manejamos sus datos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Limitación de Responsabilidad</h2>
              <p className="text-muted-foreground mb-4">
                En ningún caso seremos responsables por daños indirectos, incidentales, especiales o consecuentes 
                que resulten del uso de nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Modificaciones</h2>
              <p className="text-muted-foreground mb-4">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                Los cambios entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Contacto</h2>
              <p className="text-muted-foreground mb-4">
                Si tiene alguna pregunta sobre estos términos y condiciones, puede contactarnos a través de:
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

export default TerminosCondiciones; 