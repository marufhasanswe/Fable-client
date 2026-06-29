"use server";

import { serverFetch, serverMutation } from "../core/server";

export const getUsers = async () => {
  const res = await serverFetch("/api/users");
  return res;
};

export const updateUser = async (id, data) => {
  const res = await serverMutation(`/api/users/${id}`, "PATCH", data);
  return res;
};

export const deleteUser = async (id) => {
  const res = await serverMutation(`/api/users/${id}`, "DELETE");
  return res;
};
