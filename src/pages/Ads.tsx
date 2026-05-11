import React from 'react';
import { LayoutGrid, Plus, Search, Tag, MessageSquare, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

const MOCK_ADS = [
  { id: 1, title: 'Kvartira ijaraga beriladi', content: 'Yangiyul markazida 2 xonali kvartira. Barcha sharoitlari bor.', contact: '+998 90 999 88 77', category: 'Ko\'chmas mulk', price: '3,000,000 so\'m' },
  { id: 2, title: 'Chevrolet Tracker sotiladi', content: 'Yili 2023, bosgan yo\'li 15,000 km. Holati ideal.', contact: '+998 94 111 22 33', category: 'Avto', price: '$22,500' },
  { id: 3, title: 'Repetitor: Matematika', content: 'Abiturientlarni OTMga tayyorlayman. Darslar individual tarzda.', contact: '+998 97 444 55 66', category: 'Xizmatlar', price: '500,000 so\'m/oy' },
  { id: 4, title: 'Samsung S22 Ultra', content: 'Xotira 256GB, rangi qora. Holati yangidek.', contact: '+998 93 777 55 22', category: 'Texnika', price: '7,500,000 so\'m' },
];

export default function Ads() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-end gap-6 border-b-4 border-zinc-900 pb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-brand-orange font-black text-sm uppercase tracking-[0.3em] font-sans">
            <LayoutGrid size={20} />
            Reklamalar dunyosi
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.8]">
            E'lonlar <br /><span className="premium-orange-text">Taxtasi</span>
          </h1>
        </div>
        <button className="bg-zinc-900 text-white px-10 py-6 rounded-3xl font-black text-xl uppercase italic tracking-tighter hover:bg-brand-orange transition-all scale-100 active:scale-95 shadow-2xl flex items-center gap-4">
          <Plus size={32} />
          E'lon berish
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {MOCK_ADS.map((ad, idx) => (
          <motion.div
            key={ad.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`p-10 border-2 border-zinc-900 flex flex-col justify-between space-y-10 group hover:bg-zinc-900 hover:text-white transition-all transform hover:-rotate-1 cursor-pointer ${idx % 2 === 0 ? 'bg-zinc-50' : 'bg-white'}`}
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-black uppercase tracking-widest border border-current px-2 py-1 rounded">
                  {ad.category}
                </span>
                <Tag size={20} className="opacity-20 translate-x-4 -translate-y-4" />
              </div>
              <h3 className="font-display text-2xl font-black italic uppercase leading-none group-hover:text-brand-orange">
                {ad.title}
              </h3>
              <p className="text-zinc-500 font-medium group-hover:text-zinc-300 transition-colors">
                {ad.content}
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="text-3xl font-display font-black premium-orange-text">
                {ad.price}
              </div>
              <div className="flex items-center gap-2 pt-6 border-t border-zinc-200 group-hover:border-zinc-800">
                <button className="flex-1 bg-zinc-100 group-hover:bg-zinc-800 p-4 rounded-xl flex items-center justify-center text-zinc-900 group-hover:text-white transition-colors">
                  <PhoneCall size={20} />
                </button>
                <button className="flex-1 bg-zinc-100 group-hover:bg-zinc-800 p-4 rounded-xl flex items-center justify-center text-zinc-900 group-hover:text-white transition-colors">
                   <MessageSquare size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Banner Ad placeholder */}
      <div className="bg-zinc-100 p-1 rounded-[2.5rem] overflow-hidden">
        <div className="bg-white border-2 border-dashed border-zinc-300 p-20 rounded-[2.2rem] text-center space-y-4">
           <p className="text-zinc-400 font-black uppercase tracking-tighter text-4xl opacity-50 italic">Sizning reklamangiz shu erda bo'lishi mumkin</p>
           <button className="bg-brand-orange text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-brand-orange/20">
             Bog'lanish
           </button>
        </div>
      </div>
    </div>
  );
}
