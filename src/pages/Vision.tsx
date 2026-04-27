import { motion } from 'motion/react';
import { Sparkles, Brain, Cpu, Zap } from 'lucide-react';

export default function Vision() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-12">
      <header className="text-center space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold tracking-tighter"
        >
          THE <span className="text-orange-500">VISION</span>
        </motion.h1>
        <p className="text-zinc-400 font-mono text-sm tracking-widest uppercase">The future of cinematic direction</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl"
        >
          <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6">
            <Brain className="text-orange-500" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-4">Semantic Understanding</h3>
          <p className="text-zinc-400 leading-relaxed">
            Our AI doesn't just see pixels; it understands context. It identifies depth, emotion, and narrative potential in every slice of visual data.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl"
        >
          <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
            <Cpu className="text-blue-500" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-4">Cinematic Logic</h3>
          <p className="text-zinc-400 leading-relaxed">
            Trained on thousands of hours of high-end cinematography, the engine applies real-world camera geometry to static interpretations.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl"
        >
          <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
            <Zap className="text-emerald-500" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-4">Instant Translation</h3>
          <p className="text-zinc-400 leading-relaxed">
            From image to 8-perspective video prompts in seconds. Bridge the gap between static inspiration and dynamic motion generation.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl"
        >
          <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
            <Sparkles className="text-purple-500" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-4">Aesthetic Consistency</h3>
          <p className="text-zinc-400 leading-relaxed">
            Maintains lighting, texture, and color theory across all generated prompts to ensure unified video generations.
          </p>
        </motion.div>
      </div>

      <section className="p-12 bg-zinc-950 border border-zinc-900 rounded-[3rem] text-center border-dashed">
        <p className="text-zinc-500 italic max-w-2xl mx-auto">
          "Our goal is to give every creator the eyes of a master cinematographer, powered by the intelligence of Gemini."
        </p>
      </section>
    </div>
  );
}
