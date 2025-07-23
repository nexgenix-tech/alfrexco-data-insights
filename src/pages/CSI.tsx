import { Helmet } from "react-helmet-async";
import { Heart, Users, BookOpen, TreePine, Handshake, Award } from "lucide-react";
import DataAnimation from "../components/DataAnimation";

const CSI = () => {
  return (
    <>
      <Helmet>
        <title>Corporate Social Investment - Alfrexco SA</title>
        <meta name="description" content="Learn about Alfrexco SA's Corporate Social Investment initiatives and community development programs across South Africa." />
        <meta name="keywords" content="CSI, corporate social investment, community development, social responsibility, Alfrexco SA" />
        <meta property="og:title" content="Corporate Social Investment - Alfrexco SA" />
        <meta property="og:description" content="Discover our commitment to community development and social responsibility initiatives." />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Corporate Social Investment - Alfrexco SA" />
        <meta name="twitter:description" content="Discover our commitment to community development and social responsibility initiatives." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1A1A1A] to-gray-900 text-white py-20 relative overflow-hidden">
          <DataAnimation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-6">
                Corporate Social <span className="text-[#F37021]">Investment</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                At Alfrexco SA, we believe in giving back to the communities that have supported our growth. 
                Our CSI initiatives focus on education, skills development, and community empowerment.
              </p>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Our Commitment</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are dedicated to creating lasting positive impact in South African communities 
                through strategic partnerships and meaningful initiatives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-[#F37021] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Education Support</h3>
                <p className="text-gray-600">
                  Supporting educational institutions and providing resources for quality learning experiences.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-[#F37021] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Skills Development</h3>
                <p className="text-gray-600">
                  Empowering individuals with digital literacy and technical skills for the modern workforce.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-[#F37021] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Community Wellness</h3>
                <p className="text-gray-600">
                  Promoting health, wellness, and social development programs in underserved communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Our Focus Areas</h2>
              <p className="text-xl text-gray-600">
                Strategic initiatives designed to create sustainable community impact
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                    <TreePine className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Environmental Sustainability</h3>
                    <p className="text-gray-600 mb-4">
                      Promoting environmental awareness and sustainable practices in communities across South Africa.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Community recycling programs</li>
                      <li>• Environmental education initiatives</li>
                      <li>• Green technology awareness</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Economic Empowerment</h3>
                    <p className="text-gray-600 mb-4">
                      Supporting small businesses and entrepreneurship development in local communities.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Small business mentorship</li>
                      <li>• Entrepreneurship workshops</li>
                      <li>• Financial literacy programs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Youth Development</h3>
                    <p className="text-gray-600 mb-4">
                      Investing in the next generation through education, mentorship, and skills development programs.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Scholarship programs</li>
                      <li>• Youth leadership development</li>
                      <li>• Digital skills training</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Community Infrastructure</h3>
                    <p className="text-gray-600 mb-4">
                      Supporting the development of essential community infrastructure and resources.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Technology centers</li>
                      <li>• Community libraries</li>
                      <li>• Educational facilities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-[#1A1A1A] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Partner with Us</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in making a meaningful difference in South African communities. 
              Together, we can create lasting positive impact.
            </p>
            <a
              href="/contact"
              className="bg-[#F37021] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#E5651C] transition-colors duration-200 inline-block"
            >
              Get Involved
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default CSI;