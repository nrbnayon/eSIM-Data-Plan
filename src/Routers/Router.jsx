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
import AccountSettings from "../Pages/AccountSettings/AccountSettings";
import Dashboard from "../Layouts/Dashboard";
import AdminOverview from "../Pages/AdminPages/AdminOverview";
import OrderPreview from "../Pages/OrderPreview/OrderPreview";
import SuccessPayment from "../Pages/OrderPreview/SuccessPayment";
import TopUp from "../Pages/TopUp/TopUp";
import Instructions from "../Pages/Instructions/Instructions";
import Email from "../Pages/Authentication/Email";
import ResetPassword from "../Pages/Authentication/ResetPassword";
import AllUser from "../Pages/AdminPages/AllUser/AllUsers";
import OrderList from "../Pages/AdminPages/OrderPage/OrderList";
import UserDetailPage from "../Pages/AdminPages/AllUser/UserDetail";
import OrderDetailPage from "../Pages/AdminPages/OrderPage/OrderDetailPage";
import ContentPage from "../Pages/AdminPages/ContentPage/ContentPage";
import Payment from "../Pages/AdminPages/Payment/Payment";
import PlanManagement from "../Pages/AdminPages/PlanManagement/PlanManagement";
import CustomerSupport from "../Pages/AdminPages/CustomerSupport/CustomerSupport";
import Settings from "../Pages/AdminPages/Settings/Settings";
import Analytics from "../Pages/AdminPages/Analytics/Analytics";
import IssueAnalytics from "../Pages/StaffPages/IssueAnalytics/IssueAnalytics";
import SimPlan from "../Pages/StaffPages/SimPlan/SimPlan";
import StaffOverview from "../Pages/StaffPages/StaffOverview/StaffOverview";
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
      {
        path: "/instruction",
        element: <Instructions />,
      },
      {
        path: "/top-up/:id",
        element: <TopUp />,
      },
      {
        path: "/settings",
        element: <AccountSettings />,
      },
      {
        path: "/order-preview/:id",
        element: <OrderPreview />,
      },
      {
        path: "/payment-successful",
        element: <SuccessPayment />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "adminOverview",
        element: <AdminOverview />,
      },

      {
        path: "userList",
        element: <AllUser />,
      },
      {
        path: "userDetail/:id",
        element: <UserDetailPage />,
      },
      {
        path: "order",
        element: <OrderList />,
      },
      {
        path: "order-details/:id",
        element: <OrderDetailPage />,
      },
      {
        path: "management",
        element: <PlanManagement />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "content",
        element: <ContentPage />,
      },
      {
        path: "order-details/:id",
        element: <OrderDetailPage />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "support",
        element: <CustomerSupport />,
      },
      {
        path: "settings",
        element: <Settings />,
      },

      // Stuff dashboard
      {
        path: "stuffOverview",
        element: <StaffOverview />,
      },
      {
        path: "sim-plan",
        element: <SimPlan />,
      },
      {
        path: "issue-analytics",
        element: <IssueAnalytics />,
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
    path: "/email",
    element: <Email />,
  },
  {
    path: "/otp",
    element: <OtpVerification />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);

export default router;
