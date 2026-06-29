"use client";

import { Card, Button } from "@heroui/react";
import { ArrowRight, Bookmark } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
    },
  },
};

export default function FeaturedEbooks({ initialBooks = [] }) {
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
              "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500",
          },

          {
            _id: "2",
            title: "The Gilded Echo",
            author: "Julian Thorne",
            price: 15.5,
            coverImage:
              "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500",
          },

          {
            _id: "3",
            title: "Binary Souls",
            author: "Sarah Jenkins",
            price: 9.99,
            coverImage:
              "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=500",
          },
        ].slice(0, 6);

  const [savedBooks, setSavedBooks] = useState({});

  const toggleBookmark = (id) => {
    setSavedBooks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className=" w-full bg-white px-6 py-12 md:px-12 lg:px-16 ">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}

        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className=" mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end "
        >
          <div>
            <h2 className=" text-3xl font-bold tracking-tight text-slate-900 md:text-4xl ">
              Featured Stories
            </h2>

            <p className=" mt-2 text-sm text-slate-500 md:text-base ">
              Handpicked narratives defining the future of independent
              publishing.
            </p>
          </div>

          <motion.div
            whileHover={{
              x: 5,
            }}
          >
            <Link href="/browse-ebooks">
              <Button
                variant="light"
                className=" flex items-center gap-2 font-semibold text-indigo-600 "
              >
                View Library
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* BOOK GRID */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "
        >
          {displayBooks.map((book) => (
            <motion.div
              key={book._id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <Card className=" group border-0 bg-transparent shadow-none ">
                {/* IMAGE */}

                <Card.Content className=" p-0 overflow-hidden rounded-2xl bg-slate-900 aspect-[3/4] ">
                  <motion.img
                    src={book.coverImage}
                    alt={book.title}
                    loading="lazy"
                    className=" h-full w-full object-cover "
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  />
                </Card.Content>

                {/* INFO */}

                <Card.Header className=" mt-4 flex-col items-start p-0 ">
                  <Card.Title className=" text-lg font-bold text-slate-900 line-clamp-1 ">
                    {book.title}
                  </Card.Title>

                  <Card.Description className=" text-xs text-slate-500 mt-0.5">
                    by {book.author || "Unknown Author"}
                  </Card.Description>
                </Card.Header>

                {/* FOOTER */}

                <Card.Footer className=" mt-2 flex items-center justify-between p-0 ">
                  <span className=" text-sm font-bold text-indigo-700 ">
                    ${Number(book.price).toFixed(2)}
                  </span>

                  <motion.div
                    whileTap={{
                      scale: 0.8,
                    }}
                  >
                    <Button
                      isIconOnly
                      variant="light"
                      size="sm"
                      onClick={() => toggleBookmark(book._id)}
                      className={
                        savedBooks[book._id]
                          ? "rounded-lg text-indigo-600 bg-indigo-50"
                          : "rounded-lg text-slate-400"
                      }
                    >
                      <Bookmark
                        className="h-4 w-4"
                        fill={savedBooks[book._id] ? "currentColor" : "none"}
                      />
                    </Button>
                  </motion.div>
                </Card.Footer>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
