import Image from "next/image";

export default function CustomersSections() {
  const clients = [
    { src: "/clients-logo/Amazon.com.png", alt: "Amazon logo" },
    { src: "/clients-logo/squareStoneLogo.png", alt: "Squarestone logo" },
    { src: "/clients-logo/martino.png", alt: "Martino logo" },
    { src: "/clients-logo/verogan.png", alt: "Virogan logo" },
    { src: "/clients-logo/Vertex.png", alt: "Vertex logo" },
    { src: "/clients-logo/aromix.png", alt: "Aromix logo" },
    { src: "/clients-logo/fireli.png", alt: "Fireli logo" },
    { src: "/clients-logo/Natroma.png", alt: "Natroma logo" },
  ];

  return (
    <div className=" py-4">
      <div className="mx-auto max-w-[940px] px-4 sm:px-6 lg:px-8">
        <div className="text-center py-14">
          <h2 className="text-white text-xl font-medium">
            Trusted by nearly 5000+ paying customers
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-60"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
