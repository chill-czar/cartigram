import React from "react";
import Image from "next/image";

// Placeholder images from current assets and repeated to fill grid
// In a real app, these would be unique gallery images
const GALLERY_IMAGES = [
  { id: 1, src: "/assets/images/services-1.jpg", alt: "Auto mechanic working" },
  { id: 2, src: "/assets/images/services-2.jpg", alt: "Mechanic team" },
  { id: 3, src: "/assets/images/service-3.jpg", alt: "Car inspection" },
  { id: 4, src: "/assets/images/service-4.jpg", alt: "Mechanic thumbs up" },
  { id: 5, src: "/assets/images/service-5.jpg", alt: "Service consultation" },
  { id: 6, src: "/assets/images/service-6.jpg", alt: "Mechanic portrait" },
  { id: 7, src: "/assets/images/services-2.jpg", alt: "Speedometer close up" },
  { id: 8, src: "/assets/images/services-1.jpg", alt: "Engine detail" },
];

export default function GalleryGrid() {
  return (
    <section className="h-screen w-full bg-[#4a4a4a] py-16 md:py-20 lg:py-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-12 text-center text-white">
          <h2 className="text-4xl font-bold tracking-wide uppercase md:text-5xl lg:text-6xl">
            <span className="font-thin text-white/70">OUR</span> GALLERY
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden bg-gray-800"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Optional: Overlay on hover if desired, keeping simple per image */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
