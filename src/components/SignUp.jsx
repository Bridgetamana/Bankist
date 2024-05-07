import React, { useState } from 'react';
import OpenAccountModal from "./OpenAccountModal";

const SignUp = () => {
  
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  return (
    <section className="px-16 py-12 lg:py-24 mx-auto bg-[#37383d] text-center border-b border-b-[#444]">
      <h1 className="mb-8 text-[#fff] text-2xl md:text-4xl font-semibold max-w-screen-md mx-auto">
        The best day to join Bankist was one year ago. The second best is today!
      </h1>
      <button
        className="bg-green font-semibold p-5 rounded-full text-sm md:text-base"
        onClick={handleOpenModal}
      >
        Open your free account today!
      </button>
      {showModal && <OpenAccountModal setShowModal={setShowModal} />}{" "}
    </section>
  );
}

export default SignUp