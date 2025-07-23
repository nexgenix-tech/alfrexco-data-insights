
import { Shield, Users, Award, Target, Eye, Heart } from "lucide-react";
import DataAnimation from "../components/DataAnimation";
import TeamCard from "../components/TeamCard";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Alfrexco SA - Leading Data Solutions Provider</title>
        <meta name="description" content="Learn about Alfrexco SA, your trusted partner for comprehensive data solutions and verification services in South Africa. Discover our core values and experience." />
        <meta name="keywords" content="About Alfrexco SA, data solutions, identity verification, South Africa, company information, transparency, integrity, quality" />
        <meta property="og:title" content="About Alfrexco SA - Leading Data Solutions Provider" />
        <meta property="og:description" content="Your trusted partner for comprehensive data solutions and verification services in South Africa." />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="About Alfrexco SA - Leading Data Solutions Provider" />
        <meta name="twitter:description" content="Your trusted partner for comprehensive data solutions and verification services in South Africa." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1A1A1A] to-gray-900 text-white py-20 relative overflow-hidden">
          <DataAnimation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-6">
                About <span className="text-[#F37021]">Alfrexco SA</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Your trusted partner for comprehensive data solutions and verification services 
                in South Africa. We combine advanced technology with extensive databases to 
                deliver reliable, accurate, and actionable insights.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-orange-50 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-[#F37021] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">T</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Transparency</h3>
                <p className="text-gray-600">
                  We ensure transparency in everything we do to build trust and confidence 
                  with all our stakeholders.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">I</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We conduct our business with integrity at all times to inculcate a culture 
                  of honesty, respect and accountability.
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-[#F37021] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">Q</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Quality</h3>
                <p className="text-gray-600">
                  To render efficient and value added trusted data verification to all our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
                  The Alfrexco SA Experience
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    With Alfrexco SA as your exclusive data solutions and verification partner, 
                    you have access to our extensive database of South African consumers, 
                    as well as commercial records.
                  </p>
                  <p>
                    We have access to millions of records which can be segmented to your 
                    requirements including geographic, income and assets, age and more. 
                    We build models to improve business performance and customer interaction.
                  </p>
                  <p>
                    We provide key comprehensive marketing insight and analytics, procurement 
                    and retention strategies and full turnkey communications and data management systems.
                  </p>
                  <p>
                    Our data services are performed on batch or bulk volumes.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-[#F37021] rounded-lg p-8 transform rotate-2 shadow-xl">
                  <div className="bg-white rounded-lg p-6 transform -rotate-2">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                        Data-Driven Excellence
                      </h3>
                      <p className="text-gray-600">
                        Leveraging advanced analytics and comprehensive databases 
                        to deliver actionable business insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Meet Our Leadership Team</h2>
              <p className="text-xl text-gray-600">
                Experienced professionals leading the future of data solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TeamCard
                name="Linda Banda"
                title="Managing Director"
                description="Strategic leadership and business development expertise, driving Alfrexco's vision and growth initiatives."
                linkedinUrl="https://linkedin.com/in/linda-banda"
                initials="LB"
              />
              <TeamCard
                name="Sphamandla Banda"
                title="Chief Executive Officer"
                description="Innovative technology leadership and operational excellence, steering the company's technical direction."
                linkedinUrl="https://linkedin.com/in/sphamandla-banda"
                initials="SB"
              />
              <TeamCard
                name="Sabelo Mzimela"
                title="Business Development Manager"
                description="Building strategic partnerships and expanding market reach across South Africa's data landscape."
                linkedinUrl="https://linkedin.com/in/sabelo-mzimela"
                initials="SM"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#1A1A1A] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Partner with Us Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the Alfrexco SA difference and transform your data strategy.
            </p>
            <a
              href="/contact"
              className="bg-[#F37021] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#E5651C] transition-colors duration-200 inline-block"
            >
              Get Started
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
