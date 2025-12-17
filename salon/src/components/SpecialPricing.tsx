"use client"
import React, { useState } from "react";

const PRICING_DATA = {
  "Blow Dry": [
    {
      name: "Braid",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      price: "$65",
    },
    {
      name: "Cosmo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      price: "$55",
    },
    {
      name: "Old Fashioned",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      price: "$45",
    },
    {
      name: "Straight Up",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      price: "$35",
    },
  ],
  Haircuts: [
    {
      name: "Formal Finishing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      price: "$85",
    },
    {
      name: "Hair Coloring",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      price: "$65",
    },
    {
      name: "Straightening",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      price: "$55",
    },
    {
      name: "Hair cut",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      price: "$45",
    },
  ],
};

type TabKey = keyof typeof PRICING_DATA;

export const SpecialPricing = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("Blow Dry");

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-7xl px-6">
        {/* Heading */}
        <h2 className="font-primary mb-12 text-center text-4xl text-slate-900 md:text-5xl">
          Special Pricing
        </h2>

        {/* Tabs */}
        <div className="mb-12 border-b border-gray-100">
          <div className="flex gap-8">
            {(Object.keys(PRICING_DATA) as TabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-primary px-6 py-2 pb-2 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-gray-50 text-slate-900"
                    : "text-gray-500 hover:text-slate-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing List */}
        <div className="flex flex-col">
          {PRICING_DATA[activeTab].map((item, index) => (
            <div
              key={item.name}
              className={`flex flex-col justify-between gap-4 py-8 md:flex-row md:items-start md:gap-8 ${
                index !== PRICING_DATA[activeTab].length - 1
                  ? "border-b border-gray-100"
                  : ""
              }`}
            >
              <div className="max-w-2xl">
                <h3 className="font-primary mb-2 text-xl font-medium text-slate-900">
                  {item.name}
                </h3>
                <p className="font-secondary text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
              <div className="shrink-0 pt-1">
                <span className="font-primary text-xl font-medium text-slate-900">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
