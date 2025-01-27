import Image from "next/image";
import React from "react";

const DemoResultSectionTwo = () => {
  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="bg-white rounded-lg shadow-lg max-w-7xl mx-auto p-6">
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
          {/* Sidebar */}
          <div className="w-full sm:w-1/5">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-500">
                  Blog Outline
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-500">
                  Blog Intro
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-500">
                  Blog Conclusion
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-500">
                  AIDA
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-500">
                  PAS
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-500">
                  Content Rewriter
                </a>
              </li>
              {/* Sidebar Images */}
              {[...Array(6)].map((_, idx) => (
                <li key={idx}>
                  <Image
                    src="/content/shape.png"
                    width="50"
                    height="10"
                    alt="shape"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="w-full sm:w-4/5">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Results</h2>
              <p className="text-gray-600">Here's what our AI came up with.</p>

              {/* Results Section */}
              <div className="bg-gray-800 p-6 rounded-lg text-white">
                <div className="h-20 bg-gray-700 mb-4 placeholder-sky-600">
                  <Image
                    src="/content/shape2.png"
                    width="100"
                    height="50"
                    alt="shape"
                  />
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="h-16 bg-gray-200 mb-4"></div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="h-16 bg-gray-200 mb-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoResultSectionTwo;
