import { useState } from "react";

const faqData = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer:
      "Yes, our posture corrector is designed with adjustable straps to fit a wide range of body types and can be used by individuals of various ages. However, we recommend consulting a healthcare professional for specific concerns.",
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer:
      "Many users experience significant improvement in back pain and posture with consistent use. The corrector helps retrain your muscles to maintain a healthier alignment, which can alleviate discomfort and improve overall posture over time.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer:
      "Yes, our Posture Pro features intelligent vibration alerts. When it detects that you are slouching or maintaining poor posture for an extended period, it will gently vibrate to remind you to correct your alignment.",
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer:
      "If the product is currently out of stock, you can sign up for email notifications on our product page. We will send you an email as soon as the Posture Pro is available for purchase again.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to manage which FAQ item is open

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" py-5 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-primary mb-4">
          Frequently Asked Questions (FAQ)
        </h2>
        <p className="text-lg text-secondary text-[16px] md:w-[720px] mx-auto font-medium  my-10">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFF] border border-gray-300 rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left cursor-pointer focus:outline-none"
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index ? "true" : "false"}
              >
                <span className="text-lg font-bold text-primary ">
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-700 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {openIndex === index && (
                <>
                  <div className="border-t border-gray-200 md:max-w-[970px] mx-auto mb-5"></div>
                  <div className="px-6 pb-6 text-secondary font-medium text-[16px] text-base text-start">
                    {item.answer}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-[#CAEB66] text-[#1F1F1F] font-semibold rounded-xl cursor-pointer shadow-md hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 transition-colors duration-200">
            See More FAQ's
            <svg
              className="ml-2 w-5 h-5 transform -rotate-45"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
