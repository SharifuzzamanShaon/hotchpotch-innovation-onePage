import Image from "next/image";
import DemoResultSection from "./DemoResultSection";
import TrileButton from "../Modules/TrileButton";

export default function AIContent() {
  return (
    <div className="bg-[#12141D] max-w-[1600px] mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen gap-8">
        <div className="w-full lg:w-[40%] p-4">
          <DemoResultSection />
        </div>

        <div className="w-full lg:w-[60%] rounded-lg shadow-lg flex items-center">
          <div className="max-w-md mx-auto lg:w-3/4 text-left">
            <h2 className="text-2xl lg:text-3xl font-extrabold mb-6 text-white font-outfit">
              Create content efficiently and quickly with great AI writing tools
            </h2>
            <p className="text-base lg:text-lg mb-8 text-gray-300 font-inter">
              150k+ users. No Credit Card Required. Pro designs and writing at
              no cost. Start for free. AI Writer Tool | Generate text for ecom,
              social media, websites, sales, blogs, etc.
            </p>
            <TrileButton />
          </div>
        </div>
      </div>
    </div>
  );
}
