import merchant from "../../assets/location-merchant.png";
import be from "../../assets/be-a-merchant-bg.png";
export const BeMerchant = () => {
  return (
    <section className="bg-[#03373D] rounded-3xl overflow-hidden my-10 px-6 py-12 md:py-20 md:px-16 text-white relative max-w-7xl mx-auto">
      <div className="absolute inset-0">
        <img src={be} alt="background" className=" object-cover opacity-40" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            Merchant and Customer Satisfaction
            <br /> is Our First Priority
          </h2>
          <p className="text-gray-200 text-sm md:text-base mb-8">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#CAEB66] hover:bg-lime-300 cursor-pointer text-[#00333B] font-semibold px-6 py-3 rounded-full">
              Become a Merchant
            </button>
            <button className="border border-[#CAEB66] text-[#CAEB66] hover:bg-[#CAEB66] hover:text-[#00333B] cursor-pointer duration-300 font-semibold px-6 py-3 rounded-full">
              Earn with Profast Courier
            </button>
          </div>
        </div>
        <div className="max-w-sm">
          <img
            src={merchant}
            alt="parcel"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
