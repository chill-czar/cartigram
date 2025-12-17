"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const HERO_SLIDES = [
  { image: "/assets/Images/hero-bg-1.jpg" },
  { image: "/assets/Images/hero-bg-2.jpg" },
  { image: "/assets/Images/hero-bg-3.jpg" },
];

const SLIDE_DURATION = 5000;

export default function SubHero() {
  const pathname = usePathname();
  // Derive title from pathname: "/services" -> "SERVICES", "/contact-us" -> "CONTACT US"
  const pageName = pathname
    ? pathname.split("/").pop()?.replace(/-/g, " ").toUpperCase()
    : "PAGE";

  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Slideshow timer
  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, []);

  const startTimer = () => {
    clearTimer();
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
  };

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleDotClick = (index: number) => {
    if (index === currentIndex) return;
    clearTimer();
    setCurrentIndex(index);
    startTimer();
  };

  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      {/* Background Images */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.image}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
              isActive ? "z-0 opacity-100" : "-z-10 opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt="Background"
              fill
              priority={index === 0}
              className={`object-cover transition-transform duration-10000 ease-linear ${
                isActive ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        );
      })}

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center text-white">
        <h1 className="mb-2 font-serif text-5xl font-medium tracking-wide md:text-6xl">
          {pageName}
        </h1>
        <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase opacity-80">
          <span>HOME</span>
          <span className="h-1 w-1 rounded-full bg-white" />
          <span>{pageName}</span>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              index === currentIndex
                ? "bg-white"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
