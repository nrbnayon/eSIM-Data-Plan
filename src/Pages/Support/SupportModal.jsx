import { Mail, MessageCircleMoreIcon } from "lucide-react";
import { useState } from "react";

const SupportModal = ({ isOpen, onClose, openChat }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white text-[#5A5A5A] rounded-lg p-6 md:max-w-sm space-y-3">
        <p className="text-center text-sm mb-5">
          Choose your preferred channel to get help from our support team{" "}
        </p>

        <div className="flex gap-2 items-center cursor-pointer" onClick={() => window.location.href = "mailto:support@nfrii.com"}>
          <Mail className="text-orange-400" />
          <p>Support with Mail</p>
        </div>
        <div className="flex gap-2 items-center cursor-pointer" onClick={openChat}>
          <MessageCircleMoreIcon className="text-orange-400" />
          <p>Support with Chat</p>
        </div>
        <button
          onClick={onClose}
          className="bg-black text-white rounded-full px-4 py-2 mt-5 w-full cursor-pointer "
        >
          Cancel
        </button>
      </div>
    </div>
  );
};



export { SupportModal as default};