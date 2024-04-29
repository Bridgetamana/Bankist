import User1 from "../assets/user-1.jpg";
import User2 from "../assets/user-2.jpg";
import User3 from "../assets/user-3.jpg";

const Testimonial = () => {
  return (
    <section className="px-16 py-12 lg:py-24 mx-auto border-t border-t-[#ddd]">
      <div className="mx-auto max-w-2xl">
        <h2 className=" text-green text-xl font-semibold uppercase mb-4">
          Not sure yet??
        </h2>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium">
          Millions of Bankists are already making their lifes simpler.
        </h2>
      </div>

      <div className="max-w-screen-md mx-auto mt-24 relative">
        <figure className=" mx-auto max-w-screen-md">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-green"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <h2 className="text-2xl font-medium mb-4">
              Finally free from old-school banks
            </h2>
            <p className="text-[#666] mb-8 text-sm md:text-base">
              Debitis, nihil sit minus suscipit magni aperiam vel tenetur
              incidunt commodi architecto numquam omnis nulla autem,
              necessitatibus blanditiis modi similique quidem. Odio aliquam
              culpa dicta beatae quod maiores ipsa minus consequatur error sunt,
              deleniti saepe aliquid quos inventore sequi. Necessitatibus id
              alias reiciendis, perferendis facere.
            </p>
          </blockquote>
          <figcaption className="flex items-center mt-6 space-x-3">
            <img
              className="w-12 h-12 rounded-full"
              src={User1}
              alt="profile picture"
            />
            <div>
              <cite className="font-medium text-gray-900 block">
                Aarav Lynn
              </cite>
              <cite className=" text-sm text-gray-500">
                Somewhere in the world
              </cite>
            </div>
          </figcaption>
        </figure>

        <figure className=" mx-auto max-w-screen-md hidden">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-green"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <h2 className="text-2xl font-medium mb-4">
              Finally free from old-school banks
            </h2>
            <p className="text-[#666] mb-8 text-sm md:text-base">
              Debitis, nihil sit minus suscipit magni aperiam vel tenetur
              incidunt commodi architecto numquam omnis nulla autem,
              necessitatibus blanditiis modi similique quidem. Odio aliquam
              culpa dicta beatae quod maiores ipsa minus consequatur error sunt,
              deleniti saepe aliquid quos inventore sequi. Necessitatibus id
              alias reiciendis, perferendis facere.
            </p>
          </blockquote>
          <figcaption className="flex items-center mt-6 space-x-3">
            <img
              className="w-12 h-12 rounded-full"
              src={User2}
              alt="profile picture"
            />
            <div>
              <cite className="font-medium text-gray-900 block">Jane Doe</cite>
              <cite className=" text-sm text-gray-500">
                Somewhere in the world
              </cite>
            </div>
          </figcaption>
        </figure>

        <figure className=" mx-auto max-w-screen-md hidden">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-green"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <h2 className="text-2xl font-medium mb-4">
              Finally free from old-school banks
            </h2>
            <p className="text-[#666] mb-8 text-sm md:text-base">
              Debitis, nihil sit minus suscipit magni aperiam vel tenetur
              incidunt commodi architecto numquam omnis nulla autem,
              necessitatibus blanditiis modi similique quidem. Odio aliquam
              culpa dicta beatae quod maiores ipsa minus consequatur error sunt,
              deleniti saepe aliquid quos inventore sequi. Necessitatibus id
              alias reiciendis, perferendis facere.
            </p>
          </blockquote>
          <figcaption className="flex items-center mt-6 space-x-3">
            <img
              className="w-12 h-12 rounded-full"
              src={User3}
              alt="profile picture"
            />
            <div>
              <cite className="font-medium text-gray-900 block">John Doe</cite>
              <cite className=" text-sm text-gray-500">
                Somewhere in the world
              </cite>
            </div>
          </figcaption>
        </figure>

        <button className="absolute top-1/2 -left-1/4 bg-[#fff] rounded-full cursor-pointer p-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 md:w-6 md:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>

        <button className="absolute top-1/2 -right-1/4 bg-[#fff] rounded-full cursor-pointer p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 md:w-6 md:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>

        <div className="flex justify-center mt-10 ">
          <button className="w-3 h-3 bg-[#b9b9b9] opacity-70 rounded-full mr-4"></button>
          <button className="w-3 h-3 bg-[#b9b9b9] opacity-70 rounded-full mr-4"></button>
          <button className="w-3 h-3 bg-[#b9b9b9] opacity-70 rounded-full mr-4"></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
