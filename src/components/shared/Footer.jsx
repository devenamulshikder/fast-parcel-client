import { Link } from "react-router";

export const Footer = () => {
  return (
    <div className="bg-[#0B0B0B] container mx-auto p-2 md:p-20 rounded-4xl">
      <div className="flex flex-col items-center gap-1">
        <div>
          <Link to="#" className="flex items-center">
            <img
              src="https://i.postimg.cc/rsqVtM6T/logo.png"
              alt="Savor Book Logo"
              className="h-auto"
            />
            <span className=" text-2xl md:text-3xl font-bold mt-5 -ml-3 text-[#FFFFFF]">
              Profast
            </span>
          </Link>
        </div>
        <div className="text-center md:w-[748px] mt-4">
          <p className="text-[#DADADA]">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>
        <div className=" max-w-7xl mx-auto my-8">
          <div className="border-dashed border border-[#03464D] md:w-[1282px]"></div>
          <div className="flex gap-4 md:gap-8 justify-center my-8 flex-wrap">
            <Link to={""} className="text-[#DADADA] font-medium">
              Services
            </Link>
            <Link to={""} className="text-[#DADADA] font-medium">
              Coverage
            </Link>
            <Link to={""} className="text-[#DADADA] font-medium">
              About Us
            </Link>
            <Link to={""} className="text-[#DADADA] font-medium">
              Pricing
            </Link>
            <Link to={""} className="text-[#DADADA] font-medium">
              Blog
            </Link>
            <Link to={""} className="text-[#DADADA] font-medium">
              Contact
            </Link>
          </div>
          <div className="border-dashed border border-[#03464D]"></div>
        </div>
        <div className="flex gap-6">
          <img
            src="https://i.postimg.cc/nV25HQJd/linkedin-icon-2.png"
            alt="linkedin"
          />
          <img
            src="https://i.postimg.cc/3Ntb9z1M/twitter-logo-2-3.png"
            alt="linkedin"
          />
          <img
            src="https://i.postimg.cc/RhSD7vcQ/Group-10036.png"
            alt="linkedin"
          />
          <img
            src="https://i.postimg.cc/76MRJ5TZ/fi-3670209.png"
            alt="linkedin"
          />
        </div>
      </div>
    </div>
  );
};
