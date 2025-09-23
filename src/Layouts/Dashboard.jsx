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

//   // Menu configuration
//   const menus = [
//     { title: "Dashboard", path: "dashboard", icon: HomeIconSvg, role: "admin" },
//     { title: "User", path: "/admin/user", icon: UserIconSvg, role: "admin" },
//     {
//       title: "Orders",
//       path: "/admin/order",
//       icon: OrderIconSvg,
//       role: "admin",
//     },
//     {
//       title: "eSIM plan management",
//       path: "/admin/management",
//       icon: SimIconSvg,
//       role: "admin",
//     },
//     {
//       title: "Payment",
//       path: "/admin/payment",
//       icon: PaymentIconSvg,
//       role: "admin",
//     },
//     {
//       title: "Upload",
//       path: "/admin/content",
//       icon: CloudIconSvg,
//       role: "admin",
//     },
//     {
//       title: "Analytics",
//       path: "/admin/analytics",
//       icon: AnalyticsIconSvg,
//       role: "admin",
//     },
//     {
//       title: "Support",
//       path: "/admin/support",
//       icon: SupportIconSvg,
//       role: "admin",
//     },
//     {
//       title: "Settings",
//       path: "/admin/settings",
//       icon: SettingIconSvg,
//       role: "admin",
//     },
//     { title: "Dashboard", path: "Overview", icon: HomeIconSvg, role: "stuff" },
//     { title: "User", path: "/stuff/user", icon: UserIconSvg, role: "stuff" },
//     {
//       title: "eSIM plan management",
//       path: "/stuff/management",
//       icon: SimIconSvg,
//       role: "stuff",
//     },
//     {
//       title: "Analytics",
//       path: "/stuff/analytics",
//       icon: AnalyticsIconSvg,
//       role: "stuff",
//     },
//     {
//       title: "Support",
//       path: "/stuff/support",
//       icon: SupportIconSvg,
//       role: "stuff",
//     },
//   ];

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
//           {menus.map((menu, index) => (
//             <Link
//               key={index}
//               to={menu.path}
//               className={`flex items-center py-2 px-5 text-sm rounded-lg cursor-pointer transition-colors ${
//                 location.pathname === menu.path
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


import logo from "../assets/logo/logo.png";
import Logout from "../assets/icons/signout.svg";
import HomeIconSvg from "../assets/icons/Home.svg";
import UserIconSvg from "../assets/icons/Users.svg";
import OrderIconSvg from "../assets/icons/order.svg";
import PaymentIconSvg from "../assets/icons/payment.svg";
import CloudIconSvg from "../assets/icons/cloud.svg";
import AnalyticsIconSvg from "../assets/icons/analytics.svg";
import SupportIconSvg from "../assets/icons/support.svg";
import SettingIconSvg from "../assets/icons/setting.svg";
import SimIconSvg from "../assets/icons/simcard.svg";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const userRole = localStorage.getItem("userRole") || "stuff";

  // Handle logout logic
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

  // Menu configuration
  const menus = [
    { title: "Dashboard", path: "adminOverview", icon: HomeIconSvg, role: "admin" },
    { title: "User", path: "/dashboard/userList", icon: UserIconSvg, role: "admin" },
    { title: "Orders", path: "/dashboard/order", icon: OrderIconSvg, role: "admin" },
    {
      title: "eSIM plan management",
      path: "/dashboard/management",
      icon: SimIconSvg,
      role: "admin",
    },
    { title: "Payment", path: "/dashboard/payment", icon: PaymentIconSvg, role: "admin" },
    { title: "Upload", path: "/dashboard/content", icon: CloudIconSvg, role: "admin" },
    { title: "Analytics", path: "/dashboard/analytics", icon: AnalyticsIconSvg, role: "admin" },
    { title: "Support", path: "/dashboard/support", icon: SupportIconSvg, role: "admin" },
    { title: "Settings", path: "/dashboard/settings", icon: SettingIconSvg, role: "admin" },
    { title: "Dashboard", path: "stuffOverview", icon: HomeIconSvg, role: "stuff" },
    { title: "User", path: "/Dashboard/userList", icon: UserIconSvg, role: "stuff" },
    {
      title: "eSIM plan management",
      path: "/Dashboard/sim-plan",
      icon: SimIconSvg,
      role: "stuff",
    },
    { title: "Analytics", path: "/Dashboard/issue-analytics", icon: AnalyticsIconSvg, role: "stuff" },
    { title: "Support", path: "/Dashboard/support", icon: SupportIconSvg, role: "stuff" },
  ];

  // Filter menus based on user role
  const filteredMenus = menus.filter((menu) => menu.role === userRole);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 shadow-lg border-r border-gray-200 fixed left-0 top-0 bottom-0 z-50 pt-8 bg-white transition-all duration-500">
        {/* Logo Section */}
        <div className="p-2 flex flex-col items-center justify-center">
          <img src={logo} alt="Logo" className="cursor-pointer w-16 mb-1" />
        </div>

        {/* Navigation Menu */}
        <nav className="mt-10 p-5 space-y-3">
          {filteredMenus.map((menu, index) => (
            <Link
              key={index}
              to={menu.path}
              className={`flex items-center py-2 px-5 text-sm rounded-lg cursor-pointer transition-colors ${
                location.pathname === menu.path || (location.pathname === "/dashboard" && menu.path === "dashboard")
                  ? "bg-[#EAF3FF] text-[#4776EB]"
                  : "text-gray-600 hover:bg-[#EAF3FF]"
              }`}
            >
              <img src={menu.icon} className={`w-6 h-6`} />
              <span className="ml-3">{menu.title}</span>
            </Link>
          ))}
        </nav>

        {/* Profile and Logout */}
        <footer className="mt-28 p-2 absolute bottom-2 w-full">
          <div className="flex items-center justify-center gap-x-3">
            <Link className="flex items-center gap-x-3 p-2 text-sm">
              <div className="">
                <img
                  src="https://www.logoai.com/uploads/resources/2023/06/19/fa7fe9edacbfae0e5ad69f061d0153b8.jpeg"
                  alt="Profile"
                  className="w-10 rounded-full"
                />
              </div>
              <span>
                <p className="font-bold">John Cena</p>
                <p className="text-xs">Super Admin</p>
              </span>
            </Link>
            <button
              onClick={() => {
                handleLogout();
              }}
              className="text-2xl cursor-pointer"
            >
              <img src={Logout} alt="Logout" className="w-10" />
            </button>
          </div>
        </footer>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 pl-64 overflow-y-auto bg-gray-50 transition-all duration-500">
        <div className="p-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;