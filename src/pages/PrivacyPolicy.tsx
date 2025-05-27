
import { Helmet } from "react-helmet-async";
import { Shield, IdCard, Clock } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Privacy Policy - Alfrexco SA</title>
        <meta name="description" content="Alfrexco SA's comprehensive privacy policy detailing how we collect, use, and protect your personal information in compliance with POPIA." />
        <meta name="keywords" content="privacy policy, POPIA compliance, data protection, personal information, Alfrexco SA" />
        <meta property="og:title" content="Privacy Policy - Alfrexco SA" />
        <meta property="og:description" content="Learn about our privacy practices and how we protect your personal information." />
        <meta name="twitter:title" content="Privacy Policy - Alfrexco SA" />
        <meta name="twitter:description" content="Learn about our privacy practices and how we protect your personal information." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Effective Date: January 1, 2025 | Last Updated: January 27, 2025
          </p>
        </div>

        {/* Compliance Badges */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-[#F37021]" />
              <span className="font-medium">POPIA Compliant</span>
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
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Alfrexco SA ("we," "our," or "us") is committed to protecting your privacy and ensuring the secure handling of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our data verification and identity services.
            </p>
            <p className="text-gray-700">
              We are fully compliant with the Protection of Personal Information Act (POPIA) and other applicable data protection laws in South Africa.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">2.1 Personal Information</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Identity numbers and verification documents</li>
              <li>Contact information (name, email, phone number, address)</li>
              <li>Biometric data (photos for verification purposes)</li>
              <li>Financial information for credit checks and verification</li>
              <li>Property ownership and registration details</li>
              <li>Company registration and directorship information</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">2.2 Technical Information</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>IP addresses and device information</li>
              <li>Browser type and version</li>
              <li>Usage data and analytics</li>
              <li>API access logs and timestamps</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Identity and document verification services</li>
              <li>Live photo verification against database records</li>
              <li>Credit and financial status verification</li>
              <li>Property ownership verification</li>
              <li>Company registration and directorship verification</li>
              <li>Fraud prevention and security measures</li>
              <li>Service improvement and analytics</li>
              <li>Legal compliance and regulatory requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">4. Data Sources and Linkages</h2>
            <p className="text-gray-700 mb-4">
              We access and process information from various official sources including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Department of Home Affairs databases</li>
              <li>National Immigration Information System (NIIS)</li>
              <li>Deeds Office property records</li>
              <li>CIPC company registration database</li>
              <li>Credit bureaus and financial institutions</li>
              <li>Masters Office records</li>
              <li>Telecommunications providers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">5. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information. We may share information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>With your explicit consent</li>
              <li>To fulfill verification requests from authorized clients</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With trusted service providers under strict confidentiality agreements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">6. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>256-bit SSL encryption for data transmission</li>
              <li>Secure data centers with 24/7 monitoring</li>
              <li>Multi-factor authentication for system access</li>
              <li>Regular security audits and penetration testing</li>
              <li>Employee training on data protection protocols</li>
              <li>24-hour record refresh rates for data accuracy</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">7. Your Rights Under POPIA</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Right to access your personal information</li>
              <li>Right to correction of inaccurate information</li>
              <li>Right to deletion of personal information</li>
              <li>Right to object to processing</li>
              <li>Right to data portability</li>
              <li>Right to lodge a complaint with the Information Regulator</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">8. Data Retention</h2>
            <p className="text-gray-700">
              We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, and resolve disputes. Verification records are typically retained for 7 years as required by South African financial regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">9. Contact Information</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                For any privacy-related questions or to exercise your rights, please contact our Data Protection Officer:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@alfrexcosa.co.za</p>
                <p><strong>Phone:</strong> +27 10 023 0576</p>
                <p><strong>Address:</strong> Suite 205, Block 2, Monument Office Park, 79 Steenbok Avenue, Pretoria</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
