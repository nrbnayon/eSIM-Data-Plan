export default function Language() {
  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-semibold text-gray-800">Wedding Photography</h3>
            <p className="text-gray-600 text-sm">Order #12345 • March 15, 2025</p>
          </div>
          <span className="text-green-600 font-semibold">Paid</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Payment Method</span>
          <span className="text-gray-800">Stripe</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-gray-600">Total</span>
          <span className="font-semibold text-gray-800">$2,450</span>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-semibold text-gray-800">Wedding Venue Booking</h3>
            <p className="text-gray-600 text-sm">Order #12346 • March 10, 2025</p>
          </div>
          <span className="text-orange-600 font-semibold">Pending</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Payment Method</span>
          <span className="text-gray-800">PayPal</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-gray-600">Total</span>
          <span className="font-semibold text-gray-800">$6,785</span>
        </div>
      </div>
    </div>
  );
}