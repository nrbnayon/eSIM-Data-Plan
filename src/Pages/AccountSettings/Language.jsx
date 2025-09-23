import { useState } from "react";

export default function Language() {
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
    {
      name: "Belgium",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Belgium.svg/512px-Flag_of_Belgium.svg.png",
    },
    {
      name: "Belize",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/512px-Flag_of_Belize.svg.png",
    },
    {
      name: "Benin",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Flag_of_Benin.svg/512px-Flag_of_Benin.svg.png",
    },
    {
      name: "Bhutan",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bhutan.svg/512px-Flag_of_Bhutan.svg.png",
    },
    {
      name: "Bolivia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Bolivia_%28state%29.svg/512px-Flag_of_Bolivia_%28state%29.svg.png",
    },
    {
      name: "Bosnia and Herzegovina",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/512px-Flag_of_Bosnia_and_Herzegovina.svg.png",
    },
    {
      name: "Botswana",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/512px-Flag_of_Botswana.svg.png",
    },
    {
      name: "Brazil",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/512px-Flag_of_Brazil.svg.png",
    },
    {
      name: "Brunei",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/512px-Flag_of_Brunei.svg.png",
    },
    {
      name: "Bulgaria",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/512px-Flag_of_Bulgaria.svg.png",
    },
    {
      name: "Burkina Faso",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/512px-Flag_of_Burkina_Faso.svg.png",
    },
    {
      name: "Burundi",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Burundi.svg/512px-Flag_of_Burundi.svg.png",
    },
    {
      name: "Cabo Verde",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/512px-Flag_of_Cape_Verde.svg.png",
    },
    {
      name: "Cambodia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/512px-Flag_of_Cambodia.svg.png",
    },
    {
      name: "Cameroon",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/512px-Flag_of_Cameroon.svg.png",
    },
    {
      name: "Canada",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/512px-Flag_of_Canada_%28Pantone%29.svg.png",
    },
    {
      name: "Central African Republic",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Central_African_Republic.svg/512px-Flag_of_the_Central_African_Republic.svg.png",
    },
    {
      name: "Chad",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/512px-Flag_of_Chad.svg.png",
    },
    {
      name: "Chile",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/512px-Flag_of_Chile.svg.png",
    },
    {
      name: "China",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/512px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    },
  ];
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="h-[70vh] overflow-y-auto">
      <div className="">
        <div className="mb-4">
          <div className="w-full space-y-5">
            {countries.map((country) => (
              <div key={country.name}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <img
                      src={country.flag}
                      alt=""
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <p>{country.name}</p>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="country"
                      value={country.name}
                      checked={selectedCountry === country.name}
                      onChange={handleChange}
                      className="h-5 w-5 mx-7 "
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}