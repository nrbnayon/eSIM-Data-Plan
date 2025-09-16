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
    // Pass filter parameters to child components
    // This assumes DataCard and CallTextCard accept these props
    tabs.forEach((tab) => {
      tab.content =
        tab.value === "data" ? (
          <DataCard priceRange={priceRange} sortOrder={sortOrder} />
        ) : (
          <CallTextCard priceRange={priceRange} sortOrder={sortOrder} />
        );
    });
    closeModal();
  };

  // Handler for clearing filters
  const handleClearFilters = () => {
    setPriceRange({ min: 10, max: 150 });
    setSortOrder(null);
    closeModal();
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="my-10">
          <h1 className="text-3xl font-medium">Global eSIMs</h1>
          <p className="text-gray-600 mb-4">
            Discover our range of global eSIMs for seamless connectivity while
            traveling.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <div className="bg-[#FDF8DB] p-2 rounded-lg flex justify-between text-center items-center">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-10 py-3 mx-1 rounded-md text-xm transition-all duration-500 cursor-pointer ${
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
            className="bg-[#FDF8DB] p-5 rounded-lg cursor-pointer"
            onClick={openModal}
          >
            <img src={filter} alt="" />
          </div>
        </div>
      </div>
      {/* Tab Content */}
      <div>{tabs.find((tab) => tab.value === activeTab)?.content}</div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] relative">
            <button
              className="absolute top-5 cursor-pointer right-5 text-gray-600 hover:text-gray-900"
              onClick={closeModal}
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
            <h2 className="text-xl font-medium mb-4">Filter</h2>
            <div className="space-y-4">
              <button
                className={`w-full text-left text-gray-800 p-2 rounded border border-gray-200 ${
                  sortOrder === "lowToHigh"
                    ? "bg-gray-100"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleSort("lowToHigh")}
              >
                Price Low to High
              </button>
              <button
                className={`w-full text-left text-gray-800 p-2 rounded border border-gray-200 ${
                  sortOrder === "highToLow"
                    ? "bg-gray-100"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleSort("highToLow")}
              >
                Price High to Low
              </button>
              <div>
                <p className="text-gray-700 mb-2">Price Range</p>
                <div className="flex items-center gap-2">
                  <span>${priceRange.min}</span>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    value={priceRange.max}
                    onChange={handlePriceRangeChange}
                    className="w-full accent-black"
                  />
                  <span>${priceRange.max}</span>
                </div>
              </div>
              <div className="flex gap-5 mt-4">
                <button
                  className="bg-gray-200 text-black px-4 py-2 rounded-full w-full"
                  onClick={handleClearFilters}
                >
                  Clear
                </button>
                <button
                  className="bg-black text-white px-4 py-2 rounded-full w-full"
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
