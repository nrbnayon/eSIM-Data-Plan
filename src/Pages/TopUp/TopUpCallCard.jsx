import eSime from "../../assets/icons/eSim.svg";
import {
  Calendar,
  Globe,
  Layers,
  MessageSquareText,
  Phone,
  Smartphone,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import filter from "../../assets/icons/filter.svg";
import useModal from "../../components/modal/useModal";
import { useState } from "react";

const TopUpCallCard = () => {
  const [selectedDuration, setSelectedDuration] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();
  const [priceRange, setPriceRange] = useState({ min: 10, max: 150 });
  const [sortOrder, setSortOrder] = useState(null);

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
    closeModal();
  };

  // Handler for clearing filters
  const handleClearFilters = () => {
    setPriceRange({ min: 10, max: 150 });
    setSortOrder(null);
    closeModal();
  };

  const navigate = useNavigate();
  const offers = [
    {
      company: "RoamFree",
      coverage: "100 Countries",
      duration: "30 Days",
      data: "10 GB",
      calls: "100 Minutes",
      texts: "1000 SMS",
      originalPrice: 25,
      discountedPrice: 23.5,
    },
    {
      company: "TravelNet",
      coverage: "80 Countries",
      duration: "60 Days",
      data: "15 GB",
      calls: "200 Minutes",
      texts: "2000 SMS",
      originalPrice: 30,
      discountedPrice: 28.0,
    },
    {
      company: "WorldLink",
      coverage: "200 Countries",
      duration: "365 Days",
      data: "100 GB",
      calls: "1000 Minutes",
      texts: "10000 SMS",
      originalPrice: 80,
      discountedPrice: 75.0,
    },
  ];

  // Apply filtering and sorting
  const filteredOffers = offers.filter(
    (offer) =>
      offer.discountedPrice >= priceRange.min &&
      offer.discountedPrice <= priceRange.max
  );

  const sortedOffers = [...filteredOffers].sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.discountedPrice - b.discountedPrice;
    if (sortOrder === "highToLow") return b.discountedPrice - a.discountedPrice;
    return 0; // No sorting if sortOrder is null
  });

  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">Top Up</h1>
        <div
          className="bg-[#FDF8DB] p-3 sm:p-4 rounded-lg cursor-pointer mt-3 sm:mt-0"
          onClick={openModal}
        >
          <img src={filter} alt="Filter" className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
      <div className="my-6 sm:my-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-10">
        {sortedOffers.map((offer, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm bg-[#FFF6ED]"
          >
            {/* Header with logo and sale badge */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <div>
                  <img src={eSime} alt="eSIM" className="w-8 sm:w-10 h-8 sm:h-10" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {offer?.company}
                </h2>
              </div>
              <div className="bg-gradient-to-b from-[#FFA943] to-[#E97400] text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">
                ON SALE
              </div>
            </div>

            {/* Plan details */}
            <div className="space-y-3 sm:space-y-4">
              {/* Coverage */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <Globe
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">
                    Coverage
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-gray-900 font-semibold">
                  {offer.coverage}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <Calendar
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">
                    Duration
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-gray-900 font-semibold">
                  {offer.duration}
                </span>
              </div>

              {/* Data */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <Smartphone
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">
                    Data
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-gray-900 font-semibold">
                  {offer.data}
                </span>
              </div>

              {/* Calls */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <Phone
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">
                    Call
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-gray-900 font-semibold">
                  {offer.calls}
                </span>
              </div>

              {/* Texts */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <MessageSquareText
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">
                    Text
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-gray-900 font-semibold">
                  {offer.texts}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <Layers
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">
                    Price
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 text-xs sm:text-sm">USD </span>
                  <span className="text-gray-400 line-through text-xs sm:text-sm">
                    {offer.originalPrice}
                  </span>
                  <span className="text-gray-900 text-xs sm:text-sm font-semibold">
                    ${offer.discountedPrice}
                  </span>
                </div>
              </div>
            </div>

            {/* Buy now button */}
            <button
              onClick={() => navigate(`/order-preview/${index}`)}
              className="w-full bg-gradient-to-b from-[#FFA943] to-[#E97400] hover:scale-105 text-white font-semibold py-2 px-4 sm:px-6 rounded-full text-sm sm:text-lg mt-6 sm:mt-7 transition-transform duration-300 shadow-lg cursor-pointer"
            >
              Buy now
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-8 sm:mt-10 mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">Repurchase</h1>
      </div>
      <div className="my-6 sm:my-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-10">
        {sortedOffers.map((offer, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm bg-[#FFF6ED]"
          >
            {/* Header with logo and sale badge */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <div>
                  <img src={eSime} alt="eSIM" className="w-8 sm:w-10 h-8 sm:h-10" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {offer?.company}
                </h2>
              </div>
              <div className="bg-gradient-to-b from-[#FFA943] to-[#E97400] text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">
                ON SALE
              </div>
            </div>

            {/* Plan details */}
            <div className="space-y-3 sm:space-y-4">
              {/* Coverage */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <Globe
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">
                    Coverage
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-gray-900 font-semibold">
                  {offer.coverage}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <Calendar
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">
                    Duration
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-gray-900 font-semibold">
                  {offer.duration}
                </span>
              </div>

              {/* Data */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <Smartphone
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">
                    Data
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-gray-900 font-semibold">
                  {offer.data}
                </span>
              </div>

              {/* Calls */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <Phone
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">
                    Call
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-gray-900 font-semibold">
                  {offer.calls}
                </span>
              </div>

              {/* Texts */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <MessageSquareText
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">
                    Text
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-gray-900 font-semibold">
                  {offer.texts}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <Layers
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">
                    Price
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 text-xs sm:text-sm">USD </span>
                  <span className="text-gray-400 line-through text-xs sm:text-sm">
                    {offer.originalPrice}
                  </span>
                  <span className="text-gray-900 text-xs sm:text-sm font-semibold">
                    ${offer.discountedPrice}
                  </span>
                </div>
              </div>
            </div>

            {/* Buy now button */}
            <button
              onClick={() => navigate(`/order-preview/${index}`)}
              className="w-full bg-gradient-to-b from-[#FFA943] to-[#E97400] hover:scale-105 text-white font-semibold py-2 px-4 sm:px-6 rounded-full text-sm sm:text-lg mt-6 sm:mt-7 transition-transform duration-300 shadow-lg cursor-pointer"
            >
              Buy now
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-[90%] sm:max-w-[400px] relative">
            <button
              className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-600 hover:text-gray-900 cursor-pointer"
              onClick={closeModal}
            >
              <X
                className="w-5 h-5 sm:w-6 sm:h-6"
                strokeWidth={1.5}
              />
            </button>
            <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Filter</h2>
            <div className="space-y-3 sm:space-y-4">
              <button
                className={`w-full text-left text-gray-800 p-2 rounded border border-gray-200 text-xs sm:text-sm ${
                  sortOrder === "lowToHigh"
                    ? "bg-gray-100"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleSort("lowToHigh")}
              >
                Price Low to High
              </button>
              <button
                className={`w-full text-left text-gray-800 p-2 rounded border border-gray-200 text-xs sm:text-sm ${
                  sortOrder === "highToLow"
                    ? "bg-gray-100"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleSort("highToLow")}
              >
                Price High to Low
              </button>
              <div>
                <p className="text-gray-700 mb-2 text-xs sm:text-sm">Price Range</p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xs sm:text-sm">${priceRange.min}</span>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    value={priceRange.max}
                    onChange={handlePriceRangeChange}
                    className="w-full accent-black"
                  />
                  <span className="text-xs sm:text-sm">${priceRange.max}</span>
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
              <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4">
                <button
                  className="bg-gray-200 text-black px-3 sm:px-4 py-2 rounded-full w-full text-xs sm:text-sm"
                  onClick={handleClearFilters}
                >
                  Clear
                </button>
                <button
                  className="bg-black text-white px-3 sm:px-4 py-2 rounded-full w-full text-xs sm:text-sm"
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

export default TopUpCallCard;