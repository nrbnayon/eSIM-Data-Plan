import { Outlet, useLocation } from "react-router";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Main = () => {
  const location = useLocation();
  const hideFooter = location.pathname === "/noFooter";

  return (
    <div className="">
      <Navbar />
      <ScrollToTop />
      <div className="min-h-[calc(100vh-26rem)]">
        <Outlet />
      </div>
      <div>{!hideFooter && <Footer />}</div>
    </div>
  );
};

export default Main;

