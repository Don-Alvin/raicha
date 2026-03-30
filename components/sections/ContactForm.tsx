'use client';

import { useState } from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import Overline from '@/components/ui/Overline';
import Button from '@/components/ui/Button';

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
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: ''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: '', text: ''})
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json()

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitMessage({
          type: 'success',
          text: 'Thank you! We have recieved your message and we will get back to you soon.'
      });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitMessage({type: 'error',
        text: 'Error sending message. Please try again or contact us directly.'
    });
    }finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage({type: '', text: ''}), 5000)
    }
  };

  return (
    <SectionContainer background="surface" spacing="large">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Form */}
        <div className="animate-fade-in">
          <h2 className="text-display-sm font-bold text-on-background mb-4">
            Get In Touch
          </h2>
          <p className="text-body-md text-on-surface-variant mb-8">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-label-sm font-semibold text-on-background mb-2">
                FULL NAME *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-surface-container-lowest border-0 focus:outline-none focus:ring-1 focus:ring-primary text-on-background placeholder:text-on-surface-variant/50"
                placeholder="John Doe"
              />
              <div className="h-0.5 bg-outline/15 mt-1"></div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-label-sm font-semibold text-on-background mb-2">
                EMAIL ADDRESS *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-surface-container-lowest border-0 focus:outline-none focus:ring-1 focus:ring-primary text-on-background placeholder:text-on-surface-variant/50"
                placeholder="john@example.com"
              />
              <div className="h-0.5 bg-outline/15 mt-1"></div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-label-sm font-semibold text-on-background mb-2">
                PHONE NUMBER *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-surface-container-lowest border-0 focus:outline-none focus:ring-1 focus:ring-primary text-on-background placeholder:text-on-surface-variant/50"
                placeholder="+254 XXX XXX XXX"
              />
              <div className="h-0.5 bg-outline/15 mt-1"></div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-label-sm font-semibold text-on-background mb-2">
                COMPANY NAME
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface-container-lowest border-0 focus:outline-none focus:ring-1 focus:ring-primary text-on-background placeholder:text-on-surface-variant/50"
                placeholder="Industrial Corp Ltd."
              />
              <div className="h-0.5 bg-outline/15 mt-1"></div>
            </div>

            {/* Industry Sector / Service */}
            <div>
              <label htmlFor="service" className="block text-label-sm font-semibold text-on-background mb-2">
                INDUSTRY SECTOR *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-surface-container-lowest border-0 focus:outline-none focus:ring-1 focus:ring-primary text-on-background appearance-none cursor-pointer"
              >
                <option value="">Select a service</option>
                <option value="commercial-electrical">Commercial Electrical</option>
                <option value="residential-electrical">Residential Electrical</option>
                <option value="industrial-electrical">Industrial Electrical</option>
                <option value="electrical-repairs">Electrical Repairs</option>
                <option value="lighting-installation">Lighting Installation</option>
                <option value="electrical-upgrades">Electrical Upgrades</option>
                <option value="generator-installation">Generator Installation</option>
                <option value="emergency-services">Emergency Services</option>
                <option value="security-systems">Security Systems</option>
                <option value="other">Other</option>
              </select>
              <div className="h-0.5 bg-outline/15 mt-1"></div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-label-sm font-semibold text-on-background mb-2">
                MESSAGE / TECHNICAL REQUIREMENTS *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-surface-container-lowest border-0 focus:outline-none focus:ring-1 focus:ring-primary text-on-background placeholder:text-on-surface-variant/50 resize-none"
                placeholder="Describe your project scope..."
              />
              <div className="h-0.5 bg-outline/15 mt-1"></div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full"
            >
              {isSubmitting ? 'SENDING...' : 'SUBMIT REQUEST →'}
            </Button>

            {/* Success/Error Message */}
            {submitMessage.text && (
              <div className={`${
                submitMessage.type === 'error' 
                  ? 'bg-error/10 border-l-4 border-error text-error' 
                  : 'bg-green-100 border-l-4 border-green-500 text-green-700'
              } px-4 py-3`}>
                {submitMessage.text}
              </div>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className="animate-fade-in delay-200">
          <h2 className='text-display-sm font-bold text-on-background mb-4'>Contact Information</h2>
          <p className="text-on-background mb-4">
            Reach out to us directly through any of these channels.
          </p>
          <div className="space-y-8">
            {/* Head Office - Kisumu */}
            <div className="group hover-glow p-6 bg-surface-container-lowest transition-all duration-300">
              <h3 className="font-bold text-on-surface-variant mb-3">HEAD OFFICE — KISUMU</h3>
              <p className="text-body-md text-on-surface-variant">Union House, Gor Mahia Street</p>
              <p className="text-body-md text-on-surface-variant">P.O Box 898, 40100</p>
              <p className="text-body-md text-on-surface-variant">Kisumu, Kenya</p>
            </div>

            {/* Nairobi Office */}
            <div className="group hover-glow p-6 bg-surface-container-lowest transition-all duration-300">
              <h3 className="font-bold text-on-surface-variant mb-3">NAIROBI OFFICE</h3>
              <p className="text-body-md text-on-surface-variant">Engineering House, 13 Dunga Close</p>
              <p className="text-body-md text-on-surface-variant">Off Dunga Road, Industrial Area</p>
              <p className="text-body-md text-on-surface-variant">P.O Box 62256, 00100</p>
              <p className="text-body-md text-on-surface-variant">Nairobi, Kenya</p>
            </div>

            {/* Phone Numbers */}
            <div className="group hover-glow p-6 bg-surface-container-lowest transition-all duration-300">
              <h3 className="font-bold text-on-surface-variant mb-3">CONTACT NUMBERS</h3>
              <p className="text-body-md text-on-surface-variant">Kisumu: (057) 2026188/9</p>
              <p className="text-body-md text-on-surface-variant">Nairobi: (020) 554261</p>
              <p className="text-body-md text-on-surface-variant mt-2">Fax: (057) 2026187 / (020) 554261</p>
            </div>

            {/* Email */}
            <div className="group hover-glow p-6 bg-surface-container-lowest transition-all duration-300">
              <h3 className="font-bold text-on-surface-variant mb-3">EMAIL ADDRESS</h3>
              <a href="mailto:res@raicha.com" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">
                res@raicha.com
              </a>
            </div>
          </div>

          {/* Emergency Support */}
          <div className="mt-8 bg-primary p-8 text-center">
            <h3 className="text-headline-sm font-bold text-white mb-2">24/7 Emergency Support</h3>
            <p className="text-body-sm text-white/80 mb-4">
              Immediate technical intervention for grid failures or critical outages.
            </p>
            <p className="text-display-sm font-bold text-white">(057) 2026188/9</p>
          </div>

          {/* Rapid Response Standards */}
          <div className="mt-8 p-6 bg-surface-container-lowest">
            <h3 className="text-headline-sm font-bold text-on-background mb-2">Rapid Response Standards</h3>
            <p className="text-body-md text-on-surface-variant">
              We understand that downtime is not an option. Our 24/7 technical dispatch ensures critical failure 
              points are addressed within hours, not days.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}