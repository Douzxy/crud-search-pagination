"use server";

import { z } from "zod"; // Library untuk validasi schema
import { prisma } from "@/lib/prisma"; // Koneksi dengan Prisma
import { revalidatePath } from "next/cache"; // Untuk merevalidasi cache di Next.js
import { redirect } from "next/navigation"; // Untuk redirect di server-side

// Definisi schema validasi untuk data kontak
const ContactSchema = z.object({
  name: z.string().min(6), // Nama minimal 6 karakter
  phone: z.string().min(11), // Nomor telepon minimal 11 karakter
});

// Fungsi untuk menyimpan kontak baru
export const saveContact = async (prevState: any, formData: FormData) => {
  // Validasi data form menggunakan schema
  const validatedFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries()) // Mengubah formData menjadi objek
  );

  if (!validatedFields.success) {
    // Jika validasi gagal, kembalikan error
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // Simpan data kontak ke database
    await prisma.contact.create({
      data: {
        name: validatedFields.data.name, // Nama kontak
        phone: validatedFields.data.phone, // Nomor telepon kontak
      },
    });
  } catch {
    // Jika terjadi error, kembalikan pesan error
    return { message: "Failed to create contact" };
  }

  // Revalidasi path dan redirect ke halaman kontak
  revalidatePath("/contacts");
  redirect("/contacts");
};

// Fungsi untuk memperbarui kontak yang ada
export const updateContact = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  // Validasi data form menggunakan schema
  const validatedFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries()) // Mengubah formData menjadi objek
  );

  if (!validatedFields.success) {
    // Jika validasi gagal, kembalikan error
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // Perbarui data kontak di database berdasarkan ID
    await prisma.contact.update({
      data: {
        name: validatedFields.data.name, // Nama kontak yang diperbarui
        phone: validatedFields.data.phone, // Nomor telepon yang diperbarui
      },
      where: { id }, // ID kontak yang ingin diperbarui
    });
  } catch {
    // Jika terjadi error, kembalikan pesan error
    return { message: "Failed to update contact" };
  }

  // Revalidasi path dan redirect ke halaman kontak
  revalidatePath("/contacts");
  redirect("/contacts");
};

// Fungsi untuk menghapus kontak berdasarkan ID
export const deleteContact = async (id: string) => {
  try {
    // Hapus data kontak dari database berdasarkan ID
    await prisma.contact.delete({
      where: { id }, // ID kontak yang ingin dihapus
    });
  } catch {
    // Jika terjadi error, kembalikan pesan error
    return { message: "Failed to delete contact" };
  }

  // Revalidasi path setelah kontak dihapus
  revalidatePath("/contacts");
};
