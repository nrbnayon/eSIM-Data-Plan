
import giftBox from "../../../assets/icons/giftbox.svg";
import offer from "../../../assets/icons/offer.svg";

const RewardOffer = () => {
  return (
    <div className=" grid md:grid-cols-2 gap-7">
      <div className="bg-[#FFDAE1] rounded-2xl p-6 flex justify-between items-center">
        <div>
          <p className="text-xs md:text-lg text-gray-600">
            Earn $6 for every successful referral
          </p>
          <h2 className="md:text-3xl text-xl font-medium">
            Share the Love, Earn Perks!
          </h2>
        </div>
        <div>
          <img src={giftBox} alt="" />
        </div>
      </div>
      <div className="bg-[#EDDBFF] rounded-2xl p-6 flex justify-between items-center">
        <div>
          <p className="text-xs md:text-lg text-gray-600">
            Earn $6 for every successful referral
          </p>
          <h2 className="md:text-3xl text-xl font-medium">
            USe Code: FIRST12GD1
          </h2>
        </div>
        <div>
          <img src={offer} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RewardOffer;
