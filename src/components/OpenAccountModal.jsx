import React from "react";
const OpenAccountModal = ({ setShowModal }) => {
  return (
    <section className="fixed inset-0 bg-[#000]/50 z-40">
      <div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-[#f3f3f3] z-50 rounded-lg">
        <div className="max-w-lg p-4 ">
          <div className="flex justify-between mb-4">
            <p></p>
            <button
              className="text-xl md:text-3xl cursor-pointer font-semibold"
              onClick={() => setShowModal(false)}
            >
              x
            </button>
          </div>
          <div className="px-2">
            <h2 className="text-xl md:text-2xl mb-8 font-semibold ">
              Open your bank account in just 5 minutes
            </h2>
            <form className="px-4 md:px-8 space-y-4">
              <div className="md:flex items-center gap-6">
                <label
                  htmlFor="firstname"
                  className="block mb-2 md:mb-0 text-sm font-medium w-[78px]"
                >
                  First Name
                </label>
                <input
                  id="firstname"
                  type="text"
                  className=" text-sm rounded-lg w-full p-2.5 outline-none max-w-[300px] border border-[#ddd]"
                />
              </div>
              <div className="md:flex items-center gap-6">
                <label
                  htmlFor="lasttname"
                  className="block mb-2 md:mb-0 text-sm font-medium w-[78px]"
                >
                  Last Name
                </label>
                <input
                  id="lasttname"
                  type="text"
                  className=" text-sm rounded-lg w-full p-2.5 outline-none max-w-[300px] border border-[#ddd]"
                />
              </div>
              <div className="md:flex items-center gap-6">
                <label
                  htmlFor="email"
                  className="block mb-2 md:mb-0 text-sm font-medium w-[78px]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className=" text-sm rounded-lg w-full p-2.5 outline-none max-w-[300px] border border-[#ddd]"
                />
              </div>
              <div className="flex justify-center">
                <button className="bg-green hover:bg-green-dark  font-medium rounded-full text-sm px-5 py-2 text-center">
                  Next Step
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenAccountModal;
