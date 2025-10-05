import { useState } from "react";
import Direct from "./Direct";
import QRCodeInstall from "./QRCodeInstall";
import ManualInstall from "./ManualInstall";

const Instructions = () => {
  const tabs = [
    { label: "Direct", value: "direct", content: <Direct /> },
    { label: "QR Code", value: "code", content: <QRCodeInstall /> },
    { label: "Manual", value: "manual", content: <ManualInstall /> },
  ];

  const [activeTab, setActiveTab] = useState("direct");

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 my-16">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:gap-4 mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">Installation Instructions</h1>
        <div className="bg-[#FDF8DB] p-1.5 sm:p-2 rounded-lg flex justify-between text-center items-center gap-2 sm:gap-0 w-full sm:w-auto mt-3 sm:mt-0">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 sm:px-8 py-2 sm:py-3 mx-0.5 sm:mx-1 rounded-md text-xs sm:text-sm font-medium w-full sm:w-auto transition-all duration-300 cursor-pointer ${
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

export default Instructions;