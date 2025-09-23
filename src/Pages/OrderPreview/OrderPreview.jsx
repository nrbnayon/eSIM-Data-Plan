import { useState } from "react";
import RewardOffer from "../HomePage/RewardOffer/RewardOffer";
import eSime from "../../assets/icons/eSim.svg";
import {
  Calendar,
  Globe,
  Layers,
  Smartphone,
  Ticket,
  ChevronRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const OrderPreview = () => {
    const navigate = useNavigate()
  const countries = [
    {
      name: "Afghanistan",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Taliban.svg/512px-Flag_of_the_Taliban.svg.png",
    },
    {
      name: "Albania",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/512px-Flag_of_Albania.svg.png",
    },
    {
      name: "Algeria",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/512px-Flag_of_Algeria.svg.png",
    },
    {
      name: "Andorra",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/512px-Flag_of_Andorra.svg.png",
    },
    {
      name: "Angola",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/512px-Flag_of_Angola.svg.png",
    },
    {
      name: "Antigua and Barbuda",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/512px-Flag_of_Antigua_and_Barbuda.svg.png",
    },
    {
      name: "Argentina",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/512px-Flag_of_Argentina.svg.png",
    },
    {
      name: "Armenia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/512px-Flag_of_Armenia.svg.png",
    },
    {
      name: "Australia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/512px-Flag_of_Australia.svg.png",
    },
    {
      name: "Austria",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Austria.svg/512px-Flag_of_Austria.svg.png",
    },
    {
      name: "Azerbaijan",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/512px-Flag_of_Azerbaijan.svg.png",
    },
    {
      name: "Bahamas",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_the_Bahamas.svg/512px-Flag_of_the_Bahamas.svg.png",
    },
    {
      name: "Bahrain",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/512px-Flag_of_Bahrain.svg.png",
    },
    {
      name: "Bangladesh",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/512px-Flag_of_Bangladesh.svg.png",
    },
    {
      name: "Barbados",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Barbados.svg/512px-Flag_of_Barbados.svg.png",
    },
    {
      name: "Belarus",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Belarus.svg/512px-Flag_of_Belarus.svg.png",
    },
  ];

  const [showCountryModal, setShowCountryModal] = useState(false);
  const [showCardSelectionModal, setShowCardSelectionModal] = useState(false);

  const first7Countries = countries.slice(0, 8);

  const openCountryModal = () => {
    setShowCountryModal(true);
  };

  const closeCountryModal = () => {
    setShowCountryModal(false);
  };

  const openCardSelectionModal = () => {
    setShowCardSelectionModal(true);
  };

  const closeCardSelectionModal = () => {
    setShowCardSelectionModal(false);
    navigate('/payment-successful')

  };

  // Sample card data (you can replace with dynamic data from your state or API)
  const cards = [
    {
      id: 1,
      type: "Visa",
      holder: "John Doe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png",
    },
    { id: 2, type: "MasterCard", holder: "Jane Smith", logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png' },
    {
      id: 3,
      type: "Apple Pay",
      holder: "Alex Brown",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/2560px-Apple_Pay_logo.svg.png",
    },
    {
      id: 4,
      type: "Google Pay",
      holder: "Sarah Lee",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png",
    },
  ];

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="min-h-screen my-4 sm:my-6 md:my-24 container mx-auto p-2 sm:p-4">
      <RewardOffer />

      <div className="mt-4 sm:mt-6 md:mt-10">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center">
          Order preview
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-4 sm:mt-6">
          <div className="border border-gray-200 rounded-xl p-3 sm:p-4 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-center ">
              <h1 className="text-lg sm:text-xl font-semibold">
                Supported Countries
              </h1>
              <button
                onClick={openCountryModal}
                className="text-orange-600 hover:text-orange-500 font-medium flex items-center gap-1 mt-2 sm:mt-0"
              >
                See All <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2 mt-2 sm:mt-4">
              {first7Countries.map((country, index) => (
                <div key={index} className="flex items-center py-1 sm:py-2">
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="h-8 sm:h-10 w-8 sm:w-10 rounded-full object-cover mr-2 sm:mr-3"
                  />
                  <p className="text-sm sm:text-base text-gray-700">
                    {country.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <div
              className={`rounded-2xl border border-gray-200 p-3 sm:p-6 shadow-sm`}
            >
              <div className="flex justify-center items-center">
                <img src={eSime} alt="" className="w-12 sm:w-16 h-12 sm:h-16" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 py-3 sm:py-5 text-center sm:text-left">
                Details
              </h2>

              {/* Plan details */}
              <div className="space-y-4 sm:space-y-6">
                {/* Coverage */}
                <div className="flex items-center justify-between pb-1 sm:pb-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Globe
                      className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400"
                      strokeWidth={1.5}
                    />
                    <span className="text-gray-600 text-base sm:text-lg">
                      Coverage
                    </span>
                  </div>
                  <span className="text-gray-900 text-base sm:text-lg font-semibold">
                    33 Country
                  </span>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between pb-1 sm:pb-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Calendar
                      className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400"
                      strokeWidth={1.5}
                    />
                    <span className="text-gray-600 text-base sm:text-lg">
                      Duration
                    </span>
                  </div>
                  <span className="text-gray-900 text-base sm:text-lg font-semibold">
                    365 day
                  </span>
                </div>

                {/* Data */}
                <div className="flex items-center justify-between pb-1 sm:pb-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Smartphone
                      className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400"
                      strokeWidth={1.5}
                    />
                    <span className="text-gray-600 text-base sm:text-lg">
                      Data
                    </span>
                  </div>
                  <span className="text-gray-900 text-base sm:text-lg font-semibold">
                    500GB
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pb-1 sm:pb-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Layers
                      className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400"
                      strokeWidth={1.5}
                    />
                    <span className="text-gray-600 text-base sm:text-lg">
                      Price
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500 text-base sm:text-lg">
                      USD{" "}
                    </span>
                    <span className="text-gray-400 line-through text-base sm:text-lg">
                      20
                    </span>
                    <span className="text-gray-900 text-base sm:text-lg font-semibold ml-1">
                      $15
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 py-2 sm:py-5">
                <input type="checkbox" className="mt-1" />
                <p className="text-xs sm:text-sm">
                  eSIM plans can only be used on compatible, unblocked devices.
                  Click here to{" "}
                  <Link className="text-orange-400 underline">view</Link>{" "}
                  support devices.
                </p>
              </div>
              <div className="pb-3 sm:pb-5">
                <div className="flex gap-2 sm:gap-5 font-medium text-sm sm:text-base">
                  <Ticket className="w-4 sm:w-5 h-4 sm:h-5" />
                  <h1>Apply a voucher</h1>
                </div>
                <input
                  type="text"
                  placeholder="Enter voucher"
                  className="mt-2 sm:mt-5 px-2 sm:px-4 py-1 sm:py-2 border border-gray-300 rounded-full w-full text-sm sm:text-base outline-none"
                />
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <button className="flex-1 px-2 sm:px-4 py-1 sm:py-2 border border-gray-800 rounded-full text-gray-800 text-sm sm:text-base hover:bg-gray-50 transition-colors duration-300">
                  Cancel
                </button>
                <button
                  onClick={openCardSelectionModal}
                  className="flex-1 px-2 sm:px-4 py-1 sm:py-2 bg-black text-white rounded-full text-sm sm:text-base"
                >
                  Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Country Modal */}
      {showCountryModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-lg mx-2 sm:mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center p-3 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold">
                All Supported Countries
              </h2>
              <button
                onClick={closeCountryModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-5 sm:w-6 h-5 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-2 px-3 sm:px-6 pb-3 sm:pb-5">
              {countries.map((country, index) => (
                <div key={index} className="flex items-center py-1 sm:py-2">
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="h-6 sm:h-8 w-6 sm:w-8 rounded-full object-cover mr-2 sm:mr-3"
                  />
                  <p className="text-sm sm:text-base text-gray-700">
                    {country.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Card Selection Modal */}
      {showCardSelectionModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-lg mx-2 sm:mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center p-3 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold">
                Select Payment Method
              </h2>
              <button
                onClick={closeCardSelectionModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-5 sm:w-6 h-5 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="px-3 sm:px-6 pb-3 sm:pb-5 space-y-4">
              {cards.map((card) => (
                <label
                  key={card.id}
                  className="flex items-center justify-between p-2 sm:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div>
                      <img src={card.logo} alt="" className="w-12 border p-1 border-gray-200 rounded" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm sm:text-base font-medium">
                        {card.type}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {card.holder}
                      </p>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="card"
                    value={card.id}
                    checked={selectedCard === card.id}
                    onChange={() => setSelectedCard(card.id)}
                    className="w-4 h-4 text-orange-500 focus:ring-0"
                  />
                </label>
              ))}
              <button
                onClick={closeCardSelectionModal} // Replace with payment confirmation logic
                className="w-full py-2 sm:py-3 bg-black text-white rounded-lg text-sm sm:text-base hover:bg-gray-800 transition-colors duration-200"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPreview;
