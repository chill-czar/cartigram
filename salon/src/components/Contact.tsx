import React from "react";

export function Contact() {
  return (
    <section className="flex w-full flex-col md:flex-row">
      {/* Map Section - Left Side */}
      <div className="h-[400px] w-full md:h-auto md:w-1/2 lg:w-3/5">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: "400px" }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12309.43285750059!2d-121.84852899999999!3d39.728494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8083281f6294d1f5%3A0xe51c278788417648!2sChico%2C%20CA!5e0!3m2!1sen!2sus!4v1689620000000!5m2!1sen!2sus"
          title="Google Map - Chico, CA"
          className="h-full w-full grayscale-[0.2]"
        ></iframe>
      </div>

      {/* Form Section - Right Side */}
      <div className="flex w-full flex-col justify-center bg-gray-50 px-8 py-16 md:w-1/2 md:p-16 lg:w-2/5 lg:p-24">
        <div className="mx-auto w-full max-w-md">
          <h2 className="font-primary mb-8 text-4xl text-black md:text-5xl">
            Get In Touch
          </h2>

          <form className="flex flex-col gap-4">
            {/* Name Input */}
            <div>
              <input
                type="text"
                placeholder="Name*"
                className="font-secondary w-full rounded-full border border-gray-200 bg-white px-6 py-4 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400 focus:ring-0"
                required
              />
            </div>

            {/* Phone Input */}
            <div>
              <input
                type="tel"
                placeholder="Phone"
                className="font-secondary w-full rounded-full border border-gray-200 bg-white px-6 py-4 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400 focus:ring-0"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email*"
                className="font-secondary w-full rounded-full border border-gray-200 bg-white px-6 py-4 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400 focus:ring-0"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <textarea
                placeholder="Message*"
                rows={4}
                className="font-secondary w-full resize-none rounded-3xl border border-gray-200 bg-white px-6 py-4 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400 focus:ring-0"
                required
              ></textarea>
            </div>

            {/* Recaptcha Mock */}
            <div className="mt-2 mb-4 flex h-[78px] w-[304px] items-center justify-between rounded border border-gray-300 bg-gray-50 p-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="group relative flex h-8 w-8 cursor-pointer items-center justify-center rounded border-2 border-gray-300 bg-white transition-colors hover:border-gray-400">
                  {/* Checkbox implementation */}
                </div>
                <span className="font-secondary text-sm text-black">
                  I'm not a robot
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 text-[10px] text-gray-500">
                <svg
                  className="h-8 w-8 opacity-70"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm0 44C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20-8.954 20-20 20z"
                    fill="#555"
                  />
                  <path
                    d="M24 8a16 16 0 1 0 0 32 16 16 0 0 0 0-32zm0 28a12 12 0 1 1 0-24 12 12 0 0 1 0 24z"
                    fill="#555"
                  />
                  <path d="M32 24a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" fill="#555" />
                </svg>
                <div className="text-center leading-tight">
                  <div className="text-[9px]">reCAPTCHA</div>
                  <div className="flex justify-center gap-1 text-[8px]">
                    <span className="cursor-pointer hover:underline">
                      Privacy
                    </span>
                    -
                    <span className="cursor-pointer hover:underline">
                      Terms
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Send Button */}
            <div>
              <button
                type="submit"
                className="font-secondary rounded-full border-2 border-black bg-transparent px-10 py-3 text-sm font-bold tracking-wide text-black uppercase transition-colors hover:bg-black hover:text-white"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
