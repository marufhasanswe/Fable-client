"use client";

import { Table, Button } from "@heroui/react";
import { BookOpen, Pencil, Trash2 } from "lucide-react";

// const initialEbooks = [
//   { id: 1, title: "Mastering React", price: 19.99, status: "Published" },
//   { id: 2, title: "Next.js Complete Guide", price: 24.99, status: "Draft" },
//   { id: 3, title: "Tailwind CSS Mastery", price: 14.99, status: "Published" },
//   { id: 4, title: "JavaScript Essentials", price: 12.5, status: "Draft" },
// ];

export default function EbookTable({ books }) {
  return (
    <div className="p-4 bg-white rounded-2xl">
      <h3 className="text-xl py-2 font-semibold">Manage Ebooks</h3>
      <Table aria-label="Manage your ebooks" className="w-full">
        <Table.ScrollContainer>
          <Table.Content>
            {/* Table Headers */}
            <Table.Header>
              {/* Added isRowHeader for Accessibility */}
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
              {books.map((book) => (
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
                          book.status === "Published"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-amber-50 text-amber-700 border-amber-200"
                        }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          book.status === "Published"
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
                        size="sm"
                        variant="flat"
                        color={
                          book.status === "published" ? "warning" : "success"
                        }
                        onPress={() => toggleStatus(book.id)}
                        className="font-medium text-xs h-8 rounded-lg px-3"
                      >
                        {book.status === "published" ? "Unpublish" : "Publish"}
                      </Button>

                      {/* Edit Button */}
                      <Button
                        isIconOnly
                        variant="light"
                        className="text-gray-500 hover:text-gray-800 h-8 w-8 min-w-8 rounded-lg"
                      >
                        <Pencil size={14} />
                      </Button>

                      {/* Delete Button */}
                      <Button
                        isIconOnly
                        variant="light"
                        color="danger"
                        className="h-8 w-8 min-w-8 rounded-lg"
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
