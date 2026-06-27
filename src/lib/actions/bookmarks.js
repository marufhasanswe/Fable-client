import { authClient } from "../auth-client";

export const addBookmark = async (ebookId) => {
  const { data, error } = await authClient.token();
  if (error) {
    console.log(error);
    return false;
  }
  const token = data?.token;
  console.log(token);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/books/bookmarks`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ebookId,
      }),
    },
  );
  return res.ok;
};
