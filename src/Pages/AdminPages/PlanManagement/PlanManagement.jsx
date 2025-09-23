import { Calendar, ChevronLeft, ChevronRight, Globe, Layers, Smartphone, TrendingDown, TrendingUp } from "lucide-react";
import eSime from "../../../assets/icons/eSim.svg";
import SectionTitle from "../../../components/SectionTitle";
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
    !searchQuery || Object.values(offer).some((val) =>
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
          className={`w-8 h-8 flex items-center justify-center text-sm font-medium rounded-md transition-colors ${currentPage === i ? "bg-purple-100 text-black" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}
        >
          {i}
        </button>
      );
    } else {
      buttons.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`w-8 h-8 flex items-center justify-center text-sm font-medium rounded-md transition-colors ${currentPage === 1 ? "bg-purple-100 text-black" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}
        >
          1
        </button>
      );
      if (currentPage > 3) buttons.push(<span key="ellipsis1" className="text-gray-500 mx-1">...</span>);
      for (let i = start; i <= end; i++) if (i !== 1 && i !== totalPages) buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-8 h-8 flex items-center justify-center text-sm font-medium rounded-md transition-colors ${currentPage === i ? "bg-purple-100 text-black" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}
        >
          {i}
        </button>
      );
      if (currentPage < totalPages - 2) buttons.push(<span key="ellipsis2" className="text-gray-500 mx-1">...</span>);
      if (totalPages > 1) buttons.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`w-8 h-8 flex items-center justify-center text-sm font-medium rounded-md transition-colors ${currentPage === totalPages ? "bg-purple-100 text-black" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}
        >
          {totalPages}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="">
      <SectionTitle title="eSIMs Plan Management" description="Track, manage and forecast your customers and orders." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
            <p className="text-xl sm:text-2xl font-semibold text-gray-900 mt-2">{stat.value}</p>
            {stat.change && (
              <div className="flex items-center mt-1 text-sm">
                {stat.changeType === "increase" ? <TrendingUp className="w-4 h-4 text-green-600 mr-1" /> : <TrendingDown className="w-4 h-4 text-red-600 mr-1" />}
                <span className={stat.changeType === "increase" ? "text-green-600" : "text-red-600"}>{stat.change}</span>
                <span className="text-gray-500 ml-1">{stat.comparison}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Plan Cards</h1>
             <p className="text-sm text-gray-600">{`Showing ${currentOffers.length} of ${filteredOffers.length} plans`}</p>
            </div>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-64 sm:w-80 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
          {currentOffers.map((offer, index) => (
            <div key={index} className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <img src={eSime} alt="" className="w-10 h-10" />
                  <h2 className="text-xl font-semibold text-gray-900">{offer.company}</h2>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                    <span className="text-gray-600 font-medium">Coverage</span>
                  </div>
                  <span className="text-gray-900 font-semibold">{offer.coverage}</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                    <span className="text-gray-600 font-medium">Duration</span>
                  </div>
                  <span className="text-gray-900 font-semibold">{offer.duration}</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                    <span className="text-gray-600 font-medium">Data</span>
                  </div>
                  <span className="text-gray-900 font-semibold">{offer.data}</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                    <span className="text-gray-600 font-medium">Price</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500">USD </span>
                    <span className="text-gray-400 line-through">{offer.originalPrice}</span>
                    <span className="text-gray-900 font-semibold ml-1">${offer.discountedPrice}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button className="w-full border border-blue-400 bg-white hover:bg-blue-50 font-semibold py-2 px-4 rounded-full text-lg transition-colors">
                  Hide
                </button>
                <button className="w-full bg-[#4776EB] hover:bg-[#3a5fd5] text-white font-semibold py-2 px-4 rounded-full text-lg transition-colors">
                  Publish
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-6">
         
          {totalPages > 1 && (
            <div className="flex items-center justify-between">
              <button onClick={handlePreviousPage} disabled={currentPage === 1} className={`flex items-center px-4 py-2 text-sm rounded-md ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"}`}>
                <ChevronLeft className="w-4 h-4 mr-2" /> Previous
              </button>
              <div className="flex space-x-2">{renderPaginationButtons()}</div>
              <button onClick={handleNextPage} disabled={currentPage === totalPages} className={`flex items-center px-4 py-2 text-sm rounded-md ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"}`}>
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanManagement;