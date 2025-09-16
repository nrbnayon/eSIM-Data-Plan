import { Link } from "react-router-dom";

const PopularCountries = () => {
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
    {
      name: "Colombia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/512px-Flag_of_Colombia.svg.png",
    },
    {
      name: "Comoros",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Comoros.svg/512px-Flag_of_the_Comoros.svg.png",
    },
    {
      name: "Congo (Congo-Brazzaville)",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_the_Republic_of_the_Congo.svg/512px-Flag_of_the_Republic_of_the_Congo.svg.png",
    },
    {
      name: "Costa Rica",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/512px-Flag_of_Costa_Rica.svg.png",
    },
    {
      name: "Croatia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/512px-Flag_of_Croatia.svg.png",
    },
    {
      name: "Cuba",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Cuba.svg/512px-Flag_of_Cuba.svg.png",
    },
    {
      name: "Cyprus",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_Cyprus.svg/512px-Flag_of_Cyprus.svg.png",
    },
    {
      name: "Czechia (Czech Republic)",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/512px-Flag_of_the_Czech_Republic.svg.png",
    },
    {
      name: "Denmark",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/512px-Flag_of_Denmark.svg.png",
    },
    {
      name: "Djibouti",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/512px-Flag_of_Djibouti.svg.png",
    },
    {
      name: "Dominica",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_Dominica.svg/512px-Flag_of_Dominica.svg.png",
    },
    {
      name: "Dominican Republic",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/512px-Flag_of_the_Dominican_Republic.svg.png",
    },
    {
      name: "Ecuador",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/512px-Flag_of_Ecuador.svg.png",
    },
    {
      name: "Egypt",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/512px-Flag_of_Egypt.svg.png",
    },
    {
      name: "El Salvador",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Flag_of_El_Salvador.svg/512px-Flag_of_El_Salvador.svg.png",
    },
    {
      name: "Equatorial Guinea",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Equatorial_Guinea.svg/512px-Flag_of_Equatorial_Guinea.svg.png",
    },
    {
      name: "Eritrea",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Flag_of_Eritrea.svg/512px-Flag_of_Eritrea.svg.png",
    },
    {
      name: "Estonia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/512px-Flag_of_Estonia.svg.png",
    },
    {
      name: "Eswatini (fmr. Swaziland)",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Eswatini.svg/512px-Flag_of_Eswatini.svg.png",
    },
    {
      name: "Ethiopia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/512px-Flag_of_Ethiopia.svg.png",
    },
    {
      name: "Fiji",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/512px-Flag_of_Fiji.svg.png",
    },
    {
      name: "Finland",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/512px-Flag_of_Finland.svg.png",
    },
    {
      name: "France",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/512px-Flag_of_France.svg.png",
    },
    {
      name: "Gabon",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Flag_of_Gabon.svg/512px-Flag_of_Gabon.svg.png",
    },
    {
      name: "Gambia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_The_Gambia.svg/512px-Flag_of_The_Gambia.svg.png",
    },
    {
      name: "Georgia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Georgia.svg/512px-Flag_of_Georgia.svg.png",
    },
    {
      name: "Germany",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/512px-Flag_of_Germany.svg.png",
    },
    {
      name: "Ghana",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/512px-Flag_of_Ghana.svg.png",
    },
    {
      name: "Greece",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/512px-Flag_of_Greece.svg.png",
    },
    {
      name: "Grenada",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Grenada.svg/512px-Flag_of_Grenada.svg.png",
    },
    {
      name: "Guatemala",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/512px-Flag_of_Guatemala.svg.png",
    },
    {
      name: "Guinea",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Guinea.svg/512px-Flag_of_Guinea.svg.png",
    },
    {
      name: "Guinea-Bissau",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/512px-Flag_of_Guinea-Bissau.svg.png",
    },
    {
      name: "Guyana",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Guyana.svg/512px-Flag_of_Guyana.svg.png",
    },
    {
      name: "Haiti",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/512px-Flag_of_Haiti.svg.png",
    },
    {
      name: "Honduras",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/512px-Flag_of_Honduras.svg.png",
    },
    {
      name: "Hungary",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/512px-Flag_of_Hungary.svg.png",
    },
    {
      name: "Iceland",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/512px-Flag_of_Iceland.svg.png",
    },
    {
      name: "India",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/512px-Flag_of_India.svg.png",
    },
    {
      name: "Indonesia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/512px-Flag_of_Indonesia.svg.png",
    },
    {
      name: "Iran",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/512px-Flag_of_Iran.svg.png",
    },
    {
      name: "Iraq",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/512px-Flag_of_Iraq.svg.png",
    },
    {
      name: "Ireland",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/512px-Flag_of_Ireland.svg.png",
    },
    {
      name: "Israel",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/512px-Flag_of_Israel.svg.png",
    },
    {
      name: "Italy",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/512px-Flag_of_Italy.svg.png",
    },
    {
      name: "Jamaica",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/512px-Flag_of_Jamaica.svg.png",
    },
    {
      name: "Japan",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/512px-Flag_of_Japan.svg.png",
    },
    {
      name: "Jordan",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/512px-Flag_of_Jordan.svg.png",
    },
    {
      name: "Kazakhstan",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/512px-Flag_of_Kazakhstan.svg.png",
    },
    {
      name: "Kenya",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/512px-Flag_of_Kenya.svg.png",
    },
    {
      name: "Kiribati",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_Kiribati.svg/512px-Flag_of_Kiribati.svg.png",
    },
    {
      name: "Kuwait",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Kuwait.svg/512px-Flag_of_Kuwait.svg.png",
    },
    {
      name: "Kyrgyzstan",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Kyrgyzstan.svg/512px-Flag_of_Kyrgyzstan.svg.png",
    },
    {
      name: "Laos",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/512px-Flag_of_Laos.svg.png",
    },
    {
      name: "Latvia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/512px-Flag_of_Latvia.svg.png",
    },
    {
      name: "Lebanon",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/512px-Flag_of_Lebanon.svg.png",
    },
    {
      name: "Lesotho",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/512px-Flag_of_Lesotho.svg.png",
    },
    {
      name: "Liberia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/512px-Flag_of_Liberia.svg.png",
    },
    {
      name: "Libya",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/512px-Flag_of_Libya.svg.png",
    },
    {
      name: "Liechtenstein",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/512px-Flag_of_Liechtenstein.svg.png",
    },
    {
      name: "Lithuania",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_Lithuania.svg/512px-Flag_of_Lithuania.svg.png",
    },
    {
      name: "Luxembourg",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/512px-Flag_of_Luxembourg.svg.png",
    },
    {
      name: "Madagascar",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/512px-Flag_of_Madagascar.svg.png",
    },
    {
      name: "Malawi",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/512px-Flag_of_Malawi.svg.png",
    },
    {
      name: "Malaysia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/512px-Flag_of_Malaysia.svg.png",
    },
    {
      name: "Maldives",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_the_Maldives.svg/512px-Flag_of_the_Maldives.svg.png",
    },
    {
      name: "Mali",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Mali.svg/512px-Flag_of_Mali.svg.png",
    },
    {
      name: "Malta",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_Malta.svg/512px-Flag_of_Malta.svg.png",
    },
    {
      name: "Marshall Islands",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_the_Marshall_Islands.svg/512px-Flag_of_the_Marshall_Islands.svg.png",
    },
    {
      name: "Mauritania",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Mauritania.svg/512px-Flag_of_Mauritania.svg.png",
    },
    {
      name: "Mauritius",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/512px-Flag_of_Mauritius.svg.png",
    },
    {
      name: "Mexico",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/512px-Flag_of_Mexico.svg.png",
    },
    {
      name: "Micronesia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_Micronesia.svg/512px-Flag_of_Micronesia.svg.png",
    },
    {
      name: "Moldova",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Flag_of_Moldova.svg/512px-Flag_of_Moldova.svg.png",
    },
    {
      name: "Monaco",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/512px-Flag_of_Monaco.svg.png",
    },
    {
      name: "Mongolia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_Mongolia.svg/512px-Flag_of_Mongolia.svg.png",
    },
    {
      name: "Montenegro",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/512px-Flag_of_Montenegro.svg.png",
    },
    {
      name: "Morocco",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/512px-Flag_of_Morocco.svg.png",
    },
    {
      name: "Mozambique",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/512px-Flag_of_Mozambique.svg.png",
    },
    {
      name: "Myanmar (formerly Burma)",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/512px-Flag_of_Myanmar.svg.png",
    },
    {
      name: "Namibia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Namibia.svg/512px-Flag_of_Namibia.svg.png",
    },
    {
      name: "Nauru",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_Nauru.svg/512px-Flag_of_Nauru.svg.png",
    },
    {
      name: "Nepal",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/512px-Flag_of_Nepal.svg.png",
    },
    {
      name: "Netherlands",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/512px-Flag_of_the_Netherlands.svg.png",
    },
    {
      name: "New Zealand",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/512px-Flag_of_New_Zealand.svg.png",
    },
    {
      name: "Nicaragua",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/512px-Flag_of_Nicaragua.svg.png",
    },
    {
      name: "Niger",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Niger.svg/512px-Flag_of_Niger.svg.png",
    },
    {
      name: "Nigeria",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/512px-Flag_of_Nigeria.svg.png",
    },
    {
      name: "North Korea",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/512px-Flag_of_North_Korea.svg.png",
    },
    {
      name: "North Macedonia (formerly Macedonia)",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_North_Macedonia.svg/512px-Flag_of_North_Macedonia.svg.png",
    },
    {
      name: "Norway",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/512px-Flag_of_Norway.svg.png",
    },
    {
      name: "Oman",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Oman.svg/512px-Flag_of_Oman.svg.png",
    },
    {
      name: "Pakistan",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/512px-Flag_of_Pakistan.svg.png",
    },
    {
      name: "Palau",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Palau.svg/512px-Flag_of_Palau.svg.png",
    },
    {
      name: "Palestine State",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Palestine.svg/512px-Flag_of_Palestine.svg.png",
    },
    {
      name: "Panama",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/512px-Flag_of_Panama.svg.png",
    },
    {
      name: "Papua New Guinea",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/512px-Flag_of_Papua_New_Guinea.svg.png",
    },
    {
      name: "Paraguay",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Paraguay.svg/512px-Flag_of_Paraguay.svg.png",
    },
    {
      name: "Peru",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/512px-Flag_of_Peru.svg.png",
    },
    {
      name: "Philippines",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/512px-Flag_of_the_Philippines.svg.png",
    },
    {
      name: "Poland",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/512px-Flag_of_Poland.svg.png",
    },
    {
      name: "Portugal",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/512px-Flag_of_Portugal.svg.png",
    },
    {
      name: "Qatar",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/512px-Flag_of_Qatar.svg.png",
    },
    {
      name: "Romania",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/512px-Flag_of_Romania.svg.png",
    },
    {
      name: "Russia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/512px-Flag_of_Russia.svg.png",
    },
    {
      name: "Rwanda",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/512px-Flag_of_Rwanda.svg.png",
    },
    {
      name: "Saint Kitts and Nevis",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/512px-Flag_of_Saint_Kitts_and_Nevis.svg.png",
    },
    {
      name: "Saint Lucia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/512px-Flag_of_Saint_Lucia.svg.png",
    },
    {
      name: "Saint Vincent and the Grenadines",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/512px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png",
    },
    {
      name: "Samoa",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Samoa.svg/512px-Flag_of_Samoa.svg.png",
    },
    {
      name: "San Marino",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/512px-Flag_of_San_Marino.svg.png",
    },
    {
      name: "Sao Tome and Principe",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg/512px-Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg.png",
    },
    {
      name: "Saudi Arabia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/512px-Flag_of_Saudi_Arabia.svg.png",
    },
    {
      name: "Senegal",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/512px-Flag_of_Senegal.svg.png",
    },
    {
      name: "Serbia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Flag_of_Serbia.svg/512px-Flag_of_Serbia.svg.png",
    },
    {
      name: "Seychelles",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Seychelles.svg/512px-Flag_of_Seychelles.svg.png",
    },
    {
      name: "Sierra Leone",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/512px-Flag_of_Sierra_Leone.svg.png",
    },
    {
      name: "Singapore",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Singapore.svg/512px-Flag_of_Singapore.svg.png",
    },
    {
      name: "Slovakia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/512px-Flag_of_Slovakia.svg.png",
    },
    {
      name: "Slovenia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Slovenia.svg/512px-Flag_of_Slovenia.svg.png",
    },
    {
      name: "Solomon Islands",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/512px-Flag_of_the_Solomon_Islands.svg.png",
    },
    {
      name: "Somalia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/512px-Flag_of_Somalia.svg.png",
    },
    {
      name: "South Africa",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/512px-Flag_of_South_Africa.svg.png",
    },
    {
      name: "South Korea",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_South_Korea.svg/512px-Flag_of_South_Korea.svg.png",
    },
    {
      name: "South Sudan",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_South_Sudan.svg/512px-Flag_of_South_Sudan.svg.png",
    },
    {
      name: "Spain",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/512px-Flag_of_Spain.svg.png",
    },
    {
      name: "Sri Lanka",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/512px-Flag_of_Sri_Lanka.svg.png",
    },
    {
      name: "Sudan",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/512px-Flag_of_Sudan.svg.png",
    },
    {
      name: "Suriname",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flag_of_Suriname.svg/512px-Flag_of_Suriname.svg.png",
    },
    {
      name: "Sweden",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/512px-Flag_of_Sweden.svg.png",
    },
    {
      name: "Switzerland",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/512px-Flag_of_Switzerland.svg.png",
    },
    {
      name: "Syria",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Syria.svg/512px-Flag_of_Syria.svg.png",
    },
    {
      name: "Taiwan",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/512px-Flag_of_the_Republic_of_China.svg.png",
    },
    {
      name: "Tajikistan",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/512px-Flag_of_Tajikistan.svg.png",
    },
    {
      name: "Tanzania",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_Tanzania.svg/512px-Flag_of_Tanzania.svg.png",
    },
    {
      name: "Thailand",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/512px-Flag_of_Thailand.svg.png",
    },
    {
      name: "Timor-Leste",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_East_Timor.svg/512px-Flag_of_East_Timor.svg.png",
    },
    {
      name: "Togo",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Togo.svg/512px-Flag_of_Togo.svg.png",
    },
    {
      name: "Tonga",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/512px-Flag_of_Tonga.svg.png",
    },
    {
      name: "Trinidad and Tobago",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/512px-Flag_of_Trinidad_and_Tobago.svg.png",
    },
    {
      name: "Tunisia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/512px-Flag_of_Tunisia.svg.png",
    },
    {
      name: "Turkey",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/512px-Flag_of_Turkey.svg.png",
    },
    {
      name: "Turkmenistan",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/512px-Flag_of_Turkmenistan.svg.png",
    },
    {
      name: "Tuvalu",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tuvalu.svg/512px-Flag_of_Tuvalu.svg.png",
    },
    {
      name: "Uganda",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/512px-Flag_of_Uganda.svg.png",
    },
    {
      name: "Ukraine",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/512px-Flag_of_Ukraine.svg.png",
    },
    {
      name: "United Arab Emirates",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/512px-Flag_of_the_United_Arab_Emirates.svg.png",
    },
    {
      name: "United Kingdom",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/512px-Flag_of_the_United_Kingdom.svg.png",
    },
    {
      name: "United States of America",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/512px-Flag_of_the_United_States.svg.png",
    },
    {
      name: "Uruguay",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/512px-Flag_of_Uruguay.svg.png",
    },
    {
      name: "Uzbekistan",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/512px-Flag_of_Uzbekistan.svg.png",
    },
    {
      name: "Vanuatu",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Vanuatu.svg/512px-Flag_of_Vanuatu.svg.png",
    },
    {
      name: "Vatican City (Holy See)",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_the_Vatican_City.svg/512px-Flag_of_the_Vatican_City.svg.png",
    },
    {
      name: "Venezuela",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/512px-Flag_of_Venezuela.svg.png",
    },
    {
      name: "Vietnam",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/512px-Flag_of_Vietnam.svg.png",
    },
    {
      name: "Yemen",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/512px-Flag_of_Yemen.svg.png",
    },
    {
      name: "Zambia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Zambia.svg/512px-Flag_of_Zambia.svg.png",
    },
    {
      name: "Zimbabwe",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/512px-Flag_of_Zimbabwe.svg.png",
    },
  ];

  const sliceCountries = countries.slice(0, 16); 

  return (
    <div className="my-10">
      <h2 className="text-3xl font-medium mb-4">Popular Countries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 ">
        {sliceCountries.map((country, index) => (
          <Link
            to={`/worldwide-esim/${country.name
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
            key={index}
            className="flex items-center gap-5 border border-gray-300 p-4 rounded-xl mb-4 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={country.flag}
              alt={country.name}
              className="h-10 w-10 rounded-full object-cover"
            />
            <p className="">{country.name}</p>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link to='/worldwide' className="border border-gray-300 px-10 py-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
          See all 200+ countries
        </Link>
      </div>
    </div>
  );
};

export default PopularCountries;
