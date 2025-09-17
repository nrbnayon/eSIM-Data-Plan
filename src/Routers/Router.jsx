import { createBrowserRouter } from "react-router";
import Signup from "../Pages/Authentication/Signup";
import SignIn from "../Pages/Authentication/SignIn";
import Main from "../Layouts/Main";
import Homepage from "../Pages/HomePage/Homepage";
import OtpVerification from "../Pages/Authentication/OtpVerification";
import WorldWideESim from "../Pages/WorldWideESim/WorldWideESim";
import CountryEsim from "../Pages/WorldWideESim/CountryEsim";
import RegionOffers from "../Pages/HomePage/Regions/RegionOffers";
import MyEsim from "../Pages/MyEsim/MyEsim";
import ESIMDetails from "../Pages/MyEsim/ESIMDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/worldwide",
        element: <WorldWideESim />,
      },
      {
        path: "/worldwide-esim/:countryName",
        element: <CountryEsim />,
      },
      {
        path: "/region/:regionName",
        element: <RegionOffers />,
      },
      {
        path: "/my-esim",
        element: <MyEsim />,
      },
      {
        path: "/package-details",
        element: <ESIMDetails />,
      },
    ],
  },

  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/otp",
    element: <OtpVerification />,
  },
]);

export default router;
