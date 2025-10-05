import { useState } from "react";
import question from "../../../assets/icons/question.svg";

const Settings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [permissions, setPermissions] = useState({
    dashboardAccess: false,
    viewUsers: false,
    editUsers: false,
    suspendUsers: false,
    viewPlans: false,
    editPlans: false,
  });

  const tickets = [
    {
      id: "TKT-001",
      title: "Super Admin",
      customer: "john@gmail.com",
      customerName: "John Smith",
    },
    {
      id: "TKT-002",
      title: "Support Staff",
      customer: "support@gmail.com",
      customerName: "Support User",
    },
  ];

  const openModal = (ticket) => {
    setPermissions({
      dashboardAccess: ticket.title === "Super Admin",
      viewUsers: ticket.title === "Super Admin",
      editUsers: false,
      suspendUsers: false,
      viewPlans: ticket.title === "Super Admin",
      editPlans: false,
    });
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTicket(null);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setPermissions((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleUpdate = () => {
    console.log("Updated permissions for", selectedTicket.title, permissions);
    closeModal();
  };

  return (
    <div className="p-2 sm:p-4 md:p-6">
      <div className="mb-4 sm:mb-6">
        <h1 className="text-lg sm:text-xl md:text-2xl font-medium mb-2">Settings</h1>
        <p className="text-xs sm:text-sm text-gray-600">System configuration and roles</p>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="p-4 sm:p-5 border-b border-gray-200">
          <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">Role Management</h1>
        </div>

        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <div key={ticket.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3 sm:gap-4">
                  <img src={question} alt="Role icon" className="w-6 h-6 sm:w-8 sm:h-8" />
                  <div>
                    <p className="text-sm sm:text-base font-medium text-gray-900">{ticket.title}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{ticket.customer}</p>
                  </div>
                </div>
                <button
                  onClick={() => openModal(ticket)}
                  className="w-full sm:w-auto px-4 py-1.5 text-xs sm:text-sm rounded-full bg-blue-200 text-blue-600 hover:bg-blue-300 transition-colors"
                >
                  Edit
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-6 text-gray-500 text-xs sm:text-sm">No roles found.</div>
          )}
        </div>
      </div>

      {isModalOpen && selectedTicket && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 sm:p-6">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="mb-4 sm:mb-6">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">Edit Role</h2>
              </div>

              <div className="bg-blue-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 text-xs sm:text-sm">
                <h3 className="text-blue-600 font-medium mb-1">{selectedTicket.title}</h3>
                <p className="text-gray-600">Configure permissions for this role</p>
              </div>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-medium text-gray-900 mb-2 sm:mb-3">Dashboard Access</h4>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="dashboardAccess"
                    checked={permissions.dashboardAccess}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-xs sm:text-sm text-gray-600">View dashboard and analytics</span>
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-medium text-gray-900 mb-2 sm:mb-3">User Management</h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="viewUsers"
                      checked={permissions.viewUsers}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-xs sm:text-sm text-gray-600">View user accounts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="editUsers"
                      checked={permissions.editUsers}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-xs sm:text-sm text-gray-600">Edit user accounts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="suspendUsers"
                      checked={permissions.suspendUsers}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-xs sm:text-sm text-gray-600">Suspend/ban user</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-medium text-gray-900 mb-2 sm:mb-3">Plan Management</h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="viewPlans"
                      checked={permissions.viewPlans}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-xs sm:text-sm text-gray-600">View eSIM plans</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="editPlans"
                      checked={permissions.editPlans}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-xs sm:text-sm text-gray-600">Create/edit plans</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 mt-4 sm:mt-6">
                <button
                  onClick={closeModal}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 text-xs sm:text-sm text-gray-600 hover:text-gray-800 bg-gray-200 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 text-xs sm:text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;