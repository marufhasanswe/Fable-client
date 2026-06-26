import { serverFetch } from "../core/server";

export const getBooks = async (userId) => {
  return await serverFetch(`/api/books?userId=${userId}`);
};
