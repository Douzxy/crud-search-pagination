import { PrismaClient } from "@prisma/client"; // Mengimpor PrismaClient untuk mengakses database

// Deklarasi variabel global agar PrismaClient dapat digunakan di seluruh aplikasi tanpa membuat instance baru
declare global {
  let prisma: PrismaClient | undefined; // Variabel global untuk menyimpan instance PrismaClient
}

// Membuat instance PrismaClient hanya jika belum ada instance global yang tersedia
export const prisma = globalThis.prisma || new PrismaClient();

// Jika aplikasi berjalan di mode pengembangan (bukan production),
// simpan instance PrismaClient ke dalam globalThis untuk mencegah membuat instance baru setiap kali file dieksekusi ulang
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma; // Menyimpan instance PrismaClient ke globalThis
}
