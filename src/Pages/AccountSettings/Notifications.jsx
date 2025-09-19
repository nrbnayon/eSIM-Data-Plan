import { useState } from "react";

export default function Notifications() {
  const [notifications, setNotifications] = useState({
    popup: true,
    chat: true,
    updates: false,
  });

  const handleToggle = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-6 bg-gray-50 p-4 rounded-2xl">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium text-gray-800">
            Pop up notification on desktop
          </h3>
        </div>
        <div
          className="relative w-12 h-6 cursor-pointer"
          onClick={() => handleToggle("popup")}
        >
          <input
            type="checkbox"
            checked={notifications.popup}
            onChange={() => handleToggle("popup")}
            className="sr-only"
          />
          <div
            className={`w-12 h-6 rounded-full shadow-inner transition-colors duration-300 ease-in-out ${
              notifications.popup ? "bg-orange-500" : "bg-gray-300"
            } hover:bg-opacity-90`}
          ></div>
          <div
            className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out ${
              notifications.popup ? "translate-x-6" : "translate-x-0"
            } hover:scale-110`}
          ></div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium text-gray-800">
            Turn on all chat notification
          </h3>
        </div>
        <div
          className="relative w-12 h-6 cursor-pointer"
          onClick={() => handleToggle("chat")}
        >
          <input
            type="checkbox"
            checked={notifications.chat}
            onChange={() => handleToggle("chat")}
            className="sr-only"
          />
          <div
            className={`w-12 h-6 rounded-full shadow-inner transition-colors duration-300 ease-in-out ${
              notifications.chat ? "bg-orange-500" : "bg-gray-300"
            } hover:bg-opacity-90`}
          ></div>
          <div
            className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out ${
              notifications.chat ? "translate-x-6" : "translate-x-0"
            } hover:scale-110`}
          ></div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium text-gray-800">
            Turn on new update notification
          </h3>
        </div>
        <div
          className="relative w-12 h-6 cursor-pointer"
          onClick={() => handleToggle("updates")}
        >
          <input
            type="checkbox"
            checked={notifications.updates}
            onChange={() => handleToggle("updates")}
            className="sr-only"
          />
          <div
            className={`w-12 h-6 rounded-full shadow-inner transition-colors duration-300 ease-in-out ${
              notifications.updates ? "bg-orange-500" : "bg-gray-300"
            } hover:bg-opacity-90`}
          ></div>
          <div
            className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out ${
              notifications.updates ? "translate-x-6" : "translate-x-0"
            } hover:scale-110`}
          ></div>
        </div>
      </div>
    </div>
  );
}