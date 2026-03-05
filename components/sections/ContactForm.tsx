'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitMessage('Thank you! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        });
        
        setTimeout(() => setSubmitMessage(''), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setIsSubmitting(false);
      setSubmitMessage('Error sending message. Please try again or contact us directly.');
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="+254 XXX XXX XXX"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="electrical-infrastructure">Electrical Infrastructure & Power Distribution</option>
                  <option value="backup-power">Backup Power & Energy Solutions</option>
                  <option value="industrial-fabrication">Industrial Fabrication & Control Systems</option>
                  <option value="ict-cabling">ICT & Structured Cabling</option>
                  <option value="medical-environmental">Medical & Environmental Systems</option>
                  <option value="security-fire">Security, Fire Safety & Access Control</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-lg transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Success Message */}
              {submitMessage && (
                <div className={`${submitMessage.includes('Error') ? 'bg-red-100 border-red-400 text-red-700' : 'bg-green-100 border-green-400 text-green-700'} border px-4 py-3 rounded-lg`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:pl-12 animate-fade-in delay-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-8">
              Reach out to us directly through any of these channels.
            </p>

            <div className="space-y-6">
              {/* Head Office - Kisumu */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">HEAD OFFICE - Kisumu</h3>
                  <p className="text-gray-600">Union House, Gor Mahia Street</p>
                  <p className="text-gray-600">P.O Box 898, 40100</p>
                  <p className="text-gray-600">Kisumu, Kenya</p>
                </div>
              </div>

              {/* Nairobi Office */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">NAIROBI OFFICE</h3>
                  <p className="text-gray-600">Engineering House, 13 Dunga Close</p>
                  <p className="text-gray-600">Off Dunga Road, Industrial Area</p>
                  <p className="text-gray-600">P.O Box 62256, 00100</p>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone Numbers</h3>
                  <p className="text-gray-600">Kisumu: (057) 2026188/9</p>
                  <p className="text-gray-600">Nairobi: (020) 554261</p>
                </div>
              </div>

              {/* Fax */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Fax Numbers</h3>
                  <p className="text-gray-600">Kisumu: (057) 2026187</p>
                  <p className="text-gray-600">Nairobi: (020) 554261</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Address</h3>
                  <p className="text-gray-600">res@raicha.com</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 bg-primary/10 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-600 text-sm mb-2">
                For urgent electrical issues and emergencies:
              </p>
              <p className="text-primary font-bold text-xl">(057) 2026188/9</p>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-16 animate-fade-in delay-400">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Find Us on the Map
          </h2>
          <div className="rounded-lg overflow-hidden shadow-xl h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.744039403621!2d34.751229!3d-0.091702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa44ee11a8685%3A0x54ad52b9c1a7661!2sWQ23%2BJ8%20Kisumu!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Raicha Head Office Location - Kisumu"
            ></iframe>
          </div>
          <p className="text-center text-gray-600 mt-4 text-sm">
            Our head office in Kisumu - Click on the map to get directions
          </p>
        </div>
      </div>
    </section>
  );
}