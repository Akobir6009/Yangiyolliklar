import React from 'react';
import { MOCK_REELS } from '../lib/mockData';
import { ReelPlayer } from '../components/ReelPlayer';
import { motion } from 'motion/react';
import { Flame, Play, Music2 } from 'lucide-react';

export default function Reels() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white pb-20">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center gap-12">
        <header className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-brand-orange font-bold uppercase tracking-widest animate-bounce">
            <Flame size={20} fill="currentColor" />
            Vaybda bo'ling
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
            Yangiyul <span className="premium-orange-text">Reels</span>
          </h1>
          <p className="text-zinc-500 font-medium max-w-md mx-auto italic">
            Shahrimizning eng qiziqarli daqiqalari, tadbirlar va kreativ videolavhalar.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
          {MOCK_REELS.map((reel, idx) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <ReelPlayer reel={reel} />
            </motion.div>
          ))}
          {/* Fake more reels */}
          {MOCK_REELS.map((reel, idx) => (
            <motion.div
              key={reel.id + '-extra'}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <ReelPlayer reel={reel} />
            </motion.div>
          ))}
        </div>
        
        <div className="flex flex-col items-center gap-4 text-zinc-600 font-bold border-t border-zinc-900 pt-12 w-full max-w-lg">
          <Play size={40} className="opacity-20 translate-y-2" />
          <p className="uppercase tracking-widest text-sm">Yana ko'p videolar yo'lda...</p>
        </div>
      </div>
    </div>
  );
}
