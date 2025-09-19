import { Wallet, DollarSign } from "lucide-react";

export default function Help() {
  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-xl p-4 w-96">
        <div className="mb-4 p-3 rounded-lg bg-gray-100">
          <div className="flex items-center mb-2 gap-2">
            <Wallet />
            <h2 className="text-lg font-semibold">Available Balance</h2>
          </div>
          <p className="text-2xl font-bold">$2,788 USD</p>
        </div>
        <div className="mb-6 p-3 rounded-lg bg-gray-100">
          <div className="flex items-center mb-2 gap-2">
            <DollarSign />
            <h2 className="text-lg font-semibold">Total Income (This Month)</h2>
          </div>
          <p className="text-2xl font-bold">$2,788 USD</p>
        </div>
        <button className="w-full bg-[#171135] text-white py-3 rounded-lg font-semibold hover:bg-[#121135] cursor-pointer">
          Withdraw
        </button>
      </div>
    </div>
  );
}