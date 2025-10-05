import { Calendar, ChevronLeft, ChevronRight, Globe, Layers, Smartphone, TrendingDown, TrendingUp } from "lucide-react";
import eSime from "../../../assets/icons/eSim.svg";
import { useState } from "react";

const PlanManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 4;

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
      company: "TravelNet",
      coverage: "80 Countries",
      duration: "60 Days",
      data: "15 GB",
      calls: "200 Minutes",
      texts: "2000 SMS",
      originalPrice: 30,
      discountedPrice: 28.0,
    },
  ];

  const stats = [
    {
      title: "Total Revenue",
      value: "$2,000",
      change: "40%",
      changeType: "increase",
      comparison: "vs last month",
    },
    {
      title: "Active Earning",
      value: "200",
      change: "20%",
      changeType: "decrease",
      comparison: "vs last month",
    },
    {
      title: "Total Cancel",
      value: "100",
      change: "20%",
      changeType: "decrease",
      comparison: "From last month",
    },
  ];

  const filteredOffers = offers.filter((offer) =>
    !searchQuery ||
    Object.values(offer).some((val) =>
      String(val).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredOffers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOffers = filteredOffers.slice(startIndex, startIndex + itemsPerPage);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => setCurrentPage(page);
  const handlePreviousPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  const handleNextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5;
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-xs sm:text-sm font-medium rounded-md transition-colors ${
            currentPage === i ? "bg-purple-100 text-black" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          }`}
        >
          {i}
        </button>
      );
    } else {
      buttons.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-xs sm:text-sm font-medium rounded-md transition-colors ${
            currentPage === 1 ? "bg-purple-100 text-black" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          }`}
        >
          1
        </button>
      );
      if (currentPage > 3) buttons.push(<span key="ellipsis1" className="text-gray-500 text-xs sm:text-sm mx-1">...</span>);
      for (let i = start; i <= end; i++) if (i !== 1 && i !== totalPages) buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-xs sm:text-sm font-medium rounded-md transition-colors ${
            currentPage === i ? "bg-purple-100 text-black" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          }`}
        >
          {i}
        </button>
      );
      if (currentPage < totalPages - 2) buttons.push(<span key="ellipsis2" className="text-gray-500 text-xs sm:text-sm mx-1">...</span>);
      if (totalPages > 1) buttons.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-xs sm:text-sm font-medium rounded-md transition-colors ${
            currentPage === totalPages ? "bg-purple-100 text-black" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          }`}
        >
          {totalPages}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="">
      <div className="mb-4 sm:mb-6">
        <h1 className="text-lg sm:text-xl md:text-2xl font-medium mb-2">eSIMs Plan Management</h1>
        <p className="text-xs sm:text-sm text-gray-600">Track, manage, and forecast your customers and orders.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-xs sm:text-sm font-medium text-gray-600">{stat.title}</h3>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mt-2">{stat.value}</p>
            {stat.change && (
              <div className="flex items-center mt-1 text-xs sm:text-sm">
                {stat.changeType === "increase" ? (
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-1" />
                ) : (
                  <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 mr-1" />
                )}
                <span className={stat.changeType === "increase" ? "text-green-600" : "text-red-600"}>{stat.change}</span>
                <span className="text-gray-500 ml-1">{stat.comparison}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="p-4 sm:p-5 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">Plan Cards</h1>
              <p className="text-xs sm:text-sm text-gray-600">{`Showing ${currentOffers.length} of ${filteredOffers.length} plans`}</p>
            </div>
            <input
              type="text"
              placeholder="Search plans..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full sm:w-64 md:w-80 px-3 sm:px-4 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6">
          {currentOffers.length > 0 ? (
            currentOffers.map((offer, index) => (
              <div key={index} className="rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img src={eSime} alt={`${offer.company} logo`} className="w-8 h-8 sm:w-10 sm:h-10" />
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">{offer.company}</h2>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" strokeWidth={1.5} />
                      <span className="text-xs sm:text-sm text-gray-600 font-medium">Coverage</span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-900 font-semibold">{offer.coverage}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" strokeWidth={1.5} />
                      <span className="text-xs sm:text-sm text-gray-600 font-medium">Duration</span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-900 font-semibold">{offer.duration}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" strokeWidth={1.5} />
                      <span className="text-xs sm:text-sm text-gray-600 font-medium">Data</span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-900 font-semibold">{offer.data}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" strokeWidth={1.5} />
                      <span className="text-xs sm:text-sm text-gray-600 font-medium">Price</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs sm:text-sm text-gray-500">USD </span>
                      <span className="text-xs sm:text-sm text-gray-400 line-through">{offer.originalPrice}</span>
                      <span className="text-xs sm:text-sm text-gray-900 font-semibold ml-1">${offer.discountedPrice}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <button className="w-full border border-blue-400 bg-white hover:bg-blue-50 font-semibold py-2 px-4 rounded-full text-xs sm:text-sm transition-colors">
                    Hide
                  </button>
                  <button className="w-full bg-[#4776EB] hover:bg-[#3a5fd5] text-white font-semibold py-2 px-4 rounded-full text-xs sm:text-sm transition-colors">
                    Publish
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-6 text-gray-500 text-xs sm:text-sm col-span-full">
              No plans found matching your criteria.
            </div>
          )}
        </div>
        {totalPages > 1 && (
          <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 border-t border-gray-200">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-md transition-colors ${
                currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              Previous
            </button>
            <div className="flex space-x-1 sm:space-x-2">{renderPaginationButtons()}</div>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-md transition-colors ${
                currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Next
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:mr-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanManagement;