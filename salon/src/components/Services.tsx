"use client";

import React, { useState, useEffect } from "react";

const SERVICES = [
  {
    title: "Hair Cuts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    title: "Coloring",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    title: "Highlights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    title: "Hair Extensions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
];

const IMAGES = [
  "/assets/images/service-1.jpg",
  "/assets/images/service-2.jpg",
  "/assets/images/service-3.jpg",
  "/assets/images/service-4.jpg",
];

const CAROUSEL_INTERVAL = 4000;

export function Services() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
    }, CAROUSEL_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex min-h-[500px] w-full flex-col md:flex-row">
      {/* Left Side: 2x2 Grid */}
      <div className="w-full bg-[#F9F9F9] md:w-1/2">
        <div className="grid h-full grid-cols-1 md:grid-cols-2">
          {SERVICES.map((service, index) => {
            // Determine border classes for "plus" shape (inner borders only)
            // Desktop (2 cols):
            // 0 (TL): Bottom + Right
            // 1 (TR): Bottom
            // 2 (BL): Right
            // 3 (BR): None
            // Mobile (1 col):
            // All except last have Bottom border for separation.
            let borderClasses = "";
            if (index === 0)
              borderClasses = "border-b md:border-r border-gray-200";
            else if (index === 1)
              borderClasses = "border-b md:border-r-0 border-gray-200";
            else if (index === 2)
              borderClasses =
                "border-b md:border-b-0 md:border-r border-gray-200";
            else borderClasses = ""; // Index 3: No borders

            return (
              <div
                key={service.title}
                className={`flex flex-col items-center justify-center bg-[#F9F9F9] p-8 text-center ${borderClasses}`}
              >
                <h3 className="font-primary mb-4 text-xl font-medium text-black md:text-2xl">
                  {service.title}
                </h3>
                <p className="font-secondary max-w-xs text-sm leading-relaxed text-gray-600 md:text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Side: Image Slideshow */}
      <div className="relative min-h-[400px] w-full overflow-hidden bg-gray-200 md:min-h-auto md:w-1/2">
        {IMAGES.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${src}')` }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
