"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { Button } from "@nextui-org/react";
import Image from "next/image";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "+91 9990463463"; // Replace with the phone number you want to copy

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
    <main>
      <Header />
      <section className="bg-white dark:bg-gray-900">
        <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="place-self-center mr-auto lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
              Payments
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              For More Details Please contact our team <span>9990463463</span>
            </p>

            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              +91 9990463463
            </a>

            <button
              className="ml-5 inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              onClick={handleCopy}
            >
              {copied ? "Copied!" : "Copy Phone Number"}
            </button>
          </div>

          {/* Image - Flex on small screens, Grid on large */}
          <div className="lg:mt-0 lg:col-span-5 lg:flex flex-col mt-8 ">
            <Image src="/qr.jpg" alt="logo" height={350} width={350} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
