import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#3a3a3a] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Heading */}
        <div className="mb-8">
          <h3 className="mb-2 text-2xl font-thin tracking-[0.3em] text-white/60 uppercase md:text-3xl lg:text-4xl">
            A FEW WORDS
          </h3>
          <h2 className="text-4xl font-bold tracking-wide text-white uppercase md:text-5xl lg:text-6xl">
            ABOUT US
          </h2>
        </div>

        {/* Description */}
        <div className="mb-10">
          <p className="text-sm leading-relaxed text-white/90 md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
            risus in hendrerit gravida rutrum quisque. In elis a scelerisque et
            neque et malesuada fames ac turpis egestas. Libero id faucibus nisl
            tincidunt eget nullam. Nunc faucibus a pellentesque sit amet
            porttitor. Ut pharetra sit amet aliquam id diam. Blandit aliquam
            etiam erat velit scelerisque in dictum non consectetur. Quisque
            sagittis purus sit amet volutpat. Neque a forum vestibulum morbi
            blandit cursus risus at ultrices mi. Suspendisse ultrices gravida
            dictus fusce ut.
          </p>
        </div>

        {/* Button */}
        <div>
          <button className="bg-[#e41e1e] px-8 py-3 text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#c9302c] md:px-10 md:py-4 md:text-base">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
}
