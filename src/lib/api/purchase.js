import { getTokenServer } from "../core/session";

export const checkPurchase = async (ebookId) => {
  const token = await getTokenServer();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/purchase/check/${ebookId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    },
  );
  return res.json() || null;
};
