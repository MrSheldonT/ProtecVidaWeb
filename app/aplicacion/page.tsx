import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AplicacionPage() {
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
            <Link href="/objetivos" className="text-sm font-medium hover:text-[#5788c6]">
              Objetivos
            </Link>
            <Link href="/aplicacion" className="text-sm font-medium text-[#5788c6]">
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
              Nuestra Aplicación
            </h1>
          </div>
        </section>

        {/* App Preview */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Tecnología avanzada al servicio de tu familia
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Descubre cómo nuestra aplicación te ayuda a cuidar de tus seres queridos
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 mt-8">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative w-[200px] h-[400px] rounded-xl overflow-hidden border-4 border-[#e6f0fa] shadow-lg">
                    <Image
                      src="/images/app/analisis_vida.jpg"
                      alt="Monitoreo de Salud"
                      width={200}
                      height={400}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Monitoreo de Salud</h3>
                  <p className="text-gray-500">Seguimiento de signos vitales en tiempo real</p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative w-[200px] h-[400px] rounded-xl overflow-hidden border-4 border-[#e6f0fa] shadow-lg">
                    <Image
                      src="/images/app/ubicacion_tiempo_real.jpg"
                      alt="Ubicación en Tiempo Real"
                      width={200}
                      height={400}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Ubicación en Tiempo Real</h3>
                  <p className="text-gray-500">Localiza a tus seres queridos en cualquier momento</p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative w-[200px] h-[400px] rounded-xl overflow-hidden border-4 border-[#e6f0fa] shadow-lg">
                    <Image
                      src="/images/app/alertas.jpg"
                      alt="Alertas Inteligentes"
                      width={200}
                      height={400}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Alertas Inteligentes</h3>
                  <p className="text-gray-500">Notificaciones de emergencia y anomalías</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Características de la app */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Características principales</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Descubre todo lo que puedes hacer con nuestra aplicación
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                  <div className="mr-4 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f0fa]">
                    <span className="text-xl font-bold text-[#5788c6]">1</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-[#5788c6] mb-2">Monitoreo de signos vitales</h3>
                    <p className="text-gray-500">
                      Seguimiento en tiempo real de oxigenación, ritmo cardíaco y otros indicadores importantes de
                      salud.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                  <div className="mr-4 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f0fa]">
                    <span className="text-xl font-bold text-[#5788c6]">2</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-[#5788c6] mb-2">Ubicación en tiempo real</h3>
                    <p className="text-gray-500">
                      Localiza a tus seres queridos en cualquier momento y establece zonas seguras para recibir alertas
                      si salen de ellas.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                  <div className="mr-4 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f0fa]">
                    <span className="text-xl font-bold text-[#5788c6]">3</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-[#5788c6] mb-2">Alertas inteligentes</h3>
                    <p className="text-gray-500">
                      Recibe notificaciones inmediatas ante emergencias o anomalías en los signos vitales para actuar
                      rápidamente.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                  <div className="mr-4 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f0fa]">
                    <span className="text-xl font-bold text-[#5788c6]">4</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-[#5788c6] mb-2">Gestión de grupos familiares</h3>
                    <p className="text-gray-500">
                      Administra múltiples miembros de la familia desde una sola aplicación, facilitando el cuidado de
                      todos tus seres queridos.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                  <div className="mr-4 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f0fa]">
                    <span className="text-xl font-bold text-[#5788c6]">5</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-[#5788c6] mb-2">Prediagnóstico de salud</h3>
                    <p className="text-gray-500">
                      Obtén análisis preliminares basados en los datos recopilados para identificar posibles problemas
                      de salud.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                  <div className="mr-4 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f0fa]">
                    <span className="text-xl font-bold text-[#5788c6]">6</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-[#5788c6] mb-2">Interfaz intuitiva</h3>
                    <p className="text-gray-500">
                      Diseño fácil de usar para todos los miembros de la familia, independientemente de su edad o
                      experiencia tecnológica.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-12 md:py-16 bg-[#5788c6] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">¿Listo para proteger a tu familia?</h2>
                <p className="text-white/80">
                  Descarga nuestra aplicación y comienza a disfrutar de la tranquilidad que ofrece ProtecVida
                </p>
              </div>
              <Link href="/descargar">
                <Button size="lg" className="bg-white text-[#5788c6] hover:bg-white/90">
                  Descargar ahora
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
