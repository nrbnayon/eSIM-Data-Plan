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
}) => {
  return (
    <div
      className={`rounded-2xl border border-gray-200 p-6 shadow-sm ${bgColor}`}
    >
      {/* Header with logo and sale badge */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div>
            <img src={eSime} alt="" className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">{company}</h2>
        </div>
        <div className={`${saleBadge}`}>ON SALE</div>
      </div>

      {/* Plan details */}
      <div className="space-y-6">
        {/* Coverage */}
        <div className="flex items-center justify-between border-b pb-2 border-gray-300">
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
            <span className="text-gray-600 text-lg">Coverage</span>
          </div>
          <span className="text-gray-900 text-lg font-semibold">
            {coverage}
          </span>
        </div>

        {/* Duration */}
        <div className="flex items-center justify-between border-b pb-2 border-gray-300">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
            <span className="text-gray-600 text-lg">Duration</span>
          </div>
          <span className="text-gray-900 text-lg font-semibold">
            {duration}
          </span>
        </div>

        {/* Data */}
        <div className="flex items-center justify-between border-b pb-2 border-gray-300">
          <div className="flex items-center gap-3">
            <Smartphone className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
            <span className="text-gray-600 text-lg">Data</span>
          </div>
          <span className="text-gray-900 text-lg font-semibold">{data}</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between border-b pb-2 border-gray-300">
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
            <span className="text-gray-600 text-lg">Price</span>
          </div>
          <div className="text-right">
            <span className="text-gray-500 text-lg">USD </span>
            <span className="text-gray-400 line-through text-lg">
              {originalPrice}
            </span>
            <span className="text-gray-900 text-lg font-semibold ml-1">
              {discountedPrice}
            </span>
          </div>
        </div>
      </div>

      {/* Buy now button */}
      <button className={`${button}`}>Buy now</button>
    </div>
  );
};

export default OfferCard;
