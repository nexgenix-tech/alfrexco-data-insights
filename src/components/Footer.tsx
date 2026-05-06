
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="h-28 w-28 bg-white rounded-lg shadow-lg mb-4">
<img 
              src="/alfrexco.png" 
              alt="Alfrexco SA" 
              className="h-28 w-auto  p-2"
              
            />
            </div>
            
            <p className="text-gray-300 mb-4 max-w-md">
              Leading South African data and identity verification company providing 
              comprehensive data solutions for businesses across multiple industries.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-300">
                <span className="font-medium">Phone:</span> +27 10 017 8760
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-medium">Email:</span> clientservices@alfrexcosa.co.za
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
              <li><Link to="/csi" className="text-gray-300 hover:text-[#F37021] transition-colors">CSI</Link></li>
              <li><Link to="/insights" className="text-gray-300 hover:text-[#F37021] transition-colors">Insights</Link></li>
              <li><Link to="/recruitment" className="text-gray-300 hover:text-[#F37021] transition-colors">Recruitment</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#F37021] transition-colors">Contact</Link></li>
            </ul>
          </div>

          
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <p className="text-gray-400 text-sm">
              Copyright © Alfrexcosa 2026
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <SocialIcon
                url="https://www.linkedin.com/company/alfrexco-pty-ltd/"
                style={{ height: 32, width: 32 }}
                className="hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-3 gap-y-2 text-sm text-gray-400">
            <a
              href="https://www.afiswitch.com/wp-content/uploads/2022/03/Afiswitch-Privacy-Notice-23-March-2022.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F37021] transition-colors"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <Link
              to="/terms-of-service"
              className="hover:text-[#F37021] transition-colors"
            >
              Terms of Service
            </Link>
            <span>|</span>
            <a
              href="https://www.afiswitch.com/wp-content/uploads/2022/03/Afiswitch-New-PAIA-Manual-23-March-2022.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F37021] transition-colors"
            >
              PAIA Manual
            </a>
            <span>|</span>
            <a
              href="https://www.afiswitch.com/wp-content/uploads/2022/03/Afiswitch-com-Cookie-Policy-23-March-2022.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F37021] transition-colors"
            >
              Cookie Policy
            </a>
            <span>|</span>
            <a
              href="https://www.afiswitch.com/wp-content/uploads/2022/03/Afiswitch-Email-Disclaimer-23-March-2022.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F37021] transition-colors"
            >
              Email Disclaimer
            </a>
            <span>|</span>
            <a
              href="https://www.afiswitch.com/wp-content/uploads/2022/03/Data-Subject-Participation-23-March-2022.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F37021] transition-colors"
            >
              Data Subject Participation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
