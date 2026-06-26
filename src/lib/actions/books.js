"use server";

import { serverMutation } from "../core/server";
import { getUser } from "../core/session";

export const addBook = async (bookData) => {
  const user = await getUser();
  const data = {
    ...bookData,
    writerId: user?.id,
    writerName: user?.name,
  };
  return await serverMutation("/api/books", "POST", data);
};
