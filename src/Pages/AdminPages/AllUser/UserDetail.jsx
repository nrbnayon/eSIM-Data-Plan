import { Mail, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function UserDetailPage() {
  const user = {
    name: "Daniel Smith",
    role: "Seller",
    email: "daniel@gmail.com",
    location: "Overland Park, KS",
    joinDate: "6 Jan, 2025",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  };

  return (
    <div className=" ">
      <div className="border border-gray-200 rounded-2xl p-4 sm:p-5 md:p-7 bg-white">
        {/* Breadcrumb */}
        <div className="mb-4 sm:mb-6">
          <nav className="text-xs sm:text-sm text-gray-500 flex items-center">
            <Link
              to="/dashboard/userList"
              className="hover:text-gray-700 cursor-pointer"
            >
              User
            </Link>
            <span className="mx-1"> / </span>
            <span className="text-gray-900 font-medium">User details</span>
          </nav>
        </div>

        <div className="flex items-center justify-center">
          {/* User Info */}
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {user.name}
                </h1>

                <div className="space-y-2 sm:space-y-3 text-left">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{user.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{user.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{user.joinDate}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                Description
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sit amet sodales, convallis luctus non diam. Cras eu Nam quis
                tincidunt non est. Urna gravida placerat, leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}