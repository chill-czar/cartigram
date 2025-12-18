"use client";

import React from "react";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#4a4a4a] py-16 text-white md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT COLUMN: Contact Info & Map */}
          <div>
            <h2 className="mb-8 text-center text-3xl font-bold tracking-wide uppercase md:text-left md:text-4xl lg:text-5xl">
              CONTACT <span className="font-thin text-white/70">INFO</span>
            </h2>

            {/* Google Map */}
            <div className="mb-12 h-[350px] w-full bg-gray-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106368.64734898495!2d-117.84661746533036!3d33.68412035272675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcde82907fe8bb%3A0xcb5e840134b29616!2sIrvine%2C%20CA!5e0!3m2!1sen!2sus!4v1709664585123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                className="contrast-[1.1] grayscale-20"
              ></iframe>
            </div>

            {/* Business Info Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* Address */}
              <div>
                <h3 className="mb-4 border-b border-gray-500 pb-2 text-lg text-white">
                  Business Address
                </h3>
                <div className="space-y-1 text-sm text-gray-300">
                  <p className="uppercase">555 MAIN ST</p>
                  <p className="uppercase">NONE, CA 00000</p>
                  <p className="mt-4">
                    Telephone:{" "}
                    <span className="ml-2 text-gray-400">(800) 000-0000</span>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div>
                <h3 className="mb-4 border-b border-gray-500 pb-2 text-lg text-white">
                  Business Hours
                </h3>
                <div className="space-y-2 text-xs text-white">
                  <div className="flex">
                    <span className="w-20 font-bold">Sunday:</span>
                    <span className="text-gray-300">By Appointment Only</span>
                  </div>
                  <div className="flex">
                    <span className="w-20 font-bold">Monday:</span>
                    <span className="text-gray-300">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex">
                    <span className="w-20 font-bold">Tuesday:</span>
                    <span className="text-gray-300">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex">
                    <span className="w-20 font-bold">Wednesday:</span>
                    <span className="text-gray-300">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex">
                    <span className="w-20 font-bold">Thursday:</span>
                    <span className="text-gray-300">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex">
                    <span className="w-20 font-bold">Friday:</span>
                    <span className="text-gray-300">12:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex">
                    <span className="w-20 font-bold">Saturday:</span>
                    <span className="text-gray-300">By Appointment Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div>
            <h2 className="mb-8 text-center text-3xl font-bold tracking-wide uppercase md:text-left md:text-4xl lg:text-5xl">
              CONTACT <span className="font-thin text-white/70">FORM</span>
            </h2>

            <form className="space-y-4">
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
                  placeholder="Phone"
                  className="w-full rounded-sm bg-[#5a5a5a] px-4 py-3 text-sm text-white placeholder-gray-400 transition-colors outline-none focus:bg-[#666666]"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email*"
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
                  className="border border-white bg-[#4a4a4a] px-10 py-3 text-sm font-bold tracking-wider text-white uppercase transition-all hover:bg-white hover:text-[#4a4a4a]"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Full Width Key Contacts */}
        <div className="mt-16 w-full">
          <h3 className="mb-4 text-lg text-white border-b">Key Contacts</h3>
          <div className="border border-white p-6">
            <p className="mb-2 text-sm font-bold">Kelly Smith</p>
            <p className="text-xs leading-relaxed text-gray-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
