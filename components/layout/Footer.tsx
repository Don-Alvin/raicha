import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-on-background pt-section pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-display-sm font-bold text-white">RAICHA</h3>
            <p className="text-body-sm text-white leading-relaxed">
              Powering East Africa's Infrastructure Since 1994
            </p>
            <div className="pt-2">
              <span className="text-label-sm text-primary border-l-2 border-primary pl-3">
                ISO 9001 Certified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-label-md font-semibold text-white mb-6 tracking-wide">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Projects', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '')}`}
                    className="text-body-sm text-white hover:text-primary transition-colors duration-200 block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-label-md font-semibold text-white mb-6 tracking-wide">
              OUR SERVICES
            </h4>
            <ul className="space-y-3">
              {[
                'Electrical Infrastructure & Power Distribution',
                'Backup Power & Energy Solutions',
                'Industrial Fabrication & Control Systems',
                'ICT & Structured Cabling',
                'Medical & Environmental Systems',
                'Security, Fire Safety & Access Control',
              ].map((service) => (
                <li key={service} className="text-body-sm text-white">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-label-md font-semibold text-white mb-6 tracking-wide">
              CONTACT
            </h4>
            <div className="space-y-6">
              {/* Head Office */}
              <div>
                <p className="text-label-sm font-semibold text-white mb-2">HEAD OFFICE — KISUMU</p>
                <address className="text-body-sm text-white not-italic space-y-1">
                  <p>Union House, Gor Mahia Street</p>
                  <p>P.O Box 898, 40100</p>
                  <p>Kisumu, Kenya</p>
                  <p className="mt-2">Tel: (057) 2026188/9</p>
                  <p>Fax: (057) 2026187</p>
                </address>
              </div>

              {/* Nairobi Office */}
              <div>
                <p className="text-label-sm font-semibold text-white mb-2">NAIROBI OFFICE</p>
                <address className="text-body-sm text-white not-italic space-y-1">
                  <p>Engineering House, 13 Dunga Close</p>
                  <p>Off Dunga Road, Industrial Area</p>
                  <p>P.O Box 62256, 00100</p>
                  <p>Nairobi, Kenya</p>
                  <p className="mt-2">Tel: (020) 554261</p>
                  <p>Fax: (020) 554261</p>
                </address>
              </div>

              {/* Email */}
              <div>
                <p className="text-label-sm font-semibold text-white mb-2">EMAIL</p>
                <a
                  href="mailto:res@raicha.com"
                  className="text-body-sm text-white hover:text-primary transition-colors duration-200"
                >
                  res@raicha.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - No border line, using tonal separation */}
        <div className="mt-12 pt-8 text-center">
          <p className="text-body-sm text-on-surface-variant">
            &copy; {currentYear} Raicha Electro Service. Industrial Excellence Defined.
          </p>
        </div>
      </div>
    </footer>
  );
}