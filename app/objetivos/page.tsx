import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ObjetivosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="ProtecVida Logo" width={40} height={40} />
            <span className="text-xl font-bold text-[#5788c6]">ProtecVida</span>
          </div>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/" className="text-sm font-medium hover:text-[#5788c6]">
              Inicio
            </Link>
            <Link href="/nosotros" className="text-sm font-medium hover:text-[#5788c6]">
              Nosotros
            </Link>
            <Link href="/caracteristicas" className="text-sm font-medium hover:text-[#5788c6]">
              Características
            </Link>
            <Link href="/objetivos" className="text-sm font-medium text-[#5788c6]">
              Objetivos
            </Link>
            <Link href="/aplicacion" className="text-sm font-medium hover:text-[#5788c6]">
              Aplicación
            </Link>
            <Link href="/descargar" className="text-sm font-medium hover:text-[#5788c6]">
              Descargar
            </Link>
            <Link href="/contacto" className="text-sm font-medium hover:text-[#5788c6]">
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Título de la página */}
        <section className="w-full py-12 md:py-16 bg-[#e6f0fa]">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-[#5788c6]">
              Objetivos Estratégicos
            </h1>
          </div>
        </section>

        {/* Objetivos */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Nuestro camino hacia el futuro</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Conoce nuestros planes para mejorar la vida de las familias mexicanas
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 mt-8">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-[#e6f0fa] px-3 py-1 text-sm text-[#5788c6]">
                    Corto Plazo
                  </div>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-[#5788c6]" />
                      <p className="text-gray-500">
                        Validar el prototipo mediante pruebas piloto con al menos 100 usuarios.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-[#5788c6]" />
                      <p className="text-gray-500">
                        Establecer presencia digital en redes sociales y lanzar una página web informativa.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-[#5788c6]" />
                      <p className="text-gray-500">
                        Registrar formalmente la empresa y proteger la propiedad intelectual.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-[#5788c6]" />
                      <p className="text-gray-500">
                        Realizar un estudio de mercado enfocado en zonas urbanas con alta concentración de población
                        vulnerable.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-[#e6f0fa] px-3 py-1 text-sm text-[#5788c6]">
                    Mediano Plazo
                  </div>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-[#5788c6]" />
                      <p className="text-gray-500">
                        Lanzar la primera versión comercial de la app y los dispositivos inteligentes en al menos tres
                        estados del país.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-[#5788c6]" />
                      <p className="text-gray-500">
                        Establecer convenios con clínicas, farmacias o asociaciones civiles para promover y distribuir
                        la tecnología.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-[#5788c6]" />
                      <p className="text-gray-500">
                        Optimizar la plataforma de monitoreo y mejorar la interfaz de usuario según el feedback de los
                        primeros usuarios.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-[#5788c6]" />
                      <p className="text-gray-500">
                        Alcanzar los primeros 20,000 usuarios activos mediante campañas digitales y participación en
                        ferias de tecnología y salud.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-[#e6f0fa] px-3 py-1 text-sm text-[#5788c6]">
                    Largo Plazo
                  </div>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-[#5788c6]" />
                      <p className="text-gray-500">
                        Mejorar la precisión y eficiencia del monitoreo de salud mediante algoritmos avanzados e
                        inteligencia artificial.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-[#5788c6]" />
                      <p className="text-gray-500">
                        Lograr presencia en al menos 10 estados de México en los próximos 5 años.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-[#5788c6]" />
                      <p className="text-gray-500">Alcanzar 100,000 usuarios activos en un período de 5 años.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-[#5788c6]" />
                      <p className="text-gray-500">
                        Implementar modelos de suscripción y servicios premium para garantizar la sostenibilidad
                        económica.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-[#5788c6]" />
                      <p className="text-gray-500">
                        Desarrollar versiones de la app con opciones de accesibilidad para personas con discapacidad.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eslogan */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Nuestro Eslogan</h2>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
                <p className="text-2xl font-bold text-[#5788c6] italic">"Siempre cerca, siempre seguros"</p>
              </div>
              <p className="max-w-[700px] text-gray-500 mt-4">
                Este eslogan refleja nuestro compromiso de estar siempre presentes para cuidar de tus seres queridos,
                brindándote la tranquilidad de saber que están protegidos en todo momento.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-12 md:py-16 bg-[#5788c6] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">¿Quieres conocer nuestra aplicación?</h2>
                <p className="text-white/80">
                  Descubre cómo nuestra tecnología puede ayudarte a cuidar de tus seres queridos
                </p>
              </div>
              <Link href="/aplicacion">
                <Button size="lg" className="bg-white text-[#5788c6] hover:bg-white/90">
                  Ver la aplicación
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="ProtecVida Logo" width={24} height={24} />
            <p className="text-sm text-gray-500">© 2025 ProtecVida. Todos los derechos reservados.</p>
          </div>
          <p className="text-center text-sm text-gray-500 md:text-right">Siempre cerca, siempre seguros</p>
        </div>
      </footer>
    </div>
  )
}
