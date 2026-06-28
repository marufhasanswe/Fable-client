import PurchasedEbooksPage from "@/components/dashboard/user/PurchasedEbooksPage";
import { getPurchasedEbooks } from "@/lib/api/purchase";
import { getUser } from "@/lib/core/session";
import React from "react";

const PurchasedEbookPage = async () => {
  const user = await getUser();
  const userId = user?.id;
  const purchasedEbooks = await getPurchasedEbooks(userId);
  return (
    <div>
      <PurchasedEbooksPage purchasedEbooks={purchasedEbooks} />
    </div>
  );
};

export default PurchasedEbookPage;
