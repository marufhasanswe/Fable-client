"use client";

import React, { useState } from "react";
import { Card } from "@heroui/react";
import {
  BookOpen,
  ArrowUpRight,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PurchasedEbooksPage({ purchasedEbooks = [] }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter books based on search input
  const filteredEbooks = purchasedEbooks.filter(
    (book) =>
      book.ebookTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.writerName?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header and Controls Section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between pb-8 border-b border-slate-200/60 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-indigo-600" />
              My Purchased Library
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Access and manage your complete collection of digital books.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex items-center gap-3 w-full md:w-auto max-w-md">
            <div className="relative flex-1 min-w-[260px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by title or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800"
              />
            </div>
            <button className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors">
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Empty State */}
        {filteredEbooks.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-2xl border border-dashed border-slate-200 p-6">
            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-slate-800">
              No books found
            </h3>
            <p className="text-sm text-slate-500 mt-1 max-w-xs">
              {searchQuery
                ? "Try checking your spelling or search for something else."
                : "You haven't purchased any e-books yet."}
            </p>
          </div>
        )}

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredEbooks.map((book) => (
            <Card
              key={book._id}
              className="max-h-96 group bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col rounded-2xl overflow-hidden"
            >
              {/* Cover Image */}
              <Card.Content className="p-0 rounded-xl relative w-full bg-slate-100 overflow-hidden">
                {book.coverImage ? (
                  <img
                    src={book.coverImage}
                    alt={`${book.ebookTitle} cover`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 "
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-slate-100 flex flex-col items-center justify-center p-4 text-center">
                    <BookOpen className="w-10 h-10 text-indigo-300 mb-2" />

                    <span className="text-xs font-medium text-slate-400 px-2 line-clamp-2">
                      {book.ebookTitle}
                    </span>
                  </div>
                )}
                {/* Hover Overlay
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/5 transition-colors duration-300" /> */}
              </Card.Content>

              {/* Ebook Info */}
              <Card.Header className="p-3 flex flex-col gap-1">
                <Card.Title className="text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                  {book.ebookTitle}
                </Card.Title>

                <Card.Description className="text-xs text-slate-500">
                  by {book.writerName || "Unknown Author"}
                </Card.Description>
              </Card.Header>

              {/* Action */}
              <Card.Footer className="p-3 pt-0">
                <Link
                  href={`/browse-ebooks/${book.ebookId}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-all group/btn"
                >
                  View Details
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
