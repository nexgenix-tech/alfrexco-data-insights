
import { useState } from "react";
import { Shield, Database, Building2, Search, CheckCircle, Users, FileText, Lock, Phone, Clock, MapPin, Award } from "lucide-react";
import DataAnimation from "../components/DataAnimation";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const [activeTab, setActiveTab] = useState("biometrics");

  const services = {
    biometrics: {
      title: "Biometric Data Services",
      description: "Advanced biometric verification using facial recognition and fingerprint technology for enhanced security and accuracy.",
      icon: Shield,
      items: [
        {
          name: "Facial Recognition",
          description: "Real-time facial recognition comparing live photos against database photos from Home Affairs and other official systems.",
          icon: Users
        },
        {
          name: "Fingerprint Verification",
          description: "Biometric verification using advanced fingerprint technology for enhanced security and identity confirmation.",
          icon: Lock
        },
        {
          name: "Live Photo Verification", 
          description: "Live photo verification against official database records to ensure identity authenticity.",
          icon: CheckCircle
        },
        {
          name: "Multi-Modal Biometrics",
          description: "Combining multiple biometric modalities for comprehensive identity verification solutions.",
          icon: Shield
        }
      ]
    },
    qualifications: {
      title: "Qualification Checks",
      description: "Comprehensive verification of educational qualifications and professional certifications.",
      icon: FileText,
      items: [
        {
          name: "Educational Verification",
          description: "Verify academic qualifications and degrees from South African institutions.",
          icon: FileText
        },
        {
          name: "Professional Certifications",
          description: "Validate professional certifications and licenses from regulatory bodies.",
          icon: Award
        },
        {
          name: "Skills Assessment",
          description: "Comprehensive skills and competency verification for employment screening.",
          icon: CheckCircle
        },
        {
          name: "Institution Database Access",
          description: "Direct access to educational institution databases for real-time verification.",
          icon: Database
        }
      ]
    },
    tracing: {
      title: "Tracing Services",
      description: "Comprehensive tracing solutions for consumer and commercial applications.",
      icon: Search,
      items: [
        {
          name: "Consumer Tracing",
          description: "Locate individuals for debt recovery, legal matters, and unclaimed benefits.",
          icon: Users
        },
        {
          name: "Commercial Tracing",
          description: "Business and corporate entity tracing for compliance and investigation purposes.",
          icon: Building2
        },
        {
          name: "Skip Tracing",
          description: "Advanced skip tracing services using multiple data sources and methodologies.",
          icon: Search
        },
        {
          name: "Asset Tracing",
          description: "Locate and verify asset ownership for financial and legal proceedings.",
          icon: Shield
        }
      ]
    },
    idverification: {
      title: "ID Verification",
      description: "Comprehensive identity document verification against official South African databases.",
      icon: FileText,
      items: [
        {
          name: "ID Document Verification",
          description: "Verify South African identity documents against Home Affairs databases.",
          icon: FileText
        },
        {
          name: "Document Authentication",
          description: "Advanced document authentication to detect fraud and forgeries.",
          icon: Shield
        },
        {
          name: "Real-time Verification",
          description: "Instant verification results with real-time database connectivity.",
          icon: Clock
        },
        {
          name: "Compliance Reporting",
          description: "Detailed verification reports for compliance and audit purposes.",
          icon: CheckCircle
        }
      ]
    },
    vehicle: {
      title: "Vehicle Search & Verification",
      description: "Comprehensive vehicle registration and ownership verification services.",
      icon: Search,
      items: [
        {
          name: "Vehicle Registration Check",
          description: "Verify vehicle registration details against official transport databases.",
          icon: FileText
        },
        {
          name: "Ownership Verification",
          description: "Confirm current and historical vehicle ownership information.",
          icon: Users
        },
        {
          name: "Finance & Encumbrance Check",
          description: "Check for outstanding finance agreements and legal encumbrances.",
          icon: Shield
        },
        {
          name: "Vehicle History Report",
          description: "Comprehensive vehicle history including accidents, theft, and maintenance records.",
          icon: Database
        }
      ]
    }
  };

  const activeService = services[activeTab as keyof typeof services];
  const ActiveIcon = activeService.icon;

  return (
    <>
      <Helmet>
        <title>Our Services - Alfrexco SA</title>
        <meta name="description" content="Comprehensive data and verification services from Alfrexco SA including identity verification, data enrichment, KYC analysis, unclaimed benefits tracing, and trust data services." />
        <meta name="keywords" content="Alfrexco SA services, identity verification, data enrichment, KYC analysis, unclaimed benefits tracing, trust data, South Africa" />
        <meta property="og:title" content="Our Services - Alfrexco SA" />
        <meta property="og:description" content="Comprehensive data and verification services designed to meet the evolving needs of South African businesses across multiple industries." />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Our Services - Alfrexco SA" />
        <meta name="twitter:description" content="Comprehensive data and verification services designed to meet the evolving needs of South African businesses across multiple industries." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#2A2A2A] to-gray-700 text-white py-20 relative overflow-hidden">
          <DataAnimation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-6">
                Our <span className="text-[#F37021]">Services</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Comprehensive data and verification services designed to meet the evolving 
                needs of South African businesses across multiple industries.
              </p>
            </div>
          </div>
        </section>

        {/* Services Navigation */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Service Categories</h2>
              <p className="text-xl text-gray-600">Choose a service category to explore our solutions</p>
            </div>

            {/* Mobile-friendly service tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
              {Object.entries(services).map(([key, service]) => {
                const IconComponent = service.icon;
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`p-4 rounded-xl transition-all duration-300 text-left min-h-[120px] ${
                      isActive 
                        ? 'bg-[#F37021] text-white shadow-lg' 
                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isActive ? 'bg-white bg-opacity-20' : 'bg-gray-100'
                      }`}>
                        <IconComponent size={20} className={isActive ? 'text-white' : 'text-[#F37021]'} />
                      </div>
                      <h3 className={`font-bold text-sm leading-tight ${
                        isActive ? 'text-white' : 'text-[#1A1A1A]'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                    <p className={`text-xs leading-relaxed ${
                      isActive ? 'text-orange-100' : 'text-gray-600'
                    }`}>
                      {service.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Service Details */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-[#1A1A1A] p-8 text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#F37021] rounded-full flex items-center justify-center mr-4">
                    <ActiveIcon size={24} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold">{activeService.title}</h2>
                </div>
                <p className="text-lg sm:text-xl text-gray-300">{activeService.description}</p>
              </div>

              <div className="p-8">
                {/* Special section for Biometric Services */}
                {activeTab === "biometrics" && (
                  <div className="mb-8 p-6 bg-[#F37021] bg-opacity-10 rounded-xl border border-[#F37021] border-opacity-20">
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Why Choose Our Biometric Services?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle size={16} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1A1A1A] mb-1">99.9% Accuracy</h4>
                          <p className="text-sm text-gray-600">Advanced biometric algorithms ensure the highest accuracy in identity verification.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock size={16} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1A1A1A] mb-1">Real-time Processing</h4>
                          <p className="text-sm text-gray-600">Instant biometric verification with real-time results and processing.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                          <Users size={16} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1A1A1A] mb-1">Multi-Modal Support</h4>
                          <p className="text-sm text-gray-600">Support for facial recognition, fingerprints, and other biometric modalities.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                          <Shield size={16} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1A1A1A] mb-1">Enterprise Security</h4>
                          <p className="text-sm text-gray-600">Bank-grade security and encryption for all biometric data processing.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-[#1A1A1A] mb-2">Our Biometric Capabilities:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>Facial recognition and matching</li>
                        <li>Fingerprint verification and analysis</li>
                        <li>Live photo verification against databases</li>
                        <li>Multi-factor biometric authentication</li>
                      </ul>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {activeService.items.map((item, index) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={index} className="group p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#F37021]">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-[#F37021] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#F37021] transition-all duration-300">
                            <ItemIcon size={20} className="text-[#F37021] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#F37021] transition-colors duration-300">
                              {item.name}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Industries */}
        <section className="py-20 bg-[#F37021] text-white relative overflow-hidden">
          <DataAnimation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Target Industries</h2>
              <p className="text-xl text-orange-100">
                Serving businesses across multiple sectors
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Financial Sector", description: "Banks, Financial Services, Insurers", icon: Building2 },
                { name: "Public Sector", description: "Government, Municipalities", icon: Shield },
                { name: "Retail Sector", description: "Auto/Car Dealerships", icon: Users },
                { name: "General Services", description: "Legal Services, Logistics, Call Centres", icon: Search }
              ].map((industry, index) => {
                const IndustryIcon = industry.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:bg-opacity-30 transition-all duration-300">
                      <IndustryIcon size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{industry.name}</h3>
                    <p className="text-orange-100">{industry.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
