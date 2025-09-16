import { Link } from "react-router-dom";
import facebook from "../../assets/icons/facebook.svg";
import insta from "../../assets/icons/insta.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import location from "../../assets/icons/location.svg";
import email from "../../assets/icons/email.svg";
import call from "../../assets/icons/call.svg";
import banner from "../../assets/images/footer.svg";

const Footer = () => {
  return (
    <footer className="bg-white pt-7">
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 container mx-auto p-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            <div className="space-y-3">
              <div className="text-2xl font-bold text-orange-600 tracking-tight">
                SimFrii.com
              </div>
              <p className="text-gray-600 max-w-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, odio iure quasi, ab, consequatur velita reiciendis
                itaque quaerat
              </p>
              <div className="flex space-x-4">
                <Link to="/">
                  <img src={facebook} alt="Facebook" />
                </Link>
                <Link to="/">
                  <img src={twitter} alt="Twitter" />
                </Link>
                <Link to="/">
                  <img src={insta} alt="Instagram" />
                </Link>
                <Link to="/">
                  <img src={youtube} alt="YouTube" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">
              Popular Countries
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#8272ED] transition-colors"
                >
                  United States
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#8272ED] transition-colors"
                >
                  London
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#8272ED] transition-colors"
                >
                  Canada
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#8272ED] transition-colors"
                >
                  Australia
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#8272ED] transition-colors"
                >
                  Germany
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">About Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-purple-700 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#8272ED] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#8272ED] transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#8272ED] transition-colors"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <img src={location} alt="Location" />
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#8272ED] transition-colors"
                >
                  44 Danwers, NY City, USA, 70-102
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <img src={email} alt="Email" />
                <a
                  href="https://nrbnayon-ii.vercel.app"
                  className="text-gray-600 hover:text-[#8272ED] transition-colors"
                >
                  simfrii.contact@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <img src={call} alt="Call" />
                <a
                  href="https://nrbnayon-ii.vercel.app"
                  className="text-gray-600 hover:text-[#8272ED] transition-colors"
                >
                  91+585-656-658
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="text-gray-500 text-sm text-center pt-28 pb-5"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="">
            © 2025 <span className="text-[#aa6320]">Nayon</span>. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;