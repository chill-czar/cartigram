"use client";

import React, { useState } from "react";

const menuItems = [
  {
    category: "FAJITAS",
    items: [
      {
        price: "$20.99",
        title: "Fajitas",
        description:
          "Lorem ipsum dolor sit amet, eum ea quam ludus. Elit etiam nonumy ut ex nam, nostrud scriptum vix in neque nostrud simmes.",
      },
    ],
  },
  {
    category: "MARGARITAS",
    items: [
      {
        price: "$12.99",
        title: "Margaritas",
        description:
          "Lorem ipsum dolor sit amet, eum ea quam ludus. Elit etiam nonumy ut ex nam, nostrud scriptum vix in neque nostrud simmes.",
      },
    ],
  },
  {
    category: "SALADS",
    items: [
      {
        price: "$15.99",
        title: "Salads",
        description:
          "Lorem ipsum dolor sit amet, eum ea quam ludus. Elit etiam nonumy ut ex nam, nostrud scriptum vix in neque nostrud simmes.",
      },
    ],
  },
  {
    category: "STREET TACOS",
    items: [
      {
        price: "$18.99",
        title: "Street Tacos",
        description:
          "Lorem ipsum dolor sit amet, eum ea quam ludus. Elit etiam nonumy ut ex nam, nostrud scriptum vix in neque nostrud simmes.",
      },
    ],
  },
];

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="container mx-auto max-w-4xl px-4 md:px-8">
        <div className="bg-white shadow-lg">
          <div className="flex flex-wrap bg-[#3a3a3a]">
            {menuItems.map((menu, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`font-secondary min-w-[120px] flex-1 px-4 py-5 text-sm font-semibold tracking-wider transition-colors ${
                  activeTab === index
                    ? "bg-[#3a3a3a] text-white"
                    : "bg-[#3a3a3a] text-gray-400 hover:text-white"
                }`}
              >
                {menu.category}
              </button>
            ))}
          </div>

          <div className="p-12 md:p-16">
            {menuItems[activeTab]?.items.map((item, index) => (
              <div key={index}>
                <p className="font-secondary mb-3 text-lg font-semibold text-[#8b4513]">
                  {item.price}
                </p>
                <h3 className="font-primary mb-4 text-3xl text-[#1a1a1a]">
                  {item.title}
                </h3>
                <p className="font-secondary text-base leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuTabs;
