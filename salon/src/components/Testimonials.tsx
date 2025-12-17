"use client";

import React, { useState, useEffect } from "react";

const TESTIMONIALS = [
  {
    title: "Best Service",
    location: "Westminster, CA",
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "Frank Smith",
  },
  {
    title: "Amazing Experience",
    location: "Irvine, CA",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    author: "Sarah Johnson",
  },
  {
    title: "Highly Recommend",
    location: "Newport Beach, CA",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    author: "Michael Brown",
  },
];

const CAROUSEL_INTERVAL = 5000;

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, CAROUSEL_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="w-full bg-cover bg-center py-16 md:py-24"
      style={{
        backgroundImage: "url('/assets/images/testemonial-bg.jpg')",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-primary mb-8 text-3xl font-medium text-black md:text-4xl">
          Testimonials
        </h2>

        {/* Quote Icon */}
        <div className="mb-6 flex justify-center text-gray-300">
          <svg
            className="quote-body-mark opacity-50"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="66px"
            height="49px"
            viewBox="0 0 66 49"
            enableBackground="new 0 0 66 49"
            fill="currentColor"
          >
            <g></g>
            <path d="M36.903,49v-3.098c9.203-5.315,14.885-12.055,17.042-20.222c-2.335,1.524-4.459,2.288-6.37,2.288									c-3.186,0-5.875-1.29-8.071-3.876c-2.194-2.583-3.293-5.74-3.293-9.479c0-4.133,1.443-7.605,4.327-10.407									C43.425,1.405,46.973,0,51.185,0c4.213,0,7.735,1.784,10.566,5.352C64.585,8.919,66,13.359,66,18.669									c0,7.482-2.85,14.183-8.549,20.112C51.751,44.706,44.902,48.112,36.903,49z M0.69,49v-3.098									c9.205-5.315,14.887-12.055,17.044-20.222c-2.335,1.524-4.478,2.288-6.423,2.288c-3.152,0-5.823-1.29-8.02-3.876									C1.096,21.51,0,18.353,0,14.614c0-4.133,1.434-7.605,4.301-10.407C7.168,1.405,10.709,0,14.92,0c4.247,0,7.778,1.784,10.592,5.352									c2.814,3.567,4.223,8.007,4.223,13.317c0,7.482-2.843,14.183-8.524,20.112C15.53,44.706,8.69,48.112,0.69,49z"></path>
          </svg>
        </div>

        {/* Carousel Content */}
        <div className="relative mx-auto flex min-h-[250px] max-w-3xl flex-col justify-between">
          <div className="transition-opacity duration-500 ease-in-out">
            <h3 className="mb-1 text-xl font-medium text-black">
              {TESTIMONIALS[currentIndex]?.title}
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              {TESTIMONIALS[currentIndex]?.location}
            </p>

            {/* Stars */}
            <div className="mb-6 flex justify-center gap-1 text-xs text-black">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-gray-700 italic">
              {TESTIMONIALS[currentIndex]?.text}
            </p>

            <h4 className="mb-8 text-lg font-medium text-black">
              {TESTIMONIALS[currentIndex]?.author}
            </h4>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2.5 w-2.5 rounded-full border border-gray-400 transition-colors ${
                  index === currentIndex
                    ? "bg-gray-400"
                    : "bg-transparent hover:bg-gray-200"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
