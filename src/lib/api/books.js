import { serverFetch } from "../core/server";

export const getBooks = async (userId) => {
  if (!userId) {
    userId = "";
  }
  return await serverFetch(`/api/books?userId=${userId}`);
};
