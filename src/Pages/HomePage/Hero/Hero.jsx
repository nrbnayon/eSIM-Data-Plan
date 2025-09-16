import { Link } from "react-router-dom";
import banner from "../../../assets/images/bannerImage.svg";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${banner})`,
        }}>
        <div className="absolute inset-0 md:bg-black/0 bg-black/50"></div>
      </div>

      <div className="relative text-center md:text-left px-4 container mx-auto">
        <div className="mb-10 md:w-1/3 ">
          <h1 className="md:text-[#8C4B09]  text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug sm:leading-tight mb-6 sm:mb-10">
            No Bill Shock <br /> No Roaming Fees
          </h1>
          <p className="md:text-[#8C4B09]  text-white  text-base sm:text-lg md:text-xl mb-3 sm:mb-4">
            Keep control of your expenses with affordable eSIM packs and no roaming fees
          </p>
          <button className="mt-10 inline-block hover:scale-105 transition-transform">
            <Link to='/worldwide' className="bg-[#8C4B09]  text-white py-3 px-10 rounded-full  text-base sm:text-lg md:text-xl font-medium">View All</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
