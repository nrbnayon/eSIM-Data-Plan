import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const FAQModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "Our return policy allows returns within 30 days of purchase with a valid receipt.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order by logging into your account and visiting the 'My Orders' section.",
    },
    {
      question: "Can I change my shipping address?",
      answer:
        "Yes, you can change your shipping address before the order is shipped. Contact support for assistance.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Visa, Mastercard, American Express, and PayPal.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center md:p-0 p-4">
      <div className="bg-white rounded-lg p-6 md:min-w-6xl space-y-4">
        <div className="flex gap-4 items-center font-medium mb-7">
          <button onClick={onClose} className="">
            <ChevronLeft />
          </button>
          <h2 className="text-2xl">eSIMs Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => handleQuestionClick(index)}
                className="w-full text-left p-2 text-gray-700 font-medium flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span>{faq.question}</span>
                <span>
                  {activeIndex === index ? <ChevronDown /> : <ChevronRight />}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-2 text-gray-400">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-200 text-black font-medium  rounded-full px-5 py-2 mt-5  cursor-pointer hover:bg-gray-300 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQModal;
