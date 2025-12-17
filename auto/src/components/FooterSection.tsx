import React from "react";
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="relative w-full bg-[#4a4a4a] py-16 md:py-20 lg:py-24">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/assets/images/footer-bg.jpg')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center text-white">
        {/* Heading */}
        <div className="mb-8">
          <h3 className="mb-2 text-3xl font-thin tracking-[0.3em] text-white/80 uppercase md:text-4xl lg:text-5xl">
            OUR
          </h3>
          <h2 className="text-5xl font-bold tracking-wide text-white uppercase md:text-6xl lg:text-7xl">
            CONTACTS
          </h2>
        </div>

        {/* Address */}
        <p className="mb-6 text-sm tracking-wider text-white/90 uppercase">
          350 MAIN ST., IRVINE, CA 00000
        </p>

        {/* Phone */}
        <a
          href="tel:8000000000"
          className="mb-8 inline-flex items-center gap-2 text-2xl font-bold text-white hover:text-white/80 md:text-3xl"
        >
          <span className="text-xl">📞</span>
          (800) 000-0000
        </a>

        {/* Social Media Icons */}
        <div className="mb-12 flex items-center justify-center gap-3">
          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center bg-[#e41e1e] text-white hover:bg-[#c9302c]"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center bg-[#e41e1e] text-white hover:bg-[#c9302c]"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center bg-[#e41e1e] text-white hover:bg-[#c9302c]"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center bg-[#e41e1e] text-white hover:bg-[#c9302c]"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Footer Links */}
        <div className="mb-8 grid grid-cols-1 gap-8 text-sm md:grid-cols-3">
          {/* Column 1 */}
          <div>
            <h4 className="mb-3 font-bold tracking-wide uppercase">
              Auto Shop
            </h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:text-white">
                  A few words
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Best Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Auto Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="mb-3 font-bold tracking-wide uppercase">
              Body Shop
            </h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:text-white">
                  Collision Repair
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="mb-3 font-bold tracking-wide uppercase">
              Auto Repair Shop
            </h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:text-white">
                  Auto Batteries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-xs text-white/60">
          © 2025 AUTO SHOP. ALL RIGHTS RESERVED. PRIVACY POLICY
        </div>
      </div>
    </footer>
  );
}
