import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, ArrowRight, Heart, Shield, Brain, Droplets, Sun, Apple, Search, ChevronLeft, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import Navbar from '../components/Navbar';
import Footer from '../components/landing/Footer';

const articles = [
  {
    id: 1,
    title: "Preventing Malaria: A Community Guide",
    category: "Prevention",
    icon: Shield,
    readTime: "5 min",
    excerpt: "Learn effective strategies to protect yourself and your family from malaria, including mosquito net usage and environmental management.",
    content: `Malaria remains one of the leading health challenges in East Africa. Here are proven prevention strategies:\n\n**1. Sleep Under Treated Mosquito Nets**\nInsecticide-treated nets (ITNs) reduce malaria transmission by up to 50%. Ensure every family member has a net, especially children under 5 and pregnant women.\n\n**2. Eliminate Breeding Sites**\nMosquitoes breed in stagnant water. Clear gutters, cover water tanks, and drain any standing water around your home.\n\n**3. Use Repellents**\nApply mosquito repellent on exposed skin during dawn and dusk when mosquitoes are most active.\n\n**4. Wear Protective Clothing**\nLong sleeves and pants in the evening help reduce mosquito bites.\n\n**5. Seek Early Treatment**\nIf you develop fever, chills, or headache, get tested within 24 hours. Early treatment with ACTs saves lives.`,
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    id: 2,
    title: "Nutrition for Strong Immunity",
    category: "Nutrition",
    icon: Apple,
    readTime: "4 min",
    excerpt: "Discover locally available superfoods that can boost your immune system and keep common illnesses at bay.",
    content: `A strong immune system starts with good nutrition. Here are local superfoods to include in your daily diet:\n\n**Moringa (Miracle Tree)**\nMoringa leaves contain 7x more vitamin C than oranges and 4x the calcium of milk. Add dried moringa powder to your uji or smoothies.\n\n**Sweet Potatoes**\nRich in beta-carotene (vitamin A), which strengthens your body's first line of defense. Boil or roast for maximum nutrition.\n\n**Sukuma Wiki (Kale)**\nPacked with iron, calcium, and vitamins A, C, and K. Steam lightly to preserve nutrients.\n\n**Garlic & Ginger**\nNatural antibiotics. Add to your cooking daily — they fight infections and reduce inflammation.\n\n**Fermented Foods (Mala/Yogurt)**\nProbiotics support gut health, where 70% of your immune system lives.\n\n**Tip:** Eat a rainbow of fruits and vegetables daily for the widest range of nutrients.`,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10"
  },
  {
    id: 3,
    title: "Mental Health: Breaking the Stigma",
    category: "Wellness",
    icon: Brain,
    readTime: "6 min",
    excerpt: "Mental health is just as important as physical health. Learn to recognize signs and find support in your community.",
    content: `Mental health affects how we think, feel, and act. It's time to talk about it openly.\n\n**Recognizing Warning Signs**\n• Persistent sadness or hopelessness lasting more than 2 weeks\n• Loss of interest in activities you once enjoyed\n• Changes in sleep or appetite\n• Difficulty concentrating or making decisions\n• Withdrawing from friends and family\n\n**What You Can Do**\n\n1. **Talk About It** — Share your feelings with someone you trust. You are not alone.\n2. **Stay Active** — Even a 30-minute walk releases endorphins that improve mood.\n3. **Maintain Routine** — Structure helps when everything feels chaotic.\n4. **Limit Alcohol** — It's a depressant that worsens anxiety and depression.\n5. **Seek Help** — Contact a counselor or visit your nearest health facility.\n\n**Community Support**\nMany health centers now offer free mental health counseling. Ask your local community health worker for referrals.`,
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    id: 4,
    title: "Safe Water & Hygiene Practices",
    category: "Prevention",
    icon: Droplets,
    readTime: "3 min",
    excerpt: "Waterborne diseases like cholera and typhoid are preventable. Learn simple practices to keep your family safe.",
    content: `Unsafe water causes diseases like cholera, typhoid, and dysentery. Protect your family with these practices:\n\n**Water Treatment at Home**\n• Boil water for at least 1 minute before drinking\n• Use water purification tablets (e.g., Aquatabs)\n• Solar disinfection: fill clear bottles, place in direct sunlight for 6 hours\n\n**Handwashing**\nWash hands with soap for at least 20 seconds:\n• Before eating or preparing food\n• After using the toilet\n• After changing diapers\n• After handling animals\n\n**Food Safety**\n• Cook food thoroughly — especially meat and eggs\n• Wash fruits and vegetables with clean water\n• Don't eat food that's been sitting out for more than 2 hours\n• Keep raw meat separate from cooked food\n\n**Sanitation**\nUse latrines properly, keep them clean, and wash hands after every visit.`,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10"
  },
  {
    id: 5,
    title: "Managing Diabetes with Local Foods",
    category: "Nutrition",
    icon: Heart,
    readTime: "5 min",
    excerpt: "Diabetes is rising in Africa. Learn how to manage blood sugar with affordable, locally available foods.",
    content: `Type 2 diabetes is increasing across Africa. Diet plays a crucial role in management.\n\n**Foods That Help Control Blood Sugar**\n\n• **Whole grains** — Choose brown ugali, whole wheat chapati, or millet over refined flour\n• **Beans & Lentils (Ndengu)** — High fiber slows sugar absorption\n• **Green vegetables** — Sukuma wiki, managu, and spinach are low in calories and high in fiber\n• **Avocado** — Healthy fats improve insulin sensitivity\n• **Cinnamon** — Add to tea or porridge; studies show it helps lower blood sugar\n\n**Foods to Limit**\n• Sugary drinks (sodas, sweetened juices)\n• White bread and refined chapati\n• Excess white rice\n• Fried foods and excess cooking oil\n\n**Lifestyle Tips**\n• Walk for at least 30 minutes daily\n• Eat meals at regular times\n• Monitor blood sugar if possible\n• Take medication as prescribed\n• Attend regular clinic check-ups`,
    color: "text-red-400",
    bg: "bg-red-400/10"
  },
  {
    id: 6,
    title: "Sun Safety & Skin Health",
    category: "Wellness",
    icon: Sun,
    readTime: "3 min",
    excerpt: "Even with darker skin tones, sun protection matters. Learn about skin health and when to seek medical advice.",
    content: `Sun exposure affects everyone, regardless of skin tone.\n\n**Why Sun Protection Matters**\n• UV rays can cause skin damage and premature aging\n• Skin cancer, while less common in darker skin, can occur and is often diagnosed late\n• Sun exposure can worsen certain skin conditions\n\n**Protection Tips**\n• Use sunscreen (SPF 30+) on exposed areas, especially if outdoors for extended periods\n• Wear hats and protective clothing during peak sun hours (10 AM - 4 PM)\n• Stay hydrated — drink at least 8 glasses of water daily\n\n**When to See a Doctor**\n• A mole or spot that changes size, shape, or color\n• A sore that doesn't heal within 3 weeks\n• Unusual patches or discoloration on palms, soles, or under nails\n\n**Vitamin D**\n10-15 minutes of morning sunlight helps your body produce vitamin D, which is essential for bone health and immunity.`,
    color: "text-amber-400",
    bg: "bg-amber-400/10"
  }
];

