
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import DataAnimation from "../components/DataAnimation";
import { Helmet } from "react-helmet-async";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    requestAppointment: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add contact to Brevo list (Alfrexco Leads - List ID #7)
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
            FIRSTNAME: formData.name,
            COMPANY: formData.company,
            SMS: formData.phone
          },
          listIds: [7] // Alfrexco Leads list
        })
      });

      // Send email notification using Brevo SMTP
      const emailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': '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',
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          sender: {
            name: 'Alfrexco Website',
            email: '870a85001@smtp-brevo.com'
          },
          to: [{
            email: 'clientservices@alfrexcosa.co.za',
            name: 'Alfrexco Team'
          }],
          subject: 'New Contact Form Submission',
          htmlContent: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
            <p><strong>Request Appointment:</strong> ${formData.requestAppointment ? 'Yes' : 'No'}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message}</p>
          `
        })
      });

      console.log('Contact added to Brevo:', contactResponse.ok);
      console.log('Email sent:', emailResponse.ok);

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. We'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        requestAppointment: false
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Alfrexco</title>
        <meta name="description" content="Get in touch with Alfrexco for data verification and identity solutions. Contact our team in Pretoria for consultations and appointments." />
        <meta name="keywords" content="contact Alfrexco, data verification contact, Pretoria office, consultation, appointment booking" />
        <meta property="og:title" content="Contact Us - Alfrexco" />
        <meta property="og:description" content="Ready to transform your data strategy? Get in touch with our team to discuss your verification and data needs." />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Contact Us - Alfrexco" />
        <meta name="twitter:description" content="Ready to transform your data strategy? Get in touch with our team to discuss your verification and data needs." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section with increased opacity */}
        <section className="bg-gradient-to-br from-[#2A2A2A] to-gray-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <DataAnimation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-6">
                Contact <span className="text-[#F37021]">Us</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Ready to transform your data strategy? Get in touch with our team 
                to discuss your verification and data needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:border-transparent"
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="requestAppointment"
                      name="requestAppointment"
                      checked={formData.requestAppointment}
                      onChange={handleChange}
                      className="h-4 w-4 text-[#F37021] focus:ring-[#F37021] border-gray-300 rounded"
                    />
                    <label htmlFor="requestAppointment" className="ml-2 block text-sm text-gray-700">
                      Request Appointment
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F37021] text-white px-6 py-3 rounded-md font-medium hover:bg-[#E5651C] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-gray-600 mb-8">
                    We're here to help you transform your data strategy. 
                    Contact us today to learn more about our services.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">Phone</h3>
                      <p className="text-gray-600">+27 10 023 0576</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">Email</h3>
                      <p className="text-gray-600">clientservices@alfrexcosa.co.za</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#F37021] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">Address</h3>
                      <p className="text-gray-600">
                        Suite 205, Block 2<br />
                        Monument Office Park<br />
                        79 Steenbok Avenue, Pretoria
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interactive Map */}
                <div className="rounded-lg overflow-hidden" style={{maxWidth: '100%', width: '500px', height: '250px'}}>
                  <div id="embed-map-canvas" style={{height: '100%', width: '100%', maxWidth: '100%'}}>
                    <iframe 
                      style={{height: '100%', width: '100%', border: '0'}} 
                       
                      src="https://www.google.com/maps/embed/v1/place?q=ekhaya+search&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                      title="Alfrexco Office Location"
                    />
                  </div>
                  <a 
                    className="embed-map-html" 
                    rel="nofollow" 
                    href="https://www.bootstrapskins.com/themes" 
                    id="authmaps-data" 
                    style={{display: 'none'}}
                  >
                    premium bootstrap themes
                  </a>
                  <style dangerouslySetInnerHTML={{
                    __html: `#embed-map-canvas img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}`
                  }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Business Hours</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Clock className="w-8 h-8 text-[#F37021] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Weekdays</h3>
                  <p className="text-gray-600">Monday - Friday<br />8:00 AM - 5:00 PM</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Clock className="w-8 h-8 text-[#F37021] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Saturday</h3>
                  <p className="text-gray-600">9:00 AM - 1:00 PM</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Clock className="w-8 h-8 text-[#F37021] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Sunday</h3>
                  <p className="text-gray-600">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
