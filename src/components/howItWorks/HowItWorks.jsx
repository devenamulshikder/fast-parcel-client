import bookingLocationImage from "../../assets/bookingIcon.png";
export const HowItWorks = () => {
  const data = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      image: bookingLocationImage,
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      image: bookingLocationImage,
    },
    {
      id: 3,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      image: bookingLocationImage,
    },
    {
      id: 4,
      title: "Booking SME Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      image: bookingLocationImage,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto p-2 my-5 md:my-14">
      <h1 className="text-[#03373D] text-2xl md:text-3xl font-extrabold mb-5 md:mb-8">
        How it Works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8">
        {data.map((d) => (
          <div
            key={d.id}
            className="bg-[#FFFFFFB2] rounded-3xl flex flex-col items-start p-5 md:p-8  hover:scale-105 duration-300"
          >
            <img src={d.image} alt="" />
            <h3 className="text-[#03373D] text-xl font-bold py-3">{d.title}</h3>
            <p className="text-[#606060] text-[16px] ">{d.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
