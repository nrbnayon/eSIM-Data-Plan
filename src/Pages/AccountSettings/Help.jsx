import { useState } from "react";
import SupportModal from "../Support/SupportModal";
import ChatModal from "../Support/ChatModal";
import TroubleshootingModal from "../../components/TroubleshootingModal";
import FAQModal from "../../components/FAQModal";

export default function Help() {
  const [supportOpen, setSupportOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [troubleshootingOpen, setTroubleshootingOpen] = useState(false);
  const [FaqModal, setFaqModal] = useState(false);

  // Open Support modal
  const openSupport = () => setSupportOpen(true);

  // Close Support modal
  const closeSupport = () => setSupportOpen(false);

  // Open Chat modal and close Support modal
  const openChat = () => {
    closeSupport();
    setChatOpen(true);
  };

  // Close Chat modal
  const closeChat = () => setChatOpen(false);

  // Open Troubleshooting modal
  const openTroubleshooting = () => setTroubleshootingOpen(true);

  // Close Troubleshooting modal
  const closeTroubleshooting = () => setTroubleshootingOpen(false);

  // Open FAQ modal
  const openFAQ = () => setFaqModal(true);

  // Close FAQ modal
  const closeFAQ = () => setFaqModal(false);

  return (
    <div className="">
      <div className="">
        <h1
          className="border-b border-gray-200 py-2 cursor-pointer hover:bg-gray-100"
          onClick={openFAQ}
        >
          FAQ
        </h1>
        <h1
          className="border-b border-gray-200 py-2 cursor-pointer hover:bg-gray-100"
          onClick={openTroubleshooting}
        >
          Troubleshooting
        </h1>
        <h1
          className="border-b border-gray-200 py-2 cursor-pointer hover:bg-gray-100"
          onClick={openSupport}
        >
          Support
        </h1>
      </div>

      {/* FAQ Modal */}
      <FAQModal isOpen={FaqModal} onClose={closeFAQ} />

      {/* Troubleshooting Modal */}
      <TroubleshootingModal
        isOpen={troubleshootingOpen}
        onClose={closeTroubleshooting}
      />

      {/* Support Modal */}
      <SupportModal
        isOpen={supportOpen}
        onClose={closeSupport}
        openChat={openChat}
      />

      {/* Chat Modal */}
      <ChatModal isOpen={chatOpen} onClose={closeChat} />
    </div>
  );
}
