'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitMessage('Thank you! We will contact you shortly with a quote.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          details: '',
        });

        setTimeout(() => {
          setSubmitMessage('');
          onClose();
        }, 2000);
      } else {
        throw new Error('Failed to send quote request');
      }
    } catch (error) {
      setIsSubmitting(false);
      setSubmitMessage('Error sending request. Please try again or contact us directly.');
      setTimeout(() => setSubmitMessage(''), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-primary text-white px-6 py-5 flex items-center justify-between rounded-t-lg z-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Request a Quote</h2>
            <p className="text-sm text-white/80 mt-1">Fill out the form and we'll get back to you within 24 hours</p>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-white/20 p-2 rounded-full transition-colors flex-shrink-0 ml-4"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="modal-name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="modal-name"
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
            <label htmlFor="modal-email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="modal-email"
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
            <label htmlFor="modal-phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="modal-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="+254 XXX XXX XXX"
            />
          </div>

          {/* Service */}
          <div>
            <label htmlFor="modal-service" className="block text-sm font-semibold text-gray-700 mb-2">
              Service Required *
            </label>
            <select
              id="modal-service"
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

          {/* Details */}
          <div>
            <label htmlFor="modal-details" className="block text-sm font-semibold text-gray-700 mb-2">
              Project Details *
            </label>
            <textarea
              id="modal-details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              placeholder="Tell us about your project requirements..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-lg transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Request'}
          </button>

          {/* Success/Error Message */}
          {submitMessage && (
            <div className={`${submitMessage.includes('Error') ? 'bg-red-100 border-red-400 text-red-700' : 'bg-green-100 border-green-400 text-green-700'} border px-4 py-3 rounded-lg text-center`}>
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}