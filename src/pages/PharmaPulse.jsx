import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Search, TrendingDown, Package, Zap, Info, MapPin, Navigation } from 'lucide-react';

// Layout Components
import Navbar from '../components/Navbar';
import Footer from '../components/landing/Footer';

const PharmaPulse = () => {
  const [searchTerm, setSearchTerm] = useState("");

const meds = [
  { name: "Lumefantrine", type: "Antimalarial", price: "KES 450 - 800", savings: "40% on Generic", status: "High Stock", trend: "stable" },
  { name: "Amoxicillin", type: "Antibiotic", price: "KES 200 - 400", savings: "25% on Generic", status: "Low Stock", trend: "up" },
  { name: "Paracetamol", type: "Pain Relief", price: "KES 50 - 150", savings: "10% on Generic", status: "In Stock", trend: "down" },
  { name: "Metformin", type: "Diabetes", price: "KES 300 - 600", savings: "30% on Generic", status: "High Stock", trend: "stable" },
  { name: "Cetirizine", type: "Antihistamine", price: "KES 100 - 250", savings: "15% on Generic", status: "In Stock", trend: "down" },

  { name: "Ibuprofen", type: "Pain Relief", price: "KES 80 - 200", savings: "20% on Generic", status: "In Stock", trend: "stable" },
  { name: "Aspirin", type: "Pain Relief", price: "KES 50 - 180", savings: "15% on Generic", status: "High Stock", trend: "down" },
  { name: "Diclofenac", type: "Pain Relief", price: "KES 50 - 350", savings: "20% on Generic", status: "High Stock", trend: "stable" },
  { name: "Tramadol", type: "Pain Relief", price: "KES 300 - 700", savings: "25% on Generic", status: "Low Stock", trend: "up" },

  { name: "Azithromycin", type: "Antibiotic", price: "KES 400 - 900", savings: "35% on Generic", status: "Low Stock", trend: "up" },
  { name: "Ciprofloxacin", type: "Antibiotic", price: "KES 300 - 700", savings: "30% on Generic", status: "In Stock", trend: "stable" },
  { name: "Doxycycline", type: "Antibiotic", price: "KES 250 - 600", savings: "25% on Generic", status: "High Stock", trend: "stable" },
  { name: "Clarithromycin", type: "Antibiotic", price: "KES 500 - 1000", savings: "30% on Generic", status: "Low Stock", trend: "up" },
  { name: "Erythromycin", type: "Antibiotic", price: "KES 300 - 800", savings: "25% on Generic", status: "In Stock", trend: "stable" },
  { name: "Ceftriaxone", type: "Antibiotic", price: "KES 600 - 1500", savings: "35% on Generic", status: "Low Stock", trend: "up" },

  { name: "Artemether", type: "Antimalarial", price: "KES 500 - 1000", savings: "40% on Generic", status: "In Stock", trend: "up" },
  { name: "Quinine", type: "Antimalarial", price: "KES 300 - 700", savings: "35% on Generic", status: "Low Stock", trend: "up" },
  { name: "Sulfadoxine-Pyrimethamine", type: "Antimalarial", price: "KES 200 - 500", savings: "30% on Generic", status: "High Stock", trend: "stable" },

  { name: "Albendazole", type: "Antiparasitic", price: "KES 150 - 350", savings: "20% on Generic", status: "High Stock", trend: "stable" },
  { name: "Mebendazole", type: "Antiparasitic", price: "KES 100 - 300", savings: "20% on Generic", status: "In Stock", trend: "down" },
  { name: "Ivermectin", type: "Antiparasitic", price: "KES 200 - 500", savings: "25% on Generic", status: "High Stock", trend: "stable" },

  { name: "Insulin", type: "Diabetes", price: "KES 800 - 2000", savings: "15% on Generic", status: "Low Stock", trend: "up" },
  { name: "Glibenclamide", type: "Diabetes", price: "KES 200 - 500", savings: "30% on Generic", status: "High Stock", trend: "stable" },
  { name: "Glimepiride", type: "Diabetes", price: "KES 300 - 700", savings: "25% on Generic", status: "In Stock", trend: "stable" },

  { name: "Loratadine", type: "Antihistamine", price: "KES 120 - 300", savings: "15% on Generic", status: "In Stock", trend: "down" },
  { name: "Chlorpheniramine", type: "Antihistamine", price: "KES 80 - 200", savings: "10% on Generic", status: "High Stock", trend: "stable" },
  { name: "Fexofenadine", type: "Antihistamine", price: "KES 200 - 500", savings: "20% on Generic", status: "In Stock", trend: "stable" },

  { name: "Omeprazole", type: "Ulcer Treatment", price: "KES 250 - 600", savings: "25% on Generic", status: "In Stock", trend: "stable" },
  { name: "Esomeprazole", type: "Ulcer Treatment", price: "KES 400 - 900", savings: "30% on Generic", status: "Low Stock", trend: "up" },
  { name: "Pantoprazole", type: "Ulcer Treatment", price: "KES 300 - 700", savings: "25% on Generic", status: "High Stock", trend: "stable" },

  { name: "Salbutamol", type: "Asthma", price: "KES 300 - 700", savings: "20% on Generic", status: "In Stock", trend: "stable" },
  { name: "Beclomethasone", type: "Asthma", price: "KES 500 - 1200", savings: "25% on Generic", status: "Low Stock", trend: "up" },
  { name: "Budesonide", type: "Asthma", price: "KES 600 - 1300", savings: "25% on Generic", status: "In Stock", trend: "stable" },

  { name: "Hydrochlorothiazide", type: "Hypertension", price: "KES 150 - 400", savings: "20% on Generic", status: "High Stock", trend: "stable" },
  { name: "Amlodipine", type: "Hypertension", price: "KES 200 - 500", savings: "25% on Generic", status: "In Stock", trend: "down" },
  { name: "Losartan", type: "Hypertension", price: "KES 400 - 900", savings: "30% on Generic", status: "Low Stock", trend: "up" },
  { name: "Enalapril", type: "Hypertension", price: "KES 250 - 600", savings: "25% on Generic", status: "High Stock", trend: "stable" },

  { name: "Fluconazole", type: "Antifungal", price: "KES 250 - 600", savings: "25% on Generic", status: "In Stock", trend: "stable" },
  { name: "Clotrimazole", type: "Antifungal", price: "KES 100 - 300", savings: "20% on Generic", status: "High Stock", trend: "down" },
  { name: "Ketoconazole", type: "Antifungal", price: "KES 300 - 700", savings: "25% on Generic", status: "In Stock", trend: "stable" },

  { name: "Vitamin C", type: "Supplement", price: "KES 100 - 300", savings: "10% on Generic", status: "High Stock", trend: "stable" },
  { name: "Multivitamins", type: "Supplement", price: "KES 200 - 600", savings: "15% on Generic", status: "In Stock", trend: "stable" },
  { name: "Iron Supplements", type: "Supplement", price: "KES 150 - 400", savings: "15% on Generic", status: "High Stock", trend: "stable" },
  { name: "Folic Acid", type: "Supplement", price: "KES 100 - 300", savings: "10% on Generic", status: "In Stock", trend: "stable" },

  { name: "ORS", type: "Rehydration", price: "KES 50 - 150", savings: "5% on Generic", status: "High Stock", trend: "stable" },
  { name: "Zinc Tablets", type: "Supplement", price: "KES 80 - 200", savings: "10% on Generic", status: "In Stock", trend: "down" }
];

  // Logic: Filter medicines based on search
  const filteredMeds = meds.filter(med => 
    med.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    med.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFindNode = (medName) => {
    alert(`Scanning network for nearest node stocking: ${medName}`);
    // Here you would typically integrate with a Map API or backend
  };

  return (
    <>
      <Navbar />
      
      {/* pt-32 Fixes the overlap from the fixed Navbar */}
      <div className="min-h-screen bg-[#020617] text-white p-6 md:p-12 pt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="max-w-6xl mx-auto"
        >
          {/* --- HERO SECTION --- */}
          <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 text-green-500 mb-2">
                <Zap className="w-5 h-5 fill-current animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Neural Market Analytics</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
                Pharma <span className="text-green-500">Pulse</span>
              </h1>
              <p className="text-white/40 mt-4 max-w-lg text-sm uppercase font-bold tracking-wider">
                Real-time price transparency and stock verification.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="glass-card p-5 border-b-2 border-green-500/50">
                <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest mb-1">Market Avg</p>
                <p className="text-3xl font-black text-green-400">-12.4%</p>
              </div>
              <div className="glass-card p-5 border-b-2 border-blue-500/50">
                <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest mb-1">Live Nodes</p>
                <p className="text-3xl font-black text-blue-400">248</p>
              </div>
            </div>
          </header>

          {/* --- SEARCH INTERFACE --- */}
          <div className="relative mb-12 group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 w-6 h-6 group-focus-within:text-green-500 transition-colors" />
            <input 
              type="text"
              placeholder="Search medicine or category..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-7 pl-16 pr-8 text-xl focus:outline-none focus:ring-2 focus:ring-green-500/40 backdrop-blur-xl transition-all placeholder:text-white/10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* --- MEDICINE LISTING --- */}
          <div className="grid gap-6 mb-16">
            <AnimatePresence mode='popLayout'>
              {filteredMeds.length > 0 ? (
                filteredMeds.map((med, i) => (
                  <motion.div 
                    layout
                    key={med.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card group p-8 border-l-4 border-green-500 flex flex-col lg:flex-row justify-between items-center gap-8 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-[80px] rounded-full group-hover:bg-green-500/10 transition-all" />

                    <div className="flex-1 z-10 w-full lg:w-auto">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-3xl font-black uppercase italic tracking-tighter leading-none">{med.name}</h3>
                        <span className="text-[10px] bg-green-500/10 text-green-400 px-3 py-1 rounded border border-green-500/20 font-black uppercase">
                          {med.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-6 text-[10px] text-white/40 font-black uppercase tracking-widest">
                        <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-green-500" /> Verified</span>
                        <span className="flex items-center gap-1.5"><Package className="w-4 h-4 text-blue-400" /> {med.status}</span>
                        <span className="flex items-center gap-1.5"><TrendingDown className="w-4 h-4 text-green-400" /> Optimizing</span>
                      </div>
                    </div>

                    <div className="text-right z-10 w-full lg:w-auto border-t lg:border-t-0 border-white/5 pt-6 lg:pt-0">
                      <p className="text-[10px] uppercase font-bold text-white/20 tracking-[0.2em] mb-1">Est. Marketplace Price</p>
                      <p className="text-4xl font-black text-white leading-none">{med.price}</p>
                      <p className="text-[10px] text-green-400 font-black uppercase italic mt-2">
                        🔥 {med.savings}
                      </p>
                    </div>
                    
                    <button 
                      onClick={() => handleFindNode(med.name)}
                      className="z-10 w-full lg:w-auto bg-white text-black px-10 py-5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-2"
                    >
                      <Navigation className="w-4 h-4" />
                      Locate Node
                    </button>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-20 glass-card">
                  <p className="text-white/20 font-black uppercase tracking-widest">No matching medicine found in network</p>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* --- PRICE ALERT ACTION --- */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-8 bg-blue-500/5 border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6 mb-20"
          >
            <div className="flex items-center gap-6">
              <div className="p-4 bg-blue-500/20 rounded-2xl">
                <Info className="text-blue-400 w-8 h-8" />
              </div>
              <div className="text-left">
                <p className="font-black uppercase text-sm italic text-blue-400 tracking-widest">Neural Price Alert</p>
                <p className="text-sm text-white/50 max-w-sm">Antimalarials are trending 15% lower in Nairobi West nodes. Update your map now.</p>
              </div>
            </div>
            <button 
              onClick={() => alert("Syncing latest market map...")}
              className="w-full md:w-auto text-white bg-white/5 px-8 py-4 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-500 hover:border-blue-500 transition-all active:scale-95"
            >
              Update Map
            </button>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default PharmaPulse;