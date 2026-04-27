/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Video, 
  Maximize,
  Monitor,
  Wind
} from 'lucide-react';

// Pages
import Home from './pages/Home';
import Vision from './pages/Vision';
import Perspectives from './pages/Perspectives';
import Documentation from './pages/Documentation';

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500/30">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <Link to="/">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Video className="text-black" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tighter uppercase">PROMPT STUDIO</h1>
                <p className="text-[10px] text-zinc-500 tracking-[0.2em] font-mono uppercase">Cinematic AI Intelligence</p>
              </div>
            </motion.div>
          </Link>
          
          <nav className="hidden md:flex gap-8 items-center">
            <Link 
              to="/vision" 
              className={`text-xs uppercase tracking-widest transition-colors ${location.pathname === '/vision' ? 'text-orange-500' : 'text-zinc-400 hover:text-white'}`}
            >
              Vision
            </Link>
            <Link 
              to="/perspectives" 
              className={`text-xs uppercase tracking-widest transition-colors ${location.pathname === '/perspectives' ? 'text-blue-500' : 'text-zinc-400 hover:text-white'}`}
            >
              Perspectives
            </Link>
            <Link 
              to="/documentation" 
              className={`text-xs uppercase tracking-widest transition-colors ${location.pathname === '/documentation' ? 'text-emerald-500' : 'text-zinc-400 hover:text-white'}`}
            >
              Documentation
            </Link>
          </nav>
        </header>

        {children}
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-zinc-900 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border border-zinc-800 rounded-full flex items-center justify-center">
              <Wind size={14} className="text-zinc-500" />
            </div>
            <span className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase italic">Powered by Gemini Vision 1.5/2.0</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="p-2 text-zinc-600 hover:text-white transition-colors"><Maximize size={18} /></a>
            <a href="#" className="p-2 text-zinc-600 hover:text-white transition-colors"><Monitor size={18} /></a>
            <a href="#" className="p-2 text-zinc-600 hover:text-white transition-colors"><Video size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/perspectives" element={<Perspectives />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

