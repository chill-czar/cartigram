import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-primary mb-8 text-4xl text-[#1a1a1a] md:text-5xl">
            About Us
          </h2>

          <p className="font-secondary mx-auto mb-10 max-w-3xl text-sm leading-8 text-gray-500 md:mb-14 md:text-base md:leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
            risus in hendrerit gravida rutrum quisque. Tristique senectus et
            netus et malesuada fames ac turpis egestas. Libero id faucibus nisl
            tincidunt eget nullam. Nunc faucibus a pellentesque sit amet
            porttitor. Ut pharetra sit amet aliquam id diam. Blandit aliquam
            etiam erat velit scelerisque in.
          </p>

          <button className="font-secondary hover:bg-opacity-90 bg-[#2b2b2b] px-9 py-4 text-[10px] font-bold tracking-[0.2em] text-white uppercase">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
