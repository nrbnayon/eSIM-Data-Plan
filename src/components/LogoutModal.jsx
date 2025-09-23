
import { useNavigate } from "react-router-dom";
import logout from "../assets/icons/logout.svg";

const LogoutModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/signin");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
        <div className="flex flex-col items-center py-5">
          <img src={logout} alt="" />
          <p className="text-gray-600 my-4">
            Are you sure you want to log out?
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors duration-300"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              handleLogout();
              onClose();
            }}
            className="flex-1 px-4 py-2 bg-black text-white rounded-full"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
