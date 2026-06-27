"use client";
import { addBookmark } from "@/lib/actions/bookmarks";
import { authClient } from "@/lib/auth-client";
import { Bookmark } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function EbookDetailsPageButtons({
  ebook,
  sold,
  isPurchased = null,
}) {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleBookmark = async () => {
    if (!user?.id) {
      toast.error("Please login to bookmark this ebook");
      return router.push("/login");
    }
    const res = await addBookmark(ebook._id);
    if (res) {
      toast.success("Successfully bookmarked!");
    }
  };
  return (
    <>
      <form action="/api/payment" method="POST">
        <input type="hidden" name="ebookId" value={ebook._id} />
        <input type="hidden" name="ebookTitle" value={ebook.title} />
        <input type="hidden" name="writerId" value={ebook.writerId} />
        <input type="hidden" name="writerName" value={ebook.writerName} />
        <input type="hidden" name="amount" value={ebook.price} />
        <Button
          isDisabled={user?.id === ebook.writerId || isPurchased}
          type="submit"
          className={` h-11 px-8 rounded-lg flex items-center gap-2 text-white ${sold ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:opacity-90"}`}
        >
          <ShoppingCart size={17} />

          {isPurchased ? "Already Purchased" : "Purchase Now"}
        </Button>
      </form>
      <Button
        // isDisabled={!user?.id}
        onClick={handleBookmark}
        variant="secondary"
        className="rounded-lg border border-blue-500 font-medium bg-white px-6 h-11 flex items-center gap-2 "
      >
        <Bookmark size={17} />
        Bookmark
      </Button>
    </>
  );
}
