import { useNavigate } from "react-router-dom";
import OfferCard from "../../../components/OfferCard";

const DataCard = () => {
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

export default DataCard;
