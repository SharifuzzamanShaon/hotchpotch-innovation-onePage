"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MainNavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Demos", href: "#" },
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Pages", href: "#" },
    { label: "Contact", href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 z-50 text-white w-full h-[80px] ${
        scrolled ? "bg-[#20282084] h-[50px]" : "bg-[#12141D]"
      }`}
    >
      {/* Navigation */}
      <nav className="flex justify-between items-center h-full px-6">
        <div className="flex items-center space-x-6">
          <div className="text-white font-bold text-lg">
            <Image
              src="/content/site-logo.png"
              width="78"
              height="32"
              alt="hotch-potch"
            />
          </div>
          {/* Desktop Navigator */}
          <div className="hidden sm:flex space-x-6 items-center">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="hover:text-yellow-300">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Men */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="hidden sm:flex items-center space-x-4">
          <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md">
            Sign in
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-blue-900 to-pink-700 hover:from-purple-600 hover:to-pink-400 rounded-md">
            Get Started Free
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 right-0 bg-[#12141D] p-6 sm:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="text-white absolute top-4 right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="block text-white py-2 hover:text-yellow-300"
          >
            {link.label}
          </a>
        ))}

        <div className="mt-4">
          <button className="w-full mb-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md">
            Sign in
          </button>
          <button className="w-full px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 rounded-md">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainNavBar;
