import Image from "next/image";
import BorderLine from "./Modules/BorderLine";

const tools = [
  {
    id: 1,
    title: "Blog Headlines",
    description: "Write a better blog title with our A.I tool.",
    imageUrl: "/toolsLogo/image 318.png",
  },
  {
    id: 2,
    title: "Blog Headlines",
    description: "Write a better blog title with our A.I tool.",
    imageUrl: "/toolsLogo/image 318.png",
  },
  {
    id: 3,
    title: "Blog Headlines",
    description: "Write a better blog title with our A.I tool.",
    imageUrl: "/toolsLogo/image 318.png",
  },
  {
    id: 4,
    title: "Blog Headlines",
    description: "Write a better blog title with our A.I tool.",
    imageUrl: "/toolsLogo/image 318.png",
  },
  {
    id: 5,
    title: "Blog Headlines",
    description: "Write a better blog title with our A.I tool.",
    imageUrl: "/toolsLogo/image 318.png",
  },
  {
    id: 6,
    title: "Blog Headlines",
    description: "Write a better blog title with our A.I tool.",
    imageUrl: "/toolsLogo/image 318.png",
  },
  {
    id: 7,
    title: "Blog Headlines",
    description: "Write a better blog title with our A.I tool.",
    imageUrl: "/toolsLogo/image 318.png",
  },
  {
    id: 8,
    title: "Blog Headlines",
    description: "Write a better blog title with our A.I tool.",
    imageUrl: "/toolsLogo/image 318.png",
  },
];

export default function ToolsSection() {
  return (
    <>
      <div className="py-8">
        <div className="max-w-6xl mx-auto text-center text-white px-6 mb-10">
          <h2 className="text-4xl font-extrabold mb-8">
            54 exciting writing tools
          </h2>
          <p className="text-lg mb-12">
            AI engines take information from various sources and read <br />
            them like a human would do.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="bg-gray-800 rounded-lg p-4 flex place-items-start space-x-2"
              >
                <Image
                  src={tool.imageUrl}
                  width="34"
                  height="34"
                  alt="Tool Logo"
                />
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-1 text-white">
                    {tool.title}
                  </h3>
                  <p className="text-gray-300">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="text-xl font-medium text-blue-400 hover:text-blue-600 mt-8 inline-block"
          >
            See all 54 available tools
          </a>
        </div>
      </div>
      <BorderLine />
    </>
  );
}
