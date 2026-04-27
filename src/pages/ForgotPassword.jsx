import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import api from '@/lib/api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.post('/auth/forgot-password', { email });
      toast.success(response.data.msg);
    } catch (error) {
      toast.error(error.response?.data?.msg || "Request failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] p-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-md glass-card p-10 rounded-[32px] border border-white/10 space-y-6">
        <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/20 mx-auto">
          <ShieldAlert className="w-7 h-7 text-red-500" />
        </div>
        <h2 className="text-3xl font-black text-center italic uppercase tracking-tighter text-white">Recover Access</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            type="email" 
            placeholder="Operator Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 bg-white/[0.02] border-white/10 rounded-xl"
          />
          <Button disabled={isLoading} className="w-full h-14 bg-red-500 hover:bg-red-600 text-white rounded-xl uppercase font-black tracking-widest">
            {isLoading ? "Dispatching..." : "Send Recovery Link"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;