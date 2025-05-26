import DataAnimation from "../components/DataAnimation";

const Partners = () => {
  const operationalPartners = [
    {
      name: "Daon",
      logo: "/lovable-uploads/801cf25b-f91a-41f3-9eea-9cc39e194175.png",
      type: "Identity Platform",
      description: "Leading identity verification and biometric authentication solutions."
    }
  ];

  const strategicPartners = [
    {
      name: "Tech 5",
      logo: "/lovable-uploads/a71b2e11-5e3f-43bf-a356-268b0782e1f9.png",
      type: "Biometrics / ID Management Company", 
      description: "Advanced biometric identification and management technologies."
    },
    {
      name: "Ndende Technologies",
      logo: "/lovable-uploads/2f7d805b-b622-4c6b-b480-aaaa262f3186.png",
      type: "Biometrics / Security Company",
      description: "Comprehensive security and biometric solutions provider."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A1A1A] to-gray-900 text-white py-20 relative overflow-hidden">
        <DataAnimation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="text-[#F37021]">Partners</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Working together to bring you quality, tailor-made data solutions through 
              strategic partnerships with industry leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Operational Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
              Operational Partners
            </h2>
            <p className="text-xl text-gray-600">
              Trusted technology partners powering our verification solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {operationalPartners.map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-16 w-auto mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">{partner.name}</h3>
                <p className="text-[#F37021] font-medium mb-4">{partner.type}</p>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
              Strategic Partners
            </h2>
            <p className="text-xl text-gray-600">
              Long-term partnerships driving innovation in data verification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategicPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                {partner.logo && (
                  <div className="mb-6">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-16 w-auto"
                    />
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-2">{partner.name}</h3>
                <p className="text-[#F37021] font-medium mb-4">{partner.type}</p>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-[#F37021] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Partnership Benefits</h2>
            <p className="text-xl text-orange-100">
              How our partnerships enhance your experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Advanced Technology</h3>
              <p className="text-orange-100">
                Access to cutting-edge biometric and verification technologies 
                through our technology partners.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Enhanced Security</h3>
              <p className="text-orange-100">
                Multi-layered security approaches combining our partners' 
                expertise with our data solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Comprehensive Solutions</h3>
              <p className="text-orange-100">
                End-to-end verification and data management solutions 
                through strategic partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Interested in Partnership?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us to explore partnership opportunities and how we can work together.
          </p>
          <a
            href="/contact"
            className="bg-[#F37021] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#E5651C] transition-colors duration-200 inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Partners;
