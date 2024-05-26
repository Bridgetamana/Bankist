import React, { useState } from "react";

const Operations = () => {
  const tabs = [
    {
      id: 1,
      label: "Instant Transfer",
      heading: "Transfer money to anyone, instantly! No fees, no BS.",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      icon: (
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
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      ),
      color: "rgba(255, 165, 0, 0.3)",
      textColor: "#ffcb03",
    },
    {
      id: 2,
      label: "Instant Loans",
      heading: "No longer need your account? No problem! Close it instantly.",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      icon: (
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
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
      color: "rgba(94, 197, 118, 0.3)",
      textColor: "#5ec576",
    },
    {
      id: 3,
      label: "Instant Closing",
      heading: "No longer need your account? No problem! Close it instantly.",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      icon: (
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
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      ),
      color: "rgba(255, 88, 95, 0.3)",
      textColor: "#ff585f",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section
      className="px-16 py-12 lg:py-24 mx-auto border-t border-t-[#ddd]"
      id="operations"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className=" text-green text-xl font-semibold uppercase mb-4">
          Operations
        </h2>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium">
          Everything as simple as possible.
        </h2>
      </div>

      <div className="bg-[#fff] max-w-5xl mx-auto mt-24">
        <div className="flex md:justify-center text-sm text-center overflow-x-auto md:overflow-visible mx-4 md:mx:0">
          {tabs.map((tab) => (
            <span
              key={tab.id}
              className={`mr-4 md:text-lg px-5 py-2 rounded-full text-nowrap flex items-center gap-2 me-2 md:-translate-y-2/4 cursor-pointer mt-4 md:mt-0 ${
                activeTab === tab ? "active" : ""
              }`}
              style={{ backgroundColor: tab.textColor }}
              id={`${tab.label.toLowerCase()}-btn`}
              onClick={() => handleTabClick(tab)}
            >
              <p className="font-semibold hidden md:flex">{tab.id}</p>
              <p>{tab.label}</p>
            </span>
          ))}
        </div>

        <div id="tabcontents">
          <div className="md:grid grid-cols-[4rem,1fr] gap-x-12 gap-y-2 px-6 py-14 lg:px-14">
            <span
              className={`hidden md:flex w-16 h-16 rounded-full items-center justify-center`}
              style={{
                backgroundColor: activeTab.color,
                color: activeTab.textColor,
              }}
            >
              {activeTab.icon}
            </span>
            <span>
              <h2 className="text-2xl font-semibold mb-4">
                {activeTab.heading}
              </h2>
              <p className="text-[#666]">{activeTab.content}</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Operations;
