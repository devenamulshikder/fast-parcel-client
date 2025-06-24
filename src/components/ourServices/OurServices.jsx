import { useEffect, useState } from "react";
export const OurServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="container mx-auto my-5 md:my-14 bg-[#03373D] rounded-4xl md:p-24 py-10">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-[#fff] text-2xl md:text-3xl font-extrabold">
          Our Services
        </h1>
        <p className="text-[#DADADA] mx-auto text-center font-medium my-3 md:my-5 text-[16px] md:w-[718px]">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-8 max-w-7xl mx-auto p-2">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#FFF] rounded-3xl py-8 px-6 text-center hover:bg-[#CAEB66] duration-300 "
          >
            <div
              className="inline-block p-2 rounded-[99px]"
              style={{
                background:
                  "linear-gradient(180deg, #EEEDFC 0%, rgba(238, 237, 252, 0) 100%)",
              }}
            >
              <img src={service.img} alt="" className="rounded-[99px]" />
            </div>

            <h1 className="text-primary font-bold text-xl md:text-2xl py-4">
              {service.title}
            </h1>
            <p className="text-secondary font-medium text-[16px]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
