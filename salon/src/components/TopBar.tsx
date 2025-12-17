import React from "react";

export function TopBar() {
  return (
    <div className="w-full bg-[#EAB398] py-2.5 text-black/90">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 md:flex-row md:gap-0 md:px-8">
        <div className="flex items-center">
          <span className="text-xs font-semibold tracking-wide md:text-sm">
            (800) 000-0000
          </span>
        </div>

        <div className="flex items-center gap-4 md:gap-5">
          <SocialIcon label="Facebook">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </SocialIcon>

          <SocialIcon label="Instagram">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </SocialIcon>

          <SocialIcon label="Twitter">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5 4 1.7 8.1.3 9.3-1.4-.8 0-4.6-1.6-3-6 2 .9 2.5.9 3.5.7C16.4 12.8 14 6.8 14 6.8s2.5 1.5 4 1.2c-.2-2.1 2.3-3.2 2.3-3.2A4.2 4.2 0 0 1 22 4z" />
            {/* Note: Simple bird-like representation for Twitter/X as commonly found in icon sets like feather/lucide for "twitter" */}
          </SocialIcon>

          <SocialIcon label="YouTube">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
            <polygon
              points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
              fill="currentColor"
              className="text-[#EAB398] group-hover:text-white"
              style={{ stroke: "none" }}
            />
            {/* The filled polygon cutout effect */}
          </SocialIcon>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="group text-black/80 transition-colors duration-200 hover:text-black"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        {children}
      </svg>
    </a>
  );
}
