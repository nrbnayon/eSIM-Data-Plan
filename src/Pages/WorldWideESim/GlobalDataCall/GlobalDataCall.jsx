import { X } from "lucide-react";
import CallTextCard from "./CallTextCard";
import DataCard from "./DataCard";
import { useState } from "react";
import useModal from "../../../components/modal/useModal";
import filter from "../../../assets/icons/filter.svg";

const GlobalDataCall = () => {
  const tabs = [
    { label: "Data", value: "data", content: <DataCard /> },
    { label: "Data/Text/Call", value: "callText", content: <CallTextCard /> },
  ];

  const [activeTab, setActiveTab] = useState("data");
  const [priceRange, setPriceRange] = useState({ min: 10, max: 150 });
  const [sortOrder, setSortOrder] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();

  // Handler for price range change
  const handlePriceRangeChange = (e) => {
    setPriceRange({ ...priceRange, max: parseInt(e.target.value) });
  };

  // Handler for sorting
  const handleSort = (order) => {
    setSortOrder(order);
  };

  // Handler for applying filters
  const handleApplyFilters = () => {
    tabs.forEach((tab) => {
      tab.content =
        tab.value === "data" ? (
          <DataCard priceRange={priceRange} sortOrder={sortOrder} selectedDuration={selectedDuration} />
        ) : (
          <CallTextCard priceRange={priceRange} sortOrder={sortOrder} selectedDuration={selectedDuration} />
        );
    });
    closeModal();
  };

  // Handler for clearing filters
  const handleClearFilters = () => {
    setPriceRange({ min: 10, max: 150 });
    setSortOrder(null);
    setSelectedDuration(null);
    closeModal();
  };

 

  return (
    <div className="">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between my-6 sm:my-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-medium">Global eSIMs</h1>
          <p className="text-gray-600 text-sm sm:text-base mt-2 sm:mt-3">
            Discover our range of global eSIMs for seamless connectivity while
            traveling.
          </p>
        </div>
        <div className="flex items-center gap-3 sm:gap-5 mt-4 sm:mt-0">
          <div className="bg-[#FDF8DB] p-1.5 sm:p-2 rounded-lg flex justify-between text-center items-center w-full sm:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 sm:px-8 py-2 sm:py-3 mx-0.5 sm:mx-1 w-full rounded-md text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === tab.value
                    ? "bg-white text-black shadow-sm"
                    : "text-black hover:bg-white/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div
            className="bg-[#FDF8DB] p-3 sm:p-4 rounded-lg cursor-pointer flex-shrink-0"
            onClick={openModal}
          >
            <img src={filter} alt="Filter" className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {tabs.find((tab) => tab.value === activeTab)?.content}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-[90%] sm:max-w-[400px]">
            <button
              className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-600 hover:text-gray-900"
              onClick={closeModal}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
            </button>
            <h2 className="text-lg sm:text-xl font-medium mb-4">Filter</h2>
            <div className="space-y-4">
              <button
                className={`w-full text-left text-gray-800 p-2 rounded border border-gray-200 text-sm sm:text-base ${
                  sortOrder === "lowToHigh"
                    ? "bg-gray-100"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleSort("lowToHigh")}
              >
                Price Low to High
              </button>
              <button
                className={`w-full text-left text-gray-800 p-2 rounded border border-gray-200 text-sm sm:text-base ${
                  sortOrder === "highToLow"
                    ? "bg-gray-100"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleSort("highToLow")}
              >
                Price High to Low
              </button>
              <div>
                <p className="text-gray-700 mb-2 text-sm sm:text-base">Price Range</p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-sm sm:text-base">${priceRange.min}</span>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    value={priceRange.max}
                    onChange={handlePriceRangeChange}
                    className="w-full accent-black"
                  />
                  <span className="text-sm sm:text-base">${priceRange.max}</span>
                </div>
              </div>
              <div>
                <p className="text-gray-700 mb-2 text-sm sm:text-base">Duration</p>
                <div className="grid grid-cols-3 gap-2">
                  {["3day", "7day", "15day", "30day", "45day", "100day", "6month", "1year"].map((duration) => (
                    <button
                      key={duration}
                      onClick={() => setSelectedDuration(duration)}
                      className={`p-2 rounded-full border border-gray-200 text-sm sm:text-base ${
                        selectedDuration === duration ? "bg-gray-100" : "hover:bg-gray-100"
                      }`}
                    >
                      {duration === "6month" ? "6 Months" : duration === "1year" ? "1 Year" : `${duration.replace("day", " Days")}`}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4 mt-4">
                <button
                  className="bg-gray-200 text-black px-3 sm:px-4 py-2 rounded-full w-full text-sm sm:text-base"
                  onClick={handleClearFilters}
                >
                  Clear
                </button>
                <button
                  className="bg-black text-white px-3 sm:px-4 py-2 rounded-full w-full text-sm sm:text-base"
                  onClick={handleApplyFilters}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalDataCall;