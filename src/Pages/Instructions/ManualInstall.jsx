import { Copy } from "lucide-react";

const ManualInstall = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="p-3">
      {/* Warning */}
      <div className="bg-orange-50 border-l-4 border-orange-500 text-orange-600 px-4 py-3 rounded mb-6 sm:mb-8 lg:mb-10">
        <span className="font-medium">⚠️ Warning:</span> Most eSIMs can only be
        installed once. If you remove an eSIM from your device, it cannot be
        reinstalled.
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-start">
        {/* SM-DP & Activation Code */}
        <div className="bg-white shadow rounded-xl p-4 sm:p-6 lg:p-8 text-gray-800">
          {/* SM-DP */}
          <div className="mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm lg:text-base text-gray-500 uppercase">
              SM-DP+ Address
            </p>
            <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 sm:px-4 sm:py-3">
              <span className="font-medium text-sm sm:text-base lg:text-lg">
                consumer.rsp.global
              </span>
              <button
                onClick={() => copyToClipboard("consumer.rsp.global")}
                className="text-gray-500 hover:text-gray-700"
              >
                <Copy size={16} className="" />
              </button>
            </div>
          </div>

          {/* Activation Code */}
          <div className="mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm lg:text-base text-gray-500 uppercase">
              Activation Code
            </p>
            <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 sm:px-4 sm:py-3">
              <span className="font-medium text-sm sm:text-base lg:text-lg break-all">
                TN205206080938127C76539A
              </span>
              <button
                onClick={() => copyToClipboard("TN205206080938127C76539A")}
                className="text-gray-500 hover:text-gray-700"
              >
                <Copy size={16} className="" />
              </button>
            </div>
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-gray-500 mt-2 sm:mt-3">
            Copy this information and manually enter the details to install your
            eSIM. Ensure your device has a stable internet connection before
            proceeding.
          </p>
        </div>

        {/* Instructions */}
        <div className="col-span-2">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">
            Step 1 - Install eSIM
          </h2>
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">
            Note: Please ensure that the eSIM installation process is not
            interrupted, and make sure your device has a stable internet
            connection before starting the installation.
          </p>

          <ol className="list-decimal ms-5 sm:ms-6 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
            <li>
              Navigate to{" "}
              <span className="font-medium">
                Settings &gt; Cellular/Mobile Data &gt; Add eSIM
              </span>{" "}
              or{" "}
              <span className="font-medium">
                Setup Cellular/Mobile Service &gt; Use QR Code
              </span>{" "}
              on your device.
            </li>
            <li>
              Select{" "}
              <span className="font-medium">"Enter Details Manually"</span> input
              the SM-DP+ Address and Activation Code from the app by copying
              them, tap <span className="font-medium">"Next"</span> then{" "}
              <span className="font-medium">"Continue"</span> twice. Wait a few
              minutes for the eSIM to connect to the network, then tap{" "}
              <span className="font-medium">"Done."</span>
            </li>
            <li>Assign a label to your new eSIM plan.</li>
            <li>
              Set <span className="font-medium">"Primary"</span> as your default
              line, then tap <span className="font-medium">"Continue."</span>
            </li>
            <li>
              Select <span className="font-medium">"Primary"</span> for iMessage
              and FaceTime with your Apple ID, then tap{" "}
              <span className="font-medium">"Continue."</span>
            </li>
            <li>Pick your new eSIM plan for cellular/mobile data.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
export default ManualInstall;