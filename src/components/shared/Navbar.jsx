/* eslint-disable no-unused-vars */
import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import { motion } from "framer-motion";
export const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);
  const handleLogOut = () => {
    logOutUser();
  };
  return (
    <div className="bg-[#FFFFFF] shadow-sm top-0 sticky z-50 mt-5 container mx-auto rounded-2xl p-2">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-32 p-2 shadow"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#CAEB66] text-lg hover:bg-transparent border-0"
                    : " relative cursor-pointer text-[#606060]"
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/coverage"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#CAEB66] text-lg hover:bg-transparent border-0"
                    : " relative cursor-pointer text-[#606060]"
                }
              >
                Coverage
              </NavLink>
              <NavLink
                to="/addRecipe"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#CAEB66] text-lg hover:bg-transparent border-0"
                    : " relative cursor-pointer text-[#606060]"
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/sdfsd"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#CAEB66] text-lg hover:bg-transparent border-0"
                    : " relative cursor-pointer text-[#606060]"
                }
              >
                Pricing
              </NavLink>
              {user && (
                <NavLink
                  to="/sendParcel"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#CAEB66] text-lg hover:bg-transparent border-0"
                      : " relative cursor-pointer text-[#606060]"
                  }
                >
                  Send Parcel
                </NavLink>
              )}
              <NavLink
                to="/sdfsd"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#CAEB66] text-lg hover:bg-transparent border-0"
                    : " relative cursor-pointer text-[#606060]"
                }
              >
                Be a Rider
              </NavLink>
            </ul>
          </div>
          <div className="navbar-start hidden lg:flex">
            <Link to="/" className="flex items-center">
              <img
                src="https://i.postimg.cc/rsqVtM6T/logo.png"
                alt="Savor Book Logo"
                className="h-auto"
              />
              <span className=" text-2xl md:text-3xl font-bold mt-5 -ml-3 text-[#303030]">
                Profast
              </span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-7 text-lg items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-secondary text-lg bg-[#b5d654] rounded-3xl py-0.5 px-3"
                  : " text-[#606060] font-medium"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/coverage"
              className={({ isActive }) =>
                isActive
                  ? "text-secondary text-lg bg-[#b5d654] rounded-3xl py-0.5 px-3"
                  : " text-[#606060] font-medium"
              }
            >
              Coverage
            </NavLink>
            <NavLink
              to="/allRecipes"
              className={({ isActive }) =>
                isActive
                  ? "text-secondary text-lg bg-[#b5d654] rounded-3xl py-0.5 px-3"
                  : " text-[#606060] font-medium"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/addRecipe"
              className={({ isActive }) =>
                isActive
                  ? "text-secondary text-lg bg-[#b5d654] rounded-3xl py-0.5 px-3"
                  : " text-[#606060] font-medium"
              }
            >
              Pricing
            </NavLink>
            {user && (
              <NavLink
                to="/sendParcel"
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary text-lg bg-[#b5d654] rounded-3xl py-0.5 px-3"
                    : " text-[#606060] font-medium"
                }
              >
                Send Parcel
              </NavLink>
            )}
            <NavLink
              to="/myRecipes"
              className={({ isActive }) =>
                isActive
                  ? "text-secondary text-lg bg-[#b5d654] rounded-3xl py-0.5 px-3"
                  : " text-[#606060] font-medium"
              }
            >
              Be a Rider
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end text-lg gap-3 mr-3 md:gap-6 md:mr-6">
          {!user ? (
            <>
              {" "}
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#FFFFFF] border border-[#DADADA] px-4 py-2 rounded-xl font-bold text-[#606060]"
                    : "bg-[#FFFFFF] border border-[#DADADA] px-4 py-2 rounded-xl font-bold text-[#606060]"
                }
              >
                Sign In
              </NavLink>
            </>
          ) : (
            <>
              {" "}
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={handleLogOut}
                className="bg-[#FFFFFF] border border-[#DADADA] px-4 py-2 rounded-xl font-bold text-[#606060]"
              >
                Sign Out
              </motion.button>
            </>
          )}
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "bg-[#CAEB66] px-4 py-2 rounded-xl font-bold text-[#1F1F1F]"
                : "bg-[#CAEB66] px-4 py-2 rounded-xl font-bold text-[#1F1F1F]"
            }
          >
            Be a rider
          </NavLink>
          <div className="p-1 hidden md:flex rounded-full bg-black md:-ml-5">
            <img src="https://i.postimg.cc/mDhXdmPK/arrow.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
