import { headers } from "next/headers";
import { auth } from "../auth";

export const getUser = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session?.user || null;
};

export const getTokenServer = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  return token || null;
};
