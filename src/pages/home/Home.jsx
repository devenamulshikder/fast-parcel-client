import {
  Banner,
  BeMerchant,
  ClientLogos,
  FAQSection,
  HowItWorks,
  OurServices,
  ServicesSection,
  TestimonialCarousel,
} from "../../components";

export const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <OurServices />
      <ClientLogos />
      <ServicesSection />
      <BeMerchant />
      <TestimonialCarousel />
      <FAQSection/>
    </div>
  );
};
