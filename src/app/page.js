import EbookGenre from "@/components/homepage/EbookGenre";
import FeaturedEbooks from "@/components/homepage/FeaturedEbooks";
import HeroBanner from "@/components/homepage/HeroBanner";
import TopWriters from "@/components/homepage/TopWriters";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <FeaturedEbooks />
      <TopWriters />
      <EbookGenre />
    </div>
  );
}
