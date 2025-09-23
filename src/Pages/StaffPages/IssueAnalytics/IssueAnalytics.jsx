

import { TrendingDown, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import SectionTitle from "../../../components/SectionTitle";

const IssueAnalytics = () => {

  const stats = [
    {
      title: "Open ticket",
      value: "200",
      change: "40%",
      changeType: "increase",
      comparison: "vs last month",
    },
    {
      title: "Pending Ticket",
      value: "20",
      change: "20%",
      changeType: "decrease",
      comparison: "vs last month",
    },
    {
      title: "Resolved Today",
      value: "180",
      change: "20%",
      changeType: "decrease",
      comparison: "From last month",
    },
  ];

  // Data for Plan Performance pie chart
  const planPerformanceData = [
    { name: "Solve", value: 60, color: "#027A48" },
    { name: "Pending", value: 25, color: "#FFE066" },
    { name: "Open", value: 15, color: "#4F8EF7" },
  ];

  // Data for Plan Usage horizontal bars
  const planUsageData = [
    { name: "Solve", percentage: 60, color: "#027A48" },
    { name: "Pending", percentage: 25, color: "#FFE066" },
    { name: "Open", percentage: 15, color: "#4F8EF7" },
  ];

  return (
    <div>
      <SectionTitle
        title="Analytics"
        description="Track, manage and forecast your customers and orders."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200"
          >
            <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
            <p className="text-xl sm:text-2xl font-semibold text-gray-900 mt-2">
              {stat.value}
            </p>
            {stat.change && (
              <div className="flex items-center mt-1 text-sm">
                {stat.changeType === "increase" ? (
                  <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                )}
                <span
                  className={
                    stat.changeType === "increase"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {stat.change}
                </span>
                <span className="text-gray-500 ml-1">{stat.comparison}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Chart section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Issue Report Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Issue Report</h3>
            <p className="text-sm text-gray-500">last month performance</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-48 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={planPerformanceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {planPerformanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="space-y-4">
              {planPerformanceData.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-gray-600 text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Plan Usage Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 col-span-2">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Report</h3>
            <p className="text-sm text-gray-500">Issue solved last month</p>
          </div>
          
          <div className="space-y-6">
            {planUsageData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm font-medium">{item.name}</span>
                  <span className="text-gray-900 font-semibold">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${item.percentage}%`,
                      backgroundColor: item.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueAnalytics;