import { serverMutation } from "../core/server";

export const bookPurchased = async (data) => {
  const res = await serverMutation("/api/books/purchases", "POST", data);
  return res;
};
