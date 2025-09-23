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
    <div className="container mx-auto my-16 p-4">
      <div className="">
        
        <div className="flex items-center gap-5 w-full my-5">
          <div className="bg-[#FDF8DB] p-2 rounded-lg flex justify-between text-center items-center w-full">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-10 py-3 mx-1 rounded-md text-xm transition-all duration-500 cursor-pointer w-full text-center ${
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
      </div>
      {/* Tab Content */}
      <div>{tabs.find((tab) => tab.value === activeTab)?.content}</div>

      
    </div>
  );
};

export default TopUp;
