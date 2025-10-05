// import logo from "../assets/logo/logo.png";
// import Logout from "../assets/icons/signout.svg";
// import HomeIconSvg from "../assets/icons/Home.svg";
// import UserIconSvg from "../assets/icons/Users.svg";
// import OrderIconSvg from "../assets/icons/order.svg";
// import PaymentIconSvg from "../assets/icons/payment.svg";
// import CloudIconSvg from "../assets/icons/cloud.svg";
// import AnalyticsIconSvg from "../assets/icons/analytics.svg";
// import SupportIconSvg from "../assets/icons/support.svg";
// import SettingIconSvg from "../assets/icons/setting.svg";
// import SimIconSvg from "../assets/icons/simcard.svg";
// import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const userRole = localStorage.getItem("userRole") || "stuff";

//   // Handle logout logic
//   const handleLogout = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You want to logout!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, Logout!",
//       cancelButtonText: "No, Cancel!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         localStorage.removeItem("userRole");
//         navigate("/signin");
//       }
//     });
//   };

//   const menus = [
//     { title: "Dashboard", path: "adminOverview", icon: HomeIconSvg, role: "admin" },
//     { title: "User", path: "/dashboard/userList", icon: UserIconSvg, role: "admin" },
//     { title: "Orders", path: "/dashboard/order", icon: OrderIconSvg, role: "admin" },
//     {
//       title: "eSIM plan management",
//       path: "/dashboard/management",
//       icon: SimIconSvg,
//       role: "admin",
//     },
//     { title: "Payment", path: "/dashboard/payment", icon: PaymentIconSvg, role: "admin" },
//     { title: "Upload", path: "/dashboard/content", icon: CloudIconSvg, role: "admin" },
//     { title: "Analytics", path: "/dashboard/analytics", icon: AnalyticsIconSvg, role: "admin" },
//     { title: "Support", path: "/dashboard/support", icon: SupportIconSvg, role: "admin" },
//     { title: "Settings", path: "/dashboard/settings", icon: SettingIconSvg, role: "admin" },
//     { title: "Dashboard", path: "stuffOverview", icon: HomeIconSvg, role: "stuff" },
//     { title: "User", path: "/Dashboard/userList", icon: UserIconSvg, role: "stuff" },
//     {
//       title: "eSIM plan management",
//       path: "/Dashboard/sim-plan",
//       icon: SimIconSvg,
//       role: "stuff",
//     },
//     { title: "Analytics", path: "/Dashboard/issue-analytics", icon: AnalyticsIconSvg, role: "stuff" },
//     { title: "Support", path: "/Dashboard/support", icon: SupportIconSvg, role: "stuff" },
//   ];

//   // Filter menus based on user role
//   const filteredMenus = menus.filter((menu) => menu.role === userRole);

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 shadow-lg border-r border-gray-200 fixed left-0 top-0 bottom-0 z-50 pt-8 bg-white transition-all duration-500">
//         {/* Logo Section */}
//         <div className="p-2 flex flex-col items-center justify-center">
//           <img src={logo} alt="Logo" className="cursor-pointer w-16 mb-1" />
//         </div>

//         {/* Navigation Menu */}
//         <nav className="mt-10 p-5 space-y-3">
//           {filteredMenus.map((menu, index) => (
//             <Link
//               key={index}
//               to={menu.path}
//               className={`flex items-center py-2 px-5 text-sm rounded-lg cursor-pointer transition-colors ${
//                 location.pathname === menu.path || (location.pathname === "/dashboard" && menu.path === "dashboard")
//                   ? "bg-[#EAF3FF] text-[#4776EB]"
//                   : "text-gray-600 hover:bg-[#EAF3FF]"
//               }`}
//             >
//               <img src={menu.icon} className={`w-6 h-6`} />
//               <span className="ml-3">{menu.title}</span>
//             </Link>
//           ))}
//         </nav>

//         {/* Profile and Logout */}
//         <footer className="mt-28 p-2 absolute bottom-2 w-full">
//           <div className="flex items-center justify-center gap-x-3">
//             <Link className="flex items-center gap-x-3 p-2 text-sm">
//               <div className="">
//                 <img
//                   src="https://www.logoai.com/uploads/resources/2023/06/19/fa7fe9edacbfae0e5ad69f061d0153b8.jpeg"
//                   alt="Profile"
//                   className="w-10 rounded-full"
//                 />
//               </div>
//               <span>
//                 <p className="font-bold">John Cena</p>
//                 <p className="text-xs">Super Admin</p>
//               </span>
//             </Link>
//             <button
//               onClick={() => {
//                 handleLogout();
//               }}
//               className="text-2xl cursor-pointer"
//             >
//               <img src={Logout} alt="Logout" className="w-10" />
//             </button>
//           </div>
//         </footer>
//       </aside>

//       {/* Main Content Area */}
//       <main className="flex-1 pl-64 overflow-y-auto bg-gray-50 transition-all duration-500">
//         <div className="p-5">
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;




import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Swal from "sweetalert2";
import logo from "../assets/logo/simFriiIcon.svg";
import Logout from "../assets/icons/signout.svg";
import HomeIconSvg from "../assets/icons/Home.svg";
import UserIconSvg from "../assets/icons/Users.svg";
import SimIconSvg from "../assets/icons/simcard.svg";
import OrderIconSvg from "../assets/icons/order.svg";
import PaymentIconSvg from "../assets/icons/payment.svg";
import CloudIconSvg from "../assets/icons/cloud.svg";
import AnalyticsIconSvg from "../assets/icons/analytics.svg";
import SupportIconSvg from "../assets/icons/support.svg";
import SettingIconSvg from "../assets/icons/setting.svg";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const userRole = localStorage.getItem("userRole") || "stuff";

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Logout!",
      cancelButtonText: "No, Cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("userRole");
        navigate("/signin");
      }
    });
  };

  const menus = [
    { title: "Dashboard", path: "/dashboard/adminOverview", icon: HomeIconSvg, role: "admin" },
    { title: "User", path: "/dashboard/userList", icon: UserIconSvg, role: "admin" },
    { title: "Orders", path: "/dashboard/order", icon: OrderIconSvg, role: "admin" },
    { title: "eSIM plan management", path: "/dashboard/management", icon: SimIconSvg, role: "admin" },
    { title: "Payment", path: "/dashboard/payment", icon: PaymentIconSvg, role: "admin" },
    { title: "Upload", path: "/dashboard/content", icon: CloudIconSvg, role: "admin" },
    { title: "Analytics", path: "/dashboard/analytics", icon: AnalyticsIconSvg, role: "admin" },
    { title: "Support", path: "/dashboard/support", icon: SupportIconSvg, role: "admin" },
    { title: "Settings", path: "/dashboard/settings", icon: SettingIconSvg, role: "admin" },
    { title: "Dashboard", path: "/dashboard/stuffOverview", icon: HomeIconSvg, role: "stuff" },
    { title: "User", path: "/dashboard/userList", icon: UserIconSvg, role: "stuff" },
    { title: "eSIM plan management", path: "/dashboard/sim-plan", icon: SimIconSvg, role: "stuff" },
    { title: "Analytics", path: "/dashboard/issue-analytics", icon: AnalyticsIconSvg, role: "stuff" },
    { title: "Support", path: "/dashboard/support", icon: SupportIconSvg, role: "stuff" },
  ];

  const filteredMenus = menus.filter((menu) => menu.role === userRole);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 bg-white shadow-lg border-r border-gray-200 transition-all duration-300 md:w-64 ${
          isSidebarOpen ? "w-64" : "w-16"
        } md:inset-y-0`}
      >
        {/* Toggle Button (Mobile Only) */}
        <button
          className="md:hidden p-4 focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Sidebar Content */}
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Logo Section */}
          <div className="p-2 flex flex-col items-center justify-center mt-7">
            <img src={logo} alt="Logo" className="w-12 md:w-24" />
          </div>

          {/* Navigation Menu */}
          <nav className="p-3 space-y-2 flex-1">
            {filteredMenus.map((menu, index) => (
              <Link
                key={index}
                to={menu.path}
                className={`flex items-center p-2 text-sm rounded-lg transition-colors ${
                  location.pathname === menu.path || (location.pathname === "/dashboard" && menu.path.includes("Overview"))
                    ? "bg-[#fffaea] text-[#ff9900]"
                    : "text-gray-600 hover:bg-[#fffaea]"
                }`}
                aria-label={menu.title}
                onClick={() => setIsSidebarOpen(false)} // Close sidebar on mobile after click
              >
                <img src={menu.icon} alt={`${menu.title} icon`} className="w-6 h-6" />
                <span className={`${isSidebarOpen ? "block" : "hidden md:block"} ml-3`}>{menu.title}</span>
              </Link>
            ))}
          </nav>

           {/* Profile and Logout */}
          <div className="p-2 absolute bottom-2 w-full">
            <div className="flex items-center justify-center gap-x-3">
              <Link
                className={`flex items-center gap-x-3 p-2 text-sm ${isSidebarOpen ? "flex" : "hidden md:flex"}`}
                aria-label="Profile"
              >
                <div>
                  <img
                    src="https://www.logoai.com/uploads/resources/2023/06/19/fa7fe9edacbfae0e5ad69f061d0153b8.jpeg"
                    alt="Profile"
                    className="md:w-10 w-7 rounded-full"
                  />
                </div>
                <span>
                  <p className="font-bold">John Cena</p>
                  <p className="text-xs hidden md:block">Super Admin</p>
                </span>
              </Link>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-[#4776EB]"
                aria-label="Logout"
              >
                <img src={Logout} alt="Logout" className="w-10" />
              </button>
            </div>
          </div>

        </div>
      </aside>

      {/* Backdrop (Mobile Only) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 bg-gray-50 pl-16 md:pl-64 transition-all duration-300">
        <div className="p-4 md:p-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 