
import { Link } from "react-router-dom";
import { User, BarChart3, Building, Search } from "lucide-react";
import DataAnimation from "../components/DataAnimation";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Alfrexco SA - Smart Data Solutions for South African Businesses</title>
        <meta name="description" content="Comprehensive data and identity verification services for South African businesses. Make informed decisions with Alfrexco SA's extensive database of consumer and commercial records." />
        <meta name="keywords" content="Alfrexco SA, data verification, identity verification, South Africa, business intelligence, consumer data, commercial records" />
        <meta property="og:title" content="Alfrexco SA - Smart Data Solutions" />
        <meta property="og:description" content="Comprehensive data and identity verification services for South African businesses." />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Alfrexco SA - Smart Data Solutions" />
        <meta name="twitter:description" content="Comprehensive data and identity verification services for South African businesses." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#2A2A2A] to-gray-900 text-white py-20 relative overflow-hidden">
          <DataAnimation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Smart Data.<br />
                  <span className="text-[#F37021]">Smarter Decisions.</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Comprehensive data and identity verification services for South African businesses. 
                  Make informed decisions with our extensive database of consumer and commercial records.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/services"
                    className="bg-[#F37021] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#E5651C] transition-colors duration-200 text-center"
                  >
                    Explore Services
                  </Link>
                  <Link
                    to="/contact"
                    className="border-2 border-[#F37021] text-[#F37021] px-8 py-4 rounded-md text-lg font-medium hover:bg-[#F37021] hover:text-white transition-all duration-200 text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#F37021] to-[#E5651C] rounded-lg p-8 transform rotate-3 shadow-2xl">
                  <div className="bg-white rounded-lg p-6 transform -rotate-3">
                    <img 
                      src="/lovable-uploads/4cd33516-ac28-48b2-a6b6-960f47832266.png" 
                      alt="Alfrexco SA Logo" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
                Comprehensive Data Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From identity verification to data enrichment, we provide the tools 
                you need to make informed business decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Identity Verification",
                  description: "Comprehensive ID verification, spousal verification, and photo verification services.",
                  icon: User
                },
                {
                  title: "Data Enrichment",
                  description: "Enhance your existing data with our latest consumer and commercial records.",
                  icon: BarChart3
                },
                {
                  title: "Trust Data",
                  description: "Access to over 250,000 trust information records from the Masters office.",
                  icon: Building
                },
                {
                  title: "KYC Analysis",
                  description: "Sophisticated data analytics to understand customer profiles and behavior.",
                  icon: Search
                }
              ].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="text-[#F37021] mb-4">
                      <IconComponent size={40} />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-[#F37021] relative overflow-hidden">
          <DataAnimation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Massive Data Coverage
              </h2>
              <p className="text-xl text-orange-100">
                Access to millions of records across South Africa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "54M+", label: "Consumers Connected" },
                { number: "6M+", label: "Registered Properties" },
                { number: "4M+", label: "Registered Companies" },
                { number: "24M+", label: "Credit Card Users" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-orange-100 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#1A1A1A] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Data Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with Alfrexco SA today and unlock the power of comprehensive data solutions.
            </p>
            <Link
              to="/contact"
              className="bg-[#F37021] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#E5651C] transition-colors duration-200 inline-block"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
