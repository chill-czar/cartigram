"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";

// Mock data based on the image
const REVIEWS = [
  {
    id: 1,
    title: "Great Job",
    name: "Jeanie",
    location: "Irvine Ca",
    date: "6 year(s) ago",
    rating: 5,
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 2,
    title: "Loved It",
    name: "Francis",
    location: "Huntington Beach, Ca",
    date: "6 year(s) ago",
    rating: 5,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    title: "Great Job",
    name: "Mandy Jones",
    location: "Irvine Ca",
    date: "6 year(s) ago",
    rating: 5,
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
];

export default function ReviewsList() {
  const [rating, setRating] = useState(0);

  return (
    <section className="h-screen w-full bg-[#4a4a4a] py-16 md:py-20 lg:py-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main Heading */}
        <div className="mb-16 text-center text-white">
          <h2 className="text-4xl font-bold tracking-wide uppercase md:text-5xl lg:text-6xl">
            <span className="font-thin text-white/70">CUSTOMER</span> REVIEWS
          </h2>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* LEFT COLUMN: Reviews List */}
          <div className="flex-1 space-y-8">
            {REVIEWS.map((review, index) => (
              <div
                key={review.id}
                className={`pb-8 ${
                  index !== REVIEWS.length - 1 ? "border-b border-white/20" : ""
                }`}
              >
                {/* Review Header */}
                <div className="mb-1 flex items-baseline justify-between text-white">
                  <h3 className="text-lg font-bold">{review.title}</h3>
                  <span className="text-sm text-gray-400">{review.date}</span>
                </div>

                {/* Name & Location + Stars */}
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm text-gray-300">
                    {review.name}, {review.location}
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        fill={i < review.rating ? "white" : "none"}
                        className="text-white"
                      />
                    ))}
                  </div>
                </div>

                {/* Review Content */}
                <p className="text-sm leading-relaxed text-gray-300">
                  {review.content}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: Write a Review Form */}
          <div className="flex-1">
            <h3 className="mb-1 text-2xl font-normal text-white">
              Write a Review
            </h3>

            {/* Star Selection */}
            <div className="mb-6 flex items-center justify-between gap-4">
              <span className="text-sm text-gray-400">Select a star</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      size={18}
                      fill={star <= rating ? "white" : "none"}
                      className="text-white"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Title*"
                  className="w-full rounded-sm bg-[#5a5a5a] px-4 py-3 text-sm text-white placeholder-gray-400 transition-colors outline-none focus:bg-[#666666]"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full rounded-sm bg-[#5a5a5a] px-4 py-3 text-sm text-white placeholder-gray-400 transition-colors outline-none focus:bg-[#666666]"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="City, State"
                  className="w-full rounded-sm bg-[#5a5a5a] px-4 py-3 text-sm text-white placeholder-gray-400 transition-colors outline-none focus:bg-[#666666]"
                />
              </div>

              <div>
                <textarea
                  rows={6}
                  placeholder="Message*"
                  className="w-full rounded-sm bg-[#5a5a5a] px-4 py-3 text-sm text-white placeholder-gray-400 transition-colors outline-none focus:bg-[#666666]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="border-[1.5px] border-white bg-transparent px-10 py-3 text-sm font-bold tracking-wider text-white transition-all hover:bg-white hover:text-[#4a4a4a]"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