const categories = ["All", "Prevention", "Nutrition", "Wellness"];

const HealthTracking = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = articles.filter((a) => {
    const matchesCategory = selectedCategory === "All" || a.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    return matchesCategory && (a.title.toLowerCase().includes(query) || a.excerpt.toLowerCase().includes(query));
  });

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* --- HERO HEADER --- */}
          <motion.div 
            className="mb-12 md:mb-20 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-md px-4 py-2 mb-6 rounded-full border border-purple-500/20">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-purple-400 animate-pulse" />
              <span className="text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.4em] text-purple-400 uppercase whitespace-nowrap">
                Vitality Intelligence Portal
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase leading-tight italic">
              Health <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                Tracking
              </span>
            </h1>

            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mt-10">
              <div className="relative w-full md:max-w-md group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-purple-400 transition-colors" />
                <Input
                  placeholder="Scan library for keywords..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setExpandedArticle(null); }}
                  className="pl-12 h-14 bg-white/5 border-white/10 rounded-2xl focus:ring-purple-500/50 focus:border-purple-500 transition-all text-white placeholder:text-white/20"
                />
              </div>

              <div className="flex gap-2 flex-wrap justify-center md:justify-end">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); setExpandedArticle(null); }}
                    className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                      selectedCategory === cat
                        ? 'bg-purple-600 text-white border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                        : 'bg-white/5 text-white/40 border-white/5 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- CONTENT AREA --- */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {expandedArticle !== null ? (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="max-w-4xl mx-auto"
                >
                  <button
                    onClick={() => setExpandedArticle(null)}
                    className="flex items-center gap-2 text-purple-400 font-black text-xs uppercase tracking-widest mb-8 hover:translate-x-[-4px] transition-transform"
                  >
                    <ChevronLeft className="w-4 h-4" /> Back to Library
                  </button>

                  {(() => {
                    const article = articles.find((a) => a.id === expandedArticle);
                    return (
                      <div className="bg-white/5 backdrop-blur-xl p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/10 relative overflow-hidden">
                        <div className={`absolute top-0 right-0 w-64 h-64 ${article.bg} blur-[120px] -z-10 opacity-50`} />
                        
                        <div className="flex flex-wrap items-center gap-4 mb-8">
                          <div className={`w-14 h-14 rounded-2xl ${article.bg} flex items-center justify-center border border-white/10`}>
                            <article.icon className={`w-7 h-7 ${article.color}`} />
                          </div>
                          <div>
                            <span className={`text-[10px] font-black uppercase tracking-widest ${article.color}`}>{article.category}</span>
                            <div className="flex items-center gap-2 text-white/40 text-xs mt-1">
                              <Clock className="w-3 h-3" /> {article.readTime} reading time
                            </div>
                          </div>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black mb-8 italic tracking-tight">{article.title}</h2>
                        
                        <div className="space-y-6">
                          {article.content.split('\n').map((line, i) => {
                            if (line.startsWith('**') && line.endsWith('**')) {
                              return <h3 key={i} className="text-xl md:text-2xl font-black mt-10 text-white italic">{line.replace(/\*\*/g, '')}</h3>;
                            }
                            if (line.startsWith('•')) {
                              return (
                                <div key={i} className="flex gap-3 text-white/70 pl-4">
                                  <span className="text-purple-400 mt-1.5">•</span>
                                  <p className="text-sm md:text-base leading-relaxed">{line.substring(1).trim()}</p>
                                </div>
                              );
                            }
                            if (line.trim() === '') return <div key={i} className="h-4" />;
                            return <p key={i} className="text-white/70 text-sm md:text-lg leading-relaxed">{line.replace(/\*\*/g, '')}</p>;
                          })}
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              ) : (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filtered.map((article, i) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => setExpandedArticle(article.id)}
                      className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm p-8 cursor-pointer relative overflow-hidden rounded-[2rem] border border-white/5 hover:border-white/20 transition-all flex flex-col h-full"
                    >
                      <div className={`absolute -top-10 -right-10 w-32 h-32 ${article.bg} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-12 h-12 rounded-xl ${article.bg} flex items-center justify-center border border-white/5`}>
                          <article.icon className={`w-6 h-6 ${article.color}`} />
                        </div>
                        <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">{article.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors leading-tight italic">
                        {article.title}
                      </h3>
                      
                      <p className="text-sm text-white/50 mb-8 line-clamp-3 leading-relaxed flex-grow">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-6 border-t border-white/5">
                        <span className={`text-[10px] font-black uppercase tracking-widest ${article.color}`}>
                          {article.category}
                        </span>
                        <div className="flex items-center gap-2 text-purple-400 font-black text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                          Access <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HealthTracking;