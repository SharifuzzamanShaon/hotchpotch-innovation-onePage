import React from "react";
import TrileButton from "../Modules/TrileButton";
import BorderLine from "../Modules/BorderLine";

const HeroSection = () => {
  return (
    <>
      <div className="text-white min-h-screen flex items-center justify-center px-4 pt-12 sm:pt-20">
        {/* Hero Section */}
        <section className="text-center py-12 sm:py-20 z-10 font-outfit">
          <h1 className="text-3xl sm:text-5xl leading-[50px] sm:leading-[66px] font-medium text-center mb-4">
            Write better content for your
          </h1>
          <h2 className="text-4xl sm:text-6xl leading-[50px] sm:leading-[66px] font-extrabold text-orange-500 text-center underline underline-offset-4 decoration-skip-ink-none mb-4">
            Facebook Ads
          </h2>
          <p className="text-base sm:text-lg mb-6 my-8">
            Artificial intelligence writing tool helps you create blogs,
            <br /> social media websites, and much more.
          </p>
          <div className="space-x-4 sm:space-x-6 flex flex-col sm:flex-row items-center justify-center">
            <TrileButton />
            <button
              className="px-8 py-3 text-lg rounded-md mt-4 sm:mt-0 border border-solid hover:bg-gray-700 transition-all duration-300
              text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500
              border-image-[linear-gradient(94.25deg,#2B59FF_0%,#BB2BFF_100%)] border-image-slice-1"
            >
              Watch A Demo
            </button>
          </div>
        </section>
      </div>
      <BorderLine />
    </>
  );
};

export default HeroSection;
