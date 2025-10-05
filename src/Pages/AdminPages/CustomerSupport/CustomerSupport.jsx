import { useState } from "react";
import question from "../../../assets/icons/question.svg";

const CustomerSupport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [replyMessage, setReplyMessage] = useState("");

  const tickets = [
    {
      id: "TKT-001",
      title: "Having problem in installing eSIM",
      customer: "john@gmail.com",
      customerName: "John Smith",
      created: "2 hours ago",
      status: "Open",
      messages: [
        {
          id: 1,
          sender: "John Smith",
          isCustomer: true,
          message: "Hi, I'm having trouble connecting to the network in Berlin. My eSIM shows as active but I can't get any data connection. Can you help?",
          timestamp: "2 hours ago"
        },
        {
          id: 2,
          sender: "Support Team",
          isCustomer: false,
          message: "Hello John, I can see your eSIM is active. There might be a temporary network issue in your area. Please try restarting your device and selecting the network manually. I'll also check with our carrier partner.",
          timestamp: "1 hour ago"
        }
      ]
    },
    {
      id: "TKT-002",
      title: "Connection issue in Germany",
      customer: "johnsmith@gmail.com",
      customerName: "John Smith",
      created: "3 hours ago",
      status: "Open",
      messages: [
        {
          id: 1,
          sender: "John Smith",
          isCustomer: true,
          message: "I'm experiencing connection issues in Germany. The eSIM is installed but no data is working.",
          timestamp: "3 hours ago"
        }
      ]
    }
  ];

  const openModal = (ticket) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTicket(null);
    setReplyMessage("");
  };

  const handleSendReply = () => {
    if (replyMessage.trim()) {
      console.log("Sending reply:", replyMessage);
      setReplyMessage("");
    }
  };

  return (
    <div className="">
      <div className="mb-4 sm:mb-6">
        <h1 className="text-lg sm:text-xl md:text-2xl font-medium mb-2">Customer Support</h1>
        <p className="text-xs sm:text-sm text-gray-600">Handle customer support requests</p>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="p-4 sm:p-5 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
            <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">Support Tickets</h1>
            <input
              type="text"
              placeholder="Search tickets..."
              className="w-full sm:w-64 md:w-80 px-3 sm:px-4 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <div key={ticket.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3 sm:gap-4">
                  <img src={question} alt="Question icon" className="w-6 h-6 sm:w-8 sm:h-8" />
                  <div>
                    <p className="text-sm sm:text-base font-medium text-gray-900">{ticket.title}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{ticket.customer}</p>
                  </div>
                </div>
                <button
                  onClick={() => openModal(ticket)}
                  className="w-full sm:w-auto px-4 py-1.5 text-xs sm:text-sm rounded-full bg-blue-200 text-blue-600 hover:bg-blue-300 transition-colors"
                >
                  Open
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-6 text-gray-500 text-xs sm:text-sm">No tickets found.</div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedTicket && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 sm:p-6">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg sm:max-w-xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">Support</h2>
              <div className="text-red-600 space-y-1 bg-red-50 w-full p-3 sm:p-4 rounded-lg text-xs sm:text-sm">
                <p className="font-medium">Ticket {selectedTicket.id}: {selectedTicket.title}</p>
                <p>Customer: {selectedTicket.customer}</p>
                <p>Created: {selectedTicket.created}</p>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 sm:p-6 max-h-80 sm:max-h-96 overflow-y-auto space-y-3 sm:space-y-4">
              {selectedTicket.messages.map((message) => (
                <div key={message.id} className="flex items-start gap-2 sm:gap-3">
                  <div
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-medium ${
                      message.isCustomer ? "bg-blue-500" : "bg-purple-500"
                    }`}
                  >
                    {message.sender.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs sm:text-sm font-medium text-gray-900">{message.sender}</span>
                      <span className="text-xs text-gray-500">{message.timestamp}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{message.message}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reply Section */}
            <div className="border-t border-gray-200 p-4 sm:p-6">
              <h3 className="text-xs sm:text-sm font-medium text-gray-900 mb-2 sm:mb-3">Reply to customer</h3>
              <textarea
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                placeholder="Type your response here..."
                className="w-full h-20 sm:h-24 p-3 text-xs sm:text-sm border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 mt-3 sm:mt-4">
                <button
                  onClick={closeModal}
                  className="w-full sm:w-auto px-4 py-2 text-xs sm:text-sm text-gray-600 hover:text-gray-800 bg-gray-200 rounded-lg transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={handleSendReply}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 text-xs sm:text-sm bg-[#4776EB] text-white rounded-lg hover:bg-[#3a5fd5] transition-colors"
                >
                  Send reply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerSupport;