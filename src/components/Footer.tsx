
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/4cd33516-ac28-48b2-a6b6-960f47832266.png" 
              alt="Alfrexco SA" 
              className="h-10 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              Leading South African data and identity verification company providing 
              comprehensive data solutions for businesses across multiple industries.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-300">
                <span className="font-medium">Phone:</span> +27 10 023 0576
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-medium">Email:</span> info@alfrexcosa.co.za
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-medium">Address:</span> Suite 205, Block 2<br />
                Monument Office Park, 79 Steenbok Avenue, Pretoria
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-[#F37021] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#F37021] transition-colors">Services</Link></li>
              <li><Link to="/big-data" className="text-gray-300 hover:text-[#F37021] transition-colors">Big Data Records</Link></li>
              <li><Link to="/partners" className="text-gray-300 hover:text-[#F37021] transition-colors">Partners</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#F37021] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest industry insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#F37021]"
              />
              <button
                type="submit"
                className="w-full bg-[#F37021] text-white px-4 py-2 rounded-md hover:bg-[#E5651C] transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Alfrexco SA. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-[#F37021] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-[#F37021] text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
