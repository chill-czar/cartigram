import Image from "next/image";
import React from "react";

const servicesTop = [
  {
    title: "Fresh Ingredients",
    image: "/assets/Images/service-1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea..",
  },
  {
    title: "Perfect Taste",
    image: "/assets/Images/service-2.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea..",
  },
];

const servicesBottom = [
  {
    title: "Fajitas",
    image: "/assets/Images/service-3.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea..",
  },
  {
    title: "Vegan Tortilla Wrap",
    image: "/assets/Images/service-4.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea..",
  },
  {
    title: "Catering",
    image: "/assets/Images/service-5.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea..",
  },
];

const Services = () => {
  return (
    <section className="w-full bg-white py-20">
      <h2 className="font-primary mb-12 text-center text-4xl font-bold text-[#1a1a1a] md:text-5xl">
        Featured Services
      </h2>

      <div className="container mx-auto px-4 md:px-8">
        {/* Top Row: 2 Items */}
        <div className="mx-auto mb-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {servicesTop.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-6 aspect-3/2 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="font-primary mb-4 text-2xl text-[#1a1a1a]">
                {service.title}
              </h3>
              <p className="font-secondary max-w-lg text-sm leading-relaxed text-gray-600">
                {service.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row: 3 Items */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
          {servicesBottom.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-6 aspect-square w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-primary mb-4 text-2xl text-[#1a1a1a]">
                {service.title}
              </h3>
              <p className="font-secondary max-w-xs text-sm leading-relaxed text-gray-600">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
