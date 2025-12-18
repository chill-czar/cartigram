"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HERO_IMAGES = [
  "/assets/images/hero-bg-1.jpg",
  "/assets/images/hero-bg-2.jpg",
  "/assets/images/hero-bg-3.jpg",
];

const HERO_TEXTS = [
  { line1: "HOUSE", line2: "RENOVATION" },
  { line1: "WE BUILD", line2: "YOUR DREAMS" },
  { line1: "HIGH QUALITY", line2: "WORK" },
];

const SLIDE_INTERVAL = 5000; // 5 seconds
const TEXT_FADE_OUT_DELAY = 200; // Start fading out text 200ms after image transition starts
const TEXT_FADE_IN_DELAY = 600; // Start fading in new text 600ms after image transition starts

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isTextTransitioning, setIsTextTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to start/restart the auto-play timer
  const startAutoPlay = () => {
    // Clear existing interval if any
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start new interval
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, SLIDE_INTERVAL);
  };

  // Initialize auto-play on mount
  useEffect(() => {
    startAutoPlay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Handle text transitions with staggered timing
  useEffect(() => {
    // Start text fade out
    const fadeOutTimer = setTimeout(() => {
      setIsTextTransitioning(true);
    }, TEXT_FADE_OUT_DELAY);

    // Update text index and fade in
    const fadeInTimer = setTimeout(() => {
      setTextIndex(currentIndex);
      setIsTextTransitioning(false);
    }, TEXT_FADE_IN_DELAY);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(fadeInTimer);
    };
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? HERO_IMAGES.length - 1 : prevIndex - 1,
    );
    startAutoPlay(); // Reset timer
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    startAutoPlay(); // Reset timer
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {HERO_IMAGES.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Hero background ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="px-8 text-center text-white">
          {/* Fixed height container to prevent CLS */}
          <div className="relative h-[160px] md:h-[240px] lg:h-[300px]">
            <h1
              className={`m-0 text-[80px] leading-[0.97] font-thin tracking-[-0.04em] text-white uppercase md:text-[120px] lg:text-[150px] ${
                isTextTransitioning
                  ? "opacity-0"
                  : "animate-[slideUpFadeIn_0.8s_ease-out] opacity-100"
              }`}
            >
              {HERO_TEXTS[textIndex]?.line1}
              <br />
              {HERO_TEXTS[textIndex]?.line2}
            </h1>
          </div>
        </div>
      </div>

      {/* Navigation Buttons Container */}
      <div className="absolute inset-0 z-10 flex items-center justify-between px-4 sm:px-6 lg:px-40">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="flex h-12 w-12 cursor-pointer items-center justify-center bg-[#333333] text-white transition-all duration-200 ease-in hover:bg-[#444444] sm:h-14 sm:w-14"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} strokeWidth={1.5} className="sm:h-8 sm:w-8" />
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="flex h-12 w-12 cursor-pointer items-center justify-center bg-[#333333] text-white transition-all duration-200 ease-in hover:bg-[#444444] sm:h-14 sm:w-14"
          aria-label="Next slide"
        >
          <ChevronRight size={28} strokeWidth={1.5} className="sm:h-8 sm:w-8" />
        </button>
      </div>
    </section>
  );
}
