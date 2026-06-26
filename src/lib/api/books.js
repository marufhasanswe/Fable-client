import { serverFetch } from "../core/server";

export const getBooks = async (userId) => {
  if (!userId) {
    userId = "";
  }
  return await serverFetch(`/api/books?userId=${userId}`);
};

export const getSingleBook = async (bookId) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/books/${bookId}`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error("Ebook not found");
    }

    return await res.json();
  } catch (error) {
    return null;
  }
};
