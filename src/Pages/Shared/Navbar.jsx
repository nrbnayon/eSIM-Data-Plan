import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = true;
  const userImage =
    "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 200); // Delay for smooth closing
  };

  return (
    <nav className="bg-white border border-gray-100 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between md:grid grid-cols-3 items-center">
        <div className="text-2xl font-bold text-orange-600 tracking-tight">
          SimFrii.com
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium"
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium"
          >
            My eSIMs
          </Link>
          <Link
            to="/"
            className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium"
          >
            Support
          </Link>
          <Link className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">
            EN | USD
          </Link>
        </div>

        {/* Desktop Sign In / User Image */}
        <div className="hidden lg:flex items-center justify-end space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          {isLoggedIn ? (
            <img
              src={userImage || "https://via.placeholder.com/40"}
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-gray-400"
            />
          ) : (
            <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors duration-300 font-medium">
              Sign In
            </button>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-0 left-0 w-full bg-white shadow-lg transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } transition-all duration-500 ease-in-out z-40`}
      >
        <div className="pt-6 pb-8 px-6 flex flex-col space-y-6">
          {/* Close Icon */}
          <button
            onClick={toggleMenu}
            className="self-end text-gray-700 focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <a
            href="#"
            onClick={handleMenuItemClick}
            className="text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg font-medium"
          >
            Home
          </a>
          <a
            href="#"
            onClick={handleMenuItemClick}
            className="text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg font-medium"
          >
            My eSIMs
          </a>
          <a
            href="#"
            onClick={handleMenuItemClick}
            className="text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg font-medium"
          >
            Support
          </a>
          <select className="w-full text-gray-700 bg-transparent border-none outline-none text-lg font-medium">
            <option>EN | USD</option>
            <option>ES | EUR</option>
            <option>FR | EUR</option>
          </select>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full outline-none transition-all duration-300"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          {isLoggedIn ? (
            <img
              src={userImage || "https://via.placeholder.com/40"}
              alt="User"
              className="w-12 h-12 rounded-full border-2 border-gray-400 mx-auto"
            />
          ) : (
            <button
              onClick={handleMenuItemClick}
              className="w-full bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors duration-300 font-medium"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
