"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled past viewport height (hero section)
      setShowButton(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`bg-primary fixed right-10 bottom-10 z-50 flex h-8 w-8 items-center justify-center text-white transition-all duration-500 ease-in-out hover:bg-[#b07000] sm:h-13 sm:w-13 ${
        showButton
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-30 opacity-0"
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={28} strokeWidth={1.5} className="sm:h-6 sm:w-6" />
    </button>
  );
}
