import { Shield, Users, Database, CheckCircle, Phone, Mail, MapPin, ArrowRight, Star } from "lucide-react";
import DataAnimation from "../components/DataAnimation";
import { Helmet } from "react-helmet-async";

const Partners = () => {
  const partners = [
    {
      name: "Ideco",
      logo: "/partners/ideco.png",
      type: "Smart Identification Platform",
      description: "Provides smart identification and verification solutions.",
      category: "Technology",
      featured: true
    },
    {
      name: "Axon Wireless",
      logo: "https://www.axonwireless.com/wp-content/uploads/2022/09/Axon-Logo_colour-2.png",
      type: "Biometric Solutions",
      description: "Provides advanced wireless biometric technology solutions.",
      category: "Technology",
      featured: false
    },
    {
      name: "Uqudo",
      logo: "/partners/uqudo.png",
      type: "Smart Digital Onboarding Platform",
      description: "Provides innovative digital identity solutions for the Middle East and Africa.",
      category: "Platform",
      featured: true
    },
    {
      name: "Ndende Technologies",
      logo: "/partners/ndende.png",
      type: "Biometrics / Security Company",
      description: "Provides comprehensive security and biometric solutions.",
      category: "Security",
      featured: false
    },
    {
      name: "iFacts",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkf0eRy17tT1y6JzSbrD3Hglnwee1ln2loIQ&s",
      type: "Employee Screening & Vetting Services",
      description: "Provides employee screening and vetting services for informed hiring decisions.",
      category: "Vetting",
      featured: true
    },
    {
      name: "V-Reports",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBfU33_GTUK_cHRZ94UqQt3M8Vp9RTmA9ujw&s",
      type: "Employee Screening & Vetting Services",
      description: "Provides comprehensive talent and risk management solutions.",
      category: "Vetting",
      featured: false
    }
  ];

  const partnershipValues = [
    {
      icon: Database,
      title: "Advanced Technology",
      description: "Access to cutting-edge biometric and verification technologies through our technology partners."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Multi-layered security approaches combining our partners' expertise with our data solutions."
    },
    {
      icon: Users,
      title: "Global Reach",
      description: "Expanding our service capabilities across different markets and regions through strategic alliances."
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Solutions",
      description: "End-to-end verification and data management solutions through strategic partnerships."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Partners - Alfrexco SA</title>
        <meta name="description" content="Discover Alfrexco SA's strategic partners. Working together with industry leaders like Ideco, Axon Wireless, Uqudo, and Ndende Technologies to bring you quality data solutions." />
        <meta name="keywords" content="Alfrexco SA partners, strategic partnerships, data verification partners, biometric solutions, identity verification" />
        <meta property="og:title" content="Our Partners - Alfrexco SA" />
        <meta property="og:description" content="Working together with industry leaders to bring you quality, tailor-made data solutions through strategic partnerships." />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Our Partners - Alfrexco SA" />
        <meta name="twitter:description" content="Working together with industry leaders to bring you quality, tailor-made data solutions through strategic partnerships." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#2A2A2A] via-gray-800 to-[#1A1A1A] text-white py-24 relative overflow-hidden">
          <DataAnimation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-[#F37021] bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <Users className="w-5 h-5 text-[#F37021] mr-2" />
                <span className="text-[#F37021] font-medium">Trusted Partnerships</span>
              </div>
              <h1 className="text-6xl font-bold mb-6">
                Our Strategic <span className="text-[#F37021]">Partners</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Collaborating with industry leaders to deliver innovative, secure, and 
                comprehensive data verification solutions across global markets.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#F37021] rounded-full mr-2"></div>
                  <span>4 Strategic Partners</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#F37021] rounded-full mr-2"></div>
                  <span>Global Coverage</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#F37021] rounded-full mr-2"></div>
                  <span>Cutting-edge Technology</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our partnerships combine expertise, innovation, and reliability to deliver 
                exceptional data verification and security solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className={`group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-[#F37021] hover:border-opacity-30 ${
                    partner.featured ? 'ring-2 ring-[#F37021] ring-opacity-20' : ''
                  }`}
                >
                  {partner.featured && (
                    <div className="absolute -top-3 left-6">
                      <div className="bg-[#F37021] text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured Partner
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-auto h-20 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-[#F37021] group-hover:bg-opacity-10 transition-colors duration-300">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="h-12 w-auto"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-[#1A1A1A] group-hover:text-[#F37021] transition-colors duration-300">
                          {partner.name}
                        </h3>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {partner.category}
                        </span>
                      </div>
                      
                      <p className="text-[#F37021] font-semibold mb-3 text-lg">
                        {partner.type}
                      </p>
                      
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {partner.description}
                      </p>
                      
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
                Partnership <span className="text-[#F37021]">Advantages</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our collaborative approach delivers enhanced value through combined expertise and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipValues.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F37021] to-[#E5651C] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#F37021] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#1A1A1A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#F37021] mb-2">4+</div>
                <div className="text-gray-300">Strategic Partners</div>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-[#F37021] mb-2">99.9%</div>
                <div className="text-gray-300">System Reliability</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#F37021] mb-2">24/7</div>
                <div className="text-gray-300">Support Coverage</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#F37021] to-[#E5651C] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Join our network of trusted partners and explore how we can collaborate 
              to deliver exceptional data verification solutions together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-[#F37021] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </a>
              <a
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#F37021] transition-colors duration-200 inline-flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Learn About Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Partners;
