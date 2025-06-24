export const ServicesSection = () => {
  const services = [
    {
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
      image: "https://i.postimg.cc/JhVWBS6p/live-tracking.png",
    },
    {
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      image: "https://i.postimg.cc/JhNC3KSM/safe-delivery.png",
    },
    {
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      image: "https://i.postimg.cc/JhNC3KSM/safe-delivery.png",
    },
  ];

  return (
    <section className="pb-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="border border-[#03464d95] border-dashed mb-12 md:mb-20"></div>
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow p-6 md:p-10 gap-10 md:gap-12"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-32 h-32 object-contain"
            />
            <div className="h-32 border-l border-dashed border-[#03464d95]"></div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-[#00333B]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                {service.description}
              </p>
            </div>
          </div>
        ))}
        <div className="border border-[#03464d95] border-dashed mt-12 md:mt-20"></div>
      </div>
    </section>
  );
};
