import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, AlertTriangle, CheckCircle, Info, Loader2, Stethoscope, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { analyzeSymptoms } from '@/lib/symptom-data';
import { useAppStore } from '@/lib/store';

// Importing your layout components
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/landing/Footer';

const SymptomChecker = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const addCheck = useAppStore((s) => s.addCheck);

  const handleCheck = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResults([]);
    await new Promise((r) => setTimeout(r, 2000));
    const analysis = analyzeSymptoms(input);
    setResults(analysis);
    analysis.forEach(addCheck);
    setLoading(false);
  };

  const severityIcon = (severity) => {
    switch (severity) {
      case 'high': return <AlertTriangle className="w-5 h-5 text-destructive" />;
      case 'medium': return <Info className="w-5 h-5 text-accent" />;
      default: return <CheckCircle className="w-5 h-5 text-secondary" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />

      {/* --- MESH BACKGROUND BLEND (Green + White Focus) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-white/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <main className="flex-grow container mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
              <Stethoscope className="w-4 h-4 text-secondary" />
              <span className="text-[10px] font-black uppercase tracking-widest text-secondary">AI Diagnostic Engine</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase text-white">
              Symptom <span className="text-secondary italic">Checker</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl font-medium">
              Describe how you feel in plain English. Our Visionary AI analyzes patterns to provide localized health insights and healing food recommendations.
            </p>
          </motion.div>

          {/* Input Area */}
          <motion.div 
            className="glass-card-visionary p-8 rounded-4xl" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Describe symptoms (e.g., sharp back pain, dry cough, dizziness)"
                  className="h-16 bg-white/5 border-white/10 rounded-2xl pl-6 pr-4 text-white placeholder:text-white/20 focus:border-secondary/50 transition-all"
                  onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                />
              </div>
              <Button 
                onClick={handleCheck} 
                disabled={loading || !input.trim()} 
                className="h-16 px-10 bg-secondary hover:bg-secondary/80 text-white font-black rounded-2xl uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)]"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5 mr-2" />}
                {loading ? 'Analyzing...' : 'Analyze'}
              </Button>
            </div>
          </motion.div>

          {/* Loading State */}
          <AnimatePresence>
            {loading && (
              <motion.div
                className="glass-card-visionary p-12 text-center rounded-4xl border-secondary/30"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <div className="flex flex-col items-center gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full border-2 border-secondary/20 flex items-center justify-center">
                      <Loader2 className="w-10 h-10 text-secondary animate-spin" />
                    </div>
                    <div className="absolute inset-0 bg-secondary/20 blur-2xl rounded-full animate-pulse" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black uppercase text-white tracking-tighter">Processing Intelligence</h2>
                    <p className="text-white/40 font-medium">Scanning medical patterns and healing databases...</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Section */}
          <AnimatePresence>
            {results.length > 0 && !loading && (
              <motion.div className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-px flex-grow bg-white/10" />
                  <h2 className="text-xs font-black uppercase tracking-[0.4em] text-white/30">Analysis Results</h2>
                  <div className="h-px flex-grow bg-white/10" />
                </div>

                {results.map((result, i) => (
                  <motion.div
                    key={result.disease}
                    className="glass-card-visionary overflow-hidden rounded-4xl group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            {severityIcon(result.severity)}
                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
                              {result.disease}
                            </h3>
                          </div>
                          <p className="text-white/50 font-medium leading-relaxed max-w-2xl">{result.description}</p>
                        </div>
                        <div className={`self-start px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                          result.severity === 'high' ? 'border-destructive/40 bg-destructive/10 text-destructive' :
                          result.severity === 'medium' ? 'border-accent/40 bg-accent/10 text-accent' :
                          'border-secondary/40 bg-secondary/10 text-secondary'
                        }`}>
                          {result.severity} priority
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary flex items-center gap-2">
                            <ChevronRight className="w-3 h-3" /> Action Plan
                          </h4>
                          <ul className="space-y-3">
                            {result.treatments.map((t, j) => (
                              <li key={j} className="flex items-start gap-3 text-sm text-white/60 font-medium">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary flex items-center gap-2">
                            <ChevronRight className="w-3 h-3" /> Healing Foods
                          </h4>
                          <ul className="space-y-3">
                            {result.foods.map((f, j) => (
                              <li key={j} className="flex items-start gap-3 text-sm text-white/60 font-medium">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                <motion.div className="p-6 rounded-3xl bg-accent/5 border border-accent/20 backdrop-blur-md">
                  <p className="text-xs text-accent/80 flex items-center gap-3 font-bold uppercase tracking-wider leading-relaxed">
                    <AlertTriangle className="w-5 h-5 shrink-0" />
                    Medical Disclaimer: This AI analysis is for informational purposes only and does not constitute professional medical advice or diagnosis.
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SymptomChecker;