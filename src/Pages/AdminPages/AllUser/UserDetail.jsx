import { Mail, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";

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
    <div className="">
      <SectionTitle
        title={`User Details`}
        description={"Track, manage and forecast your customers and orders."}
      />
      <div className="border border-gray-200 rounded-2xl p-7">
        {/* Breadcrumb */}
        <div className="mb-4">
          <nav className="text-sm text-gray-500">
            <Link
              to="/admin/user"
              className="hover:text-gray-700 cursor-pointer"
            >
              User
            </Link>
            <span className="mx-1"> / </span>
            <span className="text-gray-900 font-medium">
             User details
            </span>
          </nav>
        </div>

        <div className="flex items-center justify-center">
          {/* Left Column - User Info */}
          <div className="max-w-xl">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-sm p-10 mb-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                    alt={user.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-4">
                  {user.name}
                </h1>

                <div className="space-y-3 text-left">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="">{user.email}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="">{user.location}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="">{user.joinDate}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Description
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                placerat, leo. Nullam sit sodales, convallis, luctus Cras luctus
                non diam enim. eu Nam quis tincidunt non est. urna gravida .
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}
