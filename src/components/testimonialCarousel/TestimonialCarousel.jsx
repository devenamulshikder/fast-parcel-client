import React, { useState, useEffect, useRef } from "react";
import customerTop from "../../assets/customer-top.png";
import reviewQuote from "../../assets/reviewQuote.png";
export const TestimonialCarousel = () => {
  const slidesData = [
    {
      id: 1,
      quote:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
      author: "Rasel Ahamed",
      title: "CTO",
      avatarColor: "bg-blue-500",
    },
    {
      id: 2,
      quote:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
      author: "Awlad Hossin",
      title: "Senior Product Designer",
      avatarColor: "bg-green-500",
    },
    {
      id: 3,
      quote:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
      author: "Nasir Uddin",
      title: "CEO",
      avatarColor: "bg-purple-500",
    },
    {
      id: 4,
      quote:
        "Maintaining good posture can reduce back pain, improve breathing, and boost confidence. Our corrector makes it easy.",
      author: "Fahim Ahmed",
      title: "Lead Developer",
      avatarColor: "bg-red-500",
    },
    {
      id: 5,
      quote:
        "The ergonomic design ensures comfort while providing effective support. Highly recommend for desk workers.",
      author: "Zara Khan",
      title: "UX Specialist",
      avatarColor: "bg-yellow-500",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(1);
  const sliderRef = useRef(null);
  const itemRefs = useRef([]);
  useEffect(() => {
    const updateSliderTransform = () => {
      if (!sliderRef.current || itemRefs.current.length === 0) return;
      let preceedingWidth = 0;
      for (let i = 0; i < currentIndex; i++) {
        if (itemRefs.current[i]) {
          preceedingWidth +=
            itemRefs.current[i].offsetWidth +
            (window.innerWidth >= 768 ? 24 : 16);
        }
      }
      const viewportCenter = sliderRef.current.parentElement.offsetWidth / 2;
      const activeItemCenter = itemRefs.current[currentIndex].offsetWidth / 2;

      const transformX = viewportCenter - preceedingWidth - activeItemCenter;
      sliderRef.current.style.transform = `translateX(${transformX}px)`;
    };

    updateSliderTransform();
    window.addEventListener("resize", updateSliderTransform);

    return () => window.removeEventListener("resize", updateSliderTransform);
  }, [currentIndex, slidesData.length]);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 font-inter">
      <div className="flex flex-col items-center justify-center">
        <img src={customerTop} alt="" />
        <h2 className="text-2xl md:text-4xl font-extrabold text-primary my-6 md:my-10">
          What Our Clients Say
        </h2>
        <p className="text-center text-secondary font-medium md:w-[720px] mb-6 md:mb-10">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <div className="relative w-full max-w-6xl overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out py-8"
          // Tailwind classes for children will handle the spacing between items
        >
          {slidesData.map((slide, index) => (
            <div
              key={slide.id}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`
                                flex-shrink-0
                                w-[calc(100%-80px)] sm:w-[calc(50%-48px)] md:w-[calc(33.33%-48px)] lg:w-[calc(33.33%-48px)] xl:w-[calc(33.33%-48px)]
                                mr-4 md:mr-6 // Margin between items
                                p-6 sm:p-8
                                bg-white
                                rounded-xl
                                shadow-md
                                flex flex-col justify-between
                                transition-all duration-500 ease-in-out
                                ${
                                  index === currentIndex
                                    ? "scale-105 opacity-100 shadow-xl border border-gray-200"
                                    : "scale-95 opacity-70"
                                }
                            `}
            >
              <div className="text-4xl mb-4">
                <img src={reviewQuote} alt="" />
              </div>
              <p className="text-secondary text-base text-[16px] font-medium leading-relaxed flex-grow">
                {slide.quote}
              </p>
              <div className="flex items-center mt-6 pt-4 border-t border-dashed border-gray-200">
                <div
                  className={`w-12 h-12 ${slide.avatarColor} rounded-full mr-4 flex-shrink-0`}
                ></div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    {slide.author}
                  </p>
                  <p className="text-sm text-gray-500">{slide.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-[#CAEB66] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-[#CAEB66] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`
                            w-3 h-3 rounded-full
                            transition-colors duration-300
                            ${
                              index === currentIndex
                                ? "bg-[#CAEB66] w-4 h-4"
                                : "bg-gray-300"
                            }
                        `}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};
