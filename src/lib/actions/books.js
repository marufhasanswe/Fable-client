"use server";

import { revalidatePath } from "next/cache";
import { deleteMutation, serverMutation } from "../core/server";
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

export const updateBook = async (bookId, bookData) => {
  const data = {
    ...bookData,
  };
  const res = await serverMutation(`/api/books/${bookId}`, "PATCH", data);
  revalidatePath("/dashboard/writer");
  revalidatePath("/dashboard/writer/books");
  revalidatePath("/dashboard/admin/manage-books");
  return res;
};

export const deleteBook = async (bookId) => {
  const res = await deleteMutation(`/api/books/${bookId}`);
  revalidatePath("/dashboard/writer");
  revalidatePath("/dashboard/writer/books");
  return res;
};
