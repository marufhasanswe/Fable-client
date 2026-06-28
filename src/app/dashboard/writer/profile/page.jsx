import ProfilePage from "@/components/dashboard/ProfilePage";
import { getBookmarks } from "@/lib/api/bookmarks";
import { getBooks } from "@/lib/api/books";
import { getUser } from "@/lib/core/session";
import React from "react";

const WriterProfilePage = async () => {
  const user = await getUser();
  const userId = user?.id;
  const bookmarkedBooks = await getBookmarks(userId);
  const books = await getBooks(userId);
  return (
    <div>
      <ProfilePage user={user} bookmarks={bookmarkedBooks} books={books} />
    </div>
  );
};

export default WriterProfilePage;
