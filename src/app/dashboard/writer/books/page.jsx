import EbookTable from "@/components/dashboard/writer/EbookTable";
import { getBooks } from "@/lib/api/books";
import { getUser } from "@/lib/core/session";
import React from "react";

const ManageBooksPage = async () => {
  const user = await getUser();
  const books = await getBooks(user?.id);
  return (
    <div>
      <EbookTable books={books} />
    </div>
  );
};

export default ManageBooksPage;
