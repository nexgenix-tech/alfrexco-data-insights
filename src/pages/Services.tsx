
import { useState } from "react";
import { Shield, Database, Building2, Search, CheckCircle, Users, FileText, Lock, Phone, Clock, MapPin } from "lucide-react";
import DataAnimation from "../components/DataAnimation";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const [activeTab, setActiveTab] = useState("identity");

  const services = {
    identity: {
      title: "Identity & Verification Services",
      description: "Comprehensive identity verification solutions to ensure secure and reliable customer onboarding.",
      icon: Shield,
      items: [
        {
          name: "ID Verification",
          description: "Verify South African identity documents against official databases.",
          icon: FileText
        },
        {
          name: "Spousal Verification", 
          description: "Confirm marital status and spousal relationships.",
          icon: Users
        },
        {
          name: "ID Photo Verification",
          description: "Facial recognition and photo matching services.",
          icon: CheckCircle
        },
        {
          name: "Fingerprint Verification",
          description: "Biometric verification using fingerprint technology.",
          icon: Shield
        }
      ]
    },
    data: {
      title: "Data Enrichment Services",
      description: "Enhance your existing customer data with our comprehensive databases.",
      icon: Database,
      items: [
        {
          name: "Personal Information Enrichment",
          description: "Enhance customer profiles with additional personal data points.",
          icon: Users
        },
        {
          name: "Business Verification",
          description: "Verify and enrich business information and registration details.",
          icon: Building2
        },
        {
          name: "Trust Data Verification",
          description: "Access trust information from the Masters office database.",
          icon: Lock
        },
        {
          name: "Vehicle Data Verification",
          description: "Comprehensive vehicle registration and ownership verification.",
          icon: CheckCircle
        },
        {
          name: "Bank Account Verification",
          description: "Verify banking information and account ownership.",
          icon: Shield
        }
      ]
    },
    kyc: {
      title: "KYC Analysis",
      description: "Advanced analytics to understand customer behavior and risk profiles.",
      icon: Search,
      items: [
        {
          name: "Customer Profiling",
          description: "Build comprehensive customer profiles using data analytics.",
          icon: Users
        },
        {
          name: "Risk Assessment", 
          description: "Evaluate customer risk levels using multiple data points.",
          icon: Shield
        },
        {
          name: "Behavioral Analysis",
          description: "Understand customer spending patterns and preferences.",
          icon: Search
        },
        {
          name: "Compliance Monitoring",
          description: "Ongoing monitoring for regulatory compliance requirements.",
          icon: CheckCircle
        }
      ]
    },
    tracing: {
      title: "Unclaimed Benefits Tracing",
      description: "Expert tracing services to locate individuals with unclaimed benefits, pensions, and financial assets.",
      icon: Search,
      items: [
        {
          name: "Desktop/Digital Tracing",
          description: "Latest search tools and databases combined with telephonic/field tracing network and EKS Management System.",
          icon: Database
        },
        {
          name: "Physical/Field Tracing",
          description: "Specialized network of field agents for physical tracing, visiting beneficiaries and document signing.",
          icon: MapPin
        },
        {
          name: "Investigative Tracing",
          description: "In-depth tracing for untraceable cases, using experienced personnel to locate and verify former members.",
          icon: Search
        },
        {
          name: "Legal Documentation",
          description: "Support for signing Section 58's, Section 57's, AOD's, Section 129's and Debit Orders.",
          icon: FileText
        }
      ]
    },
    trust: {
      title: "Trust & Deeds Data",
      description: "Access comprehensive property and trust information databases.",
      icon: Building2,
      items: [
        {
          name: "Trust Information",
          description: "Database of over 250,000 trust records from the Masters office.",
          icon: Building2
        },
        {
          name: "Property Records",
          description: "Comprehensive property ownership and registration data.",
          icon: FileText
        },
        {
          name: "Deeds Office Data",
          description: "Real-time access to Department of Rural Development data.",
          icon: Database
        },
        {
          name: "Monthly Updates",
          description: "Database updated monthly from official sources.",
          icon: CheckCircle
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
        <section className="bg-gradient-to-br from-[#1A1A1A] to-gray-900 text-white py-20 relative overflow-hidden">
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
                    className={`p-6 rounded-xl transition-all duration-300 text-left ${
                      isActive 
                        ? 'bg-[#F37021] text-white shadow-lg' 
                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isActive ? 'bg-white bg-opacity-20' : 'bg-gray-100'
                      }`}>
                        <IconComponent size={20} className={isActive ? 'text-white' : 'text-[#F37021]'} />
                      </div>
                      <h3 className={`font-bold text-sm sm:text-base ${
                        isActive ? 'text-white' : 'text-[#1A1A1A]'
                      }`}>
                        {service.title.split(' ')[0]} {service.title.split(' ')[1]}
                      </h3>
                    </div>
                    <p className={`text-xs sm:text-sm ${
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
                {/* Special section for Unclaimed Benefits Tracing */}
                {activeTab === "tracing" && (
                  <div className="mb-8 p-6 bg-[#F37021] bg-opacity-10 rounded-xl border border-[#F37021] border-opacity-20">
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Why Choose Our Tracing Services?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle size={16} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1A1A1A] mb-1">99.9% Accuracy</h4>
                          <p className="text-sm text-gray-600">Our qualified agents do comprehensive quality checks on each confirmed trace.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock size={16} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1A1A1A] mb-1">60-Day Guarantee</h4>
                          <p className="text-sm text-gray-600">Free re-trace within the 60-day guaranteed period.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                          <Users size={16} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1A1A1A] mb-1">200+ Skilled Agents</h4>
                          <p className="text-sm text-gray-600">Instant access to a national network of highly skilled and experienced trace agents.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                          <Shield size={16} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1A1A1A] mb-1">No Success, No Payment</h4>
                          <p className="text-sm text-gray-600">You only pay when we successfully locate your beneficiaries.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-[#1A1A1A] mb-2">Our Key Tracing Focus:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>Death Claims</li>
                        <li>Untraceable matters</li>
                        <li>Beneficiary data analysis</li>
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
