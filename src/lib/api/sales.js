import { serverFetch } from "../core/server";

export const getSalesHistory = async (userId) => {
  const res = await serverFetch(`/api/sales/history/${userId}`);
  return res;
};

export const getDashboardStats = async () => {
  const res = await serverFetch("/api/admin/dashboard");
  return res;
};
