"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
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
        {/* Hero Section */}
        <section
          id="inicio"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#5788c6] to-[#3a6ea5] text-white"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">ProtecVida</h1>
                  <p className="text-xl text-white/90">Siempre cerca, siempre seguros</p>
                </div>
                <p className="max-w-[600px] text-white/80 md:text-xl">
                  Tecnología innovadora para la seguridad y el bienestar familiar, integrando anillos y pulseras
                  inteligentes con una aplicación móvil avanzada.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/nosotros">
                    <Button size="lg" className="bg-white text-[#5788c6] hover:bg-white/90">
                      Conocer más
                    </Button>
                  </Link>
                  <Link href="/contacto">
                    <Button
                      size="lg"
                      className="bg-white/20 border-2 border-white text-white hover:bg-white/30 font-bold"
                    >
                      Contactar
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto flex justify-center">
                <div className="relative w-[300px] h-[600px] sm:w-[350px] sm:h-[700px] rounded-xl overflow-hidden border-8 border-white shadow-xl">
                  <Image
                    src="/images/app/analisis_vida.jpg"
                    alt="ProtecVida App"
                    width={350}
                    height={700}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contador de confianza */}
        <section className="w-full py-12 bg-[#e6f0fa]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-bold text-[#5788c6] mb-2">Personas que han confiado en nosotros</h2>
              <div className="text-5xl font-bold text-[#5788c6]" id="download-count">
                0
              </div>
              <p className="mt-2 text-gray-500">Familias protegidas con nuestra tecnología</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Descubre nuestras secciones
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Conoce más sobre ProtecVida y cómo podemos ayudarte
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Link href="/nosotros" className="no-underline">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 h-full flex flex-col">
                    <h3 className="text-xl font-bold text-[#5788c6] mb-2">Nosotros</h3>
                    <p className="text-gray-500 flex-grow">
                      Conoce nuestra misión, visión y cómo surgió ProtecVida para cuidar de las familias mexicanas.
                    </p>
                    <Button className="mt-4 bg-[#5788c6] hover:bg-[#4a77b5] w-full">Ver más</Button>
                  </div>
                </Link>
                <Link href="/caracteristicas" className="no-underline">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 h-full flex flex-col">
                    <h3 className="text-xl font-bold text-[#5788c6] mb-2">Características</h3>
                    <p className="text-gray-500 flex-grow">
                      Explora las ventajas competitivas y funcionalidades que hacen única nuestra tecnología.
                    </p>
                    <Button className="mt-4 bg-[#5788c6] hover:bg-[#4a77b5] w-full">Ver más</Button>
                  </div>
                </Link>
                <Link href="/aplicacion" className="no-underline">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 h-full flex flex-col">
                    <h3 className="text-xl font-bold text-[#5788c6] mb-2">Aplicación</h3>
                    <p className="text-gray-500 flex-grow">
                      Descubre cómo nuestra aplicación te ayuda a monitorear la salud y ubicación de tus seres queridos.
                    </p>
                    <Button className="mt-4 bg-[#5788c6] hover:bg-[#4a77b5] w-full">Ver más</Button>
                  </div>
                </Link>
              </div>
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
