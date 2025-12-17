import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/50 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between px-6 py-4 lg:flex-row">
        {/* Logo */}
        <div className="mb-4 text-2xl font-bold tracking-tight lg:mb-0">
          Taco House
        </div>

        {/* Navigation & Contact */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold tracking-wider uppercase lg:gap-8">
          <Link href="#" className="transition-colors hover:text-gray-300">
            Home
          </Link>
          <Link href="#" className="transition-colors hover:text-gray-300">
            Services
          </Link>
          <Link href="#" className="transition-colors hover:text-gray-300">
            Menu
          </Link>
          <Link href="#" className="transition-colors hover:text-gray-300">
            Gallery
          </Link>
          <Link href="#" className="transition-colors hover:text-gray-300">
            Reviews
          </Link>
          <Link href="#" className="transition-colors hover:text-gray-300">
            Coupons
          </Link>
          <Link href="#" className="transition-colors hover:text-gray-300">
            Contact Us
          </Link>
          <span className="font-normal tracking-normal">(800) 800-0000</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
