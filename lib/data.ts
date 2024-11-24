import { prisma } from "@/lib/prisma";

const ITEMS_PER_PAGE = 5;

/**
 * Mengambil data kontak dengan fitur pencarian dan paginasi.
 * @param query - Kata kunci untuk pencarian berdasarkan nama atau nomor telepon.
 * @param currentPage - Halaman yang sedang aktif.
 * @returns Daftar kontak yang sesuai.
 */
export const getContacts = async (query: string, currentPage: number) => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const contacts = await prisma.contact.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            phone: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    return contacts;
  } catch (error) {
    console.error("Error fetching contacts:", error); // Menampilkan log error untuk debugging
    throw new Error("Failed to fetch contact data. Please try again later.");
  }
};

/**
 * Mengambil data kontak berdasarkan ID.
 * @param id - ID kontak yang ingin diambil.
 * @returns Data kontak atau null jika tidak ditemukan.
 */
export const getContactsById = async (id: string) => {
  try {
    const contacts = await prisma.contact.findUnique({
      where: { id },
    });
    return contacts;
  } catch (error) {
    console.error("Error fetching contact by ID:", error); // Menampilkan log error untuk debugging
    throw new Error(
      "Failed to fetch contact data by ID. Please try again later."
    );
  }
};

/**
 * Menghitung jumlah total halaman untuk data kontak berdasarkan query pencarian.
 * @param query - Kata kunci untuk pencarian berdasarkan nama atau nomor telepon.
 * @returns Total halaman kontak.
 */
export const getContactsPages = async (query: string) => {
  try {
    const contacts = await prisma.contact.count({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            phone: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(Number(contacts) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Error fetching contact pages:", error); // Menampilkan log error untuk debugging
    throw new Error(
      "Failed to fetch total contact pages. Please try again later."
    );
  }
};
