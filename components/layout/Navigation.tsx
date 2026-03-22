'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import QuoteModal from '@/components/ui/QuoteModal';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Raicha Electrical Contractors"
                width={200}
                height={60}
                className="h-16 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href='/contact'
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors"
              >
                REQUEST A QUOTE
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col space-y-1.5"
            >
              <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-gray-200 mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-sm font-semibold text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href='/contact'
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className="block w-full mt-4 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full text-sm font-semibold text-center transition-colors"
              >
                REQUEST A QUOTE
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}