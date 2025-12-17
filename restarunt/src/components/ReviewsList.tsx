"use client";

import { useState } from "react";

const REVIEWS_DATA = [
  {
    title: "Great Service",
    author: "Stacy, Irvine, CA",
    date: "6 year(s) ago",
    rating: 5,
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    title: "Nice Job",
    author: "Frank Smith, Huntington Beach, CA",
    date: "6 year(s) ago",
    rating: 5,
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usin... Read more",
  },
  {
    title: "Great Service",
    author: "Lisa Smith, Irvine, CA",
    date: "6 year(s) ago",
    rating: 5,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const INPUT_CLASSES =
  "w-full rounded bg-gray-100 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300";

export default function ReviewsList() {
  const [selectedRating, setSelectedRating] = useState(0);

  return (
    <section className="w-full bg-white py-40">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-32 lg:grid-cols-2">
          {/* Left Column: Reviews List */}
          <div className="flex flex-col space-y-12">
            {REVIEWS_DATA.map((review, index) => (
              <div
                key={index}
                className="flex flex-col border-b border-transparent pb-4"
              >
                <div className="mb-1 flex items-baseline justify-between">
                  <h3 className="text-lg font-bold text-gray-900">
                    {review.title}
                  </h3>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>

                <div className="mb-3 flex items-start justify-between">
                  <span className="text-xs text-gray-500">{review.author}</span>
                  {/* Stars */}
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-3 w-3 ${i < review.rating ? "text-red-800" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-gray-600">
                  {review.content.replace("... Read more", "")}
                  {review.content.includes("Read more") && (
                    <>
                      ...{" "}
                      <button className="font-medium text-red-800 hover:text-red-900">
                        Read more
                      </button>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Write a Review Form */}
          <div className="flex flex-col">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              Write a Review
            </h2>

            <div className="mb-6 flex items-center justify-between">
              <label className="text-sm text-gray-600">Select a star</label>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedRating(i + 1)}
                    className="focus:outline-none"
                  >
                    <svg
                      className={`h-5 w-5 ${
                        i < selectedRating ? "text-red-800" : "text-gray-400" // Hollow/Filled logic can be refined, image shows hollow outlined stars.
                        // Actually image shows hollow stars with red outline? Or just gray hollow?
                        // Let's stick to fill logic for UX, but maybe outline for unselected.
                      }`}
                      fill={i < selectedRating ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Title*"
                className={INPUT_CLASSES}
              />
              <input
                type="text"
                placeholder="Name*"
                className={INPUT_CLASSES}
              />
              <input
                type="text"
                placeholder="City, State"
                className={INPUT_CLASSES}
              />
              <textarea
                rows={5}
                placeholder="Message*"
                className={INPUT_CLASSES}
              />

              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#8B2323] px-8 py-3 text-xs font-bold tracking-widest text-white uppercase transition-colors hover:bg-[#6d1b1b]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
