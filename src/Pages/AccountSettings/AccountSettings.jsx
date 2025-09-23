import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { LogOut } from "lucide-react";
import AccountInformation from "./AccountInformation";
import Notifications from "./Notifications";
import PrivacyPolicy from "./PrivacyPolicy";
import Language from "./Language";
import Help from "./Help";
import LogoutModal from "../../components/LogoutModal";

export default function AccountSettings() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSection = searchParams.get("section") || "Account Information";
  const [activeSection, setActiveSection] = useState(initialSection);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const menuItems = [
    "Account Information",
    "Privacy & Policy",
    "Notifications",
    "Language",
    "Help",
    "Log Out",
  ];

  useEffect(() => {
    if (activeSection && activeSection !== "Log Out") {
      setSearchParams({ section: activeSection });
    }
  }, [activeSection, setSearchParams]);

  const handleMenuClick = (item) => {
    if (item === "Log Out") {
      setShowLogoutModal(true);
    } else {
      setActiveSection(item);
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "Account Information":
        return <AccountInformation />;
      case "Notifications":
        return <Notifications />;
      case "Privacy & Policy":
        return <PrivacyPolicy />;
      case "Language":
        return <Language />;
      case "Help":
        return <Help />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen container mx-auto mt-30 md:mt-24">
      <div className="px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              <div className="text-center flex flex-col justify-center items-center mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    alt="John D."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">John D.</h1>
                  <p className="text-gray-600">john@gmail.com</p>
                </div>
              </div>
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition duration-300 ease-in-out flex items-center space-x-3 ${
                    activeSection === item
                      ? "text-gray-900 font-medium"
                      : "text-gray-400 hover:bg-gray-50"
                  }`}
                >
                  {item === "Log Out" && <LogOut className="w-5 h-5" />}
                  <span>{item}</span>
                </button>
              ))}
            </nav>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-white p-8 border-l border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-8">
                {activeSection}
              </h2>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
      <LogoutModal isOpen={showLogoutModal} onClose={() => setShowLogoutModal(false)} />
    </div>
  );
}