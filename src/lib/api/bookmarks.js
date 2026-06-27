import { serverFetch } from "../core/server";

export const getBookmarks = async (userId) => {
  const res = await serverFetch(`/api/books/bookmarks/${userId}`);
  return res;
};
