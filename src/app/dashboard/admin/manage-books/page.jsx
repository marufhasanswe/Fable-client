import EbookManageTable from "@/components/dashboard/EbookManageTable";
import { getBooks } from "@/lib/api/books";
import React from "react";

const AdminManageAllBooksPage = async () => {
  const books = await getBooks();
  console.log(books);
  return (
    <div>
      <EbookManageTable books={books || []} />
    </div>
  );
};

export default AdminManageAllBooksPage;
