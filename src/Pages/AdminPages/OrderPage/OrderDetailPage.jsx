import { Mail, MapPin, Calendar } from "lucide-react";
import SectionTitle from "../../../components/SectionTitle";
import eSime from "../../../assets/icons/eSim.svg";

export default function OrderDetailPage() {
  const user = {
    name: "Daniel Smith",
    email: "daniel@gmail.com",
    location: "Overland Park, KS",
    joinDate: "6 Jan, 2025",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  };

  return (
    <div className="">
      <SectionTitle title="Order Details" />
      <nav className="text-sm text-gray-500 mb-6">
        <button
          onClick={() => window.history.back()}
          className="hover:text-gray-700 cursor-pointer hover:underline"
        >
          Order
        </button>
        <span className="mx-1">/</span>
        <span className="text-gray-900 font-medium">Order details</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
              />
              <h1 className="text-xl font-semibold text-gray-900 mb-4">{user.name}</h1>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3" />
                  <span>{user.joinDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Information */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 px-5 py-3">
              Order Information
            </h2>
            <div className="p-5">
              <div className="flex justify-center pb-4">
                <img src={eSime} alt="eSIM" className="w-16 h-16" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Coverage</span>
                  <span className="text-gray-900 font-semibold">33 Countries</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Duration</span>
                  <span className="text-gray-900 font-semibold">365 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Data</span>
                  <span className="text-gray-900 font-semibold">500GB</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Price</span>
                  <div className="text-right">
                    <span className="text-gray-500">USD </span>
                    <span className="text-gray-400 line-through">$20</span>
                    <span className="text-gray-900 font-semibold ml-1">$15</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Payment</span>
                  <span className="text-gray-900 font-semibold">Credit Card</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Total</span>
                  <span className="text-gray-900 font-semibold">$17.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Status</span>
                  <span className="text-green-600 font-semibold">Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}