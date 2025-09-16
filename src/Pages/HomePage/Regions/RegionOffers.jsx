import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import OfferCard from "../../../components/OfferCard";
import filter from "../../../assets/icons/filter.svg";
import useModal from "../../../components/modal/useModal";

const RegionOffers = () => {
  const { regionName } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [sortOrder, setSortOrder] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();
  const offersPerPage = 6;

  const offers = [
    {
      company: "RoamFree",
      coverage: "100 Countries",
      duration: "30 Days",
      data: "10 GB",
      originalPrice: 25,
      discountedPrice: 23.5,
    },
    {
      company: "TravelNet",
      coverage: "80 Countries",
      duration: "60 Days",
      data: "15 GB",
      originalPrice: 30,
      discountedPrice: 28.0,
    },
    {
      company: "WorldLink",
      coverage: "200 Countries",
      duration: "365 Days",
      data: "100 GB",
      originalPrice: 80,
      discountedPrice: 75.0,
    },
    {
      company: "GlobeConnect",
      coverage: "120 Countries",
      duration: "7 Days",
      data: "5 GB",
      originalPrice: 12,
      discountedPrice: 10.5,
    },
    {
      company: "SimWorld",
      coverage: "50 Countries",
      duration: "14 Days",
      data: "3 GB",
      originalPrice: 9,
      discountedPrice: 8.0,
    },
    {
      company: "AirRoam",
      coverage: "70 Countries",
      duration: "21 Days",
      data: "8 GB",
      originalPrice: 18,
      discountedPrice: 16.5,
    },
    {
      company: "eConnect",
      coverage: "150 Countries",
      duration: "30 Days",
      data: "20 GB",
      originalPrice: 40,
      discountedPrice: 37.0,
    },
    {
      company: "NomadNet",
      coverage: "60 Countries",
      duration: "10 Days",
      data: "4 GB",
      originalPrice: 11,
      discountedPrice: 9.5,
    },
    {
      company: "GlobalEase",
      coverage: "90 Countries",
      duration: "45 Days",
      data: "12 GB",
      originalPrice: 27,
      discountedPrice: 25.0,
    },
    {
      company: "FlyNet",
      coverage: "200 Countries",
      duration: "90 Days",
      data: "50 GB",
      originalPrice: 60,
      discountedPrice: 55.0,
    },
    {
      company: "TripLink",
      coverage: "40 Countries",
      duration: "5 Days",
      data: "2 GB",
      originalPrice: 6,
      discountedPrice: 5.0,
    },
    {
      company: "SkySurf",
      coverage: "110 Countries",
      duration: "20 Days",
      data: "7 GB",
      originalPrice: 15,
      discountedPrice: 13.5,
    },
    {
      company: "ConnectGo",
      coverage: "180 Countries",
      duration: "180 Days",
      data: "80 GB",
      originalPrice: 70,
      discountedPrice: 65.0,
    },
    {
      company: "EasyRoam",
      coverage: "30 Countries",
      duration: "7 Days",
      data: "1 GB",
      originalPrice: 5,
      discountedPrice: 4.0,
    },
    {
      company: "DataGlobe",
      coverage: "140 Countries",
      duration: "365 Days",
      data: "120 GB",
      originalPrice: 100,
      discountedPrice: 90.0,
    },
  ];
  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Filter and sort offers
  const filteredAndSortedOffers = offers
    .filter(
      (offer) =>
        offer.discountedPrice >= priceRange.min &&
        offer.discountedPrice <= priceRange.max
    )
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") {
        return a.discountedPrice - b.discountedPrice;
      } else if (sortOrder === "highToLow") {
        return b.discountedPrice - a.discountedPrice;
      }
      return 0;
    });

  // Pagination calculation
  const indexOfLastOffer = currentPage * offersPerPage;
  const indexOfFirstOffer = indexOfLastOffer - offersPerPage;
  const currentOffers = filteredAndSortedOffers.slice(
    indexOfFirstOffer,
    indexOfLastOffer
  );
  const totalPages = Math.ceil(filteredAndSortedOffers.length / offersPerPage);

  // Format country name
  const region = regionName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Define color schemes for each region
  const regionColorSchemes = {
    africa: {
      bgColor: "bg-[#F8FFCD]",
      button:
        "w-full bg-[#8E9D30] hover:scale-105 text-white font-semibold py-2 px-6 rounded-full text-lg mt-8 transition-transform duration-300 shadow-lg cursor-pointer",
      badge: "bg-[#8E9D30] text-white px-4 py-1.5 rounded-full text-sm font-medium",
    },
    asia: {
      bgColor: "bg-[#FFEAFD]",
      button:
        "w-full bg-[#792873] hover:scale-105 text-white font-semibold py-2 px-6 rounded-full text-lg mt-8 transition-transform duration-300 shadow-lg cursor-pointer",
      badge: "bg-[#792873] text-white px-4 py-1.5 rounded-full text-sm font-medium",
    },
    oceania: {
      bgColor: "bg-[#E9F4FF]",
      button:
        "w-full bg-[#077DB5] hover:scale-105 text-white font-semibold py-2 px-6 rounded-full text-lg mt-8 transition-transform duration-300 shadow-lg cursor-pointer",
      badge: "bg-[#077DB5] text-white px-4 py-1.5 rounded-full text-sm font-medium",
    },
    europe: {
      bgColor: "bg-[#E9FFE7]",
      button:
        "w-full bg-[#319628] hover:scale-105 text-white font-semibold py-2 px-6 rounded-full text-lg mt-8 transition-transform duration-300 shadow-lg cursor-pointer",
      badge: "bg-[#319628] text-white px-4 py-1.5 rounded-full text-sm font-medium",
    },
    "north-america": {
      bgColor: "bg-[#FFE7E7]",
      button:
        "w-full bg-[#D72B2B] hover:scale-105 text-white font-semibold py-2 px-6 rounded-full text-lg mt-8 transition-transform duration-300 shadow-lg cursor-pointer",
      badge: "bg-[#D72B2B] text-white px-4 py-1.5 rounded-full text-sm font-medium",
    },
    "south-america": {
      bgColor: "bg-[#DBFEFF]",
      button:
        "w-full bg-[#08868B] hover:scale-105 text-white font-semibold py-2 px-6 rounded-full text-lg mt-8 transition-transform duration-300 shadow-lg cursor-pointer",
      badge: "bg-[#08868B] text-white px-4 py-1.5 rounded-full text-sm font-medium",
    },
  };

  // Get the color scheme for the current region (default to white if region not found)
  const currentColorScheme = regionColorSchemes[regionName.toLowerCase()] || {
    bgColor: "bg-white",
    button: "w-full bg-[#08868B] hover:scale-105 text-white font-semibold py-2 px-6 rounded-full text-lg mt-8 transition-transform duration-300 shadow-lg cursor-pointer",
    badge: "bg-[#08868B] text-white px-4 py-1.5 rounded-full text-sm font-medium",
  };

  // Helper function for pagination range
  const getPaginationRange = () => {
    const range = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) range.push(i);
    } else {
      if (currentPage <= 3) {
        range.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        range.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        range.push(1, "...", currentPage, "...", totalPages);
      }
    }
    return range;
  };

  // Filter modal handlers
  const handlePriceRangeChange = (e) => {
    setPriceRange({ ...priceRange, max: parseInt(e.target.value) });
  };
  const handleSort = (order) => {
    setSortOrder(order);
  };
  const handleApplyFilters = () => {
    setCurrentPage(1); // Reset to first page when applying filters
    closeModal();
  };
  const handleClearFilters = () => {
    setPriceRange({ min: 0, max: 100 });
    setSortOrder(null);
    setCurrentPage(1); // Reset to first page
    closeModal();
  };

  return (
    <div className="my-10 container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-medium">{region} eSIM Plans</h1>
        <div
          className="border border-gray-300 hover:bg-[#FFF6ED] rounded-full flex px-4 py-2 cursor-pointer"
          onClick={openModal}
        >
          <img src={filter} alt="" />
          <span className="ml-2 text-gray-600">Filters</span>
        </div>
      </div>

      {/* Offers grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {currentOffers.length > 0 ? (
          currentOffers.map((offer, index) => (
            <OfferCard
              key={index}
              company={offer.company}
              coverage={region}
              duration={offer.duration}
              data={offer.data}
              originalPrice={offer.originalPrice}
              discountedPrice={offer.discountedPrice}
              bgColor={currentColorScheme.bgColor}
              button={currentColorScheme.button}
              saleBadge={currentColorScheme.badge}
            />
          ))
        ) : (
          <p className="text-gray-600 col-span-3 text-center">
            No offers available for the selected filters.
          </p>
        )}
      </div>

      {/* Pagination */}
      {filteredAndSortedOffers.length > 0 && (
        <div className="flex justify-center items-center gap-3 mt-12">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className={`px-4 py-2 rounded-lg shadow-md border border-orange-200 ${
              currentPage === 1
                ? "bg-gray-100 cursor-not-allowed"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            Prev
          </button>

          {getPaginationRange().map((item, index) =>
            item === "..." ? (
              <span key={index} className="px-3 text-gray-500">
                ...
              </span>
            ) : (
              <button
                key={index}
                onClick={() => setCurrentPage(item)}
                className={`px-4 py-2 rounded-lg shadow-md border border-orange-200 transition ${
                  currentPage === item
                    ? "bg-orange-500 text-white"
                    : "bg-white hover:bg-orange-200"
                }`}
              >
                {item}
              </button>
            )
          )}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className={`px-4 py-2 rounded-lg shadow-md border border-orange-200 ${
              currentPage === totalPages
                ? "bg-gray-100 cursor-not-allowed"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            Next
          </button>
        </div>
      )}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] relative">
            <button
              className="absolute top-5 right-5 text-gray-600 hover:text-gray-900 cursor-pointer"
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
                    min="0"
                    max="100"
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

export default RegionOffers;
