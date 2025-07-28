import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Users, Star, TrendingUp, Award, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import DataAnimation from "../components/DataAnimation";

const Recruitment = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    potentialRole: "",
    experience: "",
    motivation: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add to Brevo recruitment list
      const contactResponse = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': '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',
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          attributes: {
            FIRSTNAME: formData.firstName,
            LASTNAME: formData.lastName,
            SMS: formData.phone,
            LINKEDIN: formData.linkedin,
            POTENTIAL_ROLE: formData.potentialRole,
            EXPERIENCE: formData.experience,
            MOTIVATION: formData.motivation
          },
          listIds: [8] // Recruitment list
        })
      });

      // Send notification email to HR
      const emailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': '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',
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          sender: {
            name: "Alfrexco Website",
            email: "noreply@alfrexcosa.co.za"
          },
          to: [{
            email: "info@alfrexcosa.co.za",
            name: "Alfrexco HR Team"
          }],
          subject: "New Recruitment Application",
          htmlContent: `
            <h2>New Recruitment Application</h2>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>LinkedIn:</strong> ${formData.linkedin}</p>
            <p><strong>Potential Role:</strong> ${formData.potentialRole}</p>
            <p><strong>Experience Level:</strong> ${formData.experience}</p>
            <p><strong>Motivation:</strong></p>
            <p>${formData.motivation}</p>
          `
        })
      });

      console.log('Recruitment form submitted:', contactResponse.ok, emailResponse.ok);

      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        linkedin: "",
        potentialRole: "",
        experience: "",
        motivation: ""
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Careers & Recruitment - Alfrexco SA</title>
        <meta name="description" content="Join the Alfrexco SA team. Explore career opportunities and submit your application to be part of South Africa's leading data solutions company." />
        <meta name="keywords" content="careers, jobs, recruitment, data analyst, software developer, business development, Alfrexco SA careers" />
        <meta property="og:title" content="Careers & Recruitment - Alfrexco SA" />
        <meta property="og:description" content="Join our team and be part of South Africa's leading data solutions company." />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Careers & Recruitment - Alfrexco SA" />
        <meta name="twitter:description" content="Join our team and be part of South Africa's leading data solutions company." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#2A2A2A] to-gray-900 text-white py-20 relative overflow-hidden">
          <DataAnimation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-6">
                Join Our <span className="text-[#F37021]">Team</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Be part of South Africa's leading data solutions company. We're looking for passionate, 
                innovative young professionals to join our growing team and shape the future of data verification.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Why Join Alfrexco SA?</h2>
              <p className="text-xl text-gray-600">
                Discover the opportunities that await you in our dynamic environment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-[#F37021] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Growth Opportunities</h3>
                <p className="text-gray-600">
                  Fast-track your career with continuous learning and advancement opportunities.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-[#F37021] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Innovation First</h3>
                <p className="text-gray-600">
                  Work with cutting-edge technology and be at the forefront of data innovation.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-[#F37021] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Collaborative Culture</h3>
                <p className="text-gray-600">
                  Join a supportive team environment that values collaboration and diversity.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-[#F37021] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Competitive Benefits</h3>
                <p className="text-gray-600">
                  Enjoy competitive compensation packages and comprehensive benefits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Express Your Interest</h2>
              <p className="text-xl text-gray-600">
                Tell us about yourself and how you'd like to contribute to our team
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="potentialRole" className="block text-sm font-medium text-gray-700 mb-2">
                      Potential Role of Interest *
                    </label>
                    <select
                      id="potentialRole"
                      name="potentialRole"
                      value={formData.potentialRole}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:border-transparent"
                    >
                      <option value="">Select a role</option>
                      <option value="Data Analyst">Data Analyst</option>
                      <option value="Software Developer">Software Developer</option>
                      <option value="Business Development">Business Development</option>
                      <option value="Customer Success">Customer Success</option>
                      <option value="Sales Representative">Sales Representative</option>
                      <option value="Marketing Specialist">Marketing Specialist</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Experience Level *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:border-transparent"
                    >
                      <option value="">Select experience level</option>
                      <option value="Entry Level (0-2 years)">Entry Level (0-2 years)</option>
                      <option value="Mid Level (2-5 years)">Mid Level (2-5 years)</option>
                      <option value="Senior Level (5+ years)">Senior Level (5+ years)</option>
                      <option value="Graduate/Student">Graduate/Student</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to join Alfrexco SA? *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your motivation, skills, and what you can bring to our team..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:border-transparent"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#F37021] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#E5651C] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Application'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Recruitment;