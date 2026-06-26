"use client";

import { Card, Button } from "@heroui/react";
import { ArrowRight, Bookmark } from "lucide-react";
import { useState } from "react";

export default function FeaturedEbooks({ initialBooks = [] }) {
  // If no DB books are passed yet, fallback to mock data matching your image
  const displayBooks =
    initialBooks.length > 0
      ? initialBooks.slice(0, 8)
      : [
          {
            _id: "1",
            title: "Neon Silence",
            author: "Elara Vance",
            price: 12.99,
            coverImage:
              "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80",
          },
          {
            _id: "2",
            title: "The Gilded Echo",
            author: "Julian Thorne",
            price: 15.5,
            coverImage:
              "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&auto=format&fit=crop&q=80",
          },
          {
            _id: "3",
            title: "Binary Souls",
            author: "Sarah Jenkins",
            price: 9.99,
            coverImage:
              "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=500&auto=format&fit=crop&q=80",
          },
          {
            _id: "4",
            title: "Winds of Atlas",
            author: "Marcus Sterling",
            price: 18.0,
            coverImage:
              "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80",
          },
          {
            _id: "5",
            title: "Cyber Horizon",
            author: "Alex Rivers",
            price: 14.99,
            coverImage:
              "https://images.unsplash.com/photo-1618005198143-e5283b019a7f?w=500&auto=format&fit=crop&q=80",
          },
          {
            _id: "6",
            title: "Echoes of Time",
            author: "Elena Rostova",
            price: 11.25,
            coverImage:
              "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500&auto=format&fit=crop&q=80",
          },
        ].slice(0, 6);

  // Quick UI interaction state for the bookmarks
  const [savedBooks, setSavedBooks] = useState({});

  const toggleBookmark = (id) => {
    setSavedBooks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full bg-white px-6 py-12 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Featured Stories
            </h2>
            <p className="mt-2 text-sm text-slate-500 md:text-base">
              Handpicked narratives defining the future of independent
              publishing.
            </p>
          </div>

          <Button
            variant="light"
            className="group flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-700 p-0 self-start sm:self-auto"
          >
            View Library
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* 6 Ebooks Grid Layout */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {displayBooks.map((book) => (
            <Card
              key={book._id}
              className="group border-0 bg-transparent shadow-none transition-all duration-300"
            >
              {/* Card Image Content */}
              <Card.Content className="p-0 overflow-hidden rounded-2xl bg-slate-900 aspect-[3/4]">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </Card.Content>

              {/* Card Detail Information */}
              <Card.Header className="mt-4 flex-col items-start p-0">
                <Card.Title className="text-lg font-bold text-slate-900 line-clamp-1">
                  {book.title}
                </Card.Title>
                <Card.Description className="text-xs text-slate-500 mt-0.5">
                  by {book.author || "Unknown Author"}
                </Card.Description>
              </Card.Header>

              {/* Card Bottom Footer Row */}
              <Card.Footer className="mt-2 flex items-center justify-between p-0">
                <span className="text-sm font-bold text-indigo-700">
                  ${Number(book.price).toFixed(2)}
                </span>

                <Button
                  isIconOnly
                  variant="light"
                  size="sm"
                  onClick={() => toggleBookmark(book._id)}
                  className={`rounded-lg transition-colors duration-200 ${
                    savedBooks[book._id]
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  <Bookmark
                    className="h-4 w-4"
                    fill={savedBooks[book._id] ? "currentColor" : "none"}
                  />
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
