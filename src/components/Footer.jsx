import React from 'react'
import Icon from "../assets/icon.png";
const Footer = () => {
  return (
    <section className=" px-16 py-12 lg:py-24 bg-[#37383d]">
      <ul className="flex flex-wrap justify-center mb-8 space-x-6 text-lg">
        <li>
          <a href="#" className="text-[#eee] hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-[#eee] hover:underline">
            Terms of Use
          </a>
        </li>
        <li>
          <a href="#" className="text-[#eee] hover:underline">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="text-[#eee] hover:underline">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="text-[#eee] hover:underline">
            Contact Us
          </a>
        </li>
      </ul>
      <div className="flex justify-center">
        <img src={Icon} alt="Bankist Logo" />
      </div>
    </section>
  );
}

export default Footer