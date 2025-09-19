export default function PrivacyPolicy() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          1. How They Use and Share Your Data
        </h3>
        <p className="text-gray-600 mb-4">We may collect the following information:</p>
        <ul className="space-y-2 text-gray-600 ml-4">
          <li>
            • User-Provided Data: This includes your name, email, payment details
            (processed via trusted services like PayPal and Stripe), social login
            credentials, profile info, and any other details you voluntarily share.
          </li>
          <li>
            • Automatically Collected Data: Includes IP address, device type,
            operating system, unique device identifiers, app usage behavior (captured
            via analytics like Firebase), and mobile network info.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          2. How They Use and Share Your Data
        </h3>
        <ul className="space-y-2 text-gray-600 ml-4">
          <li>
            • Use: To maintain and improve app functionality, manage billing, support
            user accounts, and for internal analytics.
          </li>
          <li>• Sharing: Your data may be shared with:</li>
          <li className="ms-6">
            • Affiliates or partners (e.g., during business transfers such as mergers
            or acquisitions)
          </li>
          <li className="ms-6">• Legal authorities if required by law.</li>
          <li className="ms-6">
            • Third-party service providers (e.g., payment processors), who are
            contractually bound to follow the privacy policy.
          </li>
          <li>
            • International Transfers: Data is stored and processed in the United
            States, and by using the app, you consent to such transfers—even from
            countries with stricter privacy laws.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          3. Data Retention & Security
        </h3>
        <p className="text-gray-600 mb-4">• Retention Period:</p>
        <ul className="space-y-2 text-gray-600 ml-10">
          <li>• Vendors, to fulfill your orders.</li>
          <li>• Payment processors, for secure transactions.</li>
          <li>• Service providers (e.g., shipping companies, IT services).</li>
          <li>• Law enforcement, if required by law.</li>
        </ul>
        <p className="text-gray-600 mt-4">
          • Security Measures: They implement industry-standard protocols like
          encryption and secure servers to protect your personal data. However, no
          method is entirely foolproof
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">4. Data Security</h3>
        <p className="text-gray-600">
          We implement industry-standard security measures to protect your data.
          However, no online transmission is 100% secure.
        </p>
      </div>
    </div>
  );
}