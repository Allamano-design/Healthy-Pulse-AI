import { motion } from 'framer-motion';
import { Apple, Droplets, Flame, Leaf, Zap, ChevronRight, Activity, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/landing/Footer';

// Asset Imports
import sukumawiki from "@/assets/foods/sukumawiki.jpg";
import papaya from "@/assets/foods/papaya.jpg";
import coconut from "@/assets/foods/coconut.jpg";
import watermelon from "@/assets/foods/watermelon.jpg";
import ginger from "@/assets/foods/ginger.jpg";
import garlic from "@/assets/foods/garlic.jpg";
import chickensoup from "@/assets/foods/chickensoup.jpg";
import pineapple from "@/assets/foods/pineapple.jpg";
import mala from "@/assets/foods/mala.jpg";
import banana from "@/assets/foods/banana.jpg";
import sweetpotatoes from "@/assets/foods/sweetpotatoes.jpg";
import pumkins from "@/assets/foods/pumkins.jpg";
import nduma from "@/assets/foods/nduma.jpg";
import managu from "@/assets/foods/managu.jpg";
import avocado from "@/assets/foods/avocado.jpg";
import nuts from "@/assets/foods/nuts.jpg";

const foodCategories = [
  {
    condition: "Malaria & Fever Recovery",
    icon: Flame,
    color: "text-red-500",
    bg: "bg-red-500/10",
    glow: "shadow-[0_0_20px_rgba(239,68,68,0.2)]",
    foods: [
      { 
        name: "Sukuma Wiki", 
        image: sukumawiki,
        benefits: "High iron content to boost red blood cells.", 
        nutrients: "Iron, Vitamin K, Fiber" 
      },
      { 
        name: "Pawpaw (Papaya)", 
        image: papaya,
        benefits: "Rich in antioxidants for immune support.", 
        nutrients: "Papain, Vit A & C" 
      },
      { 
        name: "Coconut Water", 
        image: coconut,
        benefits: "Rapid rehydration and electrolyte balance.", 
        nutrients: "Potassium, Magnesium" 
      },
      { 
        name: "Watermelon", 
        image: watermelon,
        benefits: "Natural hydration and inflammation relief.", 
        nutrients: "Lycopene, Water" 
      }
    ]
  },
  {
    condition: "Flu & Respiratory Relief",
    icon: Droplets,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    glow: "shadow-[0_0_20px_rgba(34,211,238,0.2)]",
    foods: [
      { 
        name: "Ginger & Lemon", 
        image: ginger,
        benefits: "Anti-inflammatory and clears congestion.", 
        nutrients: "Gingerol, Vit C" 
      },
      { 
        name: "Fresh Garlic", 
        image: garlic,
        benefits: "Natural antibiotic properties.", 
        nutrients: "Allicin, Selenium" 
      },
      { 
        name: "Chicken Soup", 
        image: chickensoup,
        benefits: "Inhibits movement of infection-fighting cells.", 
        nutrients: "Protein, Collagen" 
      },
      { 
        name: "Pineapple", 
        image: pineapple,
        benefits: "Reduces phlegm and inflammation.", 
        nutrients: "Bromelain, Fiber" 
      }
    ]
  },
  {
    condition: "Digestive & Gut Health",
    icon: Leaf,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    glow: "shadow-[0_0_20px_rgba(16,185,129,0.2)]",
    foods: [
      { 
        name: "Plain Mala / Yogurt", 
        image: mala,
        benefits: "Restores healthy gut bacteria.", 
        nutrients: "Probiotics, Calcium" 
      },
      { 
        name: "Ripe Bananas", 
        image: banana,
        benefits: "Easily digestible and high in potassium.", 
        nutrients: "Potassium, Fiber" 
      },
      { 
        name: "Sweet Potatoes", 
        image: sweetpotatoes,
        benefits: "Gentle on the stomach lining.", 
        nutrients: "Vit A, Complex Carbs" 
      },
      { 
        name: "Pumpkins", 
        image: pumkins,
        benefits: "Low-acid food that reduces bloating.", 
        nutrients: "Beta-carotene" 
      }
    ]
  },
  {
    condition: "Vitality & Energy",
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    glow: "shadow-[0_0_20px_rgba(251,191,36,0.2)]",
    foods: [
      { 
        name: "Nduma (Arrowroot)", 
        image: nduma,
        benefits: "Clean energy source with low GI.", 
        nutrients: "Potassium, Carbs" 
      },
      { 
        name: "Nightshade Greens (Managu)", 
        image: managu,
        benefits: "Excellent for building overall strength.", 
        nutrients: "Iron, Calcium" 
      },
      { 
        name: "Avocado", 
        image: avocado,
        benefits: "Essential fats for cellular repair.", 
        nutrients: "Omega-3, Healthy Fats" 
      },
      { 
        name: "Groundnuts", 
        image: nuts,
        benefits: "High-protein recovery snack.", 
        nutrients: "Protein, Healthy Oils" 
      }
    ]
  }
];

const FoodGuide = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* --- HERO HEADER: Responsive Fluid Typography --- */}
          <motion.div 
            className="mb-16 md:mb-32 text-center"
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 md:px-6 py-2 mb-6 md:mb-8 rounded-full border border-white/10">
              <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-primary animate-pulse" />
              <span className="text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.4em] text-white/60 uppercase whitespace-nowrap">
                Vetted Nutrition Protocol
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black tracking-tighter mb-6 md:mb-8 uppercase leading-[0.9] md:leading-[0.85] italic">
              Healing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-emerald-400">
                Botanicals
              </span>
            </h1>
          </motion.div>

          <div className="space-y-24 md:space-y-40">
            {foodCategories.map((cat, i) => (
              <motion.div
                key={cat.condition}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                {/* Responsive Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6 mb-10 md:mb-16 border-l-4 border-white/5 pl-6 md:pl-8">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${cat.bg} flex items-center justify-center border border-white/10 ${cat.glow} shrink-0`}>
                    <cat.icon className={`w-6 h-6 md:w-8 md:h-8 ${cat.color}`} />
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase italic break-words">
                    {cat.condition}
                  </h2>
                </div>

                {/* Grid: 1 col (mobile) -> 2 cols (tablet) -> 4 cols (large) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {cat.foods.map((food) => (
                    <motion.div 
                      key={food.name}
                      whileHover={{ y: -10 }}
                      className="group relative h-[380px] sm:h-[450px] lg:h-[500px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-white/5 border border-white/10"
                    >
                      {/* --- ACTUAL IMAGE --- */}
                      <img 
                        src={food.image} 
                        alt={food.name}
                        className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                      />
                      
                      {/* --- OVERLAY --- */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/10 to-transparent opacity-90" />
                      
                      {/* --- CONTENT BOX: Fluid Padding --- */}
                      <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 backdrop-blur-xl bg-black/40 border-t border-white/10 m-2 md:m-3 rounded-[1.2rem] md:rounded-[1.5rem]">
                        <h3 className="text-lg md:text-xl font-black mb-1 uppercase text-white tracking-tight italic">
                          {food.name}
                        </h3>
                        <p className="text-white/50 text-[10px] md:text-[11px] mb-3 md:mb-4 font-medium leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                          {food.benefits}
                        </p>
                        
                        <div className={`inline-flex items-center gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-white/5 border border-white/10`}>
                          <ChevronRight className={`w-3 h-3 ${cat.color}`} />
                          <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-white/80 whitespace-nowrap">
                            {food.nutrients}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
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

export default FoodGuide;