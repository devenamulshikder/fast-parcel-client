import { use } from "react";
import {
  FiPackage,
  FiTruck,
  FiCheckCircle,
  FiClock,
  FiAlertTriangle,
  FiBarChart2,
  FiUsers,
} from "react-icons/fi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { AuthContext } from "../../provider/AuthProvider";

const DashboardOverview = () => {
  const { user } = use(AuthContext);
  const parcelData = [
    { name: "Mon", delivered: 12, inTransit: 8 },
    { name: "Tue", delivered: 19, inTransit: 11 },
    { name: "Wed", delivered: 15, inTransit: 9 },
    { name: "Thu", delivered: 22, inTransit: 13 },
    { name: "Fri", delivered: 18, inTransit: 7 },
    { name: "Sat", delivered: 10, inTransit: 4 },
    { name: "Sun", delivered: 5, inTransit: 2 },
  ];

  // Recent activity data
  const recentActivity = [
    {
      id: 1,
      tracking: "PKG12345",
      status: "Delivered",
      time: "10:30 AM",
      icon: <FiCheckCircle className="text-green-500" />,
    },
    {
      id: 2,
      tracking: "PKG12346",
      status: "In Transit",
      time: "9:15 AM",
      icon: <FiTruck className="text-blue-500" />,
    },
    {
      id: 3,
      tracking: "PKG12347",
      status: "Processing",
      time: "Yesterday",
      icon: <FiClock className="text-yellow-500" />,
    },
    {
      id: 4,
      tracking: "PKG12348",
      status: "Delayed",
      time: "Yesterday",
      icon: <FiAlertTriangle className="text-orange-500" />,
    },
    {
      id: 5,
      tracking: "PKG12349",
      status: "Delivered",
      time: "Yesterday",
      icon: <FiCheckCircle className="text-green-500" />,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-primary">
          Welcome back, {user.displayName}
        </h2>
        <p className="text-secondary">
          Here's what's happening with your parcels today
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Parcels"
          value="142"
          change="+12% from last week"
          icon={<FiPackage className="text-blue-500" size={24} />}
          bgColor="bg-blue-50"
        />
        <MetricCard
          title="Delivered"
          value="98"
          change="+8% from last week"
          icon={<FiCheckCircle className="text-green-500" size={24} />}
          bgColor="bg-green-50"
        />
        <MetricCard
          title="In Transit"
          value="32"
          change="-3% from last week"
          icon={<FiTruck className="text-yellow-500" size={24} />}
          bgColor="bg-yellow-50"
        />
        <MetricCard
          title="Delayed"
          value="12"
          change="+2 from yesterday"
          icon={<FiAlertTriangle className="text-red-500" size={24} />}
          bgColor="bg-red-50"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Weekly Parcel Activity
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={parcelData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="delivered" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                <Bar dataKey="inTransit" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="p-2 rounded-full bg-gray-100 mr-4">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">
                    {activity.tracking}
                  </p>
                  <p className="text-sm text-gray-500">{activity.status}</p>
                </div>
                <div className="text-sm text-gray-500">{activity.time}</div>
              </div>
            ))}
          </div>
          <button className="mt-4 text-sm text-primary hover:text-primary-dark font-medium">
            View all activity →
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <QuickActionButton
            title="Create New Shipment"
            icon={<FiPackage size={20} />}
            color="bg-blue-100 text-blue-600"
          />
          <QuickActionButton
            title="Track Parcel"
            icon={<FiTruck size={20} />}
            color="bg-purple-100 text-purple-600"
          />
          <QuickActionButton
            title="View Reports"
            icon={<FiBarChart2 size={20} />}
            color="bg-green-100 text-green-600"
          />
          <QuickActionButton
            title="Manage Team"
            icon={<FiUsers size={20} />}
            color="bg-orange-100 text-orange-600"
          />
        </div>
      </div>
    </div>
  );
};

// Reusable Metric Card Component
const MetricCard = ({ title, value, change, icon, bgColor }) => (
  <div
    className={`bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary`}
  >
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
        <p className="text-xs text-gray-500 mt-1">{change}</p>
      </div>
      <div className={`p-3 rounded-full ${bgColor}`}>{icon}</div>
    </div>
  </div>
);
const QuickActionButton = ({ title, icon, color }) => (
  <button
    className={`flex flex-col items-center justify-center p-4 rounded-lg ${color} hover:opacity-90 transition-opacity`}
  >
    <span className="mb-2">{icon}</span>
    <span className="text-sm font-medium">{title}</span>
  </button>
);

export default DashboardOverview;
