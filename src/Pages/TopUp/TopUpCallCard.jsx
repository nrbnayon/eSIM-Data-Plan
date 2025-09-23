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
    <div>
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-bold">Top Up</h1>
        <div
          className="bg-[#FDF8DB] p-5 rounded-lg cursor-pointer"
          onClick={openModal}
        >
          <img src={filter} alt="" />
        </div>
      </div>
      <div className="my-7 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {sortedOffers.map((offer, index) => (
          <div
            key={index}
            className={`rounded-2xl border border-gray-200 p-6 shadow-sm bg-[#FFF6ED]`}
          >
            {/* Header with logo and sale badge */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div>
                  <img src={eSime} alt="" className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  {offer?.company}
                </h2>
              </div>
              <div className="bg-gradient-to-b from-[#FFA943] to-[#E97400] text-white px-4 py-1.5 rounded-full text-sm font-medium">
                ON SALE
              </div>
            </div>

            {/* Plan details */}
            <div className="space-y-6">
              {/* Coverage */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                  <span className="text-gray-600 text-lg">Coverage</span>
                </div>
                <span className="text-gray-900 text-lg font-semibold">
                  {offer.coverage}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                <div className="flex items-center gap-3">
                  <Calendar
                    className="w-5 h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-gray-600 text-lg">Duration</span>
                </div>
                <span className="text-gray-900 text-lg font-semibold">
                  {offer.duration}
                </span>
              </div>

              {/* Data */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                <div className="flex items-center gap-3">
                  <Smartphone
                    className="w-5 h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-gray-600 text-lg">Data</span>
                </div>
                <span className="text-gray-900 text-lg font-semibold">
                  {offer.data}
                </span>
              </div>
              <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                  <span className="text-gray-600 text-lg">Call</span>
                </div>
                <span className="text-gray-900 text-lg font-semibold">
                  {offer.calls}
                </span>
              </div>
              <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                <div className="flex items-center gap-3">
                  <MessageSquareText
                    className="w-5 h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-gray-600 text-lg">Text</span>
                </div>
                <span className="text-gray-900 text-lg font-semibold">
                  {offer.texts}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                <div className="flex items-center gap-3">
                  <Layers className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                  <span className="text-gray-600 text-lg">Price</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 text-lg">USD </span>
                  <span className="text-gray-400 line-through text-lg">
                    {offer.originalPrice}
                  </span>
                  <span className="text-gray-900 text-lg font-semibold ml-1">
                    ${offer.discountedPrice}
                  </span>
                </div>
              </div>
            </div>

            {/* Buy now button */}
            <button
              onClick={() => navigate(`/order-preview/${index}`)}
              className="w-full bg-gradient-to-b from-[#FFA943] to-[#E97400] hover:scale-105 text-white font-semibold py-2 px-6 rounded-full text-lg mt-8 transition-transform duration-300 shadow-lg cursor-pointer"
            >
              Buy now
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-20">
        <h1 className="text-2xl font-bold">Repurchase</h1>
      </div>
      <div className="my-7 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {sortedOffers.map((offer, index) => (
          <div
            key={index}
            className={`rounded-2xl border border-gray-200 p-6 shadow-sm bg-[#FFF6ED]`}
          >
            {/* Header with logo and sale badge */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div>
                  <img src={eSime} alt="" className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  {offer?.company}
                </h2>
              </div>
              <div className="bg-gradient-to-b from-[#FFA943] to-[#E97400] text-white px-4 py-1.5 rounded-full text-sm font-medium">
                ON SALE
              </div>
            </div>

            {/* Plan details */}
            <div className="space-y-6">
              {/* Coverage */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                  <span className="text-gray-600 text-lg">Coverage</span>
                </div>
                <span className="text-gray-900 text-lg font-semibold">
                  {offer.coverage}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                <div className="flex items-center gap-3">
                  <Calendar
                    className="w-5 h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-gray-600 text-lg">Duration</span>
                </div>
                <span className="text-gray-900 text-lg font-semibold">
                  {offer.duration}
                </span>
              </div>

              {/* Data */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                <div className="flex items-center gap-3">
                  <Smartphone
                    className="w-5 h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-gray-600 text-lg">Data</span>
                </div>
                <span className="text-gray-900 text-lg font-semibold">
                  {offer.data}
                </span>
              </div>
              <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                  <span className="text-gray-600 text-lg">Call</span>
                </div>
                <span className="text-gray-900 text-lg font-semibold">
                  {offer.calls}
                </span>
              </div>
              <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                <div className="flex items-center gap-3">
                  <MessageSquareText
                    className="w-5 h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-gray-600 text-lg">Text</span>
                </div>
                <span className="text-gray-900 text-lg font-semibold">
                  {offer.texts}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                <div className="flex items-center gap-3">
                  <Layers className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                  <span className="text-gray-600 text-lg">Price</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 text-lg">USD </span>
                  <span className="text-gray-400 line-through text-lg">
                    {offer.originalPrice}
                  </span>
                  <span className="text-gray-900 text-lg font-semibold ml-1">
                    ${offer.discountedPrice}
                  </span>
                </div>
              </div>
            </div>

            {/* Buy now button */}
            <button
              onClick={() => navigate(`/order-preview/${index}`)}
              className="w-full bg-gradient-to-b from-[#FFA943] to-[#E97400] hover:scale-105 text-white font-semibold py-2 px-6 rounded-full text-lg mt-8 transition-transform duration-300 shadow-lg cursor-pointer"
            >
              Buy now
            </button>
          </div>
        ))}
      </div>

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

export default TopUpCallCard;
