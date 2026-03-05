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
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
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
            <div className="space-y-4 text-sm text-gray-400">
              {/* Head Office */}
              <div>
                <p className="font-semibold text-white mb-1">HEAD OFFICE - Kisumu</p>
                <p>Union House, Gor Mahia Street</p>
                <p>P.O Box 898, 40100</p>
                <p>Kisumu, Kenya</p>
                <p className="mt-1">Tel: (057) 2026188/9</p>
                <p>Fax: (057) 2026187</p>
              </div>

              {/* Nairobi Office */}
              <div>
                <p className="font-semibold text-white mb-1">NAIROBI OFFICE</p>
                <p>Engineering House, 13 Dunga Close</p>
                <p>Off Dunga Road, Industrial Area</p>
                <p>P.O Box 62256, 00100</p>
                <p>Nairobi, Kenya</p>
                <p className="mt-1">Tel: (020) 554261</p>
                <p>Fax: (020) 554261</p>
              </div>

              <div>
                <p className="font-semibold text-white mb-1">Email</p>
                <p>res@raicha.com</p>
              </div>
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