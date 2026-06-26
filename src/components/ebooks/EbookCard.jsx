"use client";

import { Card } from "@heroui/react";

import { Eye, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EbookCard({ ebook }) {
  return (
    <Link href={`/browse-ebooks/${ebook._id}`}>
      <Card className=" overflow-hidden shadow-lg bg-white group hover:-translate-y-1 transition-all duration-300">
        <Card.Content className="p-0">
          <div className="relative">
            <Image
              width={500}
              height={500}
              src={ebook.coverImage}
              alt={ebook.title}
              className="w-full aspect-[3/4] object-cover rounded-xl"
            />

            {ebook.sold && (
              <span className="absolute top-2 left-2 bg-yellow-400 text-black text-[10px] font-semibold px-2 py-1 rounded-full">
                SOLD
              </span>
            )}
          </div>

          <div className="p-4">
            <h3 className=" font-semibold text-sm line-clamp-1 ">
              {ebook.title}
            </h3>

            <p className="text-xs text-default-500 mt-1">
              By {ebook.writerName}
            </p>

            <div className="flex items-center justify-between mt-5">
              <span className="font-bold text-sm">${ebook.price}</span>

              <button className=" border rounded-md px-3 py-1 text-xs flex items-center gap-1 hover:bg-blue-500 cursor-pointer hover:text-white transition ">
                <Eye size={14} />
                View Details
                {/* {ebook.sold ? (
                  <>
                    
                  </>
                ) : (
                  <>
                    <ShoppingCart size={14} />
                    Buy Now
                  </>
                )} */}
              </button>
            </div>
          </div>
        </Card.Content>
      </Card>
    </Link>
  );
}
