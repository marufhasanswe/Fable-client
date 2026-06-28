import BookmarkPage from "@/components/dashboard/BookmarkPage";
import { getBookmarks } from "@/lib/api/bookmarks";
import { getUser } from "@/lib/core/session";
import React from "react";

const BookmarksPage = async () => {
  const user = await getUser();
  const userId = user?.id;
  const bookmarkedBooks = await getBookmarks(userId);
  return (
    <div>
      <BookmarkPage bookmarkedBooks={bookmarkedBooks} />
    </div>
  );
};

export default BookmarksPage;
