import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NosotrosPage() {
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
            <Link href="/nosotros" className="text-sm font-medium text-[#5788c6]">
              Nosotros
            </Link>
            <Link href="/caracteristicas" className="text-sm font-medium hover:text-[#5788c6]">
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
              Sobre ProtecVida
            </h1>
          </div>
        </section>

        {/* Descripción Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Desarrollamos tecnología para la seguridad y el bienestar familiar
                </h2>
              </div>
              <div className="mx-auto max-w-3xl space-y-4 text-left">
                <p className="text-gray-500">
                  ProtecVida es una empresa dedicada al desarrollo de tecnología para la seguridad y el bienestar
                  familiar, integrando anillos y pulseras inteligentes con una aplicación móvil innovadora. En México,
                  millones de niños y adultos mayores requieren monitoreo constante y asistencia inmediata en caso de
                  emergencias.
                </p>
                <p className="text-gray-500">
                  Según la Encuesta Nacional para el Sistema de Cuidados (ENASIC) 2022 del INEGI, el 3.6% de las
                  personas adultas mayores y el 7.0% de niñas, niños y adolescentes necesitan mayor tiempo de cuidado o
                  atención adicional a la que reciben, lo que refleja una gran necesidad de soluciones tecnológicas que
                  brinden apoyo en su monitoreo y bienestar.
                </p>
                <p className="text-gray-500">
                  De esta necesidad surge ProtecVida, un sistema que utiliza anillos inteligentes para recopilar datos
                  clave como oxigenación, ritmo cardíaco, movimientos inusuales en el giroscopio del dispositivo y
                  ubicación, permitiendo generar alertas automáticas y recomendaciones en tiempo real, además de otorgar
                  al usuario un prediagnóstico con la recopilación de la información obtenida de los indicadores
                  anteriores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#e6f0fa] px-3 py-1 text-sm text-[#5788c6]">Misión</div>
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Nuestra Misión</h3>
                <p className="text-gray-500 md:text-lg">
                  Desarrollar una solución tecnológica innovadora que garantice la seguridad y el bienestar de niños y
                  adultos mayores a través del monitoreo en tiempo real. Mediante el uso de anillos y pulseras
                  inteligentes en conjunto con una aplicación móvil avanzada, brindamos a las familias herramientas
                  accesibles y eficientes para otorgar a los usuarios prediagnósticos de enfermedades, promoviendo su
                  prevención oportuna.
                </p>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#e6f0fa] px-3 py-1 text-sm text-[#5788c6]">Visión</div>
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Nuestra Visión</h3>
                <p className="text-gray-500 md:text-lg">
                  Ser la empresa referente en tecnología de seguridad y bienestar para niños y adultos mayores en
                  México, desarrollando soluciones innovadoras y accesibles que brinden tranquilidad a las familias. En
                  los próximos cinco años, buscamos consolidarnos a nivel nacional, fortaleciendo nuestra tecnología con
                  inteligencia artificial y análisis predictivo para mejorar la prevención de riesgos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-12 md:py-16 bg-[#5788c6] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">¿Quieres conocer más sobre nuestros objetivos?</h2>
                <p className="text-white/80">
                  Descubre nuestros planes a corto, mediano y largo plazo para mejorar la vida de las familias
                </p>
              </div>
              <Link href="/objetivos">
                <Button size="lg" className="bg-white text-[#5788c6] hover:bg-white/90">
                  Ver objetivos estratégicos
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
