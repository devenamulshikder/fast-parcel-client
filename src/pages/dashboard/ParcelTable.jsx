/* eslint-disable no-unused-vars */
import { FaTrash, FaMoneyCheckAlt, FaEdit } from "react-icons/fa";
import { format } from "date-fns";
import { motion } from "framer-motion";

const ParcelTable = ({ parcels, onView, onPay, onDelete }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-3xl font-bold text-gradient  text-primary">
          Your Parcels!
        </h2>
        <div className="mt-2 md:mt-0 text-sm text-gray-500">
          {parcels?.length || 0} parcel{parcels?.length !== 1 ? "s" : ""} total
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
            <tr className="text-left">
              <th className="py-4 px-6 font-semibold text-gray-700">#</th>
              <th className="py-4 px-6 font-semibold text-gray-700">Type</th>
              <th className="py-4 px-6 font-semibold text-gray-700 hidden sm:table-cell">
                Created At
              </th>
              <th className="py-4 px-6 font-semibold text-gray-700">Cost</th>
              <th className="py-4 px-6 font-semibold text-gray-700">Payment</th>
              <th className="py-4 px-6 font-semibold text-gray-700 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <motion.tbody
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="divide-y divide-gray-200"
          >
            {parcels?.length > 0 ? (
              parcels.map((parcel, index) => (
                <motion.tr
                  key={parcel._id}
                  variants={rowVariants}
                  whileHover={{
                    scale: 1.01,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  }}
                  className="hover:bg-gray-50"
                >
                  <td className="py-4 px-6 font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        parcel.parcelType === "document"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {parcel.parcelType === "document" ? (
                        <>
                          <svg
                            className="w-3 h-3 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path
                              fillRule="evenodd"
                              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Document
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-3 h-3 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
                          </svg>
                          Non-Document
                        </>
                      )}
                    </span>
                  </td>
                  <td className="py-4 px-6 hidden sm:table-cell text-gray-600">
                    {format(new Date(parcel.creation_date), "PPP p")}
                  </td>
                  <td className="py-4 px-6 font-semibold text-gray-900">
                    ৳{parcel.totalCost}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        parcel.payment_status === "paid"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {parcel.payment_status === "paid" ? (
                        <>
                          <svg
                            className="w-3 h-3 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Paid
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-3 h-3 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 1 1 0 001.415 1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Unpaid
                        </>
                      )}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex justify-end space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onView(parcel)}
                        className="p-2 cursor-pointer rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                        title="Edit Parcel"
                      >
                        <FaEdit className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onPay(parcel)}
                        className={`p-2 cursor-pointer rounded-lg ${
                          parcel.payment_status === "paid"
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-green-50 text-green-600 hover:bg-green-100"
                        } transition-colors`}
                        title={
                          parcel.payment_status === "paid"
                            ? "Already Paid"
                            : "Proceed to Pay"
                        }
                        disabled={parcel.payment_status === "paid"}
                      >
                        <FaMoneyCheckAlt className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onDelete(parcel._id)}
                        className="p-2 cursor-pointer rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                        title="Delete Parcel"
                      >
                        <FaTrash className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))
            ) : (
              <motion.tr variants={rowVariants} className="text-center">
                <td colSpan="6" className="py-8 text-gray-500">
                  <div className="flex flex-col items-center justify-center">
                    <svg
                      className="w-12 h-12 text-gray-400 mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    <p className="text-lg font-medium">No parcels found</p>
                    <p className="text-sm mt-1">
                      Create your first parcel to get started
                    </p>
                  </div>
                </td>
              </motion.tr>
            )}
          </motion.tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ParcelTable;
