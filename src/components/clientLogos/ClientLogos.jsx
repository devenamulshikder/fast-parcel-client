import brand1 from "../../assets/brands/amazon.png";
import brand2 from "../../assets/brands/amazon_vector.png";
import brand3 from "../../assets/brands/casio.png";
import brand4 from "../../assets/brands/moonstar.png";
import brand5 from "../../assets/brands/randstad.png";
import brand6 from "../../assets/brands/start.png";
import brand7 from "../../assets/brands/start-people-1.png";
import Marquee from "react-fast-marquee";
const brands = [brand1, brand6, brand3, brand4, brand5, brand2, brand7];
export const ClientLogos = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-2xl font-bold text-center mb-6 mt-10 md:mt-20">
        We've helped thousands of sales teams
      </h1>
      <Marquee pauseOnHover speed={50} gradient={false}>
        {brands.map((brand, idx) => (
          <div key={idx} className="mx-8 flex items-center mt-5 mb-14 md:mt-10 md:mb-24">
            <img src={brand} alt={`brand logo`} className=" object-contain" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
