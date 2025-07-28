
import { useState } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      // Add to Brevo newsletter list (Alfrexco Newsletter - List ID #6)
      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': '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',
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          listIds: [6] // Alfrexco Newsletter list
        })
      });

      console.log('Newsletter subscription:', response.ok);

      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });

      setEmail("");
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: "Error",
        description: "There was an error subscribing. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-white mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/alfrexco_mini.png" 
              alt="Alfrexco SA" 
              className="h-16 w-auto mb-4"
              
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

          {/* Newsletter */}
          <div id="newsletter">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest industry insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#F37021]"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#F37021] text-white px-4 py-2 rounded-md hover:bg-[#E5651C] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <p className="text-gray-400 text-sm">
              © 2025 Alfrexco SA. All rights reserved.
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
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-[#F37021] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-[#F37021] text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
