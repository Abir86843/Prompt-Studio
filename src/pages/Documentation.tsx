import { motion } from 'motion/react';
import { BookOpen, Copy, Terminal, Monitor, Sparkles, AlertCircle } from 'lucide-react';

export default function Documentation() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-12 pb-24">
      <header className="text-left space-y-4">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl font-bold tracking-tighter"
        >
          STUDIO <span className="text-emerald-500">MANUAL</span>
        </motion.h1>
        <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Version 1.0.4 - Operating Procedures</p>
      </header>

      {/* Quick Start */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <BookOpen className="text-emerald-500" size={20} />
          <h2 className="text-xl font-bold uppercase tracking-widest">Workflow Overview</h2>
        </div>
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 space-y-4">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-zinc-800 shrink-0 flex items-center justify-center font-mono text-xs border border-zinc-700">01</div>
            <div>
              <p className="font-bold mb-1">Source Analysis</p>
              <p className="text-sm text-zinc-400">Upload a reference image. Ideally, this should represent the main subject, color palette, and lighting of your desired scene.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-zinc-800 shrink-0 flex items-center justify-center font-mono text-xs border border-zinc-700">02</div>
            <div>
              <p className="font-bold mb-1">Prompt Extraction</p>
              <p className="text-sm text-zinc-400">Our Vision Engine (Gemini) generates 8 structural prompts. These are specifically tuned for models like Runway, Luma, or Sora.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-zinc-800 shrink-0 flex items-center justify-center font-mono text-xs border border-zinc-700">03</div>
            <div>
              <p className="font-bold mb-1">Generation</p>
              <p className="text-sm text-zinc-400">Copy the prompt and paste it into your video generation platform of choice. For best results, use the original image as an "image-to-video" reference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-4">
          <div className="flex items-center gap-3">
             <Sparkles className="text-orange-500" size={18} />
             <h3 className="font-bold tracking-widest uppercase text-sm">Target Platforms</h3>
          </div>
          <ul className="space-y-2 text-sm text-zinc-400 font-mono">
            <li>• Runway Gen-2 / Gen-3</li>
            <li>• Luma Dream Machine</li>
            <li>• Kling AI</li>
            <li>• Sora (via API)</li>
            <li>• Pika Labs</li>
          </ul>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3">
             <AlertCircle className="text-blue-500" size={18} />
             <h3 className="font-bold tracking-widest uppercase text-sm">Image-to-Video Tips</h3>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Always use the <span className="text-white italic">"High Complexity"</span> setting if available. Our prompts include specific camera motion keywords (e.g., "dolly zoom", "cinematic pan") that work best with motion sliders set to 7-10.
          </p>
        </section>
      </div>

      {/* Technical FAQ */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Terminal className="text-zinc-500" size={20} />
          <h2 className="text-xl font-bold uppercase tracking-widest">Technical Specifications</h2>
        </div>
        <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-900 font-mono text-xs space-y-4">
           <div>
              <p className="text-zinc-500 mb-1">// Model Configuration</p>
              <p className="text-emerald-500 font-bold">engine: "gemini-3-flash-preview"</p>
              <p className="text-zinc-300">vision_capability: true</p>
              <p className="text-zinc-300">json_format: strict</p>
           </div>
           <div className="pt-4 border-t border-zinc-900">
              <p className="text-zinc-500 mb-1">// API Latency</p>
              <p className="text-zinc-300">avg_analysis_time: 2.4s</p>
              <p className="text-zinc-300">max_image_size: 10MB</p>
           </div>
        </div>
      </section>

      <footer className="pt-12 text-center border-t border-zinc-900">
        <p className="text-xs text-zinc-600 uppercase tracking-[0.4em]">End of Documentation</p>
      </footer>
    </div>
  );
}
