import { Globe, Calendar, Smartphone, Layers } from "lucide-react";
import eSime from "../assets/icons/eSim.svg";

const OfferCard = ({
  company,
  coverage,
  duration,
  data,
  originalPrice,
  discountedPrice,
  bgColor,
  button,
  saleBadge,
  onBuy,
}) => {
  return (
    <div
      className={`rounded-2xl border border-gray-200 p-6 shadow-sm ${bgColor}`}
    >
      {/* Header with logo and sale badge */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div>
            <img src={eSime} alt="" className="w-8 h-8 md:w-10 md:h-10" />
          </div>
          <h2 className="md:text-2xl text-lg font-semibold text-gray-900">{company}</h2>
        </div>
        <div className={`${saleBadge}`}>ON SALE</div>
      </div>

      {/* Plan details */}
      <div className="space-y-3 sm:space-y-4">
        {/* Coverage */}
        <div className="flex items-center justify-between border-b pb-2 border-gray-200">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" strokeWidth={1.5} />
            <span className="text-xs sm:text-sm text-gray-600 font-medium">Coverage</span>
          </div>
          <span className="text-xs sm:text-sm text-gray-900 font-semibold">{coverage}</span>
        </div>

        {/* Duration */}
        <div className="flex items-center justify-between border-b pb-2 border-gray-200">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" strokeWidth={1.5} />
            <span className="text-xs sm:text-sm text-gray-600 font-medium">Duration</span>
          </div>
          <span className="text-xs sm:text-sm text-gray-900 font-semibold">{duration}</span>
        </div>

        {/* Data */}
        <div className="flex items-center justify-between border-b pb-2 border-gray-200">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" strokeWidth={1.5} />
            <span className="text-xs sm:text-sm text-gray-600 font-medium">Data</span>
          </div>
          <span className="text-xs sm:text-sm text-gray-900 font-semibold">{data}</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between border-b pb-2 border-gray-200">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" strokeWidth={1.5} />
            <span className="text-xs sm:text-sm text-gray-600 font-medium">Price</span>
          </div>
          <div className="text-right">
            <span className="text-xs sm:text-sm text-gray-500">USD </span>
            <span className="text-xs sm:text-sm text-gray-400 line-through">{originalPrice}</span>
            <span className="text-xs sm:text-sm text-gray-900 font-semibold ml-1">${discountedPrice}</span>
          </div>
        </div>
      </div>

      {/* Buy now button */}
      <button onClick={onBuy} className={`${button}`}>
        Buy now
      </button>
    </div>
  );
};

export default OfferCard;