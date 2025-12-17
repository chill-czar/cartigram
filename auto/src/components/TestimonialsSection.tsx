import React from "react";

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Heading */}
        <div className="mb-8">
          <h3 className="mb-2 text-3xl font-thin tracking-[0.3em] text-gray-400 uppercase md:text-4xl lg:text-5xl">
            HAPPY
          </h3>
          <h2 className="text-5xl font-bold tracking-wide text-[#2a2a2a] uppercase md:text-6xl lg:text-7xl">
            CUSTOMERS
          </h2>
        </div>

        {/* Testimonial */}
        <div className="mb-8">
          <h4 className="mb-2 text-lg font-bold tracking-wide text-[#2a2a2a] uppercase md:text-xl">
            GREAT JOB
          </h4>
          <p className="mb-4 text-sm tracking-wider text-gray-600 uppercase">
            JEANIE, IRVINE CA
          </p>

          {/* Star Rating */}
          <div className="mb-6 flex items-center justify-center gap-1">
            <span className="text-[#e41e1e]">★</span>
            <span className="text-[#e41e1e]">★</span>
            <span className="text-[#e41e1e]">★</span>
            <span className="text-[#e41e1e]">★</span>
            <span className="text-[#e41e1e]">★</span>
          </div>

          {/* Review Text */}
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-700 md:text-base">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here.
          </p>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2">
          <button
            className="h-2 w-2 rounded-full bg-[#e41e1e]"
            aria-label="Testimonial 1"
          />
          <button
            className="h-2 w-2 rounded-full bg-gray-300"
            aria-label="Testimonial 2"
          />
          <button
            className="h-2 w-2 rounded-full bg-gray-300"
            aria-label="Testimonial 3"
          />
        </div>
      </div>
    </section>
  );
}
