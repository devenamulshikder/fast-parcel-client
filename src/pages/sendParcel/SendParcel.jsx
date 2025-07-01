import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRegionWarehouses } from "../../hooks/useRegionWarehouses";

export const SendParcel = () => {

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
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();


  const [parcelType, setParcelType] = useState("document");

  const onSubmit = (data) => {
    const baseCost = parcelType === "document" ? 50 : 100;
    const weightCost =
      parcelType === "non-document" && data.weight
        ? Number(data.weight) * 10
        : 0;
    const totalCost = baseCost + weightCost;

    const parcelData = {
      ...data,
      parcelType,
      totalCost,
      creation_date: new Date().toISOString(),
    };

    toast.success(`Delivery Cost: ৳${totalCost}`, { duration: 5000 });

    console.log(parcelData); // You can send this to backend
    reset();
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
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="label">
              <span className="label-text">Parcel Name</span>
            </label>
            <input
              {...register("parcelTitle", { required: true })}
              type="text"
              placeholder="Parcel Name"
              className="input input-bordered rounded-md border border-[#CBD5E1] bg-gray-100 w-full"
            />
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
        {/* Sender Info */}

        <div className="flex flex-col md:flex-row gap-10">
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
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chattogram">Chattogram</option>
                  <option value="Sylhet">Sylhet</option>
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
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chattogram">Chattogram</option>
                  <option value="Sylhet">Sylhet</option>
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
