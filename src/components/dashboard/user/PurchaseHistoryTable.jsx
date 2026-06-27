"use client";

import React from "react";
import { Table } from "@heroui/react";
import { ArrowDownToLine } from "lucide-react"; // Gravity UI or Lucide icon

export default function PurchaseHistoryTable({ purchasesEbooks }) {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-6 bg-[#f8fafc] flex items-center justify-center">
      <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Header Section */}
        <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-50">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
              Purchase History
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Review your recent literary investments.
            </p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors group self-start sm:self-auto">
            <ArrowDownToLine className="w-4 h-4 text-indigo-600 group-hover:translate-y-[1px] transition-transform" />
            Export PDF
          </button>
        </div>

        {/* Hero UI Table Wrapper */}
        <div className="px-2 pb-2">
          <Table className="w-full border-separate border-spacing-0">
            <Table.ScrollContainer>
              <Table.Content aria-label="Purchase history table">
                <Table.Header className="bg-[#f4f7fc]">
                  <Table.Column
                    isRowHeader
                    className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 text-left"
                  >
                    Book
                  </Table.Column>
                  <Table.Column
                    isRowHeader
                    className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 text-left"
                  >
                    Writer
                  </Table.Column>
                  <Table.Column
                    isRowHeader
                    className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 text-left"
                  >
                    Price
                  </Table.Column>
                  <Table.Column className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 text-left">
                    Date
                  </Table.Column>
                  <Table.Column className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 text-left">
                    Status
                  </Table.Column>
                </Table.Header>

                <Table.Body>
                  {purchasesEbooks.map((row) => (
                    <Table.Row
                      key={row._id}
                      className="hover:bg-slate-50/80 transition-colors border-b border-slate-100 last:border-b-0"
                    >
                      {/* Book Title */}
                      <Table.Cell className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        {row.ebookTitle}
                      </Table.Cell>

                      {/* Writer */}
                      <Table.Cell className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">
                        {row.writerName}
                      </Table.Cell>

                      {/* Price */}
                      <Table.Cell className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        ${row.amount}
                      </Table.Cell>

                      {/* Date */}
                      <Table.Cell className="px-6 py-4 text-sm text-slate-500 whitespace-nowrap">
                        {row.createdAt}
                      </Table.Cell>

                      {/* Status pill */}
                      <Table.Cell className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium tracking-wide rounded-full bg-emerald-100 text-emerald-700 uppercase">
                          {row.status}
                        </span>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>

            {/* Footer Section */}
            <Table.Footer>
              <div className="flex justify-center items-center py-4 border-t border-slate-100">
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors focus:outline-none focus:underline">
                  View All Transactions
                </button>
              </div>
            </Table.Footer>
          </Table>
        </div>
      </div>
    </div>
  );
}
