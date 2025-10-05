import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import { useState, useEffect } from "react";

const RevenueCharts = () => {
  const monthlyData = [
    { month: "Jan", primary: 44000, secondary: 50000 },
    { month: "Feb", primary: 25000, secondary: 43000 },
    { month: "Mar", primary: 32000, secondary: 47000 },
    { month: "Apr", primary: 25000, secondary: 42000 },
    { month: "May", primary: 35000, secondary: 43000 },
    { month: "Jun", primary: 25000, secondary: 44000 },
    { month: "Jul", primary: 25000, secondary: 33000 },
    { month: "Aug", primary: 38000, secondary: 44000 },
    { month: "Sep", primary: 25000, secondary: 43000 },
    { month: "Oct", primary: 32000, secondary: 44000 },
    { month: "Nov", primary: 38000, secondary: 43000 },
    { month: "Dec", primary: 25000, secondary: 42000 },
  ];

  const pieData = [
    { name: "Countries", value: 70, color: "#FF7782" },
    { name: "Regions", value: 20, color: "#FDE047" },
    { name: "Global", value: 10, color: "#799EFF" },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const barHeight = isMobile ? 300 : 320;
  const pieSize = isMobile ? 200 : 240;

  const formatYAxis = (value) => {
    return `${value / 1000}K`;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded shadow-lg">
          <p className="text-md font-medium mb-2 text-gray-900">{`Month: ${label}`}</p>
          <p className="text-sm text-gray-600">{`Current year: $${payload[0].value.toLocaleString()}`}</p>
          <p className="text-sm text-gray-600">{`Last year: $${payload[1].value.toLocaleString()}`}</p>
        </div>
      );
    }
    return null;
  };

  const PieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 rounded shadow-lg">
          <p className="text-sm text-gray-900">{`Category: ${payload[0].name}`}</p>
          <p className="text-sm text-gray-600">{`Value: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen mt-7">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="mb-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">
                Monthly Revenue
              </h2>
              <p className="text-sm text-gray-500">Earning over last year</p>
            </div>
            <div className="flex flex-wrap gap-5 items-center justify-center sm:justify-end">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 h-4 w-4 rounded-full"></div>
                <p className="text-sm">Last year</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-400 h-4 w-4 rounded-full"></div>
                <p className="text-sm">Current year</p>
              </div>
            </div>
          </div>
          <div className="h-[320px] lg:h-[400px] sm:h-80" style={{ minHeight: `${barHeight}px` }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthlyData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                  tickFormatter={formatYAxis}
                  domain={[0, 60000]}
                  ticks={[0, 10000, 20000, 30000, 40000, 50000]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="secondary"
                  fill="#799EFF"
                  radius={isMobile ? [10, 10, 10, 10] : [20, 20, 20, 20]}
                />
                <Bar
                  dataKey="primary"
                  fill="#3D5EFF"
                  radius={isMobile ? [10, 10, 10, 10] : [20, 20, 20, 20]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">
              Earning Activity
            </h2>
            <p className="text-sm text-gray-500">last month earning activity</p>
          </div>
          <div className="flex justify-center mb-8">
            <div className="relative" style={{ width: pieSize, height: pieSize }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip content={<PieTooltip />} />
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={isMobile ? 30 : 50}
                    outerRadius={isMobile ? 60 : 80}
                    paddingAngle={2}
                    dataKey="value"
                    startAngle={90}
                    endAngle={450}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-around sm:justify-between space-y-2 sm:space-y-0 gap-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#FF7782] mr-3"></div>
              <span className="text-sm text-gray-600">Countries</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-300 mr-3"></div>
              <span className="text-sm text-gray-600">Regions</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#799EFF] mr-3"></div>
              <span className="text-sm text-gray-600">Global</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueCharts;