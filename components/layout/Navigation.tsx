'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <>
      <nav 
        className={`
          fixed w-full top-0 z-50 transition-all duration-300
          ${isScrolled 
            ? 'glass ghost-border' 
            : 'bg-transparent'
          }
        `}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/logo.png"
                alt="Raicha Electrical Contractors"
                width={180}
                height={54}
                className="h-12 lg:h-14 w-auto transition-all duration-300 group-hover:opacity-90"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-label-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <Button href="/contact" size="md">
                REQUEST QUOTE
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col space-y-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden glass mt-2 overflow-hidden animate-fade-in">
              <div className="py-3 px-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block py-2.5 px-4 text-label-sm font-medium text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-3 pb-1">
                  <Button
                    href="/contact"
                    size="md"
                    className="w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    REQUEST QUOTE
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}