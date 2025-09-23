import { useState } from "react";
import { Edit2, Trash2 } from "lucide-react";
import deleteUser from '../../assets/icons/deleteUser.svg'


export default function AccountInformation() {
  const [editingName, setEditingName] = useState(false);
  const [fullName, setFullName] = useState("Daniel Smith");
  const [editingPhone, setEditingPhone] = useState(false);
  const [phone, setPhone] = useState("+1 25556 5585 99");
  const [editingPassword, setEditingPassword] = useState(false);
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleSaveName = () => {
    console.log("Name updated:", fullName);
    setEditingName(false);
  };

  const handleSavePhone = () => {
    console.log("Phone updated:", phone);
    setEditingPhone(false);
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "new" || name === "confirm") {
      setPasswordError("");
    }
  };

  const handlePasswordSave = () => {
    if (passwords.new !== passwords.confirm) {
      setPasswordError("New password and confirm password must match");
      return;
    }
    if (!passwords.current || !passwords.new || !passwords.confirm) {
      setPasswordError("All password fields are required");
      return;
    }
    console.log("Password updated:", {
      current: passwords.current,
      new: passwords.new,
    });
    setEditingPassword(false);
    setPasswords({ current: "", new: "", confirm: "" });
    setPasswordError("");
  };

  const handleDeleteAccount = () => {
    setShowDeleteModal(true);
  };

  const confirmDeleteAccount = () => {
    console.log("Account deleted");
    setShowDeleteModal(false);
    // Add actual delete account logic here (e.g., API call)
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className="space-y-8">
      {/* Name Section */}
      {editingName ? (
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Your name</h3>
          <p className="text-gray-600 text-sm mb-4">
            Make sure this matches the name on your gov. ID
          </p>
          <div className="space-y-4 shadow-xl p-4 rounded-2xl">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-full outline-none"
                placeholder="Daniel Pagla"
                maxLength={32}
              />
              <p className="text-right text-sm text-gray-500 mt-1">
                Text limit {fullName.length}/32
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setEditingName(false)}
                className="px-6 py-2 bg-gray-100 rounded-full cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveName}
                className="px-6 py-2 rounded-full text-white font-medium bg-gradient-to-b from-[#FFA943] to-[#E97400] cursor-pointer"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Your name</h3>
            <p className="text-gray-600">{fullName}</p>
          </div>
          <button
            onClick={() => setEditingName(true)}
            className="flex items-center space-x-1 text-gray-600 hover:text-orange-400 transition-colors duration-300"
          >
            <Edit2 className="w-4 h-4" />
            <span>Edit</span>
          </button>
        </div>
      )}

      {/* Phone Section */}
      {editingPhone ? (
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Phone number</h3>
          <p className="text-gray-600 text-sm mb-4">Enter a valid phone number</p>
          <div className="space-y-4 shadow-xl p-4 rounded-2xl">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-full outline-none"
                placeholder="+1 123 456 7890"
              />
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setEditingPhone(false)}
                className="px-6 py-2 bg-gray-100 rounded-full cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePhone}
                className="px-6 py-2 rounded-full text-white font-medium bg-gradient-to-b from-[#FFA943] to-[#E97400] cursor-pointer"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Phone number</h3>
            <p className="text-gray-600">{phone}</p>
          </div>
          <button
            onClick={() => setEditingPhone(true)}
            className="flex items-center space-x-1 text-gray-600 hover:text-orange-400 transition-colors duration-300"
          >
            <Edit2 className="w-4 h-4" />
            <span>Edit</span>
          </button>
        </div>
      )}

      {/* Email Section */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-gray-800">Email</h3>
          <p className="text-gray-600">danialpagla556@gmail.com</p>
        </div>
      </div>

      {/* Password Section */}
      {editingPassword ? (
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Change password</h3>
          <p className="text-gray-600 text-sm mb-4">
            Enter your current and new password
          </p>
          <div className="space-y-4 shadow-xl p-4 rounded-2xl">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current password
              </label>
              <input
                type="password"
                name="current"
                value={passwords.current}
                onChange={handlePasswordChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-full outline-none"
                placeholder="Current password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New password
              </label>
              <input
                type="password"
                name="new"
                value={passwords.new}
                onChange={handlePasswordChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-full outline-none"
                placeholder="New password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm new password
              </label>
              <input
                type="password"
                name="confirm"
                value={passwords.confirm}
                onChange={handlePasswordChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-full outline-none"
                placeholder="Confirm new password"
              />
            </div>
            {passwordError && (
              <p className="text-sm text-red-500">{passwordError}</p>
            )}
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  setEditingPassword(false);
                  setPasswords({ current: "", new: "", confirm: "" });
                  setPasswordError("");
                }}
                className="px-6 py-2 bg-gray-100 rounded-full cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handlePasswordSave}
                className="px-6 py-2 rounded-full text-white font-medium bg-gradient-to-b from-[#FFA943] to-[#E97400] cursor-pointer"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Password</h3>
            <p className="text-gray-600">•••••••••••••</p>
          </div>
          <button
            onClick={() => setEditingPassword(true)}
            className="flex items-center space-x-1 text-gray-600 hover:text-orange-400 transition-colors duration-300"
          >
            <Edit2 className="w-4 h-4" />
            <span>Change</span>
          </button>
        </div>
      )}

      {/* Delete Account Section */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-gray-800">Delete account</h3>
        </div>
        <button
          onClick={handleDeleteAccount}
          className="flex items-center space-x-1 text-red-600 transition-colors duration-300"
        >
          <Trash2 className="w-4 h-4" />
          <span>Delete</span>
        </button>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 sm:p-6 w-full max-w-md mx-4">
           <div className="flex items-center justify-center p-3">
             <img src={deleteUser} alt="" />
           </div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-center mb-4">
              Confirm Delete Account
            </h2>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-6">
              You can delete your account, but please note the process may take some time to complete. Once deleted, it cannot be undone later.
            </p>
            <div className="flex gap-5">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-100 w-full rounded-full text-sm sm:text-base cursor-pointer hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteAccount}
                className="px-4 py-2 rounded-full w-full text-white font-medium bg-red-600 text-sm sm:text-base hover:bg-red-700 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}