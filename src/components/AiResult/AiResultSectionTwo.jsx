import Image from "next/image";
import DemoResultSection from "./DemoResultSection";
import TrileButton from "../Modules/TrileButton";
import DemoResultSectionTwo from "./DemoResultSectionTwo";

export default function AIContentTwo() {
  return (
    <div className="max-w-[1600px] mx-auto px-4">
      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen gap-3">
        {/* Left Column - 40% */}
        <div className="w-full lg:w-[50%] p-4">
          <div className="max-w-md mx-auto lg:w-3/4 text-left">
            <h2 className="text-2xl lg:text-3xl font-extrabold mb-6 text-white">
            Write what you want to convey through clear, & authentic writing
            </h2>
            <p className="text-base lg:text-lg mb-8 text-gray-300">
            AI-Writer is the most accurate content generation platform and writing tool that helps you transform your text into a completely personalized.
            </p>
            <TrileButton />
          </div>
        </div>
        {/* Right Column - 60% */}
        <div className=" lg:w-[50%] rounded-lg shadow-lg flex items-center">
          <DemoResultSectionTwo/>
        </div>
      </div>
    </div>
  );
}
