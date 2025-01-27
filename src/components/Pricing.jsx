import React from "react";

const PricingCard = ({ plan, price, description, features, buttonText }) => {
  return (
    <div className="bg-[#282A37] rounded-lg shadow-lg p-10 m-4 text-white flex flex-col justify-between h-[50v] max-w-[400px] mx-auto">
      <h2 className="text-2md font-bold mb-4 ">{plan}</h2>
      <h3 className="text-4xl font-bold mb-4 ">{price}</h3>
      <p className="py-4">What’s included:</p>
      <p className="text-sm mb-6 ">{description}</p>
      <ul className="list-disc space-y-2 text-left mb-6">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <button className="px-8 py-3 bg-gradient-to-r border border-opacity-0  border-t-[1px] rounded-[10px]  hover:from-blue-800 hover:to-pink-600 text-lg">
      Get Started
      </button>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      plan: "Starter Plan",
      price: "$29/month",
      description: "This package is suitable for teams 1-15 people.",
      features: [
        "10 GB Dedicated Hosting Free",
        "Best for Developers, Freelancers",
        "1 Year Support",
      ],
      buttonText: "Get Started",
    },
    {
      plan: "Basic Plan",
      price: "$79/month",
      description: "This package is suitable for teams 1-50 people.",
      features: [
        "15 GB Dedicated Hosting Free",
        "Best for Developers, Freelancers",
        "5 Year Support",
        "Free Custom Domain",
        "Basic Statistics",
      ],
      buttonText: "Get Started",
    },
    {
      plan: "Premium Plan",
      price: "$129/month",
      description: "This package is suitable for teams 1-100 people.",
      features: [
        "20 GB Dedicated Hosting Free",
        "Best for Developers, Freelancers",
        "Unlimited Support",
        "Free Custom Domain",
        "Full Statistics",
        "Priority Support",
      ],
      buttonText: "Get Started",
    },
  ];

  return (
    <div className="text-white py-16">
      <h2 className="text-4xl text-center font-bold mb-4">
        Make the wise decision for your business
      </h2>
      <p className="text-lg text-center mb-8">
        Choose from our affordable 3 packages
      </p>
      <div className="flex flex-wrap justify-center max-w-[1200px] mx-auto">
        {plans.map((plan) => (
          <PricingCard
            key={plan.plan}
            plan={plan.plan}
            price={plan.price}
            description={plan.description}
            features={plan.features}
            buttonText={plan.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
