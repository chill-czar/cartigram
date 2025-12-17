"use client";

import React, { useState } from "react";

// --- Types & Data ---

type Review = {
  id: number;
  title: string;
  author: string;
  location: string;
  timeAgo: string;
  rating: number;
  content: string;
};

const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    title: "Great Service",
    author: "carry",
    location: "Huntington Beach, CA",
    timeAgo: "6 year(s) ago",
    rating: 5,
    content:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    title: "Best Service",
    author: "Frank Smith",
    location: "Westminster, CA",
    timeAgo: "6 year(s) ago",
    rating: 5,
    content:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    title: "Great Service",
    author: "Lisa Smith",
    location: "Irvine, CA",
    timeAgo: "6 year(s) ago",
    rating: 5,
    content:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

// --- Icons ---

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "#FFA07A" : "none"}
    stroke="#FFA07A"
    strokeWidth={1.5}
    className="h-4 w-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.557.557 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.557.557 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.557.557 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
);

const FormStarIcon = ({
  filled,
  onClick,
}: {
  filled: boolean;
  onClick?: () => void;
}) => (
  <button type="button" onClick={onClick} className="focus:outline-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? "none" : "none"} // In the image, form stars look outlined until selected, or maybe just outlined orange. Let's make them outlined.
      // Wait, looking closely at "Write a Review", the stars next to "Select a star" are outlined orange.
      // If selected they probably fill. The image shows them empty. Keep them outlined.
      stroke="#FFA07A"
      strokeWidth={1.5}
      className="h-6 w-6"
    >
      {filled && (
        <path
          fill="#FFA07A"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.557.557 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.557.557 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.557.557 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      )}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.557.557 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.557.557 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.557.557 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  </button>
);

// --- Component ---

export function ReviewsSection() {
  const [formRating, setFormRating] = useState(0);

  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column: Reviews List */}
          <div className="flex flex-col gap-12">
            {REVIEWS_DATA.map((review) => (
              <div key={review.id} className="flex flex-col gap-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-primary text-lg font-bold text-slate-900">
                      {review.title}
                    </h3>
                    <p className="font-secondary text-sm text-slate-800">
                      {review.author}, {review.location}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="font-secondary text-xs font-semibold text-slate-500">
                      {review.timeAgo}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} filled={i < review.rating} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="font-secondary pt-2 text-sm leading-relaxed text-slate-600">
                  {review.content}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Write a Review Form */}
          <div className="flex flex-col">
            <h2 className="font-primary mb-2 text-3xl font-bold text-slate-900">
              Write a Review
            </h2>

            <div className="mb-8 flex items-center gap-4">
              <span className="font-primary text-sm font-medium text-slate-900">
                Select a star
              </span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FormStarIcon
                    key={i}
                    filled={i < formRating}
                    onClick={() => setFormRating(i + 1)}
                  />
                ))}
              </div>
            </div>

            <form className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Title*"
                className="font-secondary w-full rounded-full border border-gray-200 px-6 py-3 text-sm text-slate-600 outline-none placeholder:text-gray-300 focus:border-gray-400"
              />
              <input
                type="text"
                placeholder="Name*"
                className="font-secondary w-full rounded-full border border-gray-200 px-6 py-3 text-sm text-slate-600 outline-none placeholder:text-gray-300 focus:border-gray-400"
              />
              <input
                type="text"
                placeholder="City, State"
                className="font-secondary w-full rounded-full border border-gray-200 px-6 py-3 text-sm text-slate-600 outline-none placeholder:text-gray-300 focus:border-gray-400"
              />
              <textarea
                placeholder="Message*"
                rows={5}
                className="font-secondary w-full rounded-2xl border border-gray-200 px-6 py-4 text-sm text-slate-600 outline-none placeholder:text-gray-300 focus:border-gray-400"
              />

              <div className="pt-2">
                <button
                  type="submit"
                  className="font-primary rounded-full border border-black bg-white px-10 py-3 text-sm font-bold tracking-widest text-slate-900 uppercase transition-colors hover:bg-black hover:text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Scroll to Top Button */}
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
