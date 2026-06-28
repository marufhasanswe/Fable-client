import { serverFetch } from "../core/server";

export const getTransactions = async () => {
  const res = await serverFetch("/api/transactions");
  return res;
};
