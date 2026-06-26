"use client";

import { updateBook } from "@/lib/actions/books";
import { Table, Button } from "@heroui/react";
import { BookOpen, Pencil, Trash2 } from "lucide-react";
import { useState, useEffect } from "react"; // Added useEffect to sync props
import UpdateModal from "../UpdateModal";

export default function EbookTable({ books }) {
  // 1. Initialize local state with the incoming books prop
  const [localBooks, setLocalBooks] = useState(books);

  // 2. Keep local state in sync if the parent component sends new props
  useEffect(() => {
    setLocalBooks(books);
  }, [books]);

  const handleStatusBtnClick = async (bookId, newStatus) => {
    // 3. Immediately update the local state for an instant UI change
    setLocalBooks((prevBooks) =>
      prevBooks.map((book) =>
        book._id === bookId ? { ...book, status: newStatus } : book,
      ),
    );

    try {
      // 4. Trigger the server action in the background
      const res = await updateBook(bookId, { status: newStatus });
      console.log(res);
    } catch (error) {
      console.error("Failed to update status on server:", error);
      // Optional: Revert state back if server action fails
      setLocalBooks(books);
    }
  };

  return (
    <div className="p-4 bg-white rounded-2xl">
      <h3 className="text-xl py-2 font-semibold">Manage Ebooks</h3>
      <Table aria-label="Manage your ebooks" className="w-full">
        <Table.ScrollContainer>
          <Table.Content>
            {/* Table Headers */}
            <Table.Header>
              <Table.Column
                isRowHeader
                className="bg-gray-50/80 py-4 text-xs font-semibold text-gray-600 pl-6"
              >
                Title
              </Table.Column>
              <Table.Column className="bg-gray-50/80 py-4 text-xs font-semibold text-gray-600">
                Price
              </Table.Column>
              <Table.Column className="bg-gray-50/80 py-4 text-xs font-semibold text-gray-600">
                Status
              </Table.Column>
              <Table.Column className="bg-gray-50/80 py-4 text-xs font-semibold text-gray-600 text-right pr-6">
                Actions
              </Table.Column>
            </Table.Header>

            {/* Table Body */}
            <Table.Body>
              {/* 5. Changed 'books.map' to 'localBooks.map' */}
              {localBooks.map((book) => (
                <Table.Row
                  key={book._id}
                  className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors duration-150"
                >
                  {/* Title */}
                  <Table.Cell className="py-4 pl-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                        <BookOpen size={16} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">
                          {book.title}
                        </p>
                        <p className="text-xs text-gray-400">Ebook</p>
                      </div>
                    </div>
                  </Table.Cell>

                  {/* Price */}
                  <Table.Cell className="py-4">
                    <span className="font-semibold text-gray-900 text-sm">
                      ${book.price}
                    </span>
                  </Table.Cell>

                  {/* Status Tag */}
                  <Table.Cell className="py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium border
                        ${
                          book.status === "published"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-amber-50 text-amber-700 border-amber-200"
                        }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          book.status === "published"
                            ? "bg-emerald-500"
                            : "bg-amber-500"
                        }`}
                      />
                      {book.status}
                    </span>
                  </Table.Cell>

                  {/* Actions */}
                  <Table.Cell className="py-4 pr-6">
                    <div className="flex justify-end items-center gap-1.5">
                      {/* Publish / Unpublish */}
                      <Button
                        size="xs"
                        variant="secondary"
                        onClick={() =>
                          handleStatusBtnClick(
                            book._id,
                            book.status === "published"
                              ? "unpublished"
                              : "published",
                          )
                        }
                        className={`font-medium text-xs h-8 rounded-lg px-3 w-20 ${
                          book.status === "published"
                            ? " bg-amber-500 text-white"
                            : "bg-emerald-500 text-white"
                        }`}
                      >
                        {book.status === "published" ? "Unpublish" : "Publish"}
                      </Button>

                      {/* Edit Button */}

                      <UpdateModal book={book} />

                      {/* Delete Button */}
                      <Button
                        isIconOnly
                        variant="light"
                        className="h-8 text-red-500 w-8 min-w-8 rounded-lg"
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
