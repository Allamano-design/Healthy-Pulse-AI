import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, Star, Activity, ShieldPlus, HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/landing/Footer';

const clinics = [
  {
    name: "Kenyatta National Hospital",
    type: "Public / Referral",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
    address: "Hospital Rd, Upper Hill",
    phone: "+254 20 2726300",
    hours: "24/7 Emergency",
    rating: 4.2,
    distance: "2.5 km",
    services: ["Specialist", "Surgery", "ICU"],
    color: "secondary"
  },
  {
    name: "Nairobi Hospital",
    type: "Private / Premium",
    image: "https://images.unsplash.com/photo-1586773860418-d3b979781a39?q=80&w=1000&auto=format&fit=crop",
    address: "Argwings Kodhek Rd",
    phone: "+254 20 2845000",
    hours: "24/7 Care",
    rating: 4.8,
    distance: "3.1 km",
    services: ["Diagnostics", "Maternity", "Pharmacy"],
    color: "primary"
  },
  {
    name: "Aga Khan University Hospital",
    type: "Private / Research",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=1000&auto=format&fit=crop",
    address: "3rd Parklands Avenue",
    phone: "+254 20 3662000",
    hours: "24/7 Service",
    rating: 4.9,
    distance: "5.0 km",
    services: ["Oncology", "Radiology", "Heart Center"],
    color: "primary"
  },
  {
    name: "MP Shah Hospital",
    type: "Private Hospital",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop",
    address: "Shivachi Rd, Parklands",
    phone: "+254 20 4291000",
    hours: "24/7 Emergency",
    rating: 4.5,
    distance: "5.2 km",
    services: ["Physiotherapy", "Dialysis", "Dental"],
    color: "secondary"
  },
  {
    name: "Karen Hospital",
    type: "Private Facility",
    image: "https://images.unsplash.com/photo-1538108197017-c1b89c0ef319?q=80&w=1000&auto=format&fit=crop",
    address: "Langata Rd, Karen",
    phone: "+254 703 073000",
    hours: "24/7 Open",
    rating: 4.4,
    distance: "12.0 km",
    services: ["Cardiac", "Wellness", "Emergency"],
    color: "primary"
  },
  {
    name: "Mater Misericordiae Hospital",
    type: "Faith-Based / Private",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1000&auto=format&fit=crop",
    address: "Dunga Rd, South B",
    phone: "+254 20 6903000",
    hours: "24/7 Care",
    rating: 4.3,
    distance: "4.8 km",
    services: ["Cardiac", "Counseling", "General"],
    color: "secondary"
  },
  {
    name: "Gertrude's Children's Hospital",
    type: "Pediatric Specialist",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1000&auto=format&fit=crop",
    address: "Muthaiga Rd",
    phone: "+254 20 7206000",
    hours: "24/7 Pediatrics",
    rating: 4.7,
    distance: "6.5 km",
    services: ["Pediatrics", "Vaccination", "ENT"],
    color: "primary"
  },
  {
    name: "Coptic Hospital",
    type: "Private Hospital",
    image: "https://images.unsplash.com/photo-1632833239867-a320f3e91407?q=80&w=1000&auto=format&fit=crop",
    address: "Ngong Rd",
    phone: "+254 20 2723222",
    hours: "24/7 Service",
    rating: 4.1,
    distance: "3.5 km",
    services: ["HIV Care", "Laboratory", "Pharmacy"],
    color: "secondary"
  },
  {
    name: "Metropolitan Hospital",
    type: "Private / Buruburu",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
    address: "Rabai Rd, Buruburu",
    phone: "+254 722 207667",
    hours: "24/7 Service",
    rating: 4.0,
    distance: "8.2 km",
    services: ["Dialysis", "Outpatient", "X-Ray"],
    color: "secondary"
  },
  {
    name: "Avenue Hospital",
    type: "Private / Parklands",
    image: "https://images.unsplash.com/photo-1519494083224-216641853546?q=80&w=1000&auto=format&fit=crop",
    address: "First Parklands Ave",
    phone: "+254 711 060000",
    hours: "24/7 Service",
    rating: 4.2,
    distance: "5.5 km",
    services: ["Maternity", "Home Care", "Laboratory"],
    color: "primary"
  }
  // Add more as needed to reach 20...
];

const Clinics = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* --- HERO HEADER --- */}
          <motion.div 
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/10 backdrop-blur-md px-6 py-2 mb-8 rounded-full border border-secondary/20">
              <HeartPulse className="w-4 h-4 text-secondary animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.4em] text-secondary uppercase">24/7 Rapid Response Network</span>
            </div>
            
            <h1 className="text-7xl md:text-[8rem] font-black tracking-tighter mb-8 uppercase leading-[0.85] italic">
              Care <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-500">
                Nexus
              </span>
            </h1>
            
            <p className="text-white/40 text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Find the fastest route to verified healthcare centers. Real-time access to Nairobi's medical elite.
            </p>
          </motion.div>

          {/* --- CLINICS GRID --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {clinics.map((clinic, i) => (
              <motion.div
                key={clinic.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i % 2 * 0.1 }}
                className="group relative bg-[#0a0f1e] rounded-[3rem] border border-white/5 overflow-hidden transition-all duration-500 hover:border-secondary/30"
              >
                {/* Image Section */}
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={clinic.image} 
                    alt={clinic.name} 
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
                  <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-black/50 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/10">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-black text-sm">{clinic.rating}</span>
                  </div>
                  <div className="absolute bottom-6 left-8">
                     <span className={`px-4 py-1.5 rounded-full bg-secondary/20 backdrop-blur-md border border-secondary/30 text-secondary text-[10px] font-black uppercase tracking-widest`}>
                      {clinic.type}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-10">
                  <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter group-hover:text-secondary transition-colors italic">
                    {clinic.name}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 mb-10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-white/50 text-sm">
                        <MapPin className="w-5 h-5 text-secondary" />
                        <span className="font-medium tracking-tight">{clinic.address}</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/50 text-sm">
                        <Phone className="w-5 h-5 text-secondary" />
                        <span className="font-medium tracking-tight">{clinic.phone}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-white/50 text-sm">
                        <Clock className="w-5 h-5 text-secondary" />
                        <span className="font-medium tracking-tight">{clinic.hours}</span>
                      </div>
                      <div className="flex items-center gap-3 text-secondary text-sm font-black">
                        <Navigation className="w-5 h-5" />
                        <span className="uppercase tracking-widest">{clinic.distance} AWAY</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {clinic.services.map((s) => (
                      <span key={s} className="text-[9px] font-black bg-white/5 border border-white/10 text-white/40 px-4 py-2 rounded-xl uppercase tracking-[0.1em] group-hover:text-white group-hover:bg-secondary/10 transition-all">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-white/5">
                    <Button variant="outline" className="flex-1 h-16 glass-card border-white/10 hover:bg-white/5 rounded-2xl font-black uppercase tracking-widest" asChild>
                      <a href={`tel:${clinic.phone}`}>Call</a>
                    </Button>
                    <Button className="flex-1 h-16 bg-secondary text-white font-black rounded-2xl shadow-[0_10px_30px_rgba(168,85,247,0.3)] hover:scale-[1.03] transition-all" asChild>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.name + ' ' + clinic.address)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Navigate
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Clinics;