import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#110e0e] pt-16 pb-8 font-sans text-zinc-400">
      {/* Decorative dark wood texture fallback/background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 8px), linear-gradient(to bottom, #1a1a1a, #000)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4">
        {/* Address Top */}
        <div className="mb-10 flex justify-center">
          <p className="text-sm font-medium tracking-wide text-zinc-400">
            555 Main St None, CA 00003
          </p>
        </div>

        {/* Main Navigation */}
        <div className="mb-16 flex items-center justify-center gap-x-6 text-[13px] font-bold tracking-widest text-[#e8e6e3]">
          <Link href="#" className="transition-colors hover:text-white">
            MENU
          </Link>
          <span className="font-light text-zinc-600">|</span>
          <Link href="#" className="transition-colors hover:text-white">
            SERVICES
          </Link>
          <span className="font-light text-zinc-600">|</span>
          <Link href="#" className="transition-colors hover:text-white">
            GALLERY
          </Link>
          <span className="font-light text-zinc-600">|</span>
          <Link href="#" className="transition-colors hover:text-white">
            CONTACT US
          </Link>
        </div>

        {/* Links Grid */}
        <div className="mx-auto mb-24 grid max-w-3xl grid-cols-1 gap-x-4 gap-y-8 text-center md:grid-cols-3 md:text-left">
          {/* Column 1 */}
          <div className="flex flex-col gap-y-4 md:items-center">
            <Link
              href="#"
              className="text-xs tracking-wider text-zinc-400 transition-colors hover:text-white"
            >
              Restaurant
            </Link>
            <Link
              href="#"
              className="text-xs tracking-wider text-zinc-400 transition-colors hover:text-white"
            >
              Places To Eat
            </Link>
            <Link
              href="#"
              className="text-xs tracking-wider text-zinc-400 transition-colors hover:text-white"
            >
              Restaurants
            </Link>
            <Link
              href="#"
              className="text-xs tracking-wider text-zinc-400 transition-colors hover:text-white"
            >
              Mexican Food
            </Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-y-4 md:items-center">
            <Link
              href="#"
              className="text-xs tracking-wider text-zinc-400 transition-colors hover:text-white"
            >
              Catering
            </Link>
            <Link
              href="#"
              className="text-xs tracking-wider text-zinc-400 transition-colors hover:text-white"
            >
              Mexican Restaurant
            </Link>
            <Link
              href="#"
              className="text-xs tracking-wider text-zinc-400 transition-colors hover:text-white"
            >
              Catering Service
            </Link>
            <Link
              href="#"
              className="text-xs tracking-wider text-zinc-400 transition-colors hover:text-white"
            >
              Taco Bar
            </Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-y-4 md:items-center">
            <Link
              href="#"
              className="text-xs tracking-wider text-zinc-400 transition-colors hover:text-white"
            >
              Event Catering
            </Link>
            <Link
              href="#"
              className="text-xs tracking-wider text-zinc-400 transition-colors hover:text-white"
            >
              Taco Tuesday
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-center gap-y-2 text-[10px] tracking-wide text-zinc-500">
          <p>
            © 2025 Taco House All Rights Reserved.{" "}
            <Link href="#" className="hover:text-zinc-300">
              Privacy policy
            </Link>
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        aria-label="Back to top"
        className="absolute right-8 bottom-8 z-20 flex h-10 w-10 items-center justify-center rounded-sm bg-[#8b211a] text-white shadow-lg transition-colors hover:bg-[#a62820]"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>

      {/* Decorative Ingredients - Simulated overlays since images are not inspectable */}
      {/* Note: In a real implementation effectively matching the image, we would have transparent png assets for the peppers/spices. 
          Here we place divs to represent the structure or leave them implicit in the dark 'atmospheric' background we created. 
          Given instructions not to replace images with plain divs unless visually identical, and no placeholder assets provided,
          I will refrain from adding large colored blocks that would look broken. 
          The background texture is the primary visual element.
      */}
    </footer>
  );
}
