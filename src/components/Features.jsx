import Digital from "../assets/digital.jpg";
import Grow from "../assets/grow.jpg"
import Card from "../assets/card.jpg"

const Features = () => {
  return (
    <section className="px-16 py-12 lg:py-24 mx-auto border-t border-t-[#ddd]">
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
            <span className="flex w-10 h-10 rounded-full bg-green opacity-30 mb-4"></span>
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
            <span className="flex w-10 h-10 rounded-full bg-green opacity-30 mb-4"></span>
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
            <span className="flex w-10 h-10 rounded-full bg-green opacity-30 mb-4"></span>
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
