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

const IssueChart = () => {
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
    { name: "Countries", value: 70, color: "#027A48" },
    { name: "Regions", value: 20, color: "#FDE047" },
    { name: "Global", value: 10, color: "#799EFF" },
  ];

  const formatYAxis = (value) => {
    return `${value / 1000}K`;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 sm:p-3 border border-gray-200 rounded shadow-lg">
          <p className="text-sm sm:text-md font-medium mb-1 sm:mb-2 text-gray-900">{`Month: ${label}`}</p>
          <p className="text-xs sm:text-sm text-gray-600">{`Current year: $${payload[0].value.toLocaleString()}`}</p>
          <p className="text-xs sm:text-sm text-gray-600">{`Last year: $${payload[1].value.toLocaleString()}`}</p>
        </div>
      );
    }
    return null;
  };

  const PieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 rounded shadow-lg">
          <p className="text-xs sm:text-sm text-gray-900">{`Category: ${payload[0].name}`}</p>
          <p className="text-xs sm:text-sm text-gray-600">{`Value: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mt-7">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
          <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
            <div>
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1">Issue Generate</h2>
              <p className="text-xs sm:text-sm text-gray-500">Issues over last year</p>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-5">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-[#004528] h-3 w-3 sm:h-4 sm:w-4 rounded-full"></div>
                <p className="text-xs sm:text-sm">Last year</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-[#027A48] h-3 w-3 sm:h-4 sm:w-4 rounded-full"></div>
                <p className="text-xs sm:text-sm">Current year</p>
              </div>
            </div>
          </div>
          <div className="h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthlyData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#6B7280" }}
                  interval={0}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#6B7280" }}
                  tickFormatter={formatYAxis}
                  domain={[0, 60000]}
                  ticks={[0, 10000, 20000, 30000, 40000, 50000, 60000]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="secondary"
                  fill="#004528"
                  radius={[10, 10, 10, 10]}
                />
                <Bar
                  dataKey="primary"
                  fill="#027A48"
                  radius={[10, 10, 10, 10]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1">Issue Report</h2>
            <p className="text-xs sm:text-sm text-gray-500">Last month issue report</p>
          </div>
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip content={<PieTooltip />} />
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius="80%"
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
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {pieData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="w-3 h-3 sm:w-4 sm:h-4 rounded-full mr-2 sm:mr-3"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-xs sm:text-sm text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueChart;