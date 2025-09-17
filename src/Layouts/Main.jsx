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
      <div >
        <Outlet />
      </div>
      <div>{!hideFooter && <Footer />}</div>
    </div>
  );
};

export default Main;
//  className="container mx-auto mt-30 md:mt-15"
