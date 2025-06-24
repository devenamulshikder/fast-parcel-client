import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImage1 from "../../assets/banner/banner1.png";
import bannerImage2 from "../../assets/banner/banner2.png";
import bannerImage3 from "../../assets/banner/banner3.png";
export const Banner = () => {
  return (
    <div className="container mx-auto my-5 md:my-14">
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
      >
        <div>
          <img src={bannerImage1} />
        </div>
        <div>
          <img src={bannerImage2} />
        </div>
        <div>
          <img src={bannerImage3} />
        </div>
      </Carousel>
    </div>
  );
};
