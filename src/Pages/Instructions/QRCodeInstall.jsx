

const QRCodeInstall = () => {
  return (
    <div className="">
      {/* Warning */}
      <div className="bg-orange-50 border-l-4 border-orange-500 text-orange-600 px-4 py-3 rounded mb-6 sm:mb-8 lg:mb-10">
        <span className="font-medium">⚠️ Warning:</span> Most eSIMs can only be
        installed once. If you remove an eSIM from your device, it cannot be
        reinstalled.
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-start">
        {/* QR Code */}
        <div className="col-span-1 bg-white shadow rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=esim"
            alt="QR Code"
            className="w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 object-contain"
          />
          <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base lg:text-lg">
            Scan the QR code by printing out or displaying the code on another
            device to install your eSIM.
          </p>
        </div>

        {/* Instructions */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">
            Step 1 - Install eSIM
          </h2>
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
            Note: Please ensure that the eSIM installation process is not
            interrupted, and make sure your device has a stable internet
            connection before starting the installation.
          </p>

          <ol className="list-decimal ms-5 sm:ms-6 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
            <li>
              Open the Airalo app and navigate to{" "}
              <span className="font-medium">"My eSIMs."</span>
            </li>
            <li>
              Select your eSIM, tap{" "}
              <span className="font-medium">"Details,"</span> then choose
              <span className="font-medium"> "View Instructions"</span> and select{" "}
              <span className="font-medium">"Manual."</span>
            </li>
            <li>
              Copy the SM-DP+ Address and Activation Code by tapping and holding
              each field.
            </li>
            <li>
              Go to{" "}
              <span className="font-medium">
                Settings &gt; Cellular/Mobile Data &gt; Add eSIM &gt; Enter
                Details Manually.
              </span>
            </li>
            <li>
              Paste the copied SM-DP+ Address and Activation Code into the
              respective fields, then tap{" "}
              <span className="font-medium">Continue</span> twice.
            </li>
            <li>
              Wait a few minutes for the eSIM to connect to the network, then
              tap <span className="font-medium">Done.</span>
            </li>
            <li>Select a plan level for your eSIM.</li>
            <li>
              Set <span className="font-medium">Primary</span> as your default
              line, then tap <span className="font-medium">Continue.</span>
            </li>
            <li>
              Choose <span className="font-medium">Primary</span> for iMessage and
              FaceTime with your Apple ID, then tap{" "}
              <span className="font-medium">Continue.</span> Select your new eSIM
              plan for cellular/mobile data.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default QRCodeInstall;