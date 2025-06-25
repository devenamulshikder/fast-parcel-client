import {
  Banner,
  BeMerchant,
  ClientLogos,
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
    </div>
  );
};
