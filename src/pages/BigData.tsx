
const BigData = () => {
  const stats = [
    {
      number: "54 MILLION +",
      description: "Consumers Connected to 85+ Million Cellphone Numbers",
      color: "bg-[#F37021]"
    },
    {
      number: "6 MILLION +", 
      description: "Registered Properties / Addresses at Deeds Office",
      color: "bg-gray-600"
    },
    {
      number: "4 MILLION +",
      description: "Registered Companies on CIPC", 
      color: "bg-[#F37021]"
    },
    {
      number: "24 MILLION +",
      description: "Access to Over 24 Million Active Credit Card Users. Records for over 800,000 Unit Trust Accounts",
      color: "bg-gray-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A1A1A] to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-[#F37021]">Big Data</span> Records
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Access to comprehensive databases covering millions of South African 
              consumers, properties, companies, and financial records.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
              Massive Data Coverage
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive access to verified data across South Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className={`${stat.color} text-white rounded-lg p-8`}>
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-4">{stat.number}</h3>
                  <p className="text-lg">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Data Visualization */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                Data Growth Trajectory
              </h3>
              <p className="text-gray-600">
                Our database continues to expand with monthly updates from official sources
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-[#F37021] rounded-full"></div>
                <span className="text-sm text-gray-600">Consumer Data</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                <span className="text-sm text-gray-600">Commercial Data</span>
              </div>
            </div>

            {/* Simple Chart Representation */}
            <div className="mt-8 relative h-64 bg-white rounded-lg p-6">
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around h-48">
                <div className="bg-[#F37021] w-12 h-32 rounded-t-md"></div>
                <div className="bg-gray-600 w-12 h-24 rounded-t-md"></div>
                <div className="bg-[#F37021] w-12 h-40 rounded-t-md"></div>
                <div className="bg-gray-600 w-12 h-36 rounded-t-md"></div>
                <div className="bg-[#F37021] w-12 h-44 rounded-t-md"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-around text-xs text-gray-600 mt-2">
                <span>2020</span>
                <span>2021</span>
                <span>2022</span>
                <span>2023</span>
                <span>2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
              Trusted Data Sources
            </h2>
            <p className="text-xl text-gray-600">
              Our data is continuously updated from official government and private sources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Government Sources</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Department of Home Affairs</li>
                <li>• Deeds Office</li>
                <li>• CIPC (Companies Registration)</li>
                <li>• Masters Office</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Financial Institutions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Credit Bureaus</li>
                <li>• Banking Partners</li>
                <li>• Insurance Companies</li>
                <li>• Unit Trust Providers</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Private Sources</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Telecommunications</li>
                <li>• Retail Partners</li>
                <li>• Property Databases</li>
                <li>• Business Directories</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Unlock the Power of Big Data
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us to learn how our comprehensive databases can transform your business insights.
          </p>
          <a
            href="/contact"
            className="bg-[#F37021] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#E5651C] transition-colors duration-200 inline-block"
          >
            Request Data Access
          </a>
        </div>
      </section>
    </div>
  );
};

export default BigData;
