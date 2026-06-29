"use client";

import { useState, useEffect } from "react";
import { Button, Link } from "@heroui/react";
import { ChevronLeft, ChevronRight } from "@gravity-ui/icons";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    id: 1,
    tagline: "THE DIGITAL SCRIPTORIUM",
    title: "Discover & Read Original Ebooks",
    description:
      "A modern sanctuary for independent storytelling. Explore exclusive titles from emerging voices and established masters in a premium reading environment.",
    primaryBtnText: "Browse Ebooks",
    secondaryBtnText: "Become Writer",
    image: "/banner-img-01.png",
  },
  {
    id: 2,
    tagline: "EXPAND YOUR HORIZONS",
    title: "Meet Tomorrow's Best Authors",
    description:
      "Dive deep into unfiltered universes crafted by independent global creators. Join a reading experience tailored around pure literary imagination.",
    primaryBtnText: "Explore Authors",
    secondaryBtnText: "View Tiers",
    image: "/banner-img-02.png",
  },
  {
    id: 3,
    tagline: "PREMIUM LITERARY REALM",
    title: "Your Library, Everywhere",
    description:
      "Access curated fantasy, sci-fi, and independent thrillers seamlessly synchronized across all your devices.",
    primaryBtnText: "Get Premium",
    secondaryBtnText: "Learn More",
    image: "/banner-img-03.png",
  },
];

// animation variants

const textVariant = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const buttonVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4,
    },
  },
};

const imageVariant = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    rotate: -3,
  },

  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className=" relative w-full overflow-hidden bg-[#fafafa] py-16 lg:py-24 ">
      <div className=" mx-auto max-w-7xl px-6 md:px-12 lg:px-24 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className=" grid grid-cols-1 items-center gap-12 md:grid-cols-2 "
            initial="hidden"
            animate="visible"
            exit={{
              opacity: 0,
              x: -40,
            }}
          >
            {/* TEXT */}

            <div className="flex flex-col">
              <motion.span
                variants={textVariant}
                className=" text-xs font-bold tracking-wider uppercase text-[#1e1b9b] mb-3 "
              >
                {slide.tagline}
              </motion.span>

              <motion.h1
                variants={textVariant}
                className=" text-4xl font-black tracking-tight text-[#0f111a] sm:text-5xl lg:text-6xl leading-[1.1] mb-6 "
              >
                {slide.title}
              </motion.h1>

              <motion.p
                variants={textVariant}
                className=" max-w-xl text-gray-500 leading-relaxed mb-8 "
              >
                {slide.description}
              </motion.p>

              <motion.div
                variants={buttonVariant}
                className=" flex flex-wrap gap-4 "
              >
                <Button
                  as={Link}
                  href="#"
                  className=" rounded-xl bg-[#1e1b9b] px-7 py-3 font-semibold text-white "
                >
                  {slide.primaryBtnText}
                </Button>

                <Button
                  as={Link}
                  href="#"
                  className=" rounded-xl bg-[#fcd34d] border border-amber-400 px-7 py-3 font-semibold text-gray-900 "
                >
                  {slide.secondaryBtnText}
                </Button>
              </motion.div>
            </div>

            {/* IMAGE */}

            <motion.div
              variants={imageVariant}
              className=" flex justify-center md:justify-end "
            >
              <div className=" relative aspect-square w-full max-w-[440px] overflow-hidden rounded-2xl bg-black shadow-2xl ">
                <div className=" absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 " />

                <img
                  src={slide.image}
                  alt={slide.title}
                  className=" h-full w-full object-cover "
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* arrows */}

      <button
        onClick={handlePrev}
        className=" absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow "
      >
        <ChevronLeft />
      </button>

      <button
        onClick={handleNext}
        className=" absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow "
      >
        <ChevronRight />
      </button>

      {/* indicators */}

      <div className=" absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 ">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={` h-1.5 rounded-full transition-all ${current === index ? "w-8 bg-[#1e1b9b]" : "w-2 bg-gray-300"} `}
          />
        ))}
      </div>
    </section>
  );
}
