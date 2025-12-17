"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const SERVICES = [
  {
    id: 1,
    title: "BEST SERVICES",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    title: "PRO SOLUTIONS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "SERVICE THREE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    title: "SERVICE FOUR",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    title: "SERVICE FIVE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 6,
    title: "SERVICE SIX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function ServicesList() {
  const [openId, setOpenId] = useState<number | null>();

  const toggleService = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="h-screen w-full bg-[#4a4a4a] py-16 md:py-20 lg:py-40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-12 text-center text-white">
          <h2 className="text-4xl font-bold tracking-wide uppercase md:text-5xl lg:text-6xl">
            <span className="font-thin">OUR</span> SERVICES
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {SERVICES.map((service) => (
            <div key={service.id} className="w-full">
              {/* Header Item */}
              <button
                onClick={() => toggleService(service.id)}
                className={`group flex w-full items-stretch justify-between rounded-t-[6px] border border-white bg-transparent transition-all ${
                  openId === service.id ? "mb-0" : "mb-0"
                }`}
              >
                <div className="flex items-center px-6 py-4 text-left">
                  <span className="text-lg font-bold tracking-wide text-white uppercase md:text-xl">
                    {service.title}
                  </span>
                </div>
                {/* Toggle Button */}
                <div className="flex h-14 w-14 shrink-0 items-center rounded-t-[6px] justify-center bg-[#e41e1e] transition-colors md:h-16 md:w-16">
                  {openId === service.id ? (
                    <Minus size={24} className="text-white" strokeWidth={2} />
                  ) : (
                    <Plus size={24} className="text-white" strokeWidth={2} />
                  )}
                </div>
              </button>

              {/* Collapsible Content with Smooth Animation */}
              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                  openId === service.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="mt-1 border border-white bg-transparent p-6 text-white md:p-8">
                    <p className="text-sm leading-relaxed text-gray-200 md:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
