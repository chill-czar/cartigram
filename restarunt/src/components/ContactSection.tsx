"use client";

import React from "react";

export default function ContactSection() {
  return (
    <section className="w-full bg-white px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        {/* Top Info Grid */}
        <div className="mb-20 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          {/* Phone */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <svg
                className="h-10 w-10 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">(800) 800-0000</h3>
            <p className="text-xs text-gray-500">You can call us anytime</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <svg
                className="h-10 w-10 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">555 Main St</h3>
            <p className="font-serif text-lg">None, CA 00003</p>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <svg
                className="h-10 w-10 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
            <div className="text-left text-xs text-gray-800">
              <p className="mb-1">
                <span className="font-bold">Sunday:</span> Closed
              </p>
              <p className="mb-1">
                <span className="font-bold">Monday:</span> 8:00 AM - 10:00 PM
              </p>
              <p className="mb-1">
                <span className="font-bold">Tuesday:</span> 8:00 AM - 10:00 PM
              </p>
              <p className="mb-1">
                <span className="font-bold">Wednesday:</span> 8:00 AM - 10:00 PM
              </p>
              <p className="mb-1">
                <span className="font-bold">Thursday:</span> 8:00 AM - 10:00 PM
              </p>
              <p className="mb-1">
                <span className="font-bold">Friday:</span> 8:00 AM - 10:00 PM
              </p>
              <p className="mb-1">
                <span className="font-bold">Saturday:</span> Closed
              </p>
            </div>
          </div>
        </div>

        {/* Main Content: Map and Form */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: Map */}
          <div>
            <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">
              Contact Location
            </h2>
            <div className="h-[400px] w-full overflow-hidden bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106143.08589999999!2d-117.9145!3d33.7455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7d12b3b5e6b%3A0x2ef62f8418225cfa!2sSanta%20Ana%2C%20CA!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">
              Contact Form
            </h2>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Name*"
                className="w-full rounded bg-gray-100 px-4 py-4 text-sm text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-gray-300 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full rounded bg-gray-100 px-4 py-4 text-sm text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-gray-300 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full rounded bg-gray-100 px-4 py-4 text-sm text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-gray-300 focus:outline-none"
              />
              <textarea
                rows={5}
                placeholder="Message*"
                className="w-full rounded bg-gray-100 px-4 py-4 text-sm text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-gray-300 focus:outline-none"
              />

              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#8B0000] px-8 py-3 text-xs font-bold tracking-widest text-white uppercase transition-colors hover:bg-[#6d0000]"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer: Key Contacts */}
        <div className="mt-20 border-t border-gray-100 pt-10">
          <h3 className="mb-6 text-sm font-bold text-gray-600">Key Contacts</h3>
          <div className="text-xs text-gray-800">
            <h4 className="font-bold">Kelly Smith</h4>
            <p className="max-w-3xl leading-relaxed text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
