const ClientTicker = () => {
  // Mock client logos - you can replace these with actual client logos later
  const clients = [
    { name: "Client 1", logo: "/lovable-uploads/133b4a04-869c-40f4-9a5b-374b5c971dde.png" },
    { name: "Client 2", logo: "/lovable-uploads/2f7d805b-b622-4c6b-b480-aaaa262f3186.png" },
    { name: "Client 3", logo: "/lovable-uploads/4cd33516-ac28-48b2-a6b6-960f47832266.png" },
    { name: "Client 4", logo: "/lovable-uploads/801cf25b-f91a-41f3-9eea-9cc39e194175.png" },
    { name: "Client 5", logo: "/lovable-uploads/85a5f017-8c94-4896-8cb2-5a0eb991c676.png" },
    { name: "Client 6", logo: "/lovable-uploads/a2ca51c7-0054-4e29-bf3c-f05172a8337a.png" },
    { name: "Client 7", logo: "/lovable-uploads/a71b2e11-5e3f-43bf-a356-268b0782e1f9.png" },
    { name: "Client 8", logo: "/lovable-uploads/abb278b3-f8d1-4372-b518-3fd2bc88b3ec.png" },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-gray-600">
            We partner with industry leaders across South Africa
          </p>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll space-x-12">
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTicker;