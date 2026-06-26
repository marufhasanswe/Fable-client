import { getTokenServer } from "./session";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const serverMutation = async (path, method, data) => {
  const token = await getTokenServer();
  const res = await fetch(`${baseUrl}${path}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const serverFetch = async (path) => {
  const res = await fetch(`${baseUrl}${path}`, {
    cache: "no-store",
  });
  return res.json();
};
