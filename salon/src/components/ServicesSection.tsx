import Link from "next/link";

const serviceData = [
  {
    title: "Hair Cuts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque. Tristique senectus et netus et...",
  },
  {
    title: "Coloring",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque. Tristique senectus et netus et...",
  },
  {
    title: "Highlights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque. Tristique senectus et netus et...",
  },
  {
    title: "Hair Extensions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque. Tristique senectus et netus et...",
  },
  {
    title: "Makeup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque. Tristique senectus et netus et...",
  },
  {
    title: "Deep Conditioning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque. Tristique senectus et netus et...",
  },
];

export function ServicesSection() {
  return (
    <div className="font-secondary w-full bg-white">
      {/* Services Grid Section */}
      <div className="w-full bg-[#fcfcfc] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 border-t border-l border-gray-200 bg-white md:grid-cols-2 lg:grid-cols-3">
            {serviceData.map((service, index) => (
              <div
                key={index}
                className="group flex flex-col items-center border-r border-b border-gray-200 p-8 py-16 text-center transition-colors hover:bg-gray-50 md:p-12"
              >
                <h3 className="font-primary mb-6 text-2xl font-normal text-gray-900 md:text-3xl">
                  {service.title}
                </h3>
                <p className="max-w-sm leading-relaxed text-gray-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed right-8 bottom-8 z-50">
        <button
          className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#FFA07A] text-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
          aria-label="Scroll to top"
        >
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
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
