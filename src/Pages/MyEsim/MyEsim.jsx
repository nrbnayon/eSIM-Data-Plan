import { Link, useSearchParams } from "react-router-dom";
import banner from "../../assets/images/myEsim.svg";
import { useState, useEffect } from "react";
import CurrentESIMs from "./CurrentESIMs";
import ArchivedESIMs from "./ArchivedESIMs";

const MyEsim = () => {
  const tabs = [
    { label: "Current eSIMs", value: "current", content: <CurrentESIMs /> },
    { label: "Archived eSIMs", value: "archived", content: <ArchivedESIMs /> },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") || "current";
  const [activeTab, setActiveTab] = useState(initialTab);

  const ActiveOffer = true; // Set to false to test the image/text section

  // Sync tab <-> URL query
  useEffect(() => {
    setSearchParams({ tab: activeTab });
  }, [activeTab, setSearchParams]);

  return (
    <div className={`mt-16 ${ActiveOffer ? "bg-white" : "bg-[#FFFADD]"}`}>
      <div className="container mx-auto px-4">
        {ActiveOffer ? (
          <div className="py-8">
            <div className="bg-[#FDF8DB] p-2 rounded-lg mb-4 flex justify-between text-center items-center w-full">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`px-4 py-3 mx-1 rounded-md text-md font-medium w-full cursor-pointer  transition-all duration-500 ${
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
        ) : (
          <div className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-2 items-center justify-center py-8 overflow-hidden">
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <img
                src={banner}
                alt="eSIM Banner"
                className="w-full max-w-md lg:max-w-lg object-contain"
              />
            </div>
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="mb-6 sm:mb-8 lg:mb-10">
                <h1 className="text-[#69AA58] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug sm:leading-tight lg:leading-tight mb-4 sm:mb-6 lg:mb-8">
                  You currently do <br /> not have any <br /> eSIM plans
                </h1>
                <p className="text-[#69AA58] text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-4 sm:mb-6">
                  Get 5% discount on your first purchase
                </p>
                <button className="mt-6 sm:mt-8 lg:mt-10 inline-block hover:scale-105 transition-transform">
                  <Link
                    to="/worldwide"
                    className="bg-[#69AA58] text-white py-2 px-6 sm:py-3 sm:px-8 lg:py-3 lg:px-10 rounded-full text-base sm:text-lg md:text-xl font-medium"
                  >
                    Shop
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyEsim;
