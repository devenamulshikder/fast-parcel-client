import { useState, useEffect } from "react";
import {
  FiX,
  FiPackage,
  FiUser,
  FiEdit2,
} from "react-icons/fi";
import Swal from "sweetalert2";

const UpdateParcelModal = ({ parcel, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    parcelTitle: "",
    weight: "",
    senderName: "",
    senderAddress: "",
    senderContact: "",
    senderWarehouse: "",
    pickupInstruction: "",
    receiverName: "",
    receiverAddress: "",
    receiverContact: "",
    receiverWarehouse: "",
    deliveryInstruction: "",
  });

  useEffect(() => {
    if (parcel) {
      setFormData({
        parcelTitle: parcel.parcelTitle || "",
        weight: parcel.weight || "",
        senderName: parcel.senderName || "",
        senderAddress: parcel.senderAddress || "",
        senderContact: parcel.senderContact || "",
        senderWarehouse: parcel.senderWarehouse || "",
        pickupInstruction: parcel.pickupInstruction || "",
        receiverName: parcel.receiverName || "",
        receiverAddress: parcel.receiverAddress || "",
        receiverContact: parcel.receiverContact || "",
        receiverWarehouse: parcel.receiverWarehouse || "",
        deliveryInstruction: parcel.deliveryInstruction || "",
      });
    }
  }, [parcel]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.parcelTitle ||
      !formData.senderName ||
      !formData.senderAddress ||
      !formData.senderContact ||
      !formData.receiverName ||
      !formData.receiverAddress ||
      !formData.receiverContact
    ) {
      Swal.fire({
        title: "Missing Information",
        text: "Please fill in all required fields",
        icon: "warning",
        confirmButtonColor: "#3b82f6",
      });
      return;
    }

    onUpdate(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FiPackage className="text-primary" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">
              Update Parcel Information
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Tracking ID */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-medium text-blue-800">
              Tracking ID:{" "}
              <span className="font-bold">{parcel?.trackingId}</span>
            </p>
            <p className="text-sm mt-1">
              Status:{" "}
              <span className="font-medium capitalize">
                {parcel?.delivery_status?.replace("_", " ")}
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Parcel Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FiPackage /> Parcel Information
              </h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Parcel Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="parcelTitle"
                  value={formData.parcelTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Weight (KG)
                </label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  disabled={parcel?.parcelType === "document"}
                  className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                    parcel?.parcelType === "document"
                      ? "bg-gray-100 cursor-not-allowed"
                      : ""
                  }`}
                />
              </div>
            </div>

            {/* Empty column for spacing */}
            <div></div>

            {/* Sender Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FiUser /> Sender Details
              </h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sender Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="senderName"
                  value={formData.senderName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sender Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="senderAddress"
                  value={formData.senderAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sender Contact <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="senderContact"
                  value={formData.senderContact}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pickup Warehouse
                </label>
                <input
                  type="text"
                  name="senderWarehouse"
                  value={formData.senderWarehouse}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pickup Instructions
                </label>
                <textarea
                  name="pickupInstruction"
                  value={formData.pickupInstruction}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
            </div>

            {/* Receiver Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FiUser /> Receiver Details
              </h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Receiver Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="receiverName"
                  value={formData.receiverName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Receiver Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="receiverAddress"
                  value={formData.receiverAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Receiver Contact <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="receiverContact"
                  value={formData.receiverContact}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Warehouse
                </label>
                <input
                  type="text"
                  name="receiverWarehouse"
                  value={formData.receiverWarehouse}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Instructions
                </label>
                <textarea
                  name="deliveryInstruction"
                  value={formData.deliveryInstruction}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors flex items-center gap-2"
            >
              <FiEdit2 /> Update Parcel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateParcelModal;
