import { motion } from 'framer-motion';
import { Brain, Apple, MapPin, Pill, Shield, ChevronRight, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '@/lib/store'; 

const features = [
  {
    icon: Brain,
    title: "AI Symptom Diagnosis",
    description: "Enter your symptoms and get instant AI-powered analysis with possible conditions and severity levels.",
    color: "text-blue-400",
    glow: "neon-glow-blue",
    path: "/dashboard/symptoms",
    gradient: "from-blue-600/40 to-cyan-600/40",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800"
  },
  {
    icon: Apple,
    title: "Food Recommendations",
    description: "Discover local healing foods tailored to your condition, with nutritional info and preparation tips.",
    color: "text-emerald-400",
    glow: "neon-glow-green",
    path: "/dashboard/food",
    gradient: "from-emerald-600/40 to-green-600/40",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=800"
  },
  {
    icon: MapPin,
    title: "Nearby Clinics",
    description: "Find healthcare facilities near you with contact info, directions, and services offered.",
    color: "text-purple-400",
    glow: "neon-glow-purple",
    path: "/dashboard/clinics",
    gradient: "from-purple-600/40 to-pink-600/40",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800"
  },
  {
    icon: Shield,
    title: "Health Tracking",
    description: "Keep track of your symptom checks, diagnoses, and health journey over time.",
    color: "text-teal-400",
    glow: "neon-glow-green",
    path: "/dashboard/tracking",
    gradient: "from-teal-600/40 to-emerald-600/40",
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=1200"
  },
  {
    icon: Pill,
    title: "Pharma-Pulse",
    description: "Check approximate of prices and nearby pharmacies anytime.",
    color: "text-cyan-400",
    glow: "neon-glow-blue",
    path: "/dashboard/pharma",
    gradient: "from-cyan-700/40 to-blue-700/40",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200"
  },
  {
    icon: Activity,
    title: "Recovery Journey",
    description: "Track your healing progress and connect with others on similar paths.",
    color: "text-rose-400",
    glow: "neon-glow-purple",
    path: "/dashboard/recovery",
    gradient: "from-rose-700/40 to-pink-700/40",
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1200"
  },
];

const FeaturesSection = () => {
  const navigate = useNavigate();
  const { user } = useAppStore(); 

  const handleAccess = (path) => {
    // If user is logged in, they go to the specific dashboard route
    // If not, they are sent to login
    if (user) {
      navigate(path);
    } else {
      navigate('/login');
    }
  };

  return (
    <section id="features" className="py-24 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div 
                onClick={() => handleAccess(feature.path)}
                className="group relative block overflow-hidden rounded-[2.5rem] border border-white/10 transition-all duration-500 bg-black cursor-pointer shadow-2xl"
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover brightness-[0.5] group-hover:brightness-[0.7] group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feature.gradient} mix-blend-overlay`} />
                </div>
                
                <div className="relative z-10 p-10 flex flex-col min-h-[380px]">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-3xl flex items-center justify-center mb-8 border border-white/20 group-hover:border-white/40 transition-all duration-500`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-3xl font-black mb-4 tracking-tighter text-white uppercase italic transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/40 text-sm leading-relaxed mb-8 flex-grow group-hover:text-white transition-colors">
                    {feature.description}
                  </p>

                  <div className="flex items-center text-[10px] font-black tracking-[0.4em] text-white/20 group-hover:text-cyan-400 transition-all uppercase">
                    <span>Access Module</span>
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;