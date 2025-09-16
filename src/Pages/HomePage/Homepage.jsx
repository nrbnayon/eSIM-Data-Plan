import GlobaleSIMs from "./GlobaleSIMs/GlobaleSIMs";
import Hero from "./Hero/Hero";
import LimitedTimeOffers from "./LimitedTimeOffers/LimitedTimeOffers";
import PopularCountries from "./PopularCountries/PopularCountries";
import Regions from "./Regions/Regions";
import RewardOffer from "./RewardOffer/RewardOffer";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-10">
        <RewardOffer />
        <PopularCountries />
        <Regions />
        <LimitedTimeOffers />
        <GlobaleSIMs />
      </div>
    </div>
  );
};

export default Homepage;
