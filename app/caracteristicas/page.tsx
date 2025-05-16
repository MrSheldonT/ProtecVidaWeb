import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Bell, Users, Activity, Brain, Clock } from "lucide-react"

export default function CaracteristicasPage() {
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
            <Link href="/caracteristicas" className="text-sm font-medium text-[#5788c6]">
              Características
            </Link>
            <Link href="/objetivos" className="text-sm font-medium hover:text-[#5788c6]">
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
              Ventajas Competitivas
            </h1>
          </div>
        </section>

        {/* Características */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Lo que nos hace diferentes</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Descubre las características que hacen de ProtecVida la mejor opción para el cuidado de tu familia
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-8">
                <Card className="border-none shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f0fa]">
                      <Activity className="h-6 w-6 text-[#5788c6]" />
                    </div>
                    <CardTitle>Monitoreo de Salud</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Seguimiento de signos vitales en tiempo real, incluyendo oxigenación, ritmo cardíaco y detección
                      de movimientos inusuales.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f0fa]">
                      <MapPin className="h-6 w-6 text-[#5788c6]" />
                    </div>
                    <CardTitle>Ubicación en Tiempo Real</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Localiza a tus seres queridos en cualquier momento y establece zonas seguras para mayor
                      tranquilidad.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f0fa]">
                      <Bell className="h-6 w-6 text-[#5788c6]" />
                    </div>
                    <CardTitle>Alertas Inteligentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Recibe notificaciones de emergencia y anomalías en los signos vitales para actuar rápidamente.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f0fa]">
                      <Brain className="h-6 w-6 text-[#5788c6]" />
                    </div>
                    <CardTitle>Prediagnóstico</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Recopilación de información para identificar síntomas, signos o factores de riesgo y determinar si
                      se necesitan estudios más específicos.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f0fa]">
                      <Users className="h-6 w-6 text-[#5788c6]" />
                    </div>
                    <CardTitle>Grupos Familiares</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Gestiona múltiples miembros de la familia desde una sola aplicación, facilitando el cuidado de
                      todos tus seres queridos.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f0fa]">
                      <Clock className="h-6 w-6 text-[#5788c6]" />
                    </div>
                    <CardTitle>Accesibilidad</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Interfaz intuitiva y fácil de usar, diseñada para ser accesible para todos los miembros de la
                      familia, independientemente de su edad.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios adicionales */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Beneficios adicionales</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">Más razones para elegir ProtecVida</p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#5788c6] mb-2">Precio accesible</h3>
                  <p className="text-gray-500">
                    Ofrecemos un precio atractivo tomando en cuenta lo que la competencia está ofreciendo, haciendo
                    nuestra tecnología accesible para más familias.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#5788c6] mb-2">Innovación constante</h3>
                  <p className="text-gray-500">
                    Nuestro equipo trabaja continuamente en mejorar la tecnología y añadir nuevas funcionalidades para
                    ofrecer siempre la mejor experiencia.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#5788c6] mb-2">Seguridad garantizada</h3>
                  <p className="text-gray-500">
                    El constante monitoreo de la aplicación brinda seguridad a las familias mexicanas, permitiéndoles
                    estar tranquilos sabiendo que sus seres queridos están protegidos.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#5788c6] mb-2">Posibilidad de crecimiento</h3>
                  <p className="text-gray-500">
                    El desarrollo constante que se le puede brindar a la aplicación ayudará a integrar más servicios y
                    adaptarse a las necesidades cambiantes de nuestros usuarios.
                  </p>
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
                <h2 className="text-2xl font-bold">¿Quieres ver nuestra aplicación en acción?</h2>
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
