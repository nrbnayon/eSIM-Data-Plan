import { Link, useNavigate } from "react-router-dom";
import OfferCard from "../../../components/OfferCard";

const GlobaleSIMs = () => {
  const navigate = useNavigate();
  const offers = [
    {
      company: "RoamFree",
      coverage: "100 Countries",
      duration: "30 Days",
      data: "10 GB",
      originalPrice: 25,
      discountedPrice: 23.5,
    },
    {
      company: "TravelNet",
      coverage: "80 Countries",
      duration: "60 Days",
      data: "15 GB",
      originalPrice: 30,
      discountedPrice: 28.0,
    },
    {
      company: "WorldLink",
      coverage: "200 Countries",
      duration: "365 Days",
      data: "100 GB",
      originalPrice: 80,
      discountedPrice: 75.0,
    },
  ];
  const handleBuy = (id) => {
    navigate(`/order-preview/${id}`);
  };

  return (
    <div className="my-10">
      <div className="grid grid-cols-4 items-center justify-between mb-5">
        <div className="col-span-3">
          <h1 className="md:text-3xl text-xl font-medium">Global eSIMs</h1>
          <p className="text-gray-600 text-xs">
            Discover our range of global eSIMs for seamless connectivity while
            traveling.
          </p>
        </div>
        <Link to="/worldwide" className="text-[#FF8911] hover:underline text-end">
          See All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {offers.map((offer, index) => (
          <OfferCard
            key={index}
            company={offer.company}
            coverage={offer.coverage}
            duration={offer.duration}
            data={offer.data}
            originalPrice={offer.originalPrice}
            discountedPrice={offer.discountedPrice}
            bgColor="bg-[#FFF6ED]"
            button="btn-primary"
            saleBadge="saleBadge"
            onBuy={() => handleBuy(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GlobaleSIMs;
