import SalesHistoryTable from "@/components/dashboard/writer/SalesHistoryTable";
import { getSalesHistory } from "@/lib/api/sales";
import { getUser } from "@/lib/core/session";
import React from "react";

const WriterSalesHistoryPage = async () => {
  const user = await getUser();
  const userId = user?.id;
  const salesHistory = await getSalesHistory(userId);
  return (
    <div>
      <SalesHistoryTable purchasesEbooks={salesHistory} />
    </div>
  );
};

export default WriterSalesHistoryPage;
