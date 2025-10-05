"use client";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  FileText,
  Trash2,
  CircleFadingArrowUpIcon,
  HeadphonesIcon,
} from "lucide-react";
import SupportModal from "../Support/SupportModal";
import ChatModal from "../Support/ChatModal";
import { Link, useNavigate } from "react-router-dom";

export default function ESIMDetails() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    usedData: 0,
    totalData: 2,
    coverage: 137,
    iccidNum: "846421321645",
    daysRemaining: 30,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  const closeSupport = () => setSupportOpen(false);
  const openChat = () => {
    closeSupport();
    setChatOpen(true);
  };
  const closeChat = () => setChatOpen(false);

  const handleMenuItemClick = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const handleSupportClick = (e) => {
    setIsModalOpen(false);
    e.preventDefault();
    setSupportOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };

  // Simulate data loading
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 300));

      const scenarios = [
        {
          usedData: 0.5,
          totalData: 2,
          coverage: 137,
          iccidNum: "846421321645",
          daysRemaining: 28,
        },
        {
          usedData: 1.2,
          totalData: 2,
          coverage: 137,
          iccidNum: "846421321645",
          daysRemaining: 25,
        },
        {
          usedData: 0.8,
          totalData: 2,
          coverage: 137,
          iccidNum: "846421321645",
          daysRemaining: 30,
        },
        {
          usedData: 1.8,
          totalData: 2,
          coverage: 137,
          iccidNum: "846421321645",
          daysRemaining: 15,
        },
      ];

      const randomScenario =
        scenarios[Math.floor(Math.random() * scenarios.length)];
      setData(randomScenario);
      setLoading(false);
    };

    loadData();
  }, []);

  // Calculate percentage for semicircular progress
  const usagePercentage = (data.usedData / data.totalData) * 100;
  const radius = 40;
  const circumference = Math.PI * radius;
  const strokeDashoffset =
    circumference - (usagePercentage / 100) * circumference;

  // Format data display
  const formatData = (value) => {
    return value < 1
      ? `${(value * 1000).toFixed(0)}MB`
      : `${value.toFixed(1)}GB`;
  };

  // Handle delete confirmation
  const handleDeleteConfirm = () => {
    setIsConfirmDeleteOpen(false);
    // Simulate deletion by resetting data to initial state
    setData({
      usedData: 0,
      totalData: 2,
      coverage: 137,
      iccidNum: "846421321645",
      daysRemaining: 30,
    });
    setIsModalOpen(false); // Close the modal after deletion
  };

  return (
    <div className="min-h-screen container mx-auto px-4 sm:px-6 py-6 sm:py-8 mt-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="mr-2">
            <ChevronLeft
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
              strokeWidth={1.5}
            />
          </button>
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
            Details
          </h1>
        </div>
        <button onClick={() => setIsModalOpen(true)}>
          <MoreVertical
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
            strokeWidth={1.5}
          />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
        {/* Data Usage Card */}
        <div className="bg-white col-span-1 border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-lg animate-fadeIn">
          <div className="text-center mb-4 sm:mb-6">
            <div className="text-xs sm:text-sm text-gray-500 mb-1">
              {data.daysRemaining} days
            </div>

            {/* Semicircular Progress */}
            <div className="relative w-full h-24 sm:h-32 md:h-40 mx-auto mb-4">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 50"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Background semicircle */}
                <path
                  d="M 10 50 A 40 40 0 0 1 90 50"
                  stroke="#f3f4f6"
                  strokeWidth="5"
                  fill="none"
                />
                {/* Progress semicircle - animated based on usage */}
                <path
                  d="M 10 50 A 40 40 0 0 1 90 50"
                  stroke="#fb923c"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>

              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
                <div className="text-xs sm:text-sm text-gray-500 mb-1">Data</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">
                  {data.totalData}GB
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  Out of {data.totalData} GB
                </div>
              </div>
            </div>
          </div>

          {/* Data Summary */}
          <div className="flex justify-between items-center">
            <div className="text-center">
              <div className="text-xs sm:text-sm text-gray-500 mb-1">
                Used Data
              </div>
              <div className="text-lg sm:text-xl font-bold text-orange-500 transition-all duration-500">
                {formatData(data.usedData)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs sm:text-sm text-gray-500 mb-1">
                Total Data
              </div>
              <div className="text-lg sm:text-xl font-bold text-orange-500">
                {formatData(data.totalData)}
              </div>
            </div>
          </div>

          {/* Usage Percentage */}
          <div className="mt-4 text-center">
            <div className="text-xs sm:text-sm text-gray-500">
              Usage:{" "}
              <span className="font-semibold text-orange-500">
                {usagePercentage.toFixed(1)}%
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-1 sm:col-span-2">
          {/* Coverage Card */}
          <div
            className="p-4 sm:p-6 animate-fadeIn"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm text-gray-600">Coverage</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-900">
                {data.coverage} Countries
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-600">ICCID NUM</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-900">
                {data.iccidNum}
              </span>
            </div>
          </div>

          {/* eSIMs Installation Card */}
          <div
            className="p-4 sm:p-6 animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
              eSIMs Installation
            </h3>

            <Link
              to="/instruction"
              className="bg-orange-50 rounded-xl p-3 sm:p-4 flex items-center justify-between hover:bg-orange-100 transition-colors cursor-pointer"
            >
              <div className="flex items-center">
                <div className="bg-white rounded-lg p-1.5 sm:p-2 mr-2 sm:mr-3">
                  <FileText
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-700 font-medium">
                  View instruction
                </span>
              </div>
              <ChevronRight
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[90%] sm:max-w-[400px] shadow-lg">
            <div className="space-y-3">
              <h2 className="text-xs sm:text-sm text-center mb-6 sm:mb-7">
                What do you like to do with your eSIM?
              </h2>

              <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                <CircleFadingArrowUpIcon
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="text-xs sm:text-sm font-medium">Archive</h3>
                  <p className="text-xs">Saved for later</p>
                </div>
              </div>
              <a
                onClick={(e) => {
                  handleSupportClick(e);
                  handleMenuItemClick();
                }}
                className="flex items-center gap-2 sm:gap-3 cursor-pointer"
              >
                <HeadphonesIcon
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="text-xs sm:text-sm font-medium">Get Support</h3>
                  <p className="text-xs">Contact customer service</p>
                </div>
              </a>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setIsConfirmDeleteOpen(true);
                }}
                className="flex items-center text-red-500 text-left gap-2 sm:gap-3 cursor-pointer"
              >
                <Trash2
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="text-xs sm:text-sm font-medium">Deactivate ESIM</h3>
                  <p className="text-xs">Remove from device</p>
                </div>
              </button>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="text-center p-2 sm:p-3 bg-black text-white w-full rounded-full mt-4 sm:mt-5"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Confirm Deactivate Modal */}
      {isConfirmDeleteOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[90%] sm:max-w-[400px] shadow-lg text-center">
            <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Confirm Deactivate
            </h2>
            <p className="text-xs sm:text-sm mb-4 sm:mb-6">
              Are you sure you want to Deactivate this eSIM?
            </p>
            <div className="flex justify-center gap-3 sm:gap-4">
              <button
                onClick={() => setIsConfirmDeleteOpen(false)}
                className="py-2 px-3 sm:px-4 bg-gray-200 rounded-md hover:bg-gray-300 text-xs sm:text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="py-2 px-3 sm:px-4 bg-red-600 text-white rounded-md hover:bg-red-700 text-xs sm:text-sm"
              >
                Deactivate
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Shared Modal */}
      <SupportModal isOpen={supportOpen} onClose={closeSupport} openChat={openChat} />
      <ChatModal isOpen={chatOpen} onClose={closeChat} />
    </div>
  );
}