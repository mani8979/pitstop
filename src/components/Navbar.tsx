"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <Image src="/assets/image.png" alt="PITSTOP Logo" width={40} height={40} className="object-cover" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">PITSTOP</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-pitstop-red transition-colors text-sm font-medium uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="tel:+96877403001"
              className="flex items-center gap-2 bg-pitstop-red text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition-all shadow-lg hover:shadow-pitstop-red/30"
            >
              <Phone size={18} />
              Call Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-pitstop-red transition-colors p-2"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full border-t border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-white hover:text-pitstop-red hover:bg-white/5 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="tel:+96877403001"
              className="flex items-center justify-center gap-2 w-full mt-4 bg-pitstop-red text-white px-5 py-3 rounded-md font-semibold"
            >
              <Phone size={18} />
              +968 7740 3001
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
