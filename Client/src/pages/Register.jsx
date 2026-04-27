import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowRight, Eye, EyeOff, ShieldCheck, UserPlus, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppStore } from '@/lib/store';
import { toast } from 'sonner';
import api from '../lib/api'; 

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Client-Side Validation
    if (!name || !email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    try {
      // 2. Connect to the Neural Hub (Backend)
      const response = await api.post('/auth/register', {
        name,
        email,
        password
      });

      // 3. Success Logic
      toast.success(response.data.msg); // "User created. Verify with code: XXXXXX"
      
      // Navigate to verification page and pass the email so the user doesn't have to re-type it
      navigate('/verify', { state: { email } });

    } catch (error) {
      // 4. Handle Backend Errors (e.g., User already exists)
      const errorMsg = error.response?.data?.msg || 'Neural link failed. Connection lost.';
      toast.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-[#020617] text-white overflow-hidden font-sans">
      
      {/* --- LEFT SIDE: THE REGISTRATION FORM --- */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 flex items-center justify-center p-8 lg:p-16 z-20"
      >
        <div className="w-full max-w-md space-y-10">
          {/* Brand Header */}
          <header className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-primary fill-primary/20" />
              </div>
              <span className="text-3xl font-black italic tracking-tighter uppercase">Health<span className="text-primary">AI</span></span>
            </Link>
            <h1 className="text-5xl font-black tracking-tighter uppercase italic leading-[0.9]">Initialize <br />Account</h1>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em]">Neural Protocol Onboarding</p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Username</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Allamano"
                disabled={isLoading}
                className="h-14 bg-white/[0.02] border-white/10 rounded-2xl px-6 focus:border-primary/50 transition-all placeholder:text-white/10"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Comm-Link (Email)</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="operator@pulse.ai"
                disabled={isLoading}
                className="h-14 bg-white/[0.02] border-white/10 rounded-2xl px-6 focus:border-primary/50 transition-all placeholder:text-white/10"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Security Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min 6 characters"
                  disabled={isLoading}
                  className="h-14 bg-white/[0.02] border-white/10 rounded-2xl px-6 pr-12 focus:border-primary/50 transition-all placeholder:text-white/10"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all active:scale-95 mt-4"
            >
              {isLoading ? "Processing..." : <>Deploy Profile <ArrowRight className="ml-2 w-4 h-4" /></>}
            </Button>
          </form>

          <p className="text-center text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            Existing User? <Link to="/login" className="text-primary hover:underline underline-offset-4">Return to Login</Link>
          </p>
        </div>
      </motion.div>

      {/* --- RIGHT SIDE: FEATURE CARD --- */}
      <div className="hidden lg:flex flex-1 bg-[#0F3426] relative items-center justify-center p-20 overflow-hidden border-l border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card relative z-10 w-full max-w-sm p-12 rounded-[40px] space-y-8 bg-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-2xl"
        >
          <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30">
            <UserPlus className="w-6 h-6 text-primary" />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-4xl font-black italic tracking-tighter uppercase leading-[0.8]">
              Secure <br />Neural <br />Onboarding
            </h3>
            <p className="text-[11px] font-bold text-white/40 leading-relaxed uppercase tracking-widest">
              By joining the pulse, you gain access to localized AI health metrics and secure biometric data storage.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
            <div>
              <p className="text-primary font-black italic text-2xl uppercase">99.9%</p>
              <p className="text-[8px] font-bold text-white/20 uppercase tracking-tighter">System Uptime</p>
            </div>
            <div>
              <p className="text-primary font-black italic text-2xl uppercase">AES-256</p>
              <p className="text-[8px] font-bold text-white/20 uppercase tracking-tighter">Encryption</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;