import { useState } from "react";
import { ChevronLeft, ChevronRight, TrendingDown, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Payment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 6;

  const services = [
    {
      id: "ORD-AX93K7-1",
      planName: "Asia 7 days",
      date: "Jan 6, 2025",
      PaymentMethod: "VISA",
      customerName: "Phoenix Baker",
      service_type: "Regular",
      price: "$20",
      status: "Active",
    },
    {
      id: "ORD-AX93K7-2",
      planName: "Asia 365 days",
      date: "Jan 6, 2025",
      PaymentMethod: "VISA",
      customerName: "Drew Cano",
      service_type: "Regular",
      price: "$35",
      status: "Canceled",
    },
    {
      id: "ORD-AX93K7-3",
      planName: "Asia 1 year",
      date: "Jan 6, 2025",
      PaymentMethod: "VISA",
      customerName: "Phoenix Baker",
      service_type: "Regular",
      price: "$18",
      status: "Active",
    },
    {
      id: "ORD-AX93K7-4",
      planName: "Asia 7 days",
      date: "Jan 6, 2025",
      PaymentMethod: "VISA",
      customerName: "Drew Cano",
      service_type: "Regular",
      price: "$20",
      status: "Pending",
    },
    {
      id: "ORD-AX93K7-5",
      planName: "Asia 7 days",
      date: "Jan 6, 2025",
      PaymentMethod: "VISA",
      customerName: "Phoenix Baker",
      service_type: "Regular",
      price: "$35",
      status: "Active",
    },
    {
      id: "ORD-AX93K7-6",
      planName: "Asia 7 days",
      date: "Jan 6, 2025",
      PaymentMethod: "VISA",
      customerName: "Drew Cano",
      service_type: "Regular",
      price: "$18",
      status: "Canceled",
    },
    {
      id: "ORD-AX93K7-7",
      planName: "Asia 7 days",
      date: "Jan 6, 2025",
      PaymentMethod: "VISA",
      customerName: "Phoenix Baker",
      service_type: "Custom",
      price: "$20",
      status: "Active",
    },
  ];

  const totalRevenue = services.reduce(
    (sum, service) => sum + parseFloat(service.price.replace("$", "")),
    0
  );
  const activeServices = services.filter(
    (service) => service.status === "Active"
  ).length;
  const canceledServices = services.filter(
    (service) => service.status === "Canceled"
  ).length;
  const stats = [
    {
      title: "Total Revenue",
      value: `$${totalRevenue.toFixed(0)}`,
      change: "40%",
      changeType: "increase",
      comparison: "vs last month",
    },
    {
      title: "Active Earning",
      value: activeServices,
      change: "20%",
      changeType: "decrease",
      comparison: "vs last month",
    },
    {
      title: "Total Cancel",
      value: canceledServices,
      change: "20%",
      changeType: "decrease",
      comparison: "From last month",
    },
  ];

  const filteredServices = services.filter((service) =>
    [
      service.planName,
      service.customerName,
      service.PaymentMethod,
      service.service_type,
    ].some((field) => field.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentServices = filteredServices.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => setCurrentPage(page);
  const handlePreviousPage = () =>
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  const handleNextPage = () =>
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5;
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++)
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-xs sm:text-sm font-medium rounded-md transition-colors ${
              currentPage === i
                ? "bg-purple-100 text-black"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
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
            currentPage === 1
              ? "bg-purple-100 text-black"
              : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          }`}
        >
          1
        </button>
      );
      if (currentPage > 3)
        buttons.push(
          <span key="ellipsis1" className="text-gray-500 text-xs sm:text-sm mx-1">
            ...
          </span>
        );
      for (let i = start; i <= end; i++)
        if (i !== 1 && i !== totalPages)
          buttons.push(
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-xs sm:text-sm font-medium rounded-md transition-colors ${
                currentPage === i
                  ? "bg-purple-100 text-black"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              {i}
            </button>
          );
      if (currentPage < totalPages - 2)
        buttons.push(
          <span key="ellipsis2" className="text-gray-500 text-xs sm:text-sm mx-1">
            ...
          </span>
        );
      if (totalPages > 1)
        buttons.push(
          <button
            key={totalPages}
            onClick={() => handlePageChange(totalPages)}
            className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-xs sm:text-sm font-medium rounded-md transition-colors ${
              currentPage === totalPages
                ? "bg-purple-100 text-black"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            }`}
          >
            {totalPages}
          </button>
        );
    }
    return buttons;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Canceled":
        return "bg-red-100 text-red-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="">
      <div className="mb-4 sm:mb-6">
        <h1 className="text-lg sm:text-xl md:text-2xl font-medium mb-2">Payment</h1>
        <p className="text-xs sm:text-sm text-gray-600">Track payment of your customers.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-200"
          >
            <h3 className="text-xs sm:text-sm font-medium text-gray-600">{stat.title}</h3>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mt-2">
              {stat.value}
            </p>
            {stat.change && (
              <div className="flex items-center mt-1 text-xs sm:text-sm">
                {stat.changeType === "increase" ? (
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-1" />
                ) : (
                  <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 mr-1" />
                )}
                <span
                  className={stat.changeType === "increase" ? "text-green-600" : "text-red-600"}
                >
                  {stat.change}
                </span>
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
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">Payment</h1>
              <p className="text-xs sm:text-sm text-gray-600">{`Showing ${currentServices.length} of ${filteredServices.length} payments`}</p>
            </div>
            <input
              type="text"
              placeholder="Search payments..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full sm:w-64 md:w-80 px-3 sm:px-4 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Desktop: Table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="text-left text-gray-600 uppercase text-xs sm:text-sm font-bold">
                <th className="py-3 px-4 sm:px-5">Plan</th>
                <th className="py-3 px-4 sm:px-5">Customer Name</th>
                <th className="py-3 px-4 sm:px-5">Date</th>
                <th className="py-3 px-4 sm:px-5">Price</th>
                <th className="py-3 px-4 sm:px-5">Payment</th>
                <th className="py-3 px-4 sm:px-5">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentServices.length > 0 ? (
                currentServices.map((service) => (
                  <tr
                    key={service.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="p-4 sm:p-5 text-xs sm:text-sm text-gray-700">
                      <Link to={`/admin/payment-details/${service.id}`}>
                        {service.planName}
                      </Link>
                    </td>
                    <td className="p-4 sm:p-5 text-xs sm:text-sm text-gray-700">
                      {service.customerName}
                    </td>
                    <td className="p-4 sm:p-5 text-xs sm:text-sm text-gray-700">{service.date}</td>
                    <td className="p-4 sm:p-5 text-xs sm:text-sm text-gray-700">{service.price}</td>
                    <td className="p-4 sm:p-5 text-xs sm:text-sm text-gray-700">
                      {service.PaymentMethod}
                    </td>
                    <td className="p-4 sm:p-5">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          service.status
                        )}`}
                      >
                        {service.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-6 text-gray-500 text-xs sm:text-sm font-medium"
                  >
                    No payments found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile: Card Layout */}
        <div className="sm:hidden space-y-4 p-4">
          {currentServices.length > 0 ? (
            currentServices.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-lg p-4"
              >
                <div className="flex justify-between items-start">
                  <Link
                    to={`/admin/payment-details/${service.id}`}
                    className="text-sm font-medium text-gray-900"
                  >
                    {service.planName}
                  </Link>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      service.status
                    )}`}
                  >
                    {service.status}
                  </span>
                </div>
                <div className="mt-3 space-y-2 text-xs">
                  <div>
                    <span className="font-medium text-gray-700">Customer:</span>{" "}
                    {service.customerName}
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Date:</span>{" "}
                    {service.date}
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Price:</span>{" "}
                    {service.price}
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Payment:</span>{" "}
                    {service.PaymentMethod}
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Service Type:</span>{" "}
                    {service.service_type}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-6 text-gray-500 text-sm">
              No payments found matching your criteria.
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 border-t border-gray-200">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-md transition-colors ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
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
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Next
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;