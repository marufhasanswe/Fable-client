import React from "react";
import Link from "next/link";
import { Card, CardFooter, Button } from "@heroui/react";
import {
  BookOpen,
  HelpCircle,
  Heart,
  Rocket,
  Castle,
  Ghost,
  User,
  Cpu,
  ArrowRight,
} from "lucide-react";

// Genre data matching your design layout and imagery style
const genres = [
  {
    id: "fiction",
    name: "Fiction",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600",
    icon: BookOpen,
    description: "Explore imaginative worlds and stories.",
  },
  {
    id: "mystery",
    name: "Mystery",
    image:
      "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=600",
    icon: HelpCircle,
    description: "Uncover secrets and solve suspenseful cases.",
  },
  {
    id: "romance",
    name: "Romance",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600",
    icon: Heart,
    description: "Fall in love with captivating passion journeys.",
  },
  {
    id: "sci-fi",
    name: "Sci-Fi",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
    icon: Rocket,
    description: "Journey into the future and deep space.",
  },
  {
    id: "fantasy",
    name: "Fantasy",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1194&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Castle,
    description: "Magic, mythical creatures, and epic quests.",
  },
  {
    id: "horror",
    name: "Horror",
    image:
      "https://images.unsplash.com/photo-1505635552518-3448ff116af3?auto=format&fit=crop&q=80&w=600",
    icon: Ghost,
    description: "Thrills, chills, and supernatural mysteries.",
  },
  {
    id: "biography",
    name: "Biography",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    icon: User,
    description: "Real lives and inspiring personal histories.",
  },
  {
    id: "technology",
    name: "Technology",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
    icon: Cpu,
    description: "Dive deep into code, AI, and innovations.",
  },
];

export default function EbookGenre() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 bg-gradient-to-b from-slate-50 to-white dark:from-zinc-950 dark:to-zinc-900 rounded-3xl my-8">
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-50 flex items-center gap-3">
            Browse Ebook Genres
            <ArrowRight className="w-6 h-6 text-slate-400 hidden sm:block" />
          </h2>
          <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">
            Click a genre to browse and filter ebook titles from our library.
          </p>
        </div>
        <Link href="/browse-books">
          <Button
            variant="bordered"
            radius="full"
            className="font-medium bg-amber-300 hover:bg-amber-400 dark:hover:bg-zinc-800 border-slate-200 dark:border-zinc-700 self-end sm:self-center"
          >
            View All
          </Button>
        </Link>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {genres.map((genre) => {
          const IconComponent = genre.icon;
          return (
            <Link
              key={genre.id}
              href={`/browse?genre=${genre.id}`}
              className="group block focus:outline-none"
            >
              <Card
                radius="lg"
                className="border-none h-48 w-full overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl dark:bg-zinc-800"
              >
                {/* Background Image with Dark Overlay tint matching the prompt UI */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${genre.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity group-hover:opacity-90" />

                {/* Top/Center Icon & Hover Content */}
                <div className="absolute top-4 right-4 text-white/70 group-hover:text-white transition-colors">
                  <IconComponent size={20} className="stroke-[1.5]" />
                </div>

                {/* Footer containing Text styling */}
                <CardFooter className="absolute bottom-0 left-0 right-0 z-10 justify-between before:bg-white/10 border-white/10 border-t bg-black/40 backdrop-blur-md py-3 px-4">
                  <div className="flex flex-col items-start text-left">
                    <p className="text-white font-semibold text-lg tracking-wide group-hover:text-sky-300 transition-colors">
                      {genre.name}
                    </p>
                    <p className="text-white/60 text-xs line-clamp-1 group-hover:line-clamp-none transition-all duration-300 mt-0.5">
                      {genre.description}
                    </p>
                  </div>
                  <div className="rounded-full bg-white/10 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight size={14} />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
