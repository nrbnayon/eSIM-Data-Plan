import { useState } from "react";
import { Link } from "react-router-dom";
import simFrii from "../../assets/logo/simFriiLogo.svg";
import SupportModal from "../Support/SupportModal";
import ChatModal from "../Support/ChatModal";
import LogoutModal from "../../components/LogoutModal";
import SwitchLanguage from "../CurrencyAndLanguage/SwitchLanguage";
import Currency from "../CurrencyAndLanguage/Currency";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = true;
  const [chatOpen, setChatOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const userImage =
    "https://www.logoai.com/uploads/resources/2023/06/19/fa7fe9edacbfae0e5ad69f061d0153b8.jpeg";
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [languageModalOpen, setLanguageModalOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const tabs = [
    { label: "Language", value: "language", content: <SwitchLanguage /> },
    { label: "Currency", value: "currency", content: <Currency /> },
  ];

  const [activeTab, setActiveTab] = useState("language");

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
    }, 200);
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

  const handleDropdownOptionClick = (option) => {
    setDropdownOpen(false);
    if (option === "Logout") {
      setShowLogoutModal(true);
    }
  };

  const toggleLanguageModal = () => {
    setLanguageModalOpen(!languageModalOpen);
  };

  return (
    <nav className='bg-white border border-gray-100 fixed w-full top-0 z-50'>
      <div className='container mx-auto px-4 py-4 flex justify-between md:grid grid-cols-3 items-center'>
        <Link
          to='/'
          className='text-2xl w-36 font-bold text-orange-600 tracking-tight'
        >
          <img src={simFrii} alt='' />
        </Link>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center justify-center space-x-8'>
          <Link
            to='/'
            className='text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium'
          >
            Home
          </Link>
          <Link
            to='/my-esim'
            className='text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium'
          >
            My eSIMs
          </Link>
          <a
            href='#'
            onClick={openSupport}
            className='text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium'
          >
            Support
          </a>
          <a
            onClick={toggleLanguageModal}
            className='text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium cursor-pointer'
          >
            EN | USD
          </a>
          <Link
            to='/instruction'
            className='text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium cursor-pointer'
          >
            Instruction
          </Link>
        </div>

        {/* Desktop Sign In / User Image */}
        <div className='hidden lg:flex items-center justify-end space-x-4'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search'
              className='pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300'
            />
            <svg
              className='w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              ></path>
            </svg>
          </div>
          {isLoggedIn ? (
            <div className='relative'>
              <img
                src={userImage || "https://via.placeholder.com/40"}
                alt='User'
                className='w-10 h-10 rounded-full border-2 border-orange-400 cursor-pointer'
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50'>
                  <Link
                    to='/dashboard'
                    onClick={() => handleDropdownOptionClick("Settings")}
                    className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                  >
                    Dashboard
                  </Link>
                  <Link
                    to='/settings'
                    onClick={() => handleDropdownOptionClick("Settings")}
                    className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                  >
                    Settings
                  </Link>
                  <a
                    href='#'
                    onClick={() => handleDropdownOptionClick("Logout")}
                    className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          ) : (
            <button className='rounded-full text-white font-medium bg-gradient-to-b from-[#FFA943] to-[#E97400] hover:scale-105 md:py-2 py-1 px-6 md:text-lg transition-transform duration-300 shadow-lg cursor-pointer'>
              Sign In
            </button>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className='lg:hidden'>
          <button
            onClick={toggleMenu}
            className='text-gray-700 focus:outline-none'
            aria-label='Toggle menu'
          >
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
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
        <div className='pt-6 pb-8 px-6 flex flex-col space-y-6'>
          <button
            onClick={toggleMenu}
            className='self-end text-gray-700 focus:outline-none'
            aria-label='Close menu'
          >
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              ></path>
            </svg>
          </button>
          <Link
            to='/'
            onClick={handleMenuItemClick}
            className='text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg font-medium'
          >
            Home
          </Link>
          <Link
            to='/my-esim'
            onClick={handleMenuItemClick}
            className='text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg font-medium'
          >
            My eSIMs
          </Link>
          <a
            href='#'
            onClick={(e) => {
              handleSupportClick(e);
              handleMenuItemClick();
            }}
            className='text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg font-medium'
          >
            Support
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              toggleLanguageModal();
              handleMenuItemClick();
            }}
            className='text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg font-medium'
          >
            EN | USD
          </a>
          <Link
            to='/instruction'
            className='text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg font-medium'
          >
            Instruction
          </Link>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search'
              className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full outline-none transition-all duration-300'
            />
            <svg
              className='w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              ></path>
            </svg>
          </div>
          {isLoggedIn ? (
            <div className='relative'>
              <img
                src={userImage || "https://via.placeholder.com/40"}
                alt='User'
                className='w-12 h-12 rounded-full border-2 border-gray-400 mx-auto cursor-pointer'
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50'>
                  <Link
                    to='/dashboard'
                    onClick={() => handleDropdownOptionClick("Settings")}
                    className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                  >
                    Dashboard
                  </Link>
                  <Link
                    to='/settings'
                    onClick={() => handleDropdownOptionClick("Settings")}
                    className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                  >
                    Settings
                  </Link>
                  <a
                    href='#'
                    onClick={() => handleDropdownOptionClick("Logout")}
                    className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleMenuItemClick}
              className='w-full bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors duration-300 font-medium'
            >
              Sign In
            </button>
          )}
        </div>
      </div>

      {/* Language Modal */}
      {languageModalOpen && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
          <div className=' bg-white rounded-2xl p-5'>
            <div className='flex justify-between text-center items-center gap-3 md:min-w-xl '>
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`px-10 py-3 rounded-md text-xm transition-all duration-500 cursor-pointer w-full text-center ${
                    activeTab === tab.value
                      ? "bg-[#FFF3E7] text-black"
                      : "text-black hover:bg-white/60"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className='py-5 h-[500px] overflow-auto'>
              {tabs.find((tab) => tab.value === activeTab)?.content}
            </div>
            <button onClick={toggleLanguageModal} className='btn-primary'>
              Confirm
            </button>
          </div>
        </div>
      )}

      {/* Shared Modal */}
      <SupportModal
        isOpen={supportOpen}
        onClose={closeSupport}
        openChat={openChat}
      />
      <ChatModal isOpen={chatOpen} onClose={closeChat} />
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
      />
    </nav>
  );
};

export default Navbar;
