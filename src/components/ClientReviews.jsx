import Image from "next/image";
import React from "react";
import BorderLine from "./Modules/BorderLine";

const reviews = [
  {
    name: "Darrell Steward",
    image: "/avater/Ellipse 12.png",
    review:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    tag: "#another",
  },
  {
    name: "Leslie Alexander",
    image: "/avater/Ellipse 13.png",
    review:
      "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.",
    tag: "#postcrafts",
  },
  {
    name: "Jenny Wilson",
    image: "/avater/Ellipse 14.png",
    review:
      "This is a top quality product. No need to think twice before making it live on the web.",
    tag: "#make_it_fast",
  },
  {
    name: "Kristin Watson",
    image: "/avater/Ellipse 13.png",
    review:
      "Finally, I've found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
    tag: "#postcrafts",
  },
  {
    name: "Guy Hawkins",
    image: "/avater/Ellipse 12.png",
    review:
      "This is a top quality product. No need to think twice before making it live on the web.",
    tag: "#make_it_fast",
  },
  {
    name: "Marvin McKinney",
    image: "/avater/Ellipse 12.png",
    review:
      "With Postcrafts, it's quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I'm all for the efficiency.",
    tag: "#dev #tools",
  },
  {
    name: "Annette Black",
    image: "/avater/Ellipse 13.png",
    review:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    tag: "#another",
  },
  {
    name: "Floyd Miles",
    image: "/avater/Ellipse 12.png",
    review:
      "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    tag: "#postcrafts",
  },
];

const ClientReviews = () => {
  return (
    <>
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4 font-outfit">What our customers say</h2>
          <p className="text-lg mb-8 font-inter">
            Read why thousands of marketers, writers, and <br></br> entrepreneurs love us
            so much.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="review bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-start"
              >
                {/* Row for image and name */}
                <div className="flex items-center mb-4">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                  <h3 className="font-bold text-xl">{review.name}</h3>
                </div>

                {/* Left-aligned review text */}
                <p className="mb-4 text-start">{review.review}</p>
                <p className="text-blue-400">{review.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BorderLine />
    </>
  );
};

export default ClientReviews;
