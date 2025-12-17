"use client";

import React from "react";

const GALLERY_IMAGES = [
  "/assets/images/gallery-1.jpg",
  "/assets/images/gallery-2.jpg",
  "/assets/images/gallery-3.jpg",
  "/assets/images/gallery-4.jpg",
  "/assets/images/gallery-5.jpg",
  "/assets/images/gallery-6.jpg",
  "/assets/images/gallery-7.jpg",
  "/assets/images/gallery-8.jpg",
];

const PlayIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-8 w-8 text-white md:h-10 md:w-10"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

export function GallerySection() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-white p-30">
      {/* Gallery Grid Section */}
      <section className="max-w-6xl">
        {/* We use a grid that stacks on mobile and becomes 4 columns on desktop to match the reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {GALLERY_IMAGES.map((src, index) => (
            <div
              key={index}
              className="relative aspect-4/3 w-full overflow-hidden"
            >
              {/* Using standard img for local assets to ensure compatibility without config changes */}
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-primary mb-12 text-4xl font-normal text-slate-900 md:text-5xl">
            Our Video
          </h2>

          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
              <img
                src="/assets/images/gallery-video-bg.jpg"
                alt="Video background"
                className="h-full w-full object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="flex h-16 w-16 items-center justify-center bg-black/60 transition-transform hover:scale-110 hover:bg-black/80 md:h-20 md:w-20"
                  aria-label="Play video"
                >
                  <PlayIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button - Visible in the bottom right of the reference image */}
      <div className="fixed right-8 bottom-8 z-40 hidden md:block">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#FFA07A] text-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
