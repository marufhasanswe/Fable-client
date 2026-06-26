"use client";
import { authClient } from "@/lib/auth-client";
import { Bookmark } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function EbookDetailsPageButtons({ ebook, sold }) {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  function handlePurchase() {
    if (!user.id || !user.role) {
      toast.error("Please login to purchase this book");
      router.push("/login");
      return;
    }
    /*
Later:

1. Check Better Auth session
2. Check role permission
3. Create payment
4. Redirect checkout

*/
  }

  return (
    <>
      <Button
        isDisabled={user?.id === ebook.writerId}
        onClick={handlePurchase}
        className={` h-11 px-8 rounded-lg flex items-center gap-2 text-white ${sold ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:opacity-90"}`}
      >
        <ShoppingCart size={17} />

        {sold ? "Sold" : "Purchase Now"}
      </Button>
      <Button
        variant="secondary"
        className="rounded-lg border border-blue-500 font-medium bg-white px-6 h-11 flex items-center gap-2 "
      >
        <Bookmark size={17} />
        Bookmark
      </Button>
    </>
  );
}
