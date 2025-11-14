"use client";
import {
  Phone,
  Mail,
  Linkedin,
  Instagram,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0e27] w-full overflow-hidden py-20 md:py-28">
      {/* Background watermark */}
      <h1 className="absolute inset-0 text-[#eeda03]/10 text-[8rem] md:text-[14rem] font-extrabold font-geist text-center pointer-events-none select-none leading-none">
        TheEventCleaners
      </h1>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <h3 className="text-[#eeda03] text-3xl font-medium font-geist mb-3">
              TheEventCleaners
            </h3>
            <p className="text-gray-400 font-geist leading-relaxed max-w-xs">
              Toronto’s most trusted event and plaza cleaning service. From
              Caribana to Pride, we keep Toronto spotless.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold font-geist mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Get a Quote", href: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 font-geist hover:text-[#eeda03] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold font-geist mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Event Cleaning", href: "/services#event-cleaning" },
                { label: "Parking Lot Cleaning", href: "/services#parking-lot" },
                { label: "Pressure Washing", href: "/services#pressure-washing" },
                { label: "Snow Removal", href: "/services#snow-removal" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 font-geist hover:text-[#eeda03] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-semibold font-geist mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-gray-400 font-geist">
              <li className="flex items-center gap-3 hover:text-[#eeda03] transition-colors">
                <Phone className="w-4 h-4" />
                <a href="tel:416-XXX-XXXX">(416) XXX-XXXX</a>
              </li>
              <li className="flex items-center gap-3 hover:text-[#eeda03] transition-colors">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@theeventcleaners.ca">
                  hello@theeventcleaners.ca
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-[#eeda03] transition-colors">
                <MapPin className="w-4 h-4" />
                <span>Toronto, ON</span>
              </li>
              <li className="flex gap-4 pt-4">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:text-[#eeda03] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-[#eeda03] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm font-geist text-center md:text-left">
              © 2026 TheEventCleaners — Making Toronto shine, one event at a time.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 text-sm font-geist hover:text-[#eeda03] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 text-sm font-geist hover:text-[#eeda03] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
