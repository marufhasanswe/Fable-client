"use client";

import Link from "next/link";

import { Card, Avatar } from "@heroui/react";

import {
  Pencil,
  BookOpen,
  Bookmark,
  Mail,
  CalendarDays,
  Sparkles,
} from "lucide-react";

import { Person, Book } from "@gravity-ui/icons";

export default function ProfilePage({ user, bookmarks, books }) {
  //   const user = {
  //     name: "Maruf Hasan",
  //     email: "maruf@example.com",
  //     image: "https://i.pravatar.cc/300",
  //     role: "Writer",
  //     joinedDate: "January 2026",
  //     ebooks: 12,
  //     bookmarks: 35,
  //   };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Profile Header Card */}

        <Card
          className="
          bg-white
          border
          border-slate-100
          shadow-sm
          rounded-3xl
          overflow-hidden
          "
        >
          <Card.Content
            className="
            p-6
            md:p-8
            "
          >
            <div
              className="
              flex
              flex-col
              md:flex-row
              items-center
              md:items-start
              gap-6
              "
            >
              {/* Avatar */}

              <Avatar
                className="
                w-28
                h-28
                border-4
                border-white
                shadow-lg
                "
              >
                <Avatar.Image src={user.image} alt={user.name} />

                <Avatar.Fallback>{user.name.slice(0, 2)}</Avatar.Fallback>
              </Avatar>

              {/* User Info */}

              <div
                className="
                flex-1
                text-center
                md:text-left
                "
              >
                <div className="flex flex-col md:flex-row items-center gap-3">
                  <h1
                    className="
                    text-3xl
                    font-bold
                    text-slate-800
                    "
                  >
                    {user.name}
                  </h1>

                  <span
                    className="
                    inline-flex
                    items-center
                    gap-1
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
                    bg-indigo-50
                    text-indigo-600
                    "
                  >
                    <Sparkles className="w-3.5 h-3.5" />

                    {user.role}
                  </span>
                </div>

                <div
                  className="
                  mt-4
                  flex
                  flex-col
                  gap-2
                  text-sm
                  text-slate-500
                  "
                >
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <Mail className="w-4 h-4" />

                    {user.email}
                  </p>

                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <CalendarDays className="w-4 h-4" />
                    Member since {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Edit Button */}

              <Link
                href="/profile/edit"
                className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-xl
                bg-indigo-600
                text-white
                text-sm
                font-semibold
                hover:bg-indigo-700
                transition
                "
              >
                <Pencil className="w-4 h-4" />
                Edit Profile
              </Link>
            </div>
          </Card.Content>
        </Card>

        {/* Stats */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-5
          "
        >
          <Card
            className="
            rounded-2xl
            border
            border-slate-100
            shadow-sm
            hover:shadow-md
            transition
            "
          >
            <Card.Content className="p-5">
              <div className="flex items-center gap-4">
                <div
                  className="
                  p-3
                  rounded-xl
                  bg-indigo-50
                  text-indigo-600
                  "
                >
                  <BookOpen className="w-6 h-6" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">My Ebooks</p>

                  <h2 className="text-2xl font-bold text-slate-800">
                    {books.length}
                  </h2>
                </div>
              </div>
            </Card.Content>
          </Card>

          <Card
            className="
            rounded-2xl
            border
            border-slate-100
            shadow-sm
            hover:shadow-md
            transition
            "
          >
            <Card.Content className="p-5">
              <div className="flex items-center gap-4">
                <div
                  className="
                  p-3
                  rounded-xl
                  bg-pink-50
                  text-pink-600
                  "
                >
                  <Bookmark className="w-6 h-6" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Bookmarks</p>

                  <h2 className="text-2xl font-bold text-slate-800">
                    {bookmarks.length}
                  </h2>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>

        {/* Quick Actions */}

        <Card
          className="
          rounded-3xl
          border
          border-slate-100
          shadow-sm
          "
        >
          <Card.Header className="p-6">
            <Card.Title className="text-xl">Account Overview</Card.Title>

            <Card.Description>
              Manage your ebooks and saved collections
            </Card.Description>
          </Card.Header>

          <Card.Content className="p-6 pt-0">
            <div
              className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-4
              "
            >
              <Link
                href={`/dashboard/${user.role}/books`}
                className="
                flex
                items-center
                gap-3
                p-4
                rounded-2xl
                bg-slate-100
                hover:bg-indigo-100
                transition
                "
              >
                <Book className="w-5 h-5 text-indigo-600" />

                <span className="font-medium text-slate-700">
                  My Ebook Library
                </span>
              </Link>

              <Link
                href={`/dashboard/${user.role}/bookmarks`}
                className="
                flex
                items-center
                gap-3
                p-4
                rounded-2xl
                bg-slate-100
                hover:bg-indigo-100
                transition
                "
              >
                <Bookmark className="w-5 h-5 text-pink-600" />

                <span className="font-medium text-slate-700">
                  Saved Bookmarks
                </span>
              </Link>
            </div>
          </Card.Content>
        </Card>
      </div>
    </main>
  );
}
