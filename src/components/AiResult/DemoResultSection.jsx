import Image from "next/image";
import React from "react";

const DemoResultSection = () => {
  return (
    <div className="relative p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="absolute bottom-[-40px] right-[-30px] sm:right-[-50px] md:right-[-80px] lg:right-[-180px] z-40">
        <Image
          src="/content/relativeImg.png"
          alt="Large image"
          width={300} 
          height={250} 
          className="hidden lg:block" 
        />
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl relative z-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Results
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-2">
          <strong>Pain:</strong> You are an e-commerce business, and you want
          to sell your products all over the country, but you are confused
          about how to handle sales tax.
        </p>
        <p className="text-sm sm:text-base text-gray-600 mb-2">
          <strong>Agitate:</strong> You have no idea how much sales tax to
          charge your customers in each state.
        </p>
        <p className="text-sm sm:text-base text-gray-600 mb-4">
          <strong>Solution:</strong> Use TaxSol, our full-stack solution, to
          manage your sales tax.
        </p>
        <p className="text-sm sm:text-base text-gray-600 mb-2">
          <strong>Pain:</strong> E-commerce business owners are struggling to
          keep up with the ever-changing sales tax laws.
        </p>
        <p className="text-sm sm:text-base text-gray-600 mb-2">
          <strong>Agitate:</strong> Sales tax is a complicated, confusing
          issue for most e-commerce businesses.
        </p>
      </div>
    </div>
  );
};

export default DemoResultSection;
