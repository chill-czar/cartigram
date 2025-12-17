"use client";

import React from "react";

// --- Icons ---

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="mt-1 h-5 w-5 text-[#FFA07A]"
  >
    <path
      fillRule="evenodd"
      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
      clipRule="evenodd"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="mt-1 h-5 w-5 text-[#FFA07A]"
  >
    <path
      fillRule="evenodd"
      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
      clipRule="evenodd"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="mt-1 h-5 w-5 text-[#FFA07A]"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
      clipRule="evenodd"
    />
  </svg>
);

// --- Component ---

export function ContactSection() {
  return (
    <div className="w-full bg-white">
      {/* Contact Info & Form Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-32">
          {/* Left Column: Form */}
          <div className="flex flex-col gap-7">
            <div className="flex flex-col">
              <h1 className="font-primary text-4xl font-normal text-slate-900 md:text-5xl">
                Contact us
              </h1>
              <div className="mt-6 h-1 w-20 bg-[#FFA07A]"></div>
            </div>

            <form className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Name*"
                className="font-secondary w-full rounded-full border border-gray-200 px-6 py-3 text-sm text-slate-600 outline-none placeholder:text-gray-300 focus:border-gray-400"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="font-secondary w-full rounded-full border border-gray-200 px-6 py-3 text-sm text-slate-600 outline-none placeholder:text-gray-300 focus:border-gray-400"
              />
              <input
                type="email"
                placeholder="Email*"
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
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Info */}
          <div className="flex flex-col pt-2">
            {/* Address */}
            <div className="mb-8 border-b border-gray-100 pb-8">
              <h3 className="font-primary mb-4 text-lg font-bold text-slate-900">
                Address
              </h3>
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <LocationIcon />
                </div>
                <p className="font-secondary text-sm text-slate-500">
                  555 Main St
                  <br />
                  None, CA 00000
                </p>
              </div>
            </div>

            {/* Phones */}
            <div className="mb-8 border-b border-gray-100 pb-8">
              <h3 className="font-primary mb-4 text-lg font-bold text-slate-900">
                Phones
              </h3>
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <PhoneIcon />
                </div>
                <p className="font-secondary text-sm text-slate-500">
                  (800) 000-0000
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="font-primary mb-4 text-lg font-bold text-slate-900">
                Opening Hours
              </h3>
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <ClockIcon />
                </div>
                <div className="font-secondary space-y-2 text-sm text-slate-500">
                  <p>
                    <span className="text-slate-900">Sunday:</span> By
                    Appointment Only
                  </p>
                  <p>
                    <span className="text-slate-900">Monday:</span> 8:00 AM -
                    6:00 PM
                  </p>
                  <p>
                    <span className="text-slate-900">Tuesday:</span> 8:00 AM -
                    6:00 PM
                  </p>
                  <p>
                    <span className="text-slate-900">Wednesday:</span> 8:00 AM -
                    6:00 PM
                  </p>
                  <p>
                    <span className="text-slate-900">Thursday:</span> 8:00 AM -
                    6:00 PM
                  </p>
                  <p>
                    <span className="text-slate-900">Friday:</span> 8:00 AM -
                    6:00 PM
                  </p>
                  <p>
                    <span className="text-slate-900">Saturday:</span> Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-[400px] w-full bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-121.8456184!3d39.7284944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809cb6b911283155%3A0x9663f733af90757d!2sChico%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Salon location map"
        ></iframe>
      </div>

      {/* Key Contacts Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <h2 className="font-secondary mb-12 text-sm tracking-widest text-slate-500 uppercase">
          KEY CONTACTS
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-24">
          <div>
            <h3 className="font-primary mb-2 text-lg font-bold text-slate-900">
              Kelly Smith
            </h3>
            <p className="font-secondary text-sm leading-relaxed text-slate-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div>
            <h3 className="font-primary mb-2 text-lg font-bold text-slate-900">
              Steve Smith
            </h3>
            <p className="font-secondary text-sm leading-relaxed text-slate-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
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
