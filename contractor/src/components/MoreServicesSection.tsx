import React from "react";
import Image from "next/image";

export default function MoreServicesSection() {
  const services = [
    {
      id: 1,
      title: "SERVICE THREE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...",
      image: "/assets/images/service-3.jpg",
    },
    {
      id: 2,
      title: "SERVICE FOUR",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...",
      image: "/assets/images/service-4.jpg",
    },
    {
      id: 3,
      title: "SERVICE FIVE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...",
      image: "/assets/images/service-5.jpg",
    },
    {
      id: 4,
      title: "SERVICE SIX",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...",
      image: "/assets/images/service-6.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#1a1a1a] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h3 className="mb-2 text-3xl font-thin tracking-[0.3em] text-white/60 uppercase md:text-4xl lg:text-5xl">
            MORE
          </h3>
          <h2 className="text-5xl font-bold tracking-wide text-white uppercase md:text-6xl lg:text-7xl">
            SERVICES
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col overflow-hidden sm:flex-row"
            >
              {/* Image */}
              <div className="relative h-48 w-full sm:h-auto sm:w-2/5">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 40vw"
                />
              </div>

              {/* Content */}
              <div className="bg-primary flex flex-col justify-center p-6 sm:w-3/5 lg:p-8">
                <h3 className="mb-3 text-xl font-bold tracking-wide text-white uppercase md:text-2xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/90 md:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
