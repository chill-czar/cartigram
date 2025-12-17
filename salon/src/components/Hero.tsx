"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

const SLIDES = [
  {
    image: "/assets/images/hero-bg-1.jpg",
    title: "MODERN HAIR SALON",
  },
  {
    image: "/assets/images/hero-bg-2.jpg",
    title: "PROFESSIONAL STYLIST",
  },
  {
    image: "/assets/images/hero-bg-3.jpg",
    title: "CREATING BEAUTY",
  },
];

const AUTO_PLAY_INTERVAL = 6000; // Increased interval slightly to accommodate slower transitions
const TEXT_DELAY = 1000; // Increased delay to allow exit animation to complete

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedTextIndex, setDisplayedTextIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Sync text with slide change with delay
  useEffect(() => {
    if (currentSlide !== displayedTextIndex) {
      setIsTextVisible(false);
      const timeout = setTimeout(() => {
        setDisplayedTextIndex(currentSlide);
        setIsTextVisible(true);
      }, TEXT_DELAY);
      return () => clearTimeout(timeout);
    }
  }, [currentSlide, displayedTextIndex]);

  // Slideshow timer
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_PLAY_INTERVAL);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleDotClick = (index: number) => {
    if (index === currentSlide) return;
    setCurrentSlide(index);
    startTimer(); // Reset timer on manual interaction
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden bg-gray-900 md:h-[78dvh]">
      {/* Background Slides */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        >
          {/* Image with subtle zoom effect */}
          <div
            className={`h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-6000 ease-out ${
              index === currentSlide ? "scale-105" : "scale-100"
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          {/* Dark Overlay for text readability consistency across images */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      <div className="relative z-20 container mx-auto flex h-full items-center px-4 md:px-8">
        {/* Main Text Content */}
        <div className="max-w-xl">
          <div className="overflow-hidden py-2">
            <h1
              className={`font-primary text-3xl font-medium tracking-wide text-white uppercase drop-shadow-md transition-all duration-1000 ease-in-out md:text-5xl lg:text-6xl ${
                isTextVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
            >
              {SLIDES[displayedTextIndex]?.title}
            </h1>
          </div>
          {/* Decorative Line */}
          <div
            className={`mt-6 h-1 bg-[#EAB398] transition-[width] duration-700 ease-out ${
              isTextVisible ? "w-20 delay-1000" : "w-0 delay-0"
            }`}
          ></div>
        </div>

        {/* Carousel/Navigation Dots */}
        <div className="absolute top-1/2 right-4 flex -translate-y-1/2 flex-col gap-3 md:right-8">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "scale-110 bg-[#EAB398] shadow-sm"
                  : "border border-white/60 bg-transparent hover:bg-white/20"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
