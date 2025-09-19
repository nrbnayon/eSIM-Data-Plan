import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import AccountInformation from "./AccountInformation";
import Notifications from "./Notifications";
import PrivacyPolicy from "./PrivacyPolicy";
import Language from "./Language";
import Help from "./Help";

export default function AccountSettings() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Account Information");
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const menuItems = [
    "Account Information",
    "Privacy & Policy",
    "Notifications",
    "Language",
    "Help",
    "Log Out",
  ];

  const handleMenuClick = (item) => {
    if (item === "Log Out") {
      setShowLogoutModal(true);
    } else {
      setActiveSection(item);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/signin");
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
          {/* Sidebar */}
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

          {/* Main Content */}
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
      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Log Out
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to log out?
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleLogout();
                  setShowLogoutModal(false);
                  // Handle logout logic here
                }}
                className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}