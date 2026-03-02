import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">RAICHA</h3>
            <p className="text-gray-400 text-sm">
              Powering East Africa's Infrastructure Since 1994
            </p>
            <div className="mt-4">
              <p className="text-gray-400 text-sm">ISO 9001 Certified</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Electrical Infrastructure & Power Distribution</li>
              <li>Backup Power & Energy Solutions</li>
              <li>Industrial Fabrication & Control Systems</li>
              <li>ICT & Structured Cabling</li>
              <li>Medical & Environmental Systems</li>
              <li>Security, Fire Safety & Access Control</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 Nairobi, Kenya</li>
              <li>📧 info@raicha.com</li>
              <li>📞 +254 XXX XXX XXX</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary-dark px-4 py-2 rounded text-sm font-semibold transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Raicha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}