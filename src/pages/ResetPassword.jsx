import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import api from '@/lib/api';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Toggle state
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Ciphers do not match. Verify your input.");
    }

    setIsLoading(true);
    try {
      const response = await api.post(`/auth/reset-password/${token}`, { password });
      toast.success(response.data.msg);
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.msg || "Neural link restoration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className="w-full max-w-md glass-card p-10 rounded-[32px] border border-white/10 space-y-8 bg-white/[0.02] backdrop-blur-xl"
      >
        <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30 mx-auto">
          <Lock className="w-8 h-8 text-primary" />
        </div>
        
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">
            Reset <span className="text-primary">Key</span>
          </h2>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest text-center">
            Update your neural credentials
          </p>
        </div>

        <form onSubmit={handleReset} className="space-y-4">
          {/* New Password Input */}
          <div className="relative">
            <Input 
              type={showPassword ? 'text' : 'password'} 
              placeholder="New Security Key" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="h-14 bg-white/[0.02] border-white/10 rounded-xl px-6 pr-12 focus:border-primary/50 transition-all text-white"
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <Input 
              type={showPassword ? 'text' : 'password'} 
              placeholder="Confirm New Key" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="h-14 bg-white/[0.02] border-white/10 rounded-xl px-6 pr-12 focus:border-primary/50 transition-all text-white"
            />
          </div>

          <Button 
            disabled={isLoading} 
            className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-xl uppercase font-black tracking-[0.3em] shadow-[0_0_20px_rgba(var(--primary),0.3)] mt-4 transition-all active:scale-95"
          >
            {isLoading ? "Updating..." : "Update Credentials"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default ResetPassword;