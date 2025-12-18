import React from "react";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="w-full">
      {/* Top Row: Engine Image + Services */}
      <div className="grid h-[70vh] grid-cols-1 lg:grid-cols-2">
        {/* Left: Engine Image */}
        <div className="relative h-full min-h-[400px] bg-black">
          <Image
            src="/assets/images/service-1.jpg"
            alt="Car Engine"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right: Best Services */}
        <div className="bg-primary flex flex-col items-center justify-center px-8 py-16 text-center text-white lg:px-16 lg:py-20">
          <h3 className="mb-2 text-3xl font-thin tracking-[0.3em] uppercase md:text-4xl lg:text-5xl">
            BEST
          </h3>
          <h2 className="mb-6 text-5xl font-bold tracking-wide uppercase md:text-6xl lg:text-7xl">
            SERVICES
          </h2>
          <p className="mb-8 max-w-md text-sm leading-relaxed md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu...
          </p>
          <button className="text-primary bg-white px-8 py-3 text-sm font-bold tracking-wider uppercase transition-colors hover:bg-gray-100 md:px-10 md:py-4">
            READ MORE
          </button>
        </div>
      </div>

      {/* Bottom Row: Pro Solutions + Speedometer */}
      <div className="grid h-[70vh] grid-cols-1 lg:grid-cols-2">
        {/* Left: Pro Solutions */}
        <div className="flex flex-col items-center justify-center bg-[#4a4a4a] px-8 py-16 text-center text-white lg:px-16 lg:py-20">
          <h3 className="mb-2 text-3xl font-thin tracking-[0.3em] uppercase md:text-4xl lg:text-5xl">
            PRO
          </h3>
          <h2 className="mb-6 text-5xl font-bold tracking-wide uppercase md:text-6xl lg:text-7xl">
            SOLUTIONS
          </h2>
          <p className="mb-8 max-w-md text-sm leading-relaxed md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu...
          </p>
          <button className="border-2 border-white bg-transparent px-8 py-3 text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-white hover:text-[#4a4a4a] md:px-10 md:py-4">
            READ MORE
          </button>
        </div>

        {/* Right: Speedometer Image */}
        <div className="relative h-full min-h-[400px] bg-black">
          <Image
            src="/assets/images/service-2.jpg"
            alt="Car Speedometer"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
