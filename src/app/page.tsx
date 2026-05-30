"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Wrench, 
  Settings, 
  Battery, 
  Thermometer, 
  Gauge, 
  Car,
  ShieldCheck,
  Zap,
  CheckCircle2,
  PhoneCall
} from "lucide-react";
import Image from "next/image";

const services = [
  { name: "Steering & Suspension", icon: <Settings className="w-8 h-8 text-pitstop-red" /> },
  { name: "Tyre Services", icon: <Car className="w-8 h-8 text-pitstop-red" /> },
  { name: "Electrical Repairs", icon: <Zap className="w-8 h-8 text-pitstop-red" /> },
  { name: "Battery Replacement", icon: <Battery className="w-8 h-8 text-pitstop-red" /> },
  { name: "Oil Change", icon: <Wrench className="w-8 h-8 text-pitstop-red" /> },
  { name: "Air & Cabin Filter", icon: <Thermometer className="w-8 h-8 text-pitstop-red" /> },
  { name: "AC Service & Repair", icon: <Thermometer className="w-8 h-8 text-pitstop-red" /> },
  { name: "Engine Diagnostics", icon: <Gauge className="w-8 h-8 text-pitstop-red" /> },
  { name: "Brake Service", icon: <ShieldCheck className="w-8 h-8 text-pitstop-red" /> },
  { name: "Exhaust Repair", icon: <Wrench className="w-8 h-8 text-pitstop-red" /> },
  { name: "Transmission Service", icon: <Settings className="w-8 h-8 text-pitstop-red" /> },
  { name: "Periodic Maintenance", icon: <CheckCircle2 className="w-8 h-8 text-pitstop-red" /> },
];

const features = [
  "Certified Technicians",
  "Advanced Diagnostic Equipment",
  "Genuine Parts",
  "Transparent Pricing",
  "Fast Turnaround",
  "Customer Satisfaction Focus"
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/Ferrari_self-assembling_in_factory_202605301329.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold font-outfit text-white mb-6"
          >
            Your Trusted Automotive <span className="text-pitstop-red">Service Partner</span> in Sohar
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Expert Repairs, Diagnostics & Maintenance for All Vehicle Brands.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              href="/contact"
              className="px-8 py-4 bg-pitstop-red text-white font-bold rounded-md hover:bg-red-700 transition-all text-lg w-full sm:w-auto text-center shadow-[0_0_20px_rgba(230,0,0,0.4)]"
            >
              Book Service
            </Link>
            <Link 
              href="tel:+96877403001"
              className="px-8 py-4 glass text-white font-bold rounded-md hover:bg-white/10 transition-all text-lg w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <PhoneCall size={20} />
              Call Now
            </Link>
          </motion.div>
        </div>

        {/* WhatsApp Button to cover watermark */}
        <a 
          href="https://wa.me/96877403001"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute z-30 bottom-8 right-[80px] bg-[#25D366] text-white p-3 rounded-full hover:bg-[#128C7E] transition-colors shadow-lg flex items-center gap-2 group"
          title="Chat with us on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span className="font-semibold px-2 whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[150px] transition-all duration-300">WhatsApp Us</span>
        </a>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-pitstop-charcoal border-y border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "98+", label: "Happy Customers" },
            { value: "4.9/5", label: "Star Rating" },
            { value: "Expert", label: "Technicians" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-pitstop-red mb-2">{stat.value}</h3>
              <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-pitstop-dark relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pitstop-red/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">Our <span className="text-pitstop-red">Services</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Comprehensive automotive care tailored for luxury and standard vehicles. We bring dealership-level expertise to your doorstep.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-6 flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-pitstop-red/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <Link href="/services" className="text-pitstop-red text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity mt-2 flex items-center gap-1">
                  Learn more <span className="text-lg">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-pitstop-charcoal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">Why Choose <span className="text-pitstop-red">PITSTOP?</span></h2>
              <p className="text-gray-400 text-lg mb-8">
                We are committed to delivering the highest quality automotive repair and maintenance services in Sohar. Our state-of-the-art facility and experienced team ensure your vehicle is in the best hands.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-pitstop-red w-6 h-6 flex-shrink-0" />
                    <span className="text-gray-200 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link href="/about" className="px-6 py-3 border border-pitstop-red text-pitstop-red hover:bg-pitstop-red hover:text-white transition-colors rounded-md font-medium inline-block">
                  Discover Our Story
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <div className="w-full h-full bg-pitstop-gray flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
