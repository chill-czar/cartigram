import React from "react";
import Link from "next/link";

export default function AutoShopHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white bg-[#333333] text-white">
      <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 lg:hidden">
          <button
            className="flex flex-col justify-center gap-[5px] p-1"
            aria-label="Menu"
          >
            <span className="block h-[3px] w-6 bg-white"></span>
            <span className="block h-[3px] w-6 bg-white"></span>
            <span className="block h-[3px] w-6 bg-white"></span>
          </button>

          <span className="text-lg font-bold tracking-wide text-[#f0f0f0]">
            Auto Shop
          </span>
        </div>

        <div className="hidden w-full justify-between lg:flex">
          <div className="text-xl font-bold tracking-wide text-[#89bef0] lg:text-[#ffedd5] xl:text-[#f0f0f0]">
            <span className="text-[20px] font-bold text-[#f4f4f5]">
              Auto Shop
            </span>
          </div>

          <div className="flex items-center gap-8 text-[16px] font-bold tracking-wider text-white uppercase">
            <nav className="flex items-center gap-4">
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link href="/services" className="hover:text-gray-300">
                Services
              </Link>
              <Link href="/gallery" className="hover:text-gray-300">
                Gallery
              </Link>
              <Link href="/reviews" className="hover:text-gray-300">
                Reviews
              </Link>
              <Link href="/coupons" className="hover:text-gray-300">
                Coupons
              </Link>
              <Link href="/contact" className="hover:text-gray-300">
                Contact Us
              </Link>
            </nav>

            <a
              href="tel:8000000000"
              className="text-[22px] font-bold text-white hover:text-gray-300"
            >
              (800) 000-0000
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
