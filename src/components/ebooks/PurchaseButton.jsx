import { Button } from "@heroui/react";
import { ShoppingCart } from "lucide-react";

export default function PurchaseButton({ ebookId, sold }) {
  console.log(sold);
  function handlePurchase() {
    /*
Later:

1. Check Better Auth session
2. Check role permission
3. Create payment
4. Redirect checkout

*/

    alert("Login required to purchase");
  }

  return (
    <Button
      disabled={sold}
      className={` h-11 px-8 rounded-lg flex items-center gap-2 text-white ${sold ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:opacity-90"}`}
    >
      <ShoppingCart size={17} />

      {sold ? "Sold" : "Purchase Now"}
    </Button>
  );
}
