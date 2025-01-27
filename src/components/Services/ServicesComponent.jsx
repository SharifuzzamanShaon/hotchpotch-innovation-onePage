import Image from "next/image";
import React from "react";

const ServicesComponent = () => {
  return (
    <div className="bg-[#12141D] text-white min-h-screen flex items-center justify-center mt-10">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-12">
          Mixland helps you <br /> build beautiful websites
        </h1>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Left Column */}
          <div className="w-4/10">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-md p-3 mb-4">
              <h2 className="font-bold text-lg">Blog Headlines</h2>
            </div>
            <div className="border border-gray-700 rounded-md p-2 mb-2">
              <h3 className="font-bold text-lg">Blog Intros</h3>
            </div>
            <div className="border border-gray-700 rounded-md p-2 mb-2">
              <h3 className="font-bold text-lg">Content Rewriter</h3>
            </div>
            <div className="border border-gray-700 rounded-md p-2 mb-2">
              <h3 className="font-bold text-lg">Facebook Ads</h3>
            </div>
            <div className="border border-gray-700 rounded-md p-2 mb-2">
              <h3 className="font-bold text-lg">Product Description</h3>
            </div>
            <div className="border border-gray-700 rounded-md p-2 mb-2">
              <h3 className="font-bold text-lg">PAS Copywriting Formula</h3>
            </div>
          </div>

          {/* Right Column with Image */}
          <div className="w-6/10">
            <Image
              src={"/content/serviceImg.png"}
              width={500}
              height={800}
              alt="service image"
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
