import { ArrowLeft, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const ChatModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send message and get AI response
  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    const userMessage = input;
    setInput("");
    setTimeout(() => {
      const aiResponse = getAIResponse(userMessage);
      setMessages((prev) => [...prev, { text: aiResponse, sender: "ai" }]);
    }, 500);
  };

  // Simple AI response logic
  const getAIResponse = (userMessage) => {
    const responses = {
      hi: "Hello! How can I assist you today?",
      "what are you doing":
        "Just chilling in the digital realm, ready to answer your questions!",
      help: "I'm here to help! What's on your mind?",
      default: `Hmm, not sure about "${userMessage}". Try something else!`,
    };
    return responses[userMessage.toLowerCase()] || responses.default;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md h-[80vh] flex flex-col shadow-xl">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-200">
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <ArrowLeft size={24} />
          </button>
          <div className="flex items-center gap-3">
            <img
              src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/supportmale-512.png"
              alt="AI Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-semibold text-gray-800">Support</span>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] px-3 py-1 rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-orange-400 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="flex items-center p-4 border-t rounded-2xl border-gray-200 bg-white">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
            className="flex-1 py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 text-gray-800 placeholder-gray-400"
          />
          <button
            onClick={sendMessage}
            className="ml-2 p-2 bg-orange-300 text-white rounded-full hover:bg-orange-400 transition"
          >
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
