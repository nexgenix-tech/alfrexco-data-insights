
import { Helmet } from "react-helmet-async";
import { Shield, IdCard, Clock } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Terms of Service - Alfrexco SA</title>
        <meta name="description" content="Terms of Service for Alfrexco SA's data verification and identity services. Read our terms and conditions for using our platform." />
        <meta name="keywords" content="terms of service, terms and conditions, data verification, identity services, Alfrexco SA" />
        <meta property="og:title" content="Terms of Service - Alfrexco SA" />
        <meta property="og:description" content="Terms of Service for Alfrexco SA's data verification and identity services." />
        <meta name="twitter:title" content="Terms of Service - Alfrexco SA" />
        <meta name="twitter:description" content="Terms of Service for Alfrexco SA's data verification and identity services." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Effective Date: January 1, 2025 | Last Updated: January 27, 2025
          </p>
        </div>

        {/* Compliance Badges */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-[#F37021]" />
              <span className="font-medium">Secure Data Handling</span>
            </div>
            <div className="flex items-center space-x-2">
              <IdCard className="h-6 w-6 text-[#F37021]" />
              <span className="font-medium">Official Verification Sources</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-6 w-6 text-[#F37021]" />
              <span className="font-medium">24-Hour Record Refresh Rates</span>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using the services provided by Alfrexco SA ("Company," "we," "us," or "our"), you ("User," "you," or "your") agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">2. Description of Services</h2>
            <p className="text-gray-700 mb-4">
              Alfrexco SA provides comprehensive data verification and identity services including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Identity and document verification services</li>
              <li>Live photo verification against official database records</li>
              <li>Credit and financial status verification</li>
              <li>Property ownership and registration verification</li>
              <li>Company registration and directorship verification</li>
              <li>Unclaimed benefits tracing services</li>
              <li>Access to comprehensive databases covering millions of records</li>
              <li>API access for enterprise clients</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">3. User Obligations</h2>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">3.1 Authorized Use</h3>
            <p className="text-gray-700 mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You must:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Have proper authorization to request verification services</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Respect the privacy and rights of individuals</li>
              <li>Use data only for the purposes for which it was requested</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">3.2 Prohibited Activities</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Using our services for fraudulent or illegal activities</li>
              <li>Attempting to circumvent security measures</li>
              <li>Sharing access credentials with unauthorized parties</li>
              <li>Reverse engineering or attempting to extract our databases</li>
              <li>Using data for unsolicited marketing or spam</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">4. Data Sources and Accuracy</h2>
            <p className="text-gray-700 mb-4">
              Our services utilize data from various official sources including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Department of Home Affairs</li>
              <li>National Immigration Information System (NIIS)</li>
              <li>Deeds Office property records</li>
              <li>CIPC company registration database</li>
              <li>Credit bureaus and financial institutions</li>
              <li>Masters Office records</li>
            </ul>
            <p className="text-gray-700">
              While we strive for accuracy and update our records every 24 hours, we cannot guarantee the completeness or absolute accuracy of all data. Users should verify critical information through multiple sources when making important decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">5. Payment Terms</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Fees are charged according to our published rate card</li>
              <li>Payment is due within 30 days of invoice date</li>
              <li>Late payments may incur interest charges</li>
              <li>Services may be suspended for overdue accounts</li>
              <li>All fees are exclusive of VAT unless otherwise stated</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">6. Privacy and Data Protection</h2>
            <p className="text-gray-700">
              We are committed to protecting your privacy and personal information in accordance with the Protection of Personal Information Act (POPIA) and our Privacy Policy. By using our services, you consent to the collection, use, and disclosure of information as described in our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content, software, databases, and technology used in our services are owned by Alfrexco SA or our licensors and are protected by intellectual property laws. You may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Copy, modify, or distribute our proprietary technology</li>
              <li>Create derivative works based on our services</li>
              <li>Use our trademarks or branding without permission</li>
              <li>Attempt to extract or reverse engineer our databases</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, Alfrexco SA shall not be liable for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Decisions made based on our verification results</li>
              <li>Temporary service interruptions or downtime</li>
              <li>Third-party data inaccuracies</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Our total liability shall not exceed the amount paid by you for our services in the 12 months preceding the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">9. Service Availability</h2>
            <p className="text-gray-700">
              We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service. We may temporarily suspend services for maintenance, upgrades, or other operational reasons. We will provide reasonable notice of planned maintenance when possible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">10. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your access to our services at any time for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Violation of these Terms of Service</li>
              <li>Non-payment of fees</li>
              <li>Fraudulent or illegal use of our services</li>
              <li>Any reason with 30 days' notice</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">11. Governing Law</h2>
            <p className="text-gray-700">
              These Terms shall be governed by and construed in accordance with the laws of South Africa. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the South African courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">12. Contact Information</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@alfrexcosa.co.za</p>
                <p><strong>Phone:</strong> +27 10 023 0576</p>
                <p><strong>Address:</strong> Suite 205, Block 2, Monument Office Park, 79 Steenbok Avenue, Pretoria</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">13. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or through our website. Continued use of our services after changes constitutes acceptance of the modified Terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
