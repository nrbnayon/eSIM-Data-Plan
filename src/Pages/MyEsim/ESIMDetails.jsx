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

export default function ESIMDetails() {
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
    <div className="min-h-screen container mx-auto p-4 mt-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <ChevronLeft className="w-6 h-6 text-gray-600 mr-2" />
          <h1 className="text-xl font-semibold text-gray-900">Details</h1>
        </div>
        <button onClick={() => setIsModalOpen(true)}>
          <MoreVertical className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {/* Data Usage Card */}
        <div className="bg-white col-span-1 border border-gray-200 rounded-2xl p-6 shadow-lg animate-fadeIn">
          <div className="text-center mb-6">
            <div className="text-sm text-gray-500 mb-1">
              {data.daysRemaining} days
            </div>

            {/* Semicircular Progress */}
            <div className="relative w-96 h-48 mx-auto mb-4">
              <svg className="w-96 h-48" viewBox="0 0 100 50">
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
                <div className="text-sm text-gray-500 mb-1">Data</div>
                <div className="text-4xl font-bold text-orange-500">
                  {data.totalData}GB
                </div>
                <div className="text-sm text-gray-500">
                  Out of {data.totalData} GB
                </div>
              </div>
            </div>
          </div>

          {/* Data Summary */}
          <div className="flex justify-between items-center">
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">Used Data</div>
              <div className="text-2xl font-bold text-orange-500 transition-all duration-500">
                {formatData(data.usedData)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">Total Data</div>
              <div className="text-2xl font-bold text-orange-500">
                {formatData(data.totalData)}
              </div>
            </div>
          </div>

          {/* Usage Percentage */}
          <div className="mt-4 text-center">
            <div className="text-sm text-gray-500">
              Usage:{" "}
              <span className="font-semibold text-orange-500">
                {usagePercentage.toFixed(1)}%
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          {/* Coverage Card */}
          <div
            className="p-6 animate-fadeIn"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Coverage</span>
              <span className="font-semibold text-gray-900">
                {data.coverage} Countries
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">ICCID NUM</span>
              <span className="font-semibold text-gray-900">
                {data.iccidNum}
              </span>
            </div>
          </div>

          {/* eSIMs Installation Card */}
          <div
            className="p-6 animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              eSIMs Installation
            </h3>

            <div className="bg-orange-50 rounded-xl p-4 flex items-center justify-between hover:bg-orange-100 transition-colors cursor-pointer">
              <div className="flex items-center">
                <div className="bg-white rounded-lg p-2 mr-3">
                  <FileText className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-gray-700 font-medium">
                  View instruction
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 min-w-md shadow-lg">
            <div className="space-y-3">
              <h2 className="text-sm text-center mb-7">
                What do you like to do with your eSIM?
              </h2>

              <div className="flex items-center gap-3">
                <CircleFadingArrowUpIcon />
                <div>
                  <h3 className="text-sm font-medium">Archive</h3>
                  <p className="text-xs">Saved for later</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <HeadphonesIcon />
                <div>
                  <h3 className="text-sm font-medium">Get Support</h3>
                  <p className="text-xs">Contact customer service</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setIsConfirmDeleteOpen(true);
                }}
                className="flex items-center text-red-500 text-left gap-3"
              >
                <Trash2 />
                <div>
                  <h3 className="text-sm font-medium">Deactivate ESIM</h3>
                  <p className="text-xs">Remove from device</p>
                </div>
              </button>
            </div>

            <button onClick={() => setIsModalOpen(false)} className="text-center p-2 bg-black text-white w-full rounded-full mt-5">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Confirm Delete Modal */}
      {isConfirmDeleteOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 min-w-md shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
            <p className="mb-6">Are you sure you want to delete this eSIM?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setIsConfirmDeleteOpen(false)}
                className="py-2 px-4 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
