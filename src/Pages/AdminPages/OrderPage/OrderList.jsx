// import { useState } from "react";
// import { ChevronLeft, ChevronRight, TrendingDown, TrendingUp } from "lucide-react";
// import { Link } from "react-router-dom";
// import SectionTitle from "../../../components/SectionTitle";

// const OrderList = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const itemsPerPage = 7;

//   const orders = [
//     { id: "ORD-AX93K7-1", eventName: "Catering", date: "Jan 6, 2025", plan: "Asia 7 days", seller: "Phoenix Baker", buyer: "Andi Lane", price: "$2,000", status: "Active" },
//     { id: "ORD-AX93K7-2", eventName: "Wedding photography expert in chicago", date: "Jan 6, 2025", plan: "Asia 7 days", seller: "Drew Cano", buyer: "Kate Morrison", price: "$3,500", status: "Canceled" },
//     { id: "ORD-AX93K7-3", eventName: "Dj", date: "Jan 6, 2025", plan: "Asia 7 days", seller: "Phoenix Baker", buyer: "Andi Lane", price: "$1,800", status: "Active" },
//     { id: "ORD-AX93K7-4", eventName: "Catering", date: "Jan 6, 2025", plan: "Asia 7 days", seller: "Drew Cano", buyer: "Kate Morrison", price: "$2,000", status: "Pending" },
//     { id: "ORD-AX93K7-5", eventName: "Wedding photography expert in chicago", date: "Jan 6, 2025", plan: "Asia 7 days", seller: "Phoenix Baker", buyer: "Andi Lane", price: "$3,500", status: "Active" },
//     { id: "ORD-AX93K7-6", eventName: "Dj", date: "Jan 6, 2025", plan: "Asia 7 days", seller: "Drew Cano", buyer: "Kate Morrison", price: "$1,800", status: "Canceled" },
//     { id: "ORD-AX93K7-7", eventName: "Catering", date: "Jan 6, 2025", plan: "Asia 7 days", seller: "Phoenix Baker", buyer: "Andi Lane", price: "$2,000", status: "Active" },
//     { id: "ORD-AX93ssa", eventName: "Catering", date: "Jan 6, 2025", plan: "Asia 7 days", seller: "Phoenix Baker", buyer: "Andi Lane", price: "$2,000", status: "Active" },
//     { id: "ORD-AX93sas", eventName: "Catering", date: "Jan 6, 2025", plan: "Asia 7 days", seller: "Phoenix Baker", buyer: "Andi Lane", price: "$2,000", status: "Active" },
//   ];

//   const totalOrders = orders.length;
//   const activeOrders = orders.filter((order) => order.status === "Active").length;
//   const canceledOrders = orders.filter((order) => order.status === "Canceled").length;
//   const stats = [
//     { title: "Total Orders", value: totalOrders, change: "40%", changeType: "increase", comparison: "vs last month" },
//     { title: "Active Orders", value: activeOrders, change: "20%", changeType: "decrease", comparison: "vs last month" },
//     { title: "Total Cancel", value: canceledOrders, change: "20%", changeType: "decrease", comparison: "From last month" },
//   ];

//   const filteredOrders = orders.filter((order) =>
//     !searchQuery ||
//     [order.eventName, order.seller, order.buyer].some((field) =>
//       field.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//   );

//   const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//     setCurrentPage(1);
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const renderPaginationButtons = () => {
//     const buttons = [];
//     const maxVisiblePages = 5;
//     const start = Math.max(1, currentPage - 2);
//     const end = Math.min(totalPages, start + maxVisiblePages - 1);

//     // First page
//     buttons.push(
//       <button
//         key={1}
//         onClick={() => handlePageChange(1)}
//         className={`w-8 h-8 flex items-center justify-center text-sm font-medium rounded-md transition-colors ${
//           currentPage === 1 ? "bg-purple-100 text-black" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//         }`}
//       >
//         1
//       </button>
//     );

//     if (start > 2) buttons.push(<span key="ellipsis1" className="text-gray-500 mx-1">...</span>);

//     for (let i = start; i <= end; i++) {
//       if (i !== 1 && i !== totalPages) {
//         buttons.push(
//           <button
//             key={i}
//             onClick={() => handlePageChange(i)}
//             className={`w-8 h-8 flex items-center justify-center text-sm font-medium rounded-md transition-colors ${
//               currentPage === i ? "bg-purple-100 text-black" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//             }`}
//           >
//             {i}
//           </button>
//         );
//       }
//     }

//     if (end < totalPages - 1) buttons.push(<span key="ellipsis2" className="text-gray-500 mx-1">...</span>);
//     if (totalPages > 1) {
//       buttons.push(
//         <button
//           key={totalPages}
//           onClick={() => handlePageChange(totalPages)}
//           className={`w-8 h-8 flex items-center justify-center text-sm font-medium rounded-md transition-colors ${
//             currentPage === totalPages ? "bg-purple-100 text-black" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//           }`}
//         >
//           {totalPages}
//         </button>
//       );
//     }
//     return buttons;
//   };

//   return (
//     <div>
//       <SectionTitle title="Order List" description="Track, manage and forecast your customers and orders." />
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
//         {stats.map((stat, index) => (
//           <div key={index} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
//             <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
//             <p className="text-2xl font-semibold text-gray-900 mt-2">{stat.value}</p>
//             {stat.change && (
//               <div className="flex items-center mt-1 text-sm">
//                 {stat.changeType === "increase" ? (
//                   <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
//                 ) : (
//                   <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
//                 )}
//                 <span className={stat.changeType === "increase" ? "text-green-600" : "text-red-600"}>{stat.change}</span>
//                 <span className="text-gray-500 ml-1">{stat.comparison}</span>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
//         <div className="p-4">
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             className="w-full p-3 border border-gray-300 rounded-lg outline-none"
//           />
//         </div>
//         <p className="text-sm text-gray-600 p-4">Showing {currentOrders.length} of {filteredOrders.length} orders</p>
//         <div className="overflow-x-auto">
//           <table className="min-w-full">
//             <thead className="bg-gray-50">
//               <tr className="text-left text-gray-600 uppercase text-sm font-bold">
//                 <th className="py-3 px-4">ID</th>
//                 <th className="py-3 px-4">Customer</th>
//                 <th className="py-3 px-4">Plan</th>
//                 <th className="py-3 px-4">Date</th>
//                 <th className="py-3 px-4">Price</th>
//                 <th className="py-3 px-4">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentOrders.length > 0 ? (
//                 currentOrders.map((order) => (
//                   <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50">
//                     <td className="p-4 text-gray-700">
//                       <Link to={`/admin/order-details/${order.id}`}>{order.id}</Link>
//                     </td>
//                     <td className="p-4 text-gray-700">{order.seller}</td>
//                     <td className="p-4 text-gray-700">{order.plan}</td>
//                     <td className="p-4 text-gray-700">{order.date}</td>
//                     <td className="p-4 text-gray-700">{order.price}</td>
//                     <td className="p-4">
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs ${
//                           order.status === "Active"
//                             ? "bg-green-100 text-green-800"
//                             : order.status === "Canceled"
//                             ? "bg-red-100 text-red-800"
//                             : order.status === "Pending"
//                             ? "bg-yellow-100 text-yellow-800"
//                             : "bg-gray-100 text-gray-800"
//                         }`}
//                       >
//                         {order.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="text-center py-6 text-gray-500 font-medium">
//                     No order found matching your criteria.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {totalPages > 1 && (
//           <div className="p-4 flex items-center justify-between">
//             <button
//               onClick={handlePreviousPage}
//               disabled={currentPage === 1}
//               className={`flex items-center px-4 py-2 text-sm rounded-md ${
//                 currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               <ChevronLeft className="w-4 h-4 mr-2" /> Previous
//             </button>
//             <div className="flex space-x-2">{renderPaginationButtons()}</div>
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               className={`flex items-center px-4 py-2 text-sm rounded-md ${
//                 currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               Next <ChevronRight className="w-4 h-4 ml-2" />
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrderList;


import { useState } from "react";
import { ChevronLeft, ChevronRight, TrendingDown, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const OrderList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 7;

  const orders = [
    { id: "ORD-AX93K7-1", eventName: "Catering", date: "Jan 6, 2025", plan: "Asia 7 days", seller: "Phoenix Baker", buyer: "Andi Lane", price: "$2,000", status: "Active" },
    { id: "ORD-AX93K7-2", eventName: "Wedding photography expert in chicago", date: "Jan 6, 2025", plan: "Asia 7 days", seller: "Drew Cano", buyer: "Kate Morrison", price: "$3,500", status: "Canceled" },
    { id: "ORD-AX93K7-3", eventName: "Dj", date: "Jan 6, 2025", plan: "Asia 7 days", seller: "Phoenix Baker", buyer: "Andi Lane", price: "$1,800", status: "Active" },
    { id: "ORD-AX93K7-4", eventName: "Catering", date: "Jan 6, 2025", plan: "Asia 7 days", seller: "Drew Cano", buyer: "Kate Morrison", price: "$2,000", status: "Pending" },
    { id: "ORD-AX93K7-5", eventName: "Wedding photography expert in chicago", date: "Jan 6, 2025", plan: "Asia 7 days", seller: "Phoenix Baker", buyer: "Andi Lane", price: "$3,500", status: "Active" },
    { id: "ORD-AX93K7-6", eventName: "Dj", date: "Jan 6, 2025", plan: "Asia 7 days", seller: "Drew Cano", buyer: "Kate Morrison", price: "$1,800", status: "Canceled" },
    { id: "ORD-AX93K7-7", eventName: "Catering", date: "Jan 6, 2025", plan: "Asia 7 days", seller: "Phoenix Baker", buyer: "Andi Lane", price: "$2,000", status: "Active" },
    { id: "ORD-AX93ssa", eventName: "Catering", date: "Jan 6, 2025", plan: "Asia 7 days", seller: "Phoenix Baker", buyer: "Andi Lane", price: "$2,000", status: "Active" },
    { id: "ORD-AX93sas", eventName: "Catering", date: "Jan 6, 2025", plan: "Asia 7 days", seller: "Phoenix Baker", buyer: "Andi Lane", price: "$2,000", status: "Active" },
  ];

  const totalOrders = orders.length;
  const activeOrders = orders.filter((order) => order.status === "Active").length;
  const canceledOrders = orders.filter((order) => order.status === "Canceled").length;
  const stats = [
    { title: "Total Orders", value: totalOrders, change: "40%", changeType: "increase", comparison: "vs last month" },
    { title: "Active Orders", value: activeOrders, change: "20%", changeType: "decrease", comparison: "vs last month" },
    { title: "Total Cancel", value: canceledOrders, change: "20%", changeType: "decrease", comparison: "From last month" },
  ];

  const filteredOrders = orders.filter((order) =>
    !searchQuery ||
    [order.eventName, order.seller, order.buyer].some((field) =>
      field.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5;
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, start + maxVisiblePages - 1);

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

    if (start > 2) buttons.push(<span key="ellipsis1" className="text-gray-500 text-xs sm:text-sm mx-1">...</span>);

    for (let i = start; i <= end; i++) {
      if (i !== 1 && i !== totalPages) {
        buttons.push(
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
      }
    }

    if (end < totalPages - 1) buttons.push(<span key="ellipsis2" className="text-gray-500 text-xs sm:text-sm mx-1">...</span>);
    if (totalPages > 1) {
      buttons.push(
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
        <h1 className="text-lg sm:text-xl md:text-2xl font-medium mb-2">Order List</h1>
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
        <div className="p-4 sm:p-5">
          <input
            type="text"
            placeholder="Search orders..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full p-2 sm:p-3 text-xs sm:text-sm border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <p className="text-xs sm:text-sm text-gray-600 px-4 sm:px-5 pb-4">
          Showing {currentOrders.length} of {filteredOrders.length} orders
        </p>

        {/* Desktop: Table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="text-left text-gray-600 uppercase text-xs sm:text-sm font-bold">
                <th className="py-3 px-4 sm:px-5">ID</th>
                <th className="py-3 px-4 sm:px-5">Offer Name</th>
                <th className="py-3 px-4 sm:px-5">Customer</th>
                <th className="py-3 px-4 sm:px-5">Plan</th>
                <th className="py-3 px-4 sm:px-5">Date</th>
                <th className="py-3 px-4 sm:px-5">Price</th>
                <th className="py-3 px-4 sm:px-5">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.length > 0 ? (
                currentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 sm:p-5 text-xs sm:text-sm text-gray-700">
                      <Link to={`/dashboard/order-details/${order.id}`}>{order.id}</Link>
                    </td>
                    <td className="p-4 sm:p-5 text-xs sm:text-sm text-gray-700">{order.eventName}</td>
                    <td className="p-4 sm:p-5 text-xs sm:text-sm text-gray-700">{order.seller}</td>
                    <td className="p-4 sm:p-5 text-xs sm:text-sm text-gray-700">{order.plan}</td>
                    <td className="p-4 sm:p-5 text-xs sm:text-sm text-gray-700">{order.date}</td>
                    <td className="p-4 sm:p-5 text-xs sm:text-sm text-gray-700">{order.price}</td>
                    <td className="p-4 sm:p-5">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Canceled"
                            ? "bg-red-100 text-red-800"
                            : order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-6 text-gray-500 text-xs sm:text-sm font-medium">
                    No orders found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile: Card Layout */}
        <div className="sm:hidden space-y-4 p-4">
          {currentOrders.length > 0 ? (
            currentOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white border border-gray-200 rounded-lg p-4"
              >
                <div className="flex justify-between items-start">
                  <Link
                    to={`/dashboard/order-details/${order.id}`}
                    className="text-sm font-medium text-gray-900"
                  >
                    {order.id}
                  </Link>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      order.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Canceled"
                        ? "bg-red-100 text-red-800"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <div className="mt-3 space-y-2 text-xs">
                  <div>
                    <span className="font-medium text-gray-700">Offer Name:</span>{" "}
                    {order.eventName}
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Customer:</span>{" "}
                    {order.seller}
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Plan:</span>{" "}
                    {order.plan}
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Date:</span>{" "}
                    {order.date}
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Price:</span>{" "}
                    {order.price}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-6 text-gray-500 text-sm">
              No orders found matching your criteria.
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
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

export default OrderList;