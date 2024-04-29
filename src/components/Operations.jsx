const Operations = () => {
  return (
    <section className="px-16 py-12 lg:py-24 mx-auto border-t border-t-[#ddd]">
      <div className="mx-auto max-w-2xl">
        <h2 className=" text-green text-xl font-semibold uppercase mb-4">
          Operations
        </h2>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium">
          Everything as simple as possible.
        </h2>
      </div>

      <div className="bg-[#fff] max-w-screen-md mx-auto mt-24">
        <div className="flex flex-wrap justify-center text-sm text-center">
          <span
            className=" bg-orange hover:bg-orange-dark mr-4 md:text-xl px-5 py-2 rounded-full flex items-center gap-2 me-2 -translate-y-2/4 active:-translate-y-3/4 cursor-pointer"
            id="transfer-btn"
          >
            <p className="font-semibold hidden md:flex">01</p>
            <p>Transfer</p>
          </span>
          <span
            className=" bg-green hover:bg-green-dark mr-4 md:text-xl px-5 py-2 rounded-full flex items-center gap-2 me-2 -translate-y-2/4 active:-translate-y-3/4 cursor-pointer"
            id="loans-btn"
          >
            <p className="font-semibold hidden md:flex">02</p>
            <p>Loans</p>
          </span>
          <span
            className=" bg-red hover:bg-red-dark mr-4 md:text-xl px-5 py-2 rounded-full flex items-center gap-2 me-2 -translate-y-2/4 active:-translate-y-3/4 cursor-pointer"
            id="closing-btn"
          >
            <p className="font-semibold hidden md:flex">03</p>
            <p>Closing</p>
          </span>
        </div>

        <div id="tabcontents">
          <div className="flex justify-center gap-12 px-6 pt-10 lg:px-12 pb-14">
            <span className="md:flex w-20 h-10 rounded-full bg-orange opacity-30 hidden"></span>
            <span>
              <h2 className="text-2xl font-semibold mb-4">
                Buy a home or make your dreams come through with instant loans
              </h2>
              <p className="text-[#666]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </span>
          </div>

          <div
            id="tabcontents"
            className="flex justify-center gap-12 px-6 pt-10 lg:px-12 pb-14 hidden "
          >
            <span className="md:flex w-20 h-10 rounded-full bg-green opacity-30 hidden"></span>
            <span>
              <h2 className="text-2xl font-semibold mb-4">
                No longer need your account? No problem! Close it instantly.
              </h2>
              <p className="text-[#666]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </span>
          </div>

          <div
            id="tabcontents"
            className="flex justify-center gap-12 px-6 pt-10 lg:px-12 pb-14 hidden"
          >
            <span className="md:flex w-20 h-10 rounded-full bg-red opacity-30 hidden"></span>
            <span>
              <h2 className="text-2xl font-semibold mb-4">
                No longer need your account? No problem! Close it instantly.
              </h2>
              <p className="text-[#666]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Operations