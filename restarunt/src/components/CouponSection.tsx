import Image from "next/image";
import Link from "next/link";

export default function CouponSection() {
  return (
    <section className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/Images/coupon-bg.jpg"
          alt="Dark textured background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay to match the reference image's dark aesthetic and ensure text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h2 className="mb-6 font-serif text-4xl tracking-wide md:text-5xl">
          Special Offer
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-xs leading-relaxed font-light tracking-widest uppercase opacity-90 md:text-sm">
          Our great pricing and services get even better when you include our
          coupons. Click here to discover what specials we proudly offer and
          take advantage of our exclusive deals while they last!
        </p>

        <Link
          href="#"
          className="inline-block bg-[#333333] px-8 py-4 text-xs font-bold tracking-widest text-white uppercase transition-colors duration-300 hover:bg-[#444444]"
        >
          Take a look now!
        </Link>
      </div>
    </section>
  );
}
