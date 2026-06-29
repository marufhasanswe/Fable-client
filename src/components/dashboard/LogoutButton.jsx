"use client";

import { Button } from "@heroui/react";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();

    router.push("/");
    router.refresh();
  };

  return (
    <Button
      onPress={handleLogout}
      variant="flat"
      className="
        w-full
        h-11
        gap-3
        rounded-xl
        bg-white
        border
        border-red-100
        text-red-500
        font-semibold
        hover:bg-red-50
        hover:border-red-200
        transition-all
        duration-200
      "
    >
      <ArrowRightFromSquare />
      Logout
    </Button>
  );
}
