import { useForm } from "react-hook-form";
import { use, useState } from "react";
import { regionData } from "./data/regionData";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useRegionWarehouses } from "../../hooks/useRegionWarehouses";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export const SendParcel = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {
    senderWarehouses,
    receiverWarehouses,
    handleSenderRegionChange,
    handleReceiverRegionChange,
  } = useRegionWarehouses();

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [parcelType, setParcelType] = useState("document");

  const generateTrackingId = () => {
    return "TRK" + Date.now().toString(36).toUpperCase(); // e.g., TRKLF4QF2N9
  };

  const onSubmit = (data) => {
    const sameCity = data.senderRegion === data.receiverRegion;
    const weight = Number(data.weight) || 0;
    let baseCost = 0;
    let weightCost = 0;
    let extraNote = "";

    if (parcelType === "document") {
      baseCost = sameCity ? 60 : 80;
    } else {
      if (weight <= 3) {
        baseCost = sameCity ? 110 : 150;
      } else {
        baseCost = sameCity ? 110 : 150;
        weightCost = (weight - 3) * 40;
        if (!sameCity) weightCost += 40;
        extraNote = sameCity
          ? `৳40/kg for ${(weight - 3).toFixed(2)}kg extra`
          : `৳40/kg + ৳40 extra for ${(weight - 3).toFixed(2)}kg extra`;
      }
    }

    const totalCost = baseCost + weightCost;
    const trackingId = generateTrackingId();

    const parcelData = {
      ...data,
      parcelType,
      totalCost,
      trackingId,
      creation_date: new Date().toISOString(),
      email: user?.email,
      payment_status: "unpaid",
      delivery_status: "not_collected",
    };

    Swal.fire({
      title: `<strong>Delivery Cost Breakdown</strong>`,
      html: `
        <div style="text-align:left; font-size: 15px;">
          <p><strong>Tracking ID:</strong> <span style="color:#3b82f6;">${trackingId}</span></p>
          <p><strong>Parcel Type:</strong> ${
            parcelType === "document" ? "📄 Document" : "📦 Non-Document"
          }</p>
          <p><strong>From:</strong> ${data.senderRegion}</p>
          <p><strong>To:</strong> ${data.receiverRegion}</p>
          <p><strong>Base Cost:</strong> ৳${baseCost}</p>
          ${
            weightCost > 0
              ? `<p><strong>Extra Weight Cost:</strong> ৳${weightCost} <br/><em>(${extraNote})</em></p>`
              : ""
          }
          <hr style="margin: 10px 0;" />
          <p style="font-size:18px; font-weight:bold; color:#16a34a;">Total: ৳${totalCost}</p>
        </div>
      `,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "💳 Proceed to Payment",
      cancelButtonText: "✏️ Edit Parcel",
      focusConfirm: false,
      customClass: {
        popup: "rounded-xl",
        confirmButton:
          "bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm",
        cancelButton:
          "bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded text-sm",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/parcels", parcelData).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              title: "Redirecting...",
              text: "Proceeding to payment gateway.",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
          }
        });
        // console.log("Proceeding to payment:", parcelData);
        reset();
      } else {
        console.log("Editing parcel again.");
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-10 md:px-24 md:py-16 bg-white rounded-3xl my-5 md:my-12 shadow-md">
      <h2 className="text-4xl font-extrabold text-primary mb-6">Send Parcel</h2>
      <div className="border border-[#0000001A]"></div>
      <p className="text-lg font-semibold my-6 text-primary ">
        Enter your parcel details
      </p>

      {/* Parcel Type Selection */}
      <div className="flex gap-6 mb-6">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="document"
            checked={parcelType === "document"}
            onChange={() => setParcelType("document")}
            className="radio radio-success ring ring-secondary"
          />
          <span>Document</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="non-document"
            checked={parcelType === "non-document"}
            onChange={() => setParcelType("non-document")}
            className="radio ring ring-secondary"
          />
          <span>Not-Document</span>
        </label>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        {/* Parcel Info */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-10">
          <div>
            <label className="label">
              <span className="label-text">Parcel Name</span>
            </label>
            <input
              {...register("parcelTitle", {
                required: "Parcel name is required",
              })}
              type="text"
              name="parcelTitle"
              placeholder="Parcel Name"
              className={`input input-bordered rounded-md border border-[#CBD5E1] bg-gray-100 w-full ${
                errors.parcelName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.parcelTitle && (
              <p className="text-red-500 text-xs mt-1">
                {errors.parcelTitle.message}
              </p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Parcel Weight (KG)</span>
            </label>
            <input
              {...register("weight")}
              type="number"
              placeholder="Parcel Weight"
              step="any"
              disabled={parcelType === "document"}
              className="input input-bordered rounded-md border border-[#CBD5E1] bg-gray-100 w-full"
            />
          </div>
        </div>
        <div className="border border-[#0000001A]"></div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Sender Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-primary md:mb-3">
              Sender Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text">Sender Name</span>
                </label>
                <input
                  {...register("senderName", { required: true })}
                  type="text"
                  placeholder="Sender Name"
                  className="input input-bordered rounded-md border border-[#CBD5E1] bg-gray-100 w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Your Region</span>
                </label>
                <select
                  {...register("senderRegion", {
                    required: true,
                    onChange: (e) => handleSenderRegionChange(e.target.value),
                  })}
                  className="select select-bordered rounded-md border border-[#CBD5E1] bg-gray-100 w-full"
                >
                  <option value="">Select Region</option>
                  {Array.from(new Set(regionData.map((r) => r.region))).map(
                    (region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  {...register("senderAddress", { required: true })}
                  type="text"
                  placeholder="Sender Address"
                  className="input input-bordered rounded-md border border-[#CBD5E1] bg-gray-100 w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Sender Contact No</span>
                </label>
                <input
                  {...register("senderContact", { required: true })}
                  type="text"
                  placeholder="Sender Contact No"
                  className="input input-bordered rounded-md border border-[#CBD5E1] bg-gray-100 w-full"
                />
              </div>
            </div>
            <div className="w-full my-4">
              <label className="label">
                <span className="label-text">Sender Pickup Warehouse</span>
              </label>
              <select
                {...register("senderWarehouse", { required: true })}
                className="select select-bordered rounded-md border border-[#CBD5E1] bg-gray-100 w-full"
              >
                <option value="">Select Warehouse</option>
                {senderWarehouses.map((wh, idx) => (
                  <option key={idx} value={wh}>
                    {wh}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text">Pickup Instruction</span>
              </label>
              <textarea
                {...register("pickupInstruction", { required: true })}
                placeholder="Pickup Instruction"
                className="textarea textarea-bordered rounded-md border border-[#CBD5E1] bg-gray-100 w-full"
              ></textarea>
            </div>
          </div>
          {/* Receiver Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-primary md:mb-3">
              Receiver Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text">Receiver Name</span>
                </label>
                <input
                  {...register("receiverName", { required: true })}
                  type="text"
                  placeholder="Receiver Name"
                  className="input input-bordered rounded-md border border-[#CBD5E1] bg-gray-100 w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Receiver Region</span>
                </label>
                <select
                  {...register("receiverRegion", {
                    required: true,
                    onChange: (e) => handleReceiverRegionChange(e.target.value),
                  })}
                  className="select select-bordered rounded-md border border-[#CBD5E1] bg-gray-100 w-full"
                >
                  <option value="">Select Region</option>
                  {Array.from(new Set(regionData.map((r) => r.region))).map(
                    (region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Receiver Address</span>
                </label>
                <input
                  {...register("receiverAddress", { required: true })}
                  type="text"
                  placeholder="Receiver Address"
                  className="input input-bordered rounded-md border border-[#CBD5E1] bg-gray-100 w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Receiver Contact No</span>
                </label>
                <input
                  {...register("receiverContact", { required: true })}
                  type="text"
                  placeholder="Receiver Contact No"
                  className="input input-bordered rounded-md border border-[#CBD5E1] bg-gray-100 w-full"
                />
              </div>
            </div>
            <div className="w-full my-4">
              <label className="label">
                <span className="label-text">Receiver Delivery Warehouse</span>
              </label>
              <select
                {...register("receiverWarehouse", { required: true })}
                className="select select-bordered rounded-md border border-[#CBD5E1] bg-gray-100 w-full"
              >
                <option value="">Select Warehouse</option>
                {receiverWarehouses.map((wh, idx) => (
                  <option key={idx} value={wh}>
                    {wh}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Delivery Instruction</span>
              </label>
              <textarea
                {...register("deliveryInstruction", { required: true })}
                placeholder="Delivery Instruction"
                className="textarea textarea-bordered rounded-md border border-[#CBD5E1] bg-gray-100 w-full"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 italic">
          * PickUp Time 4pm-7pm Approx.
        </p>
        <div>
          <button
            type="submit"
            className="bg-[#CAEB66] rounded-xl px-4 cursor-pointer md:px-10 py-2 duration-300  hover:bg-lime-300"
          >
            Proceed to Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};
