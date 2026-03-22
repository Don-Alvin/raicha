'use client'
import { Phone, Mail, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-white py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left side - Contact info */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a 
              href="tel:0572026188" 
              className="flex items-center gap-1 hover:text-secondary transition-colors"
            >
              <Phone size={14} />
              <span>Kisumu: (057) 2026188/9</span>
            </a>
            <a 
              href="tel:020554261" 
              className="flex items-center gap-1 hover:text-secondary transition-colors"
            >
              <Phone size={14} />
              <span>Nairobi: (020) 554261</span>
            </a>
            <a 
              href="mailto:res@raicha.com" 
              className="flex items-center gap-1 hover:text-secondary transition-colors"
            >
              <Mail size={14} />
              <span>res@raicha.com</span>
            </a>
          </div>

          {/* Right side - Emergency service */}
          <div className="flex items-center gap-2 bg-primary px-4 py-1 rounded-full">
            <span className="animate-pulse">🚨</span>
            <span className="font-semibold">24/7 Emergency Service Available</span>
          </div>
        </div>
      </div>
    </div>
  );
}