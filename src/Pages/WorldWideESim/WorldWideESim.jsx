"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import banner from "../../assets/images/travelBG.jpg";
import AllCountries from "./AllCountries";
import Regions from "../HomePage/Regions/Regions";
import GlobalDataCall from "./GlobalDataCall/GlobalDataCall";

const WorldWideESim = () => {
  const tabs = [
    { label: "All Countries", value: "countries", content: <AllCountries /> },
    { label: "Regions", value: "regions", content: <Regions /> },
    { label: "Global eSIMs", value: "global", content: <GlobalDataCall /> },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") || "countries";

  const [activeTab, setActiveTab] = useState(initialTab);

  // sync state <-> url
  useEffect(() => {
    setSearchParams({ tab: activeTab });
  }, [activeTab, setSearchParams]);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Banner */}
      <div className="relative h-[500px] rounded-lg overflow-hidden my-14">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        ></div>
      </div>

      {/* Tabs */}
      <div className="bg-[#FDF8DB] p-2 rounded-lg mb-4 flex justify-between text-center items-center w-full">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-3 mx-1 rounded-md text-xm w-full cursor-pointer transition-all duration-500 ${
              activeTab === tab.value
                ? "bg-white text-black shadow-sm"
                : "text-black hover:bg-white/60"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>{tabs.find((tab) => tab.value === activeTab)?.content}</div>
    </div>
  );
};

export default WorldWideESim;
