import TransactionsTable from "@/components/dashboard/admin/TransactionsTable";
import { getTransactions } from "@/lib/api/transactions";
import React from "react";

const AdminAllTransactionsPage = async () => {
  const transactions = await getTransactions();
  return (
    <div>
      <TransactionsTable purchasesEbooks={transactions || []} />
    </div>
  );
};

export default AdminAllTransactionsPage;
