import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Zap } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import api from '@/lib/api';

const Verify = () => {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get email from the navigation state (passed from Register)
  const email = location.state?.email || "";

const handleVerify = async (e) => {
  e.preventDefault();
  
  // Debugging: Log this to your browser console (F12) to see if email is actually there
  console.log("Attempting verify for:", email, "with code:", code);

  if (!email) {
    toast.error("Email session lost. Please register again.");
    return;
  }

  setIsLoading(true);
  try {
    const response = await api.post('/auth/verify-email', { 
      email: email, // Ensure this matches the backend variable
      code: code 
    });
    toast.success(response.data.msg);
    navigate('/login');
  } catch (error) {
    toast.error(error.response?.data?.msg || 'Verification failed');
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#020617] text-white p-6">
      {/* Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md glass-card p-10 rounded-[32px] bg-white/[0.02] border border-white/10 backdrop-blur-xl space-y-8 text-center"
      >
        <div className="mx-auto w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30">
          <ShieldCheck className="w-8 h-8 text-primary" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-black italic uppercase tracking-tighter">Identity <span className="text-primary">Sync</span></h1>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Enter the 6-digit pulse code sent to your link</p>
        </div>

        <form onSubmit={handleVerify} className="space-y-6">
          <div className="space-y-2">
            <Input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="000000"
              maxLength={6}
              disabled={isLoading}
              className="h-16 text-center text-3xl font-black tracking-[0.5em] bg-white/[0.02] border-white/10 rounded-2xl focus:border-primary/50"
            />
            <p className="text-[9px] text-white/30 font-bold uppercase">Verifying: {email}</p>
          </div>

          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all"
          >
            {isLoading ? "Syncing..." : "Finalize Uplink"}
          </Button>
        </form>

        <button 
          onClick={() => navigate('/register')}
          className="text-[10px] font-bold text-muted-foreground hover:text-primary uppercase tracking-widest transition-colors"
        >
          Incorrect link? Restart Onboarding
        </button>
      </motion.div>
    </div>
  );
};

export default Verify;