"use client";

import Link from "next/link";
import { Bookmark, BookOpen, Trash2, ArrowUpRight } from "lucide-react";
import { Card } from "@heroui/react";
import Image from "next/image";
import { removeBookmark } from "@/lib/actions/bookmarks";
import { toast } from "react-toastify";

export default function BookmarkPage({ bookmarkedBooks = [] }) {
  const handleRemoveBookmark = async (ebookId) => {
    const res = await removeBookmark(ebookId);
    console.log(res);
    if (res.deletedCount) {
      toast.success("Successfully removed bookmark!");
    }
  };
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">My Bookmarks</h1>

          <p className="text-sm text-slate-500 mt-1">
            Your saved ebooks collection
          </p>
        </div>

        <div className="flex items-center gap-2 text-indigo-600">
          <Bookmark className="w-5 h-5 fill-indigo-600" />

          <span className="font-semibold">{bookmarkedBooks.length}</span>
        </div>
      </div>

      {bookmarkedBooks.length === 0 ? (
        <div className="min-h-[400px] flex flex-col items-center justify-center">
          <BookOpen className="w-14 h-14 text-slate-300 mb-4" />

          <h2 className="text-lg font-semibold text-slate-700">
            No bookmarked ebooks
          </h2>

          <p className="text-sm text-slate-500">
            Save your favorite books and read later.
          </p>
        </div>
      ) : (
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {bookmarkedBooks.map((book) => (
            <Card
              key={book._id}
              className=" group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all "
            >
              {/* Image */}

              <div className="relative rounded-lg h-52 bg-slate-100 overflow-hidden">
                <Image
                  width={400}
                  height={400}
                  alt={book.title}
                  src={book.coverImage}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <button
                  type="button"
                  onClick={() => handleRemoveBookmark(book._id)}
                  className="cursor-pointer absolute top-3 right-3 p-2 rounded-full bg-white/90 text-red-500 hover:bg-red-50 "
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}

              <div className="p-3">
                <h3 className=" text-sm font-bold text-slate-800 line-clamp-1 ">
                  {book.ebookTitle}
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  by {book.writerName || "Unknown Author"}
                </p>

                <Link
                  href={`/browse-ebooks/${book.ebookId}`}
                  className=" mt-3 w-full flex items-center justify-center gap-1 py-2 rounded-xl text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition "
                >
                  View Details
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
