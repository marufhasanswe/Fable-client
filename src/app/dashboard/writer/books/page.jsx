import EbookManageTable from "@/components/dashboard/EbookManageTable";
import { getBooks } from "@/lib/api/books";
import { getUser } from "@/lib/core/session";
import React from "react";

const ManageBooksPage = async () => {
  const user = await getUser();
  const books = await getBooks(user?.id);
  return (
    <div>
      <EbookManageTable books={books} />
    </div>
  );
};

export default ManageBooksPage;
