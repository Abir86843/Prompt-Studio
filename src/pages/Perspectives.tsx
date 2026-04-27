import { motion } from 'motion/react';
import { Camera, Maximize, Target, Video, Map, ArrowDown, Search, Share2 } from 'lucide-react';

const perspectives = [
  {
    title: 'Cinematic Wide',
    icon: Maximize,
    description: 'Establishing shot. Shows the environment, scale, and atmosphere. Essential for setting the scene.',
    color: 'bg-orange-500/10 text-orange-500'
  },
  {
    title: 'Medium Close-up',
    icon: Target,
    description: 'Tighter framing on the subject. Focuses on emotion, facial expressions, or key character details.',
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    title: 'POV',
    icon: Search,
    description: "Point of View. Places the audience directly in the character's shoes for ultimate immersion.",
    color: 'bg-emerald-500/10 text-emerald-500'
  },
  {
    title: 'Tracking Shot',
    icon: Share2,
    description: 'Dynamic movement. Following the subject along their path, creating a sense of momentum.',
    color: 'bg-purple-500/10 text-purple-500'
  },
  {
    title: 'Drone / Aerial',
    icon: Map,
    description: 'High altitude birds-eye view. Provides geographical context and grand scale.',
    color: 'bg-rose-500/10 text-rose-500'
  },
  {
    title: 'Low Angle Hero',
    icon: ArrowDown,
    description: 'Looking up from below. Makes the subject appear powerful, imposing, and significant.',
    color: 'bg-yellow-500/10 text-yellow-500'
  },
  {
    title: 'Macro Detail',
    icon: Camera,
    description: 'Extreme close-up. Focuses on textures, small mechanics, or intricate details often missed.',
    color: 'bg-indigo-500/10 text-indigo-500'
  },
  {
    title: 'Crane / Jib Shot',
    icon: Video,
    description: 'Sweeping vertical movement. Adds a professional production value through complex camera curves.',
    color: 'bg-cyan-500/10 text-cyan-500'
  }
];

export default function Perspectives() {
  return (
    <div className="max-w-6xl mx-auto space-y-16 py-12">
      <header className="text-center space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold tracking-tighter"
        >
          CAMERA <span className="text-blue-500">PERSPECTIVES</span>
        </motion.h1>
        <p className="text-zinc-400 font-mono text-sm tracking-widest uppercase text-center mx-auto max-w-xl">
          The 8 structural viewports our AI uses to dissect your visual narrative.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {perspectives.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-3xl hover:bg-zinc-900/60 transition-colors group"
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${p.color} group-hover:scale-110 transition-transform`}>
              <p.icon size={24} />
            </div>
            <h3 className="text-lg font-bold mb-3">{p.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans">{p.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="p-8 bg-zinc-900/20 border border-zinc-800 rounded-[2rem] flex flex-col items-center text-center gap-6">
        <h3 className="text-2xl font-bold">Why 8 Perspectives?</h3>
        <p className="text-zinc-400 max-w-3xl">
          Standard video generation often lacks consistency across different shots. By forcing the AI to generate prompts for these 8 specific cinematic angles simultaneously, we ensure that the "logic" of your scene is maintained, allowing you to generate a full sequence of shots for a single scene with perfect continuity.
        </p>
      </div>
    </div>
  );
}
