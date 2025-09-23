import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
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
    // Reset or set initial permissions based on the role (e.g., default for Support Staff)
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
    closeModal(); // Close modal after update
    // Add API call or other logic here to save permissions
  };

  return (
    <div className="">
      <SectionTitle title="Settings" description="System configuration and roles" />
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Role Management</h1>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src={question} alt="" />
                <span>
                  <p>{ticket.title}</p>
                  <p className="text-[#919191]">{ticket.customer}</p>
                </span>
              </div>
              <button
                onClick={() => openModal(ticket)}
                className="px-3 py-1 rounded-full bg-blue-200 text-blue-600 hover:bg-blue-300 transition-colors"
              >
                Open
              </button>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedTicket && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start pb-3 mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">Edit Role</h2>
                
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h3 className="text-blue-600 font-medium mb-1">{selectedTicket.title}</h3>
                <p className="text-gray-600 text-sm">Configure permissions for this role</p>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Dashboard Access</h4>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="dashboardAccess"
                    checked={permissions.dashboardAccess}
                    onChange={handleCheckboxChange}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-600">View dashboard and analytics</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">User Management</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="viewUsers"
                      checked={permissions.viewUsers}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-600">View user accounts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="editUsers"
                      checked={permissions.editUsers}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-600">Edit user accounts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="suspendUsers"
                      checked={permissions.suspendUsers}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-600">Suspend/ban user</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Plan Management</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="viewPlans"
                      checked={permissions.viewPlans}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-600">View eSIM plans</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="editPlans"
                      checked={permissions.editPlans}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-600">Create/edit plans</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-8">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
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