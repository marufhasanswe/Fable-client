import EbookGenre from "@/components/homepage/EbookGenre";
import FeaturedEbooks from "@/components/homepage/FeaturedEbooks";
import HeroBanner from "@/components/homepage/HeroBanner";
import TopWriters from "@/components/homepage/TopWriters";
import { getBooks } from "@/lib/api/books";

export default async function Home() {
  const books = await getBooks();
  return (
    <div>
      <HeroBanner />
      <FeaturedEbooks initialBooks={books} />
      <TopWriters />
      <EbookGenre />
    </div>
  );
}
