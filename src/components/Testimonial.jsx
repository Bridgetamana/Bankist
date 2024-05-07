import { sliderData } from "./Slider";
import { useState } from "react";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideToPrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sliderData.length - 1 : prevSlide - 1
    );
  };

  const slideToNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === sliderData.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <section
      className="px-16 py-12 lg:py-24 mx-auto border-t border-t-[#ddd]"
      id="testimonial"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="text-green text-xl font-semibold uppercase mb-4">
          Not sure yet??
        </h2>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium">
          Millions of Bankists are already making their lives simpler.
        </h2>
      </div>

      <div className="max-w-screen-md mx-auto mt-24 relative">
        {sliderData.map((testimonial, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? "block" : "hidden"
            }`}
          >
            <figure className="mx-auto max-w-screen-md flex flex-col items-center">
              <svg
                className="w-10 h-10 mx-auto mb-3 text-green"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <blockquote className="text-center">
                <h2 className="text-2xl font-medium mb-4">
                  {testimonial.testimonialHeader}
                </h2>
                <p className="text-[#666] mb-8 text-sm md:text-base">
                  {testimonial.testimonial}
                </p>
              </blockquote>
              <figcaption className="flex items-center mt-6 space-x-3">
                <img
                  className="w-12 h-12 rounded-full"
                  src={testimonial.image}
                  alt="profile picture"
                />
                <div>
                  <cite className="font-medium text-gray-900 block">
                    {testimonial.author}
                  </cite>
                  <cite className="text-sm text-gray-500">
                    {testimonial.location}
                  </cite>
                </div>
              </figcaption>
            </figure>
          </div>
        ))}
        <button
          onClick={slideToPrev}
          className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-[#fff] rounded-full cursor-pointer p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button
          onClick={slideToNext}
          className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-[#fff] rounded-full cursor-pointer p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
