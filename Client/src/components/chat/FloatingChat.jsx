import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppStore } from '@/lib/store';
import { analyzeSymptoms } from '@/lib/symptom-data';

const FloatingChat = () => {
  const { chatOpen, toggleChat } = useAppStore();
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "AI Online. How can I help?" }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

const sendMessage = async () => {
  if (!input.trim()) return;
  const userMsg = input;
  setInput('');
  setMessages((prev) => [...prev, { role: 'user', content: userMsg }]);
  setTyping(true);

  await new Promise((r) => setTimeout(r, 1200));

  const results = analyzeSymptoms(userMsg);
  let response = '';
  
  if (results[0]?.disease === 'No Match Found') {
    response = "I couldn't identify specific symptoms. Could you describe them more clearly? (e.g., 'I have a high fever and body aches')\n\n**Options:**\n• Rephrase symptoms\n• Visit 'Nearby Clinics' page\n• Check 'Food Guide' for immunity";
  } else {
    const top = results[0];
    // Structured response with multiple options
    response = `**Symptom Analysis Complete**\n\nPossible Match: **${top.disease}**\nSeverity: ${top.severity}\n\n${top.description}\n\n**Your Next Steps:**\n${top.treatments.slice(0, 3).map(t => `• ${t}`).join('\n')}\n• See a doctor if symptoms persist.`;
  }

  setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
  setTyping(false);
};

  return (
    <>
      <AnimatePresence>
        {!chatOpen && (
          <motion.button
            className="fixed bottom-6 right-6 w-14 h-14 rounded-xl bg-[#020617] border border-purple-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.2)] z-50 hover:border-purple-400 transition-colors"
            onClick={toggleChat}
            initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
          >
            <MessageCircle className="w-6 h-6 text-purple-400" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {chatOpen && (
          <motion.div
            // HEIGHT REDUCED FROM 600px to 450px
            className="fixed bottom-6 right-6 w-[350px] h-[450px] rounded-3xl bg-[#020617]/95 backdrop-blur-xl border border-white/10 flex flex-col z-[100] shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
          >
            {/* COMPACT HEADER */}
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest italic text-white/70">Health Node</p>
              </div>
              <Button variant="ghost" size="icon" onClick={toggleChat} className="h-8 w-8 text-white/30 hover:text-white">
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* TIGHTER MESSAGE STREAM */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide text-[13px]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-purple-600 text-white rounded-tr-none' 
                      : 'bg-white/5 border border-white/10 text-white/80 rounded-tl-none'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {typing && <div className="text-[10px] text-purple-400 animate-pulse uppercase font-bold tracking-widest">Processing...</div>}
            </div>

            {/* MINIMAL INPUT */}
            <div className="p-4 bg-white/5 border-t border-white/5 flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Analyze..."
                className="bg-black/40 border-white/10 h-10 text-xs rounded-xl focus:border-purple-500/50"
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              />
              <Button onClick={sendMessage} className="bg-purple-600 h-10 w-10 p-0 rounded-xl">
                <Send className="w-3 h-3 text-white" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChat;