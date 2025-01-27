import Image from "next/image";
import React from "react";

const DemoResultSection = () => {
  return (
    <div className="relative p-4 lg:p-10 rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="absolute bottom-10 right-[-50px] lg:right-[-180px] z-40">
        <Image
          src="/content/relativeImg.png"
          alt="Large image"
          width={400} 
          height={300} 
          className="hidden lg:block" 
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-xl relative z-10 font-Inter">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Results
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-2">
          <strong>Pain:</strong> You are an e-commerce business, and you want
          to sell your products all over the country, but you are confused
          about how to handle sales tax.
        </p>
        <p className="text-sm md:text-base text-gray-600 mb-2">
          <strong>Agitate:</strong> You have no idea how much sales tax to
          charge your customers in each state.
        </p>
        <p className="text-sm md:text-base text-gray-600 mb-4">
          <strong>Solution:</strong> Use TaxSol, our full-stack solution, to
          manage your sales tax.
        </p>
        <p className="text-sm md:text-base text-gray-600 mb-2">
          <strong>Pain:</strong> E-commerce business owners are struggling to
          keep up with the ever-changing sales tax laws.
        </p>
        <p className="text-sm md:text-base text-gray-600 mb-2">
          <strong>Agitate:</strong> Sales tax is a complicated, confusing
          issue for most e-commerce businesses.
        </p>
      </div>
    </div>
  );
};

export default DemoResultSection;
