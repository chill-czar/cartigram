export default function TestimonialSection() {
  return (
    <section className="w-full bg-white py-30 text-center">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="mb-10 font-serif text-3xl font-medium text-gray-900 md:text-4xl">
          Happy Customers
        </h2>

        {/* Testimonial Content */}
        <div className="mx-auto max-w-2xl">
          <h3 className="mb-1 text-lg font-bold text-gray-800">
            Great Service
          </h3>
          <p className="mb-4 text-sm font-medium text-gray-800">
            Stacy, Irvine, CA
          </p>

          {/* Star Rating */}
          <div className="mb-6 flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-3 w-3 text-red-700"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Review Text */}
          <p className="mb-10 text-xs leading-relaxed text-gray-500 md:text-sm">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2">
            <button
              className="h-2 w-2 rounded-full bg-red-800"
              aria-label="Slide 1"
            />
            <button
              className="h-2 w-2 rounded-full bg-gray-300 hover:bg-gray-400"
              aria-label="Slide 2"
            />
            <button
              className="h-2 w-2 rounded-full bg-gray-300 hover:bg-gray-400"
              aria-label="Slide 3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
