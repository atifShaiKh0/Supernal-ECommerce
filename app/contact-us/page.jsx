"use client";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Page() {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "+91 9990463463";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset "Copied!" message after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-6 sm:px-12 lg:px-24">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 h-screen">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Contact Us
        </h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Reach Out to Us
          </h2>
          <p className="text-gray-600 mt-2">
            If you have any questions or need assistance, feel free to contact
            us through any of the methods below.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mb-6">
          <p className="text-lg font-medium text-gray-700">
            Phone Number: {phoneNumber}
          </p>
          <button
            onClick={handleCopy}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
          >
            {copied ? "Copied!" : "Copy Phone Number"}
          </button>
        </div>

        {/* Email Information */}
        <div className="mb-6">
          <p className="text-lg font-medium text-gray-700">
            Email:{" "}
            <a
              href="mailto:info@supernalscience.com"
              className="text-blue-500 hover:underline"
            >
              rks.rksharma@gmail.com
            </a>
          </p>
        </div>

        {/* Address Information */}
        <div className="mb-6">
          <p className="text-lg font-medium text-gray-700">Address:</p>
          <p className="text-gray-600">
            123 Spiritual Avenue, New Delhi, India
          </p>
        </div>

        {/* Message Form */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}
