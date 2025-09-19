import { useState } from "react";
import { Link } from "react-router-dom";
import SupportModal from "../Support/supportModal";
import ChatModal from "../Support/ChatModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = true;
  const [chatOpen, setChatOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const userImage =
    "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg";
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [languageModalOpen, setLanguageModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openSupport = () => setSupportOpen(true);
  const closeSupport = () => setSupportOpen(false);
  const openChat = () => {
    closeSupport();
    setChatOpen(true);
  };
  const closeChat = () => setChatOpen(false);

  const handleMenuItemClick = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 200); // Delay for smooth closing
  };

  const handleSupportClick = (e) => {
    e.preventDefault();
    setSupportOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownOptionClick = () => {
    setDropdownOpen(false);
  };

  const toggleLanguageModal = () => {
    setLanguageModalOpen(!languageModalOpen);
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
            to="/my-esim"
            className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium"
          >
            My eSIMs
          </Link>
          <a
            href="#"
            onClick={openSupport}
            className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium"
          >
            Support
          </a>
          <a
            onClick={toggleLanguageModal}
            className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium cursor-pointer"
          >
            EN | USD
          </a>
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
            <div className="relative">
              <img
                src={userImage || "https://via.placeholder.com/40"}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-gray-400 cursor-pointer"
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                  <Link to='/settings'
                    onClick={handleDropdownOptionClick}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <a
                    href="#"
                    onClick={handleDropdownOptionClick}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
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
            onClick={(e) => {
              handleSupportClick(e);
              handleMenuItemClick();
            }}
            className="text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg font-medium"
          >
            Support
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              toggleLanguageModal();
              handleMenuItemClick();
            }}
            className="text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg font-medium"
          >
            EN | USD
          </a>
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
            <div className="relative">
              <img
                src={userImage || "https://via.placeholder.com/40"}
                alt="User"
                className="w-12 h-12 rounded-full border-2 border-gray-400 mx-auto cursor-pointer"
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                  <Link to="/settings"
                    onClick={handleDropdownOptionClick}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <a
                    href="#"
                    onClick={handleDropdownOptionClick}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
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

      {/* Language Modal */}
      {languageModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80">
            <h2 className="text-lg font-semibold mb-4">Select Language & Currency</h2>
            <select
              className="w-full p-2 border border-gray-300 rounded mb-4"
              onChange={(e) => console.log(e.target.value)}
            >
              <option>EN | USD</option>
              <option>ES | EUR</option>
              <option>FR | EUR</option>
            </select>
            <button
              onClick={toggleLanguageModal}
              className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Shared Modal */}
      <SupportModal isOpen={supportOpen} onClose={closeSupport} openChat={openChat} />
      <ChatModal isOpen={chatOpen} onClose={closeChat} />
    </nav>
  );
};

export default Navbar;