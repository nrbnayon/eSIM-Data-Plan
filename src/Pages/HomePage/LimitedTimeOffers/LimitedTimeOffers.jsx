import { useNavigate } from "react-router-dom";
import OfferCard from '../../../components/OfferCard';

const LimitedTimeOffers = () => {
  const navigate = useNavigate();
  const offers = [
    {
      company: "Airalo",
      coverage: "137 Countries",
      duration: "365 Days",
      data: "50 GB",
      originalPrice: 53,
      discountedPrice: 50.7,
    },
    {
      company: "Globetrotter",
      coverage: "120 Countries",
      duration: "180 Days",
      data: "30 GB",
      originalPrice: 45,
      discountedPrice: 42.5,
    },
    {
      company: "ConnectSphere",
      coverage: "150 Countries",
      duration: "90 Days",
      data: "20 GB",
      originalPrice: 35,
      discountedPrice: 33.0,
    },
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
      <h1 className="md:text-3xl text-xl font-medium mb-4">Limited Time Offers</h1>

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
            bgColor="bg-[#ffffff]"
            button="btn-primary"
            saleBadge="saleBadge"
            onBuy={() => handleBuy(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default LimitedTimeOffers;