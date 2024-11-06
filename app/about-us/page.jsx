"use client";
import { useState } from "react";
import Header from "../admin/components/Header";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="font-semibold">
      <div className="bg-blue-100 p-8 text-gray-800">
        <h1 className="text-3xl p-1 rounded-xl bg-blue-200 font-bold mb-6">
          About Us - Supernal Science
        </h1>

        <p className="mb-4">
          Welcome to Supernal Science, a spiritual and holistic learning center
          dedicated to providing profound knowledge and tools for personal
          growth, healing, and self-realization. Founded by{" "}
          <span className="font-bold p-1 rounded-xl bg-blue-300">
            RK Sharma
          </span>
          , an esteemed spiritual teacher, life coach, and author, Supernal
          Science has been at the forefront of spreading spiritual wisdom since
          1998. Our institute is a registered entity based in New Delhi, and we
          offer a range of courses, services, and workshops designed to guide
          individuals on their path to enlightenment and well-being.
        </p>

        <h2 className="text-2xl font-bold mb-4 p-1 rounded-xl bg-blue-200">
          Our Vision:
        </h2>
        <p className="mb-4">
          Our vision is to empower individuals with the knowledge and tools to
          achieve inner peace, balance, and spiritual growth. We aim to create a
          world where people live in harmony with themselves and their
          surroundings, utilizing spiritual wisdom to enhance their lives and
          the lives of others.
        </p>

        <h2 className="text-2xl font-bold mb-4 p-1 rounded-xl bg-blue-200">
          Our Founder:
        </h2>
        <p className="mb-4">
          <span className="font-boldp-1 rounded-xl bg-blue-300">RK Sharma</span>
          , the founder of Supernal Science, has dedicated his life to spreading
          spiritual knowledge and healing practices...
        </p>

        <h2 className="text-2xl p-1 rounded-xl bg-blue-200 font-bold mb-4">
          What We Offer:
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <span className="font-bold p-1 rounded-xl bg-blue-300 ">
              Astrology:
            </span>{" "}
            Learn the ancient science of astrology...
          </li>
          <li>
            <span className="font-bold p-1 rounded-xl bg-blue-300">
              Numerology:
            </span>{" "}
            Discover the power of numbers...
          </li>
          <li>
            <span className="font-bold p-1 rounded-xl bg-blue-300">
              Vaastu Shastra:
            </span>{" "}
            Master the principles of this ancient architectural science...
          </li>
          {/* Add the rest of your offerings here similarly */}
        </ul>

        <h2 className="text-2xl font-bold p-1 rounded-xl bg-blue-200 mb-4">
          Our Unique Approach:
        </h2>
        <p className="mb-4">
          What sets Supernal Science apart is our commitment to holistic,
          practical, and results-oriented teachings...
        </p>

        <h2 className="text-2xl p-1 rounded-xl bg-blue-200 font-bold mb-4">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>Experienced Guidance</li>
          <li>Holistic Learning</li>
          <li>Flexible Learning Options</li>
          <li>Trusted Institution</li>
        </ul>

        <h2 className="text-2xl p-1 rounded-xl bg-blue-200 font-bold mb-4">
          Our Mission:
        </h2>
        <p className="mb-4">
          Our mission is to make ancient spiritual practices and healing
          techniques accessible to everyone, empowering individuals...
        </p>

        <h2 className="text-2xl p-1 rounded-xl bg-blue-200 font-bold mb-4">
          Join Us on Your Spiritual Journey:
        </h2>
        <p className="mb-4">
          At Supernal Science, we invite you to explore the vast realms of
          spirituality, healing, and self-discovery...
        </p>
      </div>
      <Footer />
    </div>
  );
}
