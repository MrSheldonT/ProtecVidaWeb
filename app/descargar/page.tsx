"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useEffect, useState } from "react"

export default function DescargarPage() {
  const [downloadCount, setDownloadCount] = useState(0)

  useEffect(() => {
    // Obtener el contador de descargas al cargar la página
    fetch("/api/download-count")
      .then((res) => res.json())
      .then((data) => setDownloadCount(data.count))
      .catch((error) => console.error("Error fetching download count:", error))
  }, [])

  const handleDownload = async () => {
    try {
      // Incrementar el contador
      const response = await fetch("/api/increment-download", { method: "POST" })
      const data = await response.json()
      setDownloadCount(data.count)

      // Crear un enlace temporal para descargar la imagen
      const link = document.createElement("a")
      link.href = "/images/logo.png"
      link.download = "ProtecVida-Logo.png"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error incrementing download count:", error)
    }
  }

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
            <Link href="/descargar" className="text-sm font-medium text-[#5788c6]">
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
              Descargar
            </h1>
          </div>
        </section>

        {/* Contador de confianza */}
        <section className="w-full py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-bold text-[#5788c6] mb-4">Personas que han confiado en nosotros</h2>
              <div className="text-6xl font-bold text-[#5788c6] mb-2">{downloadCount}</div>
              <p className="text-xl text-gray-500">Familias protegidas con nuestra tecnología</p>
            </div>
          </div>
        </section>

        {/* Descargar recursos */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Recursos disponibles</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Obtén recursos y materiales de ProtecVida
                </p>
              </div>

              <div className="flex flex-col items-center space-y-6 p-8 border rounded-lg bg-white shadow-md w-full max-w-md">
                <Image src="/images/logo.png" alt="ProtecVida Logo" width={180} height={180} className="mb-4" />
                <h3 className="text-2xl font-bold">Logo de ProtecVida</h3>
                <p className="text-gray-500">Descarga nuestro logo en alta resolución</p>

                <Button
                  size="lg"
                  className="bg-[#5788c6] hover:bg-[#4a77b5] text-white flex items-center gap-2"
                  onClick={handleDownload}
                >
                  <Download className="h-5 w-5" />
                  Descargar Logo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Próximamente */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Próximamente</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Estamos trabajando en nuevos recursos y materiales para ti
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#5788c6] mb-2">Aplicación móvil</h3>
                  <p className="text-gray-500">
                    Muy pronto podrás descargar nuestra aplicación móvil para iOS y Android. Mantente atento a nuestras
                    redes sociales para más información.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#5788c6] mb-2">Manuales de usuario</h3>
                  <p className="text-gray-500">
                    Estamos preparando guías detalladas para ayudarte a sacar el máximo provecho de nuestros
                    dispositivos y aplicación.
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
                <h2 className="text-2xl font-bold">¿Tienes alguna pregunta?</h2>
                <p className="text-white/80">
                  Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible.
                </p>
              </div>
              <Link href="/contacto">
                <Button size="lg" className="bg-white text-[#5788c6] hover:bg-white/90">
                  Contactar ahora
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
