import React from "react";
import TrileButton from "../Modules/TrileButton";
import BorderLine from "../Modules/BorderLine";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="text-white min-h-screen flex items-center justify-center px-4 pt-12 sm:pt-20">
        <section className="text-center py-12 sm:py-20 z-10 font-outfit flex flex-col items-center justify-center">
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
          <div className="space-y-4 sm:space-y-6 items-center justify-center">
            {/* TrileButton will be above */}
            <TrileButton />
            <button className="flex items-center space-x-2 px-4 ml-8 py-2 bg-gradient-to-r transition-all duration-300">
              <Image
                src="/content/playbtn.png"
                width="20"
                height="20"
                alt="play-button"
              />
              <span>Watch A Demo</span>
            </button>
          </div>
        </section>
      </div>
      <BorderLine />
    </>
  );
};

export default HeroSection;
