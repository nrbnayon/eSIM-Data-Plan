import { ChevronLeft, ChevronRight } from "lucide-react";

const TroubleshootingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const faqs = [
    {
      question: "About eSIMs",
      answer:
        "Facing trouble with your eSIM? Find step‑by‑step solutions for activation delays, signal problems, device visibility, and QR code errors.",
    },
    {
      question: "About Your eSIMs Data Plan",
      answer:
        "Facing trouble with your eSIM? Find step‑by‑step solutions for activation delays, signal problems, device visibility, and QR code errors.",
    },
    {
      question: "Payment, Billing & Refunds",
      answer:
        "Facing trouble with your eSIM? Find step‑by‑step solutions for activation delays, signal problems, device visibility, and QR code errors.",
    },
    {
      question: "Managing Your eSIMs Account",
      answer: "Facing trouble with your eSIM? Find step‑by‑step solutions for activation delays, signal problems, device visibility, and QR code errors.",
    },
    {
      question: "eSIMs Promotion & Rewards",
      answer: "Facing trouble with your eSIM? Find step‑by‑step solutions for activation delays, signal problems, device visibility, and QR code errors.",
    },
    {
      question: "About eSIMs",
      answer: "Facing trouble with your eSIM? Find step‑by‑step solutions for activation delays, signal problems, device visibility, and QR code errors.",
    },
    {
      question: "Managing Your eSIMs Account",
      answer: "Facing trouble with your eSIM? Find step‑by‑step solutions for activation delays, signal problems, device visibility, and QR code errors.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center  md:p-0 p-4">
      <div className="bg-white rounded-lg p-6 md:min-w-6xl  h-[80vh] overflow-auto space-y-4">
        <div className="flex gap-4 items-center font-medium mb-7">
          <button onClick={onClose} className="">
            <ChevronLeft />
          </button>
          <h2 className="text-2xl">Troubleshooting</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b p-2 border-gray-200 hover:bg-gray-50 ">
              <div className="w-full text-left text-gray-700 flex justify-between items-center transition-colors duration-200">
                <div>
                  <h1 className="font-medium">{faq.question}</h1>
                  <p className="text-[#908F90] text-sm">{faq.answer}</p>
                </div>
                  <ChevronRight />
              </div>
              <p className="text-[#908F90] text-xs pt-5">15 Articles</p>
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

export default TroubleshootingModal;
