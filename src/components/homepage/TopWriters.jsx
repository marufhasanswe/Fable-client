"use client";

import { Card, Button, Avatar } from "@heroui/react";
import { Users, BookOpen, UserPlus, UserCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function TopWriters({ initialWriters = [] }) {
  // Mock data fallback matching your image structure perfectly
  const displayWriters =
    initialWriters.length > 0
      ? initialWriters.slice(0, 3)
      : [
          {
            _id: "w1",
            name: "Amara K. Cole",
            specialty: "Speculative Fiction Specialist",
            booksCount: 12,
            readersCount: "45k",
            avatar:
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
          },
          {
            _id: "w2",
            name: "David Beaumont",
            specialty: "Historical Tech Non-Fiction",
            booksCount: 8,
            readersCount: "32k",
            avatar:
              "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80",
          },
          {
            _id: "w3",
            name: "Lena Ross",
            specialty: "Mystery & Romance Novelist",
            booksCount: 15,
            readersCount: "88k",
            avatar:
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
          },
        ];

  // Local state to keep track of followed authors interactively
  const [following, setFollowing] = useState({});

  const toggleFollow = (id) => {
    setFollowing((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full bg-slate-100 px-6 py-16 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header Block */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Top Writers
          </h2>
          <p className="mt-3 text-sm text-slate-500 md:text-base max-w-xl mx-auto">
            The visionary authors shaping the new literary landscape on Fable.
          </p>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          {displayWriters.map((writer) => {
            const isFollowing = following[writer._id];

            return (
              <Card
                key={writer._id}
                className="group flex flex-col items-center bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Avatar Wrapper Container */}
                <Card.Content className="p-0 flex flex-col items-center w-full">
                  <div className="relative mb-5 p-1 rounded-full bg-white ring-4 ring-slate-100 group-hover:ring-indigo-100 transition-all duration-300">
                    <Image
                      width={100}
                      height={100}
                      alt={writer.name}
                      src={writer.avatar}
                      name={writer.name}
                      className="w-24 h-24 text-large rounded-full object-cover"
                    />
                  </div>

                  {/* Profile Headers */}
                  <Card.Header className="flex-col p-0 text-center items-center">
                    <Card.Title className="text-xl font-bold text-slate-800 tracking-tight">
                      {writer.name}
                    </Card.Title>
                    <Card.Description className="text-xs italic text-slate-400 mt-1 font-medium">
                      {writer.specialty}
                    </Card.Description>
                  </Card.Header>

                  {/* Metrics Row Section */}
                  <div className="my-6 flex w-full max-w-[200px] items-center justify-center gap-6 border-y border-slate-100 py-3 text-center">
                    <div className="flex-1">
                      <p className="text-base font-bold text-slate-800">
                        {writer.booksCount}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mt-0.5 flex items-center justify-center gap-1">
                        <BookOpen size={10} /> Books
                      </p>
                    </div>

                    {/* Visual Vertical Divider */}
                    <div
                      className="h-8 w-[1px] bg-slate-200"
                      aria-hidden="true"
                    />

                    <div className="flex-1">
                      <p className="text-base font-bold text-slate-800">
                        {writer.readersCount}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mt-0.5 flex items-center justify-center gap-1">
                        <Users size={10} /> Readers
                      </p>
                    </div>
                  </div>
                </Card.Content>

                {/* Follow Button Action Trigger */}
                <Card.Footer className="w-full p-0 mt-2">
                  <Button
                    variant={isFollowing ? "solid" : "bordered"}
                    className={`w-full py-5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                      isFollowing
                        ? "bg-indigo-600 text-white border-transparent"
                        : "border-indigo-200 text-indigo-600 hover:bg-indigo-50/50"
                    }`}
                    onClick={() => toggleFollow(writer._id)}
                  >
                    {isFollowing ? (
                      <>
                        <UserCheck size={16} /> Following
                      </>
                    ) : (
                      <>
                        <UserPlus size={16} /> Follow Author
                      </>
                    )}
                  </Button>
                </Card.Footer>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
