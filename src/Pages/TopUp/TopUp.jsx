import { useState } from "react";
import TopUpDataCard from "./TopUpDataCard";
import TopUpCallCard from "./TopUpCallCard";

const TopUp = () => {
  const tabs = [
    { label: "Data", value: "data", content: <TopUpDataCard /> },
    { label: "Data/Text/Call", value: "callText", content: <TopUpCallCard /> },
  ];

  const [activeTab, setActiveTab] = useState("data");

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 my-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 my-4 sm:my-5">
        <div className="bg-[#FDF8DB] p-1.5 sm:p-2 rounded-lg flex flex-col sm:flex-row sm:justify-between text-center items-center gap-2 sm:gap-0 w-full">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 sm:px-8 py-2 sm:py-3 mx-0.5 sm:mx-1 rounded-md text-xs sm:text-sm font-medium w-full transition-all duration-500 cursor-pointer ${
                activeTab === tab.value
                  ? "bg-white text-black shadow-sm"
                  : "text-black hover:bg-white/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      <div>{tabs.find((tab) => tab.value === activeTab)?.content}</div>
    </div>
  );
};

export default TopUp;