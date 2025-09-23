import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
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
          sender: "John Smith",
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
      <SectionTitle
        title={"Customer Support"}
        description={"Handle customer support requests"}
      />
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Support Ticket
              </h1>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-64 sm:w-80 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div className="p-4 space-y-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src={question} alt="" />
                <span>
                  <p>{ticket.title}</p>
                  <p className="text-[#919191]">{ticket.customer}</p>
                </span>
              </div>
              <button 
                onClick={() => openModal(ticket)}
                className="px-3 py-1 rounded-full bg-blue-200 text-blue-600 hover:bg-blue-300 transition-colors"
              >
                Open
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedTicket && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">Support</h2>
                  <div className="text-red-600 space-y-1 bg-red-50 w-full p-4 rounded-lg">
                    <p className="font-medium">Ticket {selectedTicket.id}: {selectedTicket.title}</p>
                    <p>Customer: {selectedTicket.customer}</p>
                    <p>Created: {selectedTicket.created}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-6 max-h-96 overflow-y-auto space-y-4">
              {selectedTicket.messages.map((message) => (
                <div key={message.id} className="flex items-start gap-3">
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                    message.isCustomer ? 'bg-blue-500' : 'bg-purple-500'
                  }`}>
                    {message.sender.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">{message.sender}</span>
                      <span className="text-xs text-gray-500">{message.timestamp}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{message.message}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reply Section */}
            <div className="border-t border-gray-200 p-6">
              <h3 className="font-medium text-gray-900 mb-3">Reply to customer</h3>
              <textarea
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                placeholder="Type here your response"
                className="w-full h-24 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 bg-gray-200 rounded-lg transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={handleSendReply}
                  className="px-6 py-2 bg-[#4776EB] text-white rounded-lg  transition-colors"
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