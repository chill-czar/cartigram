import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="w-full bg-[#4a4a4a] pb-16 md:pb-20 lg:pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-12 text-center text-white">
          <h2 className="text-4xl font-bold tracking-wide uppercase md:text-5xl lg:text-6xl">
            OUR <span className="font-thin text-white/70">VIDEO</span>
          </h2>
        </div>

        {/* Video Placeholder */}
        <div className="relative aspect-video w-full overflow-hidden bg-gray-800 shadow-2xl">
          {/* Background Image / Thumbnail */}
          <Image
            src="/assets/images/services-1.jpg" // Using as placeholder
            alt="Video Thumbnail"
            fill
            className="object-cover opacity-80"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30">
            {/* Play Button */}
            <button
              className="hover:bg-primary flex h-16 w-16 items-center justify-center bg-[#333333]/80 text-white transition-all hover:scale-110 sm:h-20 sm:w-20"
              aria-label="Play Video"
            >
              <Play size={32} fill="white" className="ml-1 sm:h-10 sm:w-10" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
