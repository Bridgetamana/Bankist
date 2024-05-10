// Header.jsx
import React, { useState } from "react";
import BankistLogo from "../assets/logo.png";
import Heroimg from "../assets/hero.png";
import OpenAccountModal from "./OpenAccountModal";
import {Link} from "react-scroll"

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };


  return (
    <header className="p-4">
      {/* NAV */}
      <nav className="Sticky z-20 top-0 lg:px-12 flex flex-wrap items-center justify-between">
        <a href="#">
          <img src={BankistLogo} className="h-6 md:h-14" alt="Bankist Logo" />
        </a>
        <div className="flex md:order-2 space-x-2 md:space-x-0">
          <button
            type="button"
            className="text-[#222] bg-green hover:bg-green-dark font-medium rounded-3xl text-sm md:text-base px-4 py-3 text-center"
            onClick={handleOpenModal}
          >
            Open Account
          </button>
          {showModal && <OpenAccountModal setShowModal={setShowModal} />}{" "}
          <button
            id="menu-toggle"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
            onClick={handleMenuToggle}
          >
            <span className="sr-only">Toggle menu</span>
            {showMenu ? (
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            showMenu ? "" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:bg-white text-lg group">
            <li>
              <Link
                to="features"
                smooth={true}
                className="block py-2 px-3 md:p-0 text-[#444] rounded cursor-pointer"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="operations"
                smooth={true}
                className="block py-2 px-3 md:p-0 text-[#444] rounded cursor-pointer"
              >
                Operations
              </Link>
            </li>
            <li>
              <Link
                to="testimonial"
                smooth={true}
                className="block py-2 px-3 md:p-0 text-[#444] rounded cursor-pointer"
              >
                Testimonial
              </Link>
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
