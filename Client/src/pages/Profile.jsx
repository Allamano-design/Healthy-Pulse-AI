import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Activity, Shield, Camera, Save, Edit3, 
  Mail, MapPin, Hash, Zap, CheckCircle2 
} from 'lucide-react';
import { useAppStore } from '@/lib/store';


const Profile = () => {
  const { user, updateProfile, recentChecks = [] } = useAppStore();
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || 'Operator',
    email: user?.email || 'operator@healthlypulse.ai',
    location: user?.location || 'Nairobi, KE',
    phone: user?.phone || '+254 700 000000', // ✅ added
    bio: user?.bio || 'Neural interface operator and community health advocate.'
  });
  
  const fileInputRef = useRef(null);
  const [profilePic, setProfilePic] = useState(user?.profilePic || null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  const handleSave = () => {
    updateProfile({
      ...formData,
      profilePic: profilePic
    });
    setIsEditing(false);
  };


  return (
    <div className="space-y-12 pl-0 lg:pl-12 xl:pl-24 pb-20 transition-all duration-700">
      
      {/* --- HEADER --- */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }}
          className="space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/20">
            <Hash className="w-3 h-3 text-cyan-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">Identity Node</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
            NEURAL <span className="text-cyan-500">ID</span>
          </h1>
        </motion.div>

        <button 
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all duration-300 ${
            isEditing 
            ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
            : 'bg-white/5 border border-white/10 hover:border-cyan-500/50 text-white'
          }`}
        >
          {isEditing ? <><Save className="w-4 h-4" /> Save Link</> : <><Edit3 className="w-4 h-4" /> Sync Identity</>}
        </button>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* --- LEFT: NEURAL CARD --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="xl:col-span-1"
        >
          <div className="glass-card p-1 relative overflow-hidden rounded-[40px] border border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full animate-pulse" />
            
            <div className="relative z-10 p-10 flex flex-col items-center text-center">
              <div className="relative group mb-8">
                <div className="w-40 h-40 rounded-[32px] overflow-hidden border-2 border-cyan-500/30 p-2 bg-[#020617]">
                  <div className="w-full h-full rounded-[24px] overflow-hidden bg-white/5 flex items-center justify-center">
                    {profilePic ? (
                      <img src={profilePic} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-16 h-16 text-white/10" />
                    )}
                  </div>
                </div>
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-2 right-2 p-3 bg-cyan-500 rounded-2xl shadow-xl text-white scale-0 group-hover:scale-100 transition-transform duration-300"
                >
                  <Camera className="w-5 h-5" />
                </button>
                <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
              </div>

              <h2 className="text-4xl font-black italic tracking-tighter uppercase mb-2">{formData.name}</h2>
              <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.4em] mb-10">Standard Operator</p>
              
              <div className="w-full grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-5 rounded-3xl border border-white/5">
                  <Activity className="w-5 h-5 text-cyan-400 mx-auto mb-3" />
                  <p className="text-2xl font-black italic">{recentChecks.length}</p>
                  <p className="text-[9px] font-bold text-white/20 uppercase">Syncs</p>
                </div>
                <div className="bg-white/5 p-5 rounded-3xl border border-white/5">
                  <Shield className="w-5 h-5 text-emerald-400 mx-auto mb-3" />
                  <p className="text-2xl font-black italic">ACTIVE</p>
                  <p className="text-[9px] font-bold text-white/20 uppercase">Status</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT: DATA MODULES --- */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="xl:col-span-2 space-y-6"
        >
          <div className="glass-card p-10 rounded-[40px] border border-white/5 bg-white/[0.01]">
            <div className="flex items-center gap-4 mb-10">
              <Zap className="w-5 h-5 text-cyan-500" />
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-white/40">Core Bio-Data</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Name */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Display Alias</label>
                <input 
                  disabled={!isEditing}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:border-cyan-500/50 outline-none transition-all disabled:opacity-50"
                />
              </div>

              {/* Email */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Neural Link (Email)</label>
                <div className="relative">
                  <input 
                    disabled={!isEditing}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:border-cyan-500/50 outline-none transition-all disabled:opacity-50"
                  />
                  <Mail className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/10" />
                </div>
              </div>

              {/* Location */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Geo-Location</label>
                <div className="relative">
                  <input 
                    disabled={!isEditing}
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:border-cyan-500/50 outline-none transition-all disabled:opacity-50"
                  />
                  <MapPin className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/10" />
                </div>
              </div>

              {/* Phone ✅ */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Signal Line (Phone)</label>
                <div className="relative">
                  <input 
                    disabled={!isEditing}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:border-cyan-500/50 outline-none transition-all disabled:opacity-50"
                  />
                  <Hash className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/10" />
                </div>
              </div>

              {/* Bio */}
              <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Operator Directive (Bio)</label>
                <textarea 
                  disabled={!isEditing}
                  value={formData.bio}
                  rows={3}
                  onChange={(e) => setFormData({...formData, bio: e.target.value})}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:border-cyan-500/50 outline-none transition-all disabled:opacity-50 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-8 bg-cyan-500/5 border border-cyan-500/20 rounded-[32px]">
            <div className="flex items-center gap-4">
              <CheckCircle2 className="w-6 h-6 text-cyan-400" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Identity Verified</p>
                <p className="text-[9px] text-white/40 uppercase">Last sync: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
            <div className="hidden sm:block h-px w-24 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;