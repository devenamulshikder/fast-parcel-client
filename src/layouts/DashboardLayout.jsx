import { Link, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Page content here */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="">Dashboard</div>
        </div>
        <div className=" text-3xl md:text-6xl text-primary text-center my-2 md:my-10 font-extrabold">
          <h1>Dashboard</h1>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side bg-amber-500 w-2/3">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li>
            <Link>My Parcels</Link>
          </li>
          <li>
            <Link to={"/another"}>Another Parcels</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
