"use server";

import { revalidatePath } from "next/cache";
import { deleteMutation, serverMutation } from "../core/server";
import { getUser } from "../core/session";

export const addBookmark = async (ebookId) => {
  const res = await serverMutation(`/api/books/bookmarks`, "POST", {
    ebookId,
  });
  return res;
};

export const removeBookmark = async (ebookId) => {
  const user = await getUser();
  const res = await deleteMutation(`/api/books/bookmarks/${ebookId}`);
  revalidatePath(`/dashboard/${user.role}/bookmarks`);
  return res;
};
