import bookingLocationImage from "../../assets/bookingIcon.png";
export const HowItWorks = () => {
  return (
    <div className="max-w-7xl mx-auto p-2 my-5 md:my-14">
      <h1 className="text-[#03373D] text-2xl md:text-3xl font-extrabold mb-5 md:mb-8">
        How it Works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8">
        <div className="bg-[#FFFFFFB2] rounded-3xl flex flex-col items-start p-5 md:p-8">
          <img src={bookingLocationImage} alt="" />
          <h3 className="text-[#03373D] text-xl font-bold py-3">
            Booking Pick & Drop
          </h3>
          <p className="text-[#606060] text-[16px] ">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-[#FFFFFFB2] rounded-3xl flex flex-col items-start p-5 md:p-8">
          <img src={bookingLocationImage} alt="" />
          <h3 className="text-[#03373D] text-xl font-bold py-3">
            Booking Pick & Drop
          </h3>
          <p className="text-[#606060] text-[16px] ">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-[#FFFFFFB2] rounded-3xl flex flex-col items-start p-5 md:p-8">
          <img src={bookingLocationImage} alt="" />
          <h3 className="text-[#03373D] text-xl font-bold py-3">
            Booking Pick & Drop
          </h3>
          <p className="text-[#606060] text-[16px] ">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-[#FFFFFFB2] rounded-3xl flex flex-col items-start p-5 md:p-8">
          <img src={bookingLocationImage} alt="" />
          <h3 className="text-[#03373D] text-xl font-bold py-3">
            Booking Pick & Drop
          </h3>
          <p className="text-[#606060] text-[16px] ">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};
