import { Link, Outlet, useLocation } from "react-router";
import {
  FiHome,
  FiPackage,
  FiUsers,
  FiSettings,
  FiBarChart2,
  FiFileText,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";

const DashboardLayout = () => {
  const location = useLocation();

  // Navigation items
  const navItems = [
    { path: "/dashboard", name: "Overview", icon: <FiHome size={20} /> },
    {
      path: "/dashboard/parcels",
      name: "My Parcels",
      icon: <FiPackage size={20} />,
    },
    { path: "/dashboard/team", name: "Team", icon: <FiUsers size={20} /> },
    {
      path: "/dashboard/reports",
      name: "Reports",
      icon: <FiBarChart2 size={20} />,
    },
    {
      path: "/dashboard/documents",
      name: "Documents",
      icon: <FiFileText size={20} />,
    },
    {
      path: "/dashboard/settings",
      name: "Settings",
      icon: <FiSettings size={20} />,
    },
  ];

  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main content area */}
      <div className="drawer-content flex flex-col bg-gray-50 min-h-screen">
        {/* Mobile navbar */}
        <div className="navbar bg-white shadow-sm lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-ghost drawer-button"
            >
              <FiMenu size={24} />
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 font-semibold text-lg">
            Dashboard
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="dashboard-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="menu bg-white text-base-content min-h-full w-80 border-r border-gray-200 flex flex-col">
          {/* Sidebar header */}
          <div className="p-4 border-b border-gray-200">
            <Link to="/" className="flex items-center">
              <img
                src="https://i.postimg.cc/rsqVtM6T/logo.png"
                alt="Savor Book Logo"
                className="h-auto"
              />
              <span className=" text-2xl md:text-3xl font-bold mt-4 -ml-3 text-[#303030]">
                Profast
              </span>
            </Link>
          </div>

          {/* Navigation items */}
          <nav className="flex-1 px-4 py-6">
            <ul>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center py-3 px-4 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* User profile and logout */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-10">
                    <span>JP</span>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="font-medium">John Parker</p>
                  <p className="text-sm text-gray-500">Admin</p>
                </div>
              </div>
              <button className="btn btn-ghost btn-sm text-gray-500 hover:text-gray-700">
                <FiLogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
