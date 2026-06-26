import FeaturedEbooks from "@/components/homepage/FeaturedEbooks";
import HeroBanner from "@/components/homepage/HeroBanner";
import TopWriters from "@/components/homepage/TopWriters";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <FeaturedEbooks />
      <TopWriters />
    </div>
  );
}
