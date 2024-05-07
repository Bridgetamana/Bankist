import Digital from "../assets/digital.jpg";
import Grow from "../assets/grow.jpg"
import Card from "../assets/card.jpg"

const Features = () => {
  return (
    <section
      className="px-16 py-12 lg:py-24 mx-auto border-t border-t-[#ddd]"
      id="features"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className=" text-green text-xl font-semibold uppercase mb-4">
          Features
        </h2>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium">
          Everything you need in a modern bank and more.
        </h2>
      </div>
      <div className="max-w-screen-xl mx-auto mt-24">
        <div className="md:flex md:gap-16 lg:gap-32 md:items-center mt-16 justify-center">
          <div className="mb-12 md:mb-0 max-w-[620px]">
            <img src={Digital} alt="A Computer" className="w-full" />
          </div>
          <span className="max-w-md">
            <span className="flex w-12 h-12 rounded-full bg-green/30 mb-4 items-center justify-center text-green">
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
                  d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
                />
              </svg>
            </span>
            <span>
              <h3 className="text-xl mb-4 font-semibold">100% digital bank</h3>
              <p className="text-[#666]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                blanditiis ea ex dolor quos exercitationem quibusdam
                consequatur,{" "}
              </p>
            </span>
          </span>
        </div>

        <div className="md:flex md:flex-row-reverse md:gap-16 lg:gap-32 md:items-center mt-16 justify-center">
          <div className="mb-12 md:mb-0 max-w-[620px]">
            <img src={Card} alt="A Debit Card" className="w-full" />
          </div>
          <span className="max-w-md">
            <span className="flex w-12 h-12 rounded-full bg-green/30 mb-4 items-center justify-center text-green">
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
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            </span>
            <span>
              <h3 className="text-xl mb-4 font-semibold">
                Free Debit Card Incuded
              </h3>
              <p className="text-[#666]">
                Quasi, fugit in cumque cupiditate reprehenderit debitis animi
                enim eveniet consequatur odit quam quos possimus assumenda dicta
                fuga inventore ab.{" "}
              </p>
            </span>
          </span>
        </div>

        <div className="md:flex md:gap-16 lg:gap-32 md:items-center mt-16 justify-center">
          <div className="mb-12 md:mb-0 max-w-[620px]">
            <img src={Grow} alt="A plant" className="w-full" />
          </div>
          <span className="max-w-md">
            <span className="flex w-12 h-12 rounded-full bg-green/30 mb-4 items-center justify-center text-green">
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
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
            </span>
            <span>
              <h3 className="text-xl mb-4 font-semibold">
                Watch your money grow
              </h3>
              <p className="text-[#666]">
                Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
                inventore ab? Nulla incidunt eius numquam sequi iste pariatur
                quibusdam!{" "}
              </p>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Features;
