"use client";

import { useState, useEffect } from "react";
import { Button, Link } from "@heroui/react";
import { ChevronLeft, ChevronRight } from "@gravity-ui/icons";

const SLIDES = [
  {
    id: 1,
    tagline: "THE DIGITAL SCRIPTORIUM",
    title: "Discover & Read Original Ebooks",
    description:
      "A modern sanctuary for independent storytelling. Explore exclusive titles from emerging voices and established masters in a premium reading environment.",
    primaryBtnText: "Browse Ebooks",
    secondaryBtnText: "Become Writer",
    image: "/banner-img-01.png", // Replace with your cosmic swirl asset from image_e8dc2e.jpg
  },
  {
    id: 2,
    tagline: "EXPAND YOUR HORIZONS",
    title: "Meet Tomorrow's Best Authors",
    description:
      "Dive deep into unfiltered universes crafted by independent global creators. Join a reading experience tailored around pure literary imagination.",
    primaryBtnText: "Explore Authors",
    secondaryBtnText: "View Tiers",
    image: "/banner-img-02.png", // Replace with another story placeholder
  },
  {
    id: 3,
    tagline: "PREMIUM LITERARY REALM",
    title: "Your Library, Everywhere",
    description:
      "Access curated fantasy, sci-fi, and independent thrillers seamlessly synchronized across all your devices. Curate your collection without boundaries.",
    primaryBtnText: "Get Premium",
    secondaryBtnText: "Learn More",
    image: "/banner-img-03.png",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  // Optional: Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] py-16 lg:py-24">
      {/* Interactive Sliders Track */}
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {SLIDES.map((slide) => (
          <div
            key={slide.id}
            className="w-full shrink-0 px-6 md:px-12 lg:px-24"
          >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
              {/* Left Column: Typography Content */}
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold tracking-wider text-[#1e1b9b] uppercase mb-3">
                  {slide.tagline}
                </span>
                <h1 className="text-4xl font-black tracking-tight text-[#0f111a] sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
                  {slide.title}
                </h1>
                <p className="text-base leading-relaxed text-gray-500 max-w-xl mb-8">
                  {slide.description}
                </p>

                {/* Actions strictly matching image_e8dc2e.jpg */}
                <div className="flex flex-wrap gap-4">
                  <Button
                    as={Link}
                    href="#"
                    className="rounded-xl bg-[#1e1b9b] px-7 py-3 font-semibold text-white transition-all hover:bg-[#161373] shadow-md shadow-blue-900/10"
                  >
                    {slide.primaryBtnText}
                  </Button>
                  <Button
                    as={Link}
                    href="#"
                    className="rounded-xl bg-[#fcd34d] border border-amber-400 px-7 py-3 font-semibold text-gray-900 transition-all hover:bg-[#fbbf24]"
                  >
                    {slide.secondaryBtnText}
                  </Button>
                </div>
              </div>

              {/* Right Column: Dynamic Framed Image Card */}
              <div className="flex justify-center md:justify-end">
                <div className="relative aspect-square w-full max-w-[440px] overflow-hidden rounded-2xl bg-[#0b0f19] shadow-2xl shadow-black/30 transition-transform duration-500 hover:scale-[1.01]">
                  {/* Outer glowing vignette backdrop effect matching image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />

                  {/* Replace source path with your target cosmic illustrations */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500 relative">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Safe fallback styling if image doesn't exist yet
                        e.target.style.display = "none";
                      }}
                    />
                    {/* Simulated visual if local images aren't present yet */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-slate-900 to-black pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Manual Left/Right Nav Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-700 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:text-[#1e1b9b]"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-700 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:text-[#1e1b9b]"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Carousel Bottom Indicators Layout */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-[#1e1b9b]"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
