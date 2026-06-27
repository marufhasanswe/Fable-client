import { getTokenServer } from "../core/session";

export const checkPurchase = async (ebookId) => {
  let token = null;

  try {
    token = await getTokenServer();
  } catch (error) {
    // user not logged in
    return {
      authenticated: false,
      purchased: false,
      message: "Not logged in",
    };
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/purchase/check/${ebookId}`,

      {
        method: "GET",

        headers: {
          authorization: `Bearer ${token}`,
        },

        cache: "no-store",
      },
    );

    if (!res.ok) {
      return {
        authenticated: false,
        purchased: false,
      };
    }

    return await res.json();
  } catch (error) {
    return {
      authenticated: false,
      purchased: false,
      message: error.message,
    };
  }
};
