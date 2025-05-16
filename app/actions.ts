"use server"
import { revalidatePath } from "next/cache"

// Variable para almacenar el contador de descargas
let downloadCount = 0

export async function incrementDownloadCount() {
  // Incrementar el contador
  downloadCount++

  // Revalidar la página para actualizar el contador
  revalidatePath("/")
  revalidatePath("/descargar")

  // Devolver el contador actualizado
  return { count: downloadCount }
}

// Función para obtener el contador actual
export async function getDownloadCount() {
  return { count: downloadCount }
}
