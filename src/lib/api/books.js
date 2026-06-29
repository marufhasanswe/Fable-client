import { serverFetch } from "../core/server";

// export const getBooks = async (userId) => {
//   if (!userId) {
//     userId = "";
//   }
//   return await serverFetch(`/api/books?userId=${userId}`);
// };

export async function getBooks(filters = {}) {
  const query = new URLSearchParams();

  if (filters.search) {
    query.set("search", filters.search);
  }

  if (filters.genre) {
    query.set("genre", filters.genre);
  }

  if (filters.sort) {
    query.set("sort", filters.sort);
  }
  console.log(query);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/books?${query}`,
  );

  if (!res.ok) {
    return {
      error: true,
    };
  }

  return res.json();
}

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
