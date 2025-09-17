import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  FileText,
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

  // Simulate data loading
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Simulate different data scenarios
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
  const circumference = Math.PI * radius; // Half circle circumference (180 degrees)
  const strokeDashoffset = circumference - (usagePercentage / 100) * circumference;

  // Format data display
  const formatData = (value) => {
    return value < 1
      ? `${(value * 1000).toFixed(0)}MB`
      : `${value.toFixed(1)}GB`;
  };

  // Reload data function
  const handleReload = () => {
    const scenarios = [
      {
        usedData: 0.3,
        totalData: 2,
        coverage: 137,
        iccidNum: "846421321645",
        daysRemaining: 29,
      },
    ];

    setTimeout(() => {
      const randomScenario =
        scenarios[Math.floor(Math.random() * scenarios.length)];
      setData(randomScenario);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen container mx-auto p-4 mt-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <ChevronLeft className="w-6 h-6 text-gray-600 mr-2" />
          <h1 className="text-xl font-semibold text-gray-900">Details</h1>
        </div>
        <button onClick={handleReload}>
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
              <svg
                className="w-96 h-48"
                viewBox="0 0 100 50" // Adjusted viewBox for half circle
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
                  strokeLinecap="round" // Ensures rounded endpoints
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
    </div>
  );
}