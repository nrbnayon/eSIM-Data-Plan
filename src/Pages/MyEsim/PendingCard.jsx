import { Link } from "react-router-dom";
import eSime from "../../assets/icons/eSim.svg";
import {
  Calendar,
  Globe,
  Layers,
  MessageSquareText,
  Phone,
  Smartphone,
} from "lucide-react";

const PendingCard = () => {
  const offers = [
    {
      company: "RoamFree",
      coverage: "100 Countries",
      duration: "30 Days",
      data: "10 GB",
      calls: "100 Minutes",
      texts: "1000 SMS",
      originalPrice: 25,
      discountedPrice: 23.5,
    },
    {
      company: "TravelNet",
      coverage: "80 Countries",
      duration: "60 Days",
      data: "15 GB",
      calls: "200 Minutes",
      texts: "2000 SMS",
      originalPrice: 30,
      discountedPrice: 28.0,
    },
    {
      company: "WorldLink",
      coverage: "200 Countries",
      duration: "365 Days",
      data: "100 GB",
      calls: "1000 Minutes",
      texts: "10000 SMS",
      originalPrice: 80,
      discountedPrice: 75.0,
    },
  ];

  return (
    <div>
      <div className="mt-10">
        <h1 className="font-semibold text-2xl pb-3">Pending Offers</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-[#FFF6ED]"
          >
            {/* Header with logo and sale badge */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div>
                  <img src={eSime} alt="" className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  {offer.company}
                </h2>
              </div>
              <div className="bg-gradient-to-b from-[#FFA943] to-[#E97400] text-white px-4 md:py-1.5 py-1 rounded-full text-xs md:font-medium">
                ON SALE
              </div>
            </div>

            {/* Plan details */}
            <div className="space-y-3 sm:space-y-4">
              {/* Coverage */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" strokeWidth={1.5} />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">Coverage</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-900 font-semibold">
                  {offer.coverage}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <Calendar
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">Duration</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-900 font-semibold">
                  {offer.duration}
                </span>
              </div>

              {/* Data */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <Smartphone
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">Data</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-900 font-semibold">
                  {offer.data}
                </span>
              </div>

              {/* Calls */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <Phone
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">Call</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-900 font-semibold">
                  {offer.calls}
                </span>
              </div>

              {/* Texts */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <MessageSquareText
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">Text</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-900 font-semibold">
                  {offer.texts}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between border-b pb-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <Layers
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">Price</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 text-lg">USD </span>
                  <span className="text-gray-400 line-through text-lg">
                    {offer.originalPrice}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-900 font-semibold">
                    ${offer.discountedPrice}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-5 mt-7">
              <Link
                to={`/top-up/${index}`} // Fixed: Use index directly instead of offer.index
                className="w-full border rounded-full text-center border-orange-400 bg-white hover:scale-105 md:py-2 py-1 px-6 md:text-lg shadow-lg transition-transform duration-300 cursor-pointer"
              >
                Top Up
              </Link>
              <Link
                to="/package-details"
                className="rounded-full text-center text-white font-medium bg-gradient-to-b from-[#FFA943] to-[#E97400] w-full hover:scale-105 md:py-2 py-1 px-6 md:text-lg transition-transform duration-300 shadow-lg cursor-pointer"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingCard;