"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HERO_SLIDES = [
  {
    image: "/assets/Images/hero-bg-1.jpg",
    text: "HEARTY PITA TACOS",
  },
  {
    image: "/assets/Images/hero-bg-2.jpg",
    text: "FRESH INGREDIENTS",
  },
  {
    image: "/assets/Images/hero-bg-3.jpg",
    text: "TASTE THE DIFFERENCE",
  },
];

const SLIDE_DURATION = 5000;
const ANIMATION_EXIT_DURATION = 500;
const ANIMATION_ENTER_DELAY = 100; // Small gap between exit and enter
const LINE_ANIMATION_DELAY = 500; // Wait after text appears

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [isLineVisible, setIsLineVisible] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Sync text with image change (sequenced animation)
  useEffect(() => {
    // 1. Trigger Exit
    setIsTextVisible(false);
    setIsLineVisible(false);

    // 2. Wait for exit animation to complete
    const updateTimeout = setTimeout(() => {
      setTextIndex(currentIndex);

      // 3. Trigger Enter (with slight delay for smoothness)
      setTimeout(() => {
        setIsTextVisible(true);

        // 4. Trigger Line animation after text settles
        setTimeout(() => {
          setIsLineVisible(true);
        }, LINE_ANIMATION_DELAY);
      }, ANIMATION_ENTER_DELAY);
    }, ANIMATION_EXIT_DURATION);

    return () => clearTimeout(updateTimeout);
  }, [currentIndex]);

  // Slideshow timer
  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
    // Restart timer after interaction so it doesn't jump immediately
    startTimer();
  };

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
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
              alt="Hero Background"
              fill
              priority={index === 0}
              className={`object-cover transition-transform duration-10000 ease-linear ${
                isActive ? "scale-110" : "scale-100"
              }`}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10" />
          </div>
        );
      })}

      {/* Hero Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
        <div className="flex flex-col items-center overflow-hidden py-4">
          <h1
            className={`font-primary text-4xl leading-tight tracking-wide text-white drop-shadow-md transition-all duration-700 ease-out md:text-6xl lg:text-7xl ${
              isTextVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {HERO_SLIDES[textIndex]?.text}
          </h1>

          {/* Decorative Line */}
          <div
            className={`mt-4 h-1 bg-white transition-all duration-700 ease-out ${
              isLineVisible ? "w-24 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
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
