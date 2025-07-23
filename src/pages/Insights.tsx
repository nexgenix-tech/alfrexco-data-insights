import { Helmet } from "react-helmet-async";
import { BookOpen, TrendingUp, Database, Shield } from "lucide-react";
import DataAnimation from "../components/DataAnimation";

const Insights = () => {
  return (
    <>
      <Helmet>
        <title>Insights & Articles - Alfrexco SA</title>
        <meta name="description" content="Stay informed with the latest insights, trends, and analysis of the South African data landscape from Alfrexco SA's experts." />
        <meta name="keywords" content="data insights, South Africa data landscape, industry trends, data analytics, business intelligence, Alfrexco SA" />
        <meta property="og:title" content="Insights & Articles - Alfrexco SA" />
        <meta property="og:description" content="Expert insights and analysis of the South African data landscape and industry trends." />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Insights & Articles - Alfrexco SA" />
        <meta name="twitter:description" content="Expert insights and analysis of the South African data landscape and industry trends." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1A1A1A] to-gray-900 text-white py-20 relative overflow-hidden">
          <DataAnimation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-6">
                Insights & <span className="text-[#F37021]">Articles</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Stay ahead of the curve with expert insights, industry trends, and in-depth analysis 
                of the South African data landscape from our team of specialists.
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="w-24 h-24 bg-[#F37021] rounded-full flex items-center justify-center mx-auto mb-8">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">Coming Soon</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                We're preparing comprehensive insights and articles covering the latest trends 
                in data verification, identity solutions, and the evolving digital landscape in South Africa.
              </p>
            </div>

            {/* Preview Topics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-50 rounded-xl p-8 text-center group hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-[#F37021] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#F37021] transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-[#F37021] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Market Trends</h3>
                <p className="text-gray-600">
                  Analysis of emerging trends in the South African data and verification industry.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 text-center group hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-[#F37021] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#F37021] transition-all duration-300">
                  <Database className="w-8 h-8 text-[#F37021] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Data Insights</h3>
                <p className="text-gray-600">
                  Deep dives into data patterns, consumer behavior, and business intelligence insights.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 text-center group hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-[#F37021] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#F37021] transition-all duration-300">
                  <Shield className="w-8 h-8 text-[#F37021] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Security & Compliance</h3>
                <p className="text-gray-600">
                  Updates on data protection regulations, security best practices, and compliance requirements.
                </p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-[#F37021] rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Be the First to Know</h3>
              <p className="text-orange-100 mb-6">
                Subscribe to our newsletter to receive notifications when we publish new insights and articles.
              </p>
              <a
                href="#newsletter"
                className="bg-white text-[#F37021] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200 inline-block"
              >
                Subscribe to Newsletter
              </a>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">What to Expect</h2>
              <p className="text-xl text-gray-600">
                Our upcoming content will cover these key areas
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Industry Analysis</h3>
                    <p className="text-gray-600">Comprehensive analysis of the South African data industry landscape and future outlook.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Technology Trends</h3>
                    <p className="text-gray-600">Latest developments in biometric technology, AI, and data verification methodologies.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Case Studies</h3>
                    <p className="text-gray-600">Real-world examples of successful data verification implementations and their business impact.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Regulatory Updates</h3>
                    <p className="text-gray-600">Updates on POPIA compliance, data protection laws, and regulatory changes affecting businesses.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Best Practices</h3>
                    <p className="text-gray-600">Practical guides and best practices for implementing effective data verification strategies.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Expert Interviews</h3>
                    <p className="text-gray-600">Insights from industry leaders and experts in data security, verification, and digital transformation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Insights;