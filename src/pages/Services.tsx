
import { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("identity");

  const services = {
    identity: {
      title: "Identity & Verification Services",
      description: "Comprehensive identity verification solutions to ensure secure and reliable customer onboarding.",
      items: [
        {
          name: "ID Verification",
          description: "Verify South African identity documents against official databases."
        },
        {
          name: "Spousal Verification", 
          description: "Confirm marital status and spousal relationships."
        },
        {
          name: "ID Photo Verification",
          description: "Facial recognition and photo matching services."
        },
        {
          name: "Fingerprint Verification",
          description: "Biometric verification using fingerprint technology."
        }
      ]
    },
    data: {
      title: "Data Enrichment Services",
      description: "Enhance your existing customer data with our comprehensive databases.",
      items: [
        {
          name: "Personal Information Enrichment",
          description: "Enhance customer profiles with additional personal data points."
        },
        {
          name: "Business Verification",
          description: "Verify and enrich business information and registration details."
        },
        {
          name: "Trust Data Verification",
          description: "Access trust information from the Masters office database."
        },
        {
          name: "Vehicle Data Verification",
          description: "Comprehensive vehicle registration and ownership verification."
        },
        {
          name: "Bank Account Verification",
          description: "Verify banking information and account ownership."
        }
      ]
    },
    kyc: {
      title: "KYC Analysis",
      description: "Advanced analytics to understand customer behavior and risk profiles.",
      items: [
        {
          name: "Customer Profiling",
          description: "Build comprehensive customer profiles using data analytics."
        },
        {
          name: "Risk Assessment", 
          description: "Evaluate customer risk levels using multiple data points."
        },
        {
          name: "Behavioral Analysis",
          description: "Understand customer spending patterns and preferences."
        },
        {
          name: "Compliance Monitoring",
          description: "Ongoing monitoring for regulatory compliance requirements."
        }
      ]
    },
    trust: {
      title: "Trust & Deeds Data",
      description: "Access comprehensive property and trust information databases.",
      items: [
        {
          name: "Trust Information",
          description: "Database of over 250,000 trust records from the Masters office."
        },
        {
          name: "Property Records",
          description: "Comprehensive property ownership and registration data."
        },
        {
          name: "Deeds Office Data",
          description: "Real-time access to Department of Rural Development data."
        },
        {
          name: "Monthly Updates",
          description: "Database updated monthly from official sources."
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A1A1A] to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Services Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === key
                    ? "bg-[#F37021] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {service.title.split(' ')[0]} {service.title.split(' ')[1]}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
                {services[activeTab as keyof typeof services].title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {services[activeTab as keyof typeof services].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services[activeTab as keyof typeof services].items.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-20 bg-[#F37021] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Target Industries</h2>
            <p className="text-xl text-orange-100">
              Serving businesses across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Financial Sector", description: "Banks, Financial Services, Insurers" },
              { name: "Public Sector", description: "Government, Municipalities" },
              { name: "Retail Sector", description: "Auto/Car Dealerships" },
              { name: "General Services", description: "Legal Services, Logistics, Call Centres" }
            ].map((industry, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold mb-3">{industry.name}</h3>
                <p className="text-orange-100">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
