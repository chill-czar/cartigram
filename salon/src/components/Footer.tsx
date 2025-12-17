import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full">
      {/* Top Section */}
      <div className="mx-auto max-w-[1200px] px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Opening Hours */}
          <div className="space-y-6">
            <h3 className="font-primary text-xl font-bold text-gray-900">
              Opening Hours
            </h3>
            <ul className="font-secondary space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <span className="w-24 shrink-0">Sunday:</span>
                <span>By Appointment Only</span>
              </li>
              <li className="flex items-start">
                <span className="w-24 shrink-0">Monday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-start">
                <span className="w-24 shrink-0">Tuesday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-start">
                <span className="w-24 shrink-0">Wednesday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-start">
                <span className="w-24 shrink-0">Thursday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-start">
                <span className="w-24 shrink-0">Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-start">
                <span className="w-24 shrink-0">Saturday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="font-primary text-xl font-bold text-gray-900">
              Contact Information
            </h3>
            <div className="font-secondary space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-[#E5A586]">
                  <MapPinIcon />
                </div>
                <div className="leading-relaxed">
                  555 MAIN ST,
                  <br />
                  NONE, CA 00000
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#E5A586]">
                  <PhoneIcon />
                </div>
                <div>(800) 000-0000</div>
              </div>
            </div>
          </div>

          {/* Keywords Column 1 */}
          <div className="space-y-6">
            <h3 className="font-primary text-xl font-bold text-gray-900">
              Keywords
            </h3>
            <ul className="font-secondary space-y-3 text-sm text-gray-400">
              <li>Salon</li>
              <li>Hair Salon</li>
              <li>Hair Cuts</li>
              <li>Kids Cuts</li>
            </ul>
          </div>

          {/* Keywords Column 2 */}
          <div className="space-y-6 lg:pt-13">
            <ul className="font-secondary space-y-3 text-sm text-gray-400">
              <li>Barber</li>
              <li>Keratin Hair Treatments</li>
              <li>Beauty Salon</li>
              <li>Brazilian blowout</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative bg-[#f9f9f9] py-8">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-4 px-4 text-center">
          {/* Brand & Social */}
          <div className="flex items-center gap-4">
            <span className="font-primary text-sm font-bold text-gray-900">
              Top Salon
            </span>
            <div className="flex gap-4">
              <SocialIconWrapper>
                <FacebookIcon />
              </SocialIconWrapper>
              <SocialIconWrapper>
                <InstagramIcon />
              </SocialIconWrapper>
              <SocialIconWrapper>
                <TwitterIcon />
              </SocialIconWrapper>
              <SocialIconWrapper>
                <YoutubeIcon />
              </SocialIconWrapper>
            </div>
          </div>

          {/* Copyright */}
          <div className="font-secondary mt-2 text-[10px] text-gray-500">
            © 2025 Top Salon All Rights Reserved.{" "}
            <Link href="#" className="hover:underline">
              Privacy policy
            </Link>
          </div>
        </div>

        {/* Back to top button */}
        <button
          className="absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center bg-[#E5A586] text-white transition-opacity hover:opacity-90 md:right-8 md:bottom-8"
          aria-label="Back to top"
        >
          <ChevronUpIcon />
        </button>
      </div>
    </footer>
  );
}

function SocialIconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="#"
      className="text-gray-900 transition-colors hover:text-[#E5A586]"
    >
      {children}
    </Link>
  );
}

/* Icons */

function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4">
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.956-2.971 3.594v.376h3.425l-.448 3.667h-2.977v7.981c-5.227 0-9.619-3.329-11.535-8.239-.773-1.996-.773-4.254-.001-6.249" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4">
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724a9.86 9.86 0 0 1-3.127 1.195 4.916 4.916 0 0 0-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419A9.72 9.72 0 0 1 0 19.54a13.9 13.9 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4">
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  );
}
