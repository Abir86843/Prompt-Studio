import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Upload, 
  Camera, 
  Sparkles, 
  Copy, 
  Check, 
  RefreshCcw, 
  Image as ImageIcon,
  Monitor,
  Maximize
} from 'lucide-react';
import { analyzeImage } from '../services/geminiService';
import { AnalysisResult, VideoPrompt } from '../types';

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64 = (event.target?.result as string).split(',')[1];
        setImage(event.target?.result as string);
        setMimeType(file.type);
        processImage(base64, file.type);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const processImage = async (base64: string, type: string) => {
    setIsProcessing(true);
    setResult(null);
    try {
      const analysis = await analyzeImage(base64, type);
      setResult(analysis);
    } catch (error) {
      console.error(error);
      alert('Failed to analyze image. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const reset = () => {
    setImage(null);
    setResult(null);
    setIsProcessing(false);
  };

  return (
    <main>
      <AnimatePresence mode="wait">
        {!image ? (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="max-w-3xl mx-auto text-center py-20"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]"
            >
              TRANSMUTE <span className="text-orange-500">IMAGES</span> INTO MOTION.
            </motion.h2>
            <p className="text-lg text-zinc-400 mb-12 max-w-xl mx-auto leading-relaxed">
              Upload a scene. Our AI architect analyzes every pixel to generate hyper-realistic video prompts across 8 cinematic perspectives.
            </p>

            <div 
              onClick={() => fileInputRef.current?.click()}
              className="group relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative border-2 border-dashed border-zinc-800 bg-zinc-900/50 rounded-3xl p-16 transition-all hover:border-orange-500/50 hover:bg-zinc-900/80">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-500">
                    <Upload className="text-white group-hover:text-black" size={32} />
                  </div>
                  <span className="text-lg font-medium text-zinc-300">Drop your visual guide here</span>
                  <span className="text-xs text-zinc-500 font-mono tracking-widest uppercase">JPG, PNG or WEBP up to 10MB</span>
                </div>
              </div>
              <input 
                type="file" 
                className="hidden" 
                ref={fileInputRef} 
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12"
          >
            {/* Left Column: Image Preview & Meta */}
            <div className="space-y-8">
              <div className="sticky top-12 space-y-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-orange-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 aspect-square">
                    <img src={image} alt="Input" className="w-full h-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-center gap-2">
                        <ImageIcon size={14} className="text-orange-500" />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Input Context</span>
                      </div>
                    </div>
                  </div>
                </div>

                {result && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl backdrop-blur-sm">
                      <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4">Scene Intelligence</h3>
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <Sparkles size={16} className="text-orange-500 shrink-0" />
                          <p className="text-sm text-zinc-300 leading-relaxed"><span className="text-white font-medium">Subject:</span> {result.subject}</p>
                        </div>
                        <div className="flex gap-3">
                          <Monitor size={16} className="text-blue-500 shrink-0" />
                          <p className="text-sm text-zinc-300 leading-relaxed"><span className="text-white font-medium">Lighting:</span> {result.lighting}</p>
                        </div>
                        <div className="flex gap-3">
                          <Maximize size={16} className="text-emerald-500 shrink-0" />
                          <p className="text-sm text-zinc-300 leading-relaxed"><span className="text-white font-medium">Environment:</span> {result.environment}</p>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={reset}
                      className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                    >
                      <RefreshCcw size={14} />
                      Start Over
                    </button>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Right Column: Prompts */}
            <div className="space-y-6">
              {isProcessing ? (
                <div className="h-[600px] flex flex-col items-center justify-center gap-6 border border-zinc-800 rounded-3xl bg-zinc-900/20 backdrop-blur-sm">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 border-4 border-orange-500/20 rounded-full" />
                    <div className="absolute inset-0 border-4 border-t-orange-500 rounded-full animate-spin" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold uppercase tracking-widest mb-2">Analyzing Geometry</h3>
                    <p className="text-zinc-500 font-mono text-xs animate-pulse">EXTRACTING CINEMATIC SEMANTICS...</p>
                  </div>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-1 gap-4"
                >
                  {result?.prompts.map((prompt: VideoPrompt, idx: number) => (
                    <motion.div
                      key={prompt.perspective}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group relative bg-zinc-900/30 hover:bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 transition-all"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                            <Camera size={16} className="text-orange-500" />
                          </div>
                          <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">{prompt.perspective}</span>
                        </div>
                        <button 
                          onClick={() => copyToClipboard(prompt.prompt, prompt.perspective)}
                          className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 hover:text-white"
                        >
                          {copiedId === prompt.perspective ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                      <p className="text-zinc-200 leading-relaxed font-mono text-sm selection:bg-orange-500/50">
                        {prompt.prompt}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
