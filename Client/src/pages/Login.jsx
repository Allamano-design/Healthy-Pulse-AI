import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowRight, Eye, EyeOff, Zap, ShieldCheck, Mail, Linkedin, Instagram } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppStore } from '@/lib/store';
import { toast } from 'sonner';
import { login as loginApi } from '../lib/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const login = useAppStore((s) => s.login);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      // 1. Send Login Request to Backend
      const response = await loginApi({ email, password });

      // 2. Extract data from successful response
      const { token, user } = response.data;

      // 3. Store the Token (for protected routes later)
      localStorage.setItem('token', token);

      // 4. Update the Global App Store with the Operator's name
      login(user.name);

      toast.success(`Identity Synced: Welcome back, ${user.name}`);
      
      // 5. Navigate to protected Dashboard
      navigate('/dashboard');

    } catch (error) {
      // Handle errors (Invalid credentials, unverified account, etc.)
      const errorMsg = error.response?.data?.msg || 'Neural link failed';
      toast.error(errorMsg);

      // Requirement #3: If account isn't verified, we could redirect them back to verify
      if (errorMsg.includes("not verified")) {
        navigate('/verify', { state: { email } });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-[#020617] text-white overflow-hidden">
      
      {/* --- LEFT SIDE: THE AUTH FORM --- */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 flex items-center justify-center p-8 lg:p-16 z-20"
      >
        <div className="w-full max-w-md space-y-12">
          {/* Brand Header */}
          <header className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-primary fill-primary/20" />
              </div>
              <span className="text-3xl font-black italic tracking-tighter uppercase">Health<span className="text-primary">AI</span></span>
            </Link>
            <h1 className="text-5xl font-black tracking-tighter uppercase italic leading-none">Sign In</h1>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em]">Neural Interface Access</p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Operator Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                disabled={isLoading}
                className="h-14 bg-white/[0.02] border-white/10 rounded-2xl px-6 focus:border-primary/50 transition-all"
              />
            </div>

<div className="space-y-2">
  <div className="flex justify-between items-center ml-1">
    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
      Security Key
    </label>

    <Link 
      to="/forgot-password" 
      className="text-[9px] font-bold uppercase tracking-tighter text-primary/60 hover:text-primary transition-colors"
    >
      Forgot Password?
    </Link>
  </div>
  
  <div className="relative">
    <Input
      type={showPassword ? 'text' : 'password'}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="••••••••"
      disabled={isLoading}
      className="h-14 bg-white/[0.02] border-white/10 rounded-2xl px-6 pr-12 focus:border-primary/50 transition-all"
    />
    <button 
      type="button" 
      onClick={() => setShowPassword(!showPassword)} 
      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
    >
      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
    </button>
  </div>
</div>

            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all active:scale-95"
            >
              {isLoading ? "Syncing..." : <>Sync Identity <ArrowRight className="ml-2 w-4 h-4" /></>}
            </Button>
          </form>

          {/* Social Auth Grid */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/5" />
              <span className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">External Link</span>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[Mail, Linkedin, Instagram].map((Icon, i) => (
                <button key={i} className="flex items-center justify-center h-14 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all">
                  <Icon className="w-5 h-5 text-muted-foreground" />
                </button>
              ))}
            </div>
          </div>

          <p className="text-center text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            No clearance? <Link to="/register" className="text-primary hover:underline underline-offset-4">Register Account</Link>
          </p>
        </div>
      </motion.div>

      {/* --- RIGHT SIDE: GLASSMARKETING PANEL --- */}
      <div className="hidden lg:flex flex-1 bg-[#144633] relative items-center justify-center p-20 overflow-hidden border-l border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card relative z-10 w-full max-w-sm p-12 rounded-[40px] space-y-8 bg-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-2xl"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <Zap className="w-3 h-3 text-primary fill-primary" />
            <span className="text-[9px] font-black uppercase tracking-widest text-primary">System Online</span>
          </div>
          
          <h3 className="text-5xl font-black italic tracking-tighter uppercase leading-[0.8]">
            Reach <br />Goals <br />Faster
          </h3>
          
          <p className="text-[11px] font-bold text-white/40 leading-relaxed uppercase tracking-wider">
            Monitor your biometrics, track neural syncs, and optimize your bio-fuel in a single localized node.
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-white/5">
             <div className="flex -space-x-3">
               {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-[#144633] bg-muted/20" />)}
             </div>
             <div className="text-right">
                <p className="text-[10px] font-black italic text-primary">452,892</p>
                <p className="text-[8px] font-bold text-white/20 uppercase">Operators Online</p>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;