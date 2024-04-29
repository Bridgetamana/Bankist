import BankistLogo from "../assets/logo.png";
import Heroimg from "../assets/hero.png";

const Header = () => {
  return (
    <header className="p-6">
      {/* NAV */}
      <nav className="Sticky z-20 top-0 lg:px-12 flex flex-wrap items-center justify-between">
        <a href="#">
          <img src={BankistLogo} className="h-8 md:h-16" alt="Bankist Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button
            type="button"
            className="text-[#222] bg-green hover:bg-green-dark font-medium rounded-3xl text-base px-6 py-3 text-center"
          >
            Open Account
          </button>
          <button
            id="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1 hidden"
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white text-lg">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-[#444] rounded"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-[#444] rounded"
              >
                Operations
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-[#444] rounded"
              >
                Testimonial
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero-Section */}
      <section className="px-16 py-12 lg:py-24 mx-auto max-w-screen-2xl">
        <div className="flex items-center gap-24 justify-center">
          <div>
            <span className="text-2xl md:text-6xl font-bold flex-1">
              <h1 className="flex">
                When{" "}
                <p className=" opacity-70 scale-x-105 scale-y-110 translate-x-4 -skew-x-6 p-2 bg-green w-32 md:w-72">
                  banking
                </p>{" "}
              </h1>
              <h1>
                meets{" "}
                <p className=" opacity-70 scale-x-105 scale-y-110 -skew-x-6 p-2 bg-green w-40 md:w-[24rem] mt-3">
                  minimalist
                </p>
              </h1>
            </span>
            <p className="mt-4 text-xl font-medium">
              A simpler banking experience for a simpler life
            </p>
            `{" "}
            <span className="text-green text-lg border-b-2 border-b-green pb-2 cursor-pointer flex items-center w-32 mt-4 justify-center">
              <a href="#">Learn more</a>
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
                  d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                />
              </svg>
            </span>
          </div>
          `{" "}
          <div className="hidden lg:flex max-w-xl">
            <img
              src={Heroimg}
              alt="A computer and a bank note"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;