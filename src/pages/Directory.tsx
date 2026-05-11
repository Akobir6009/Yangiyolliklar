import React from 'react';
import { MOCK_BUSINESSES } from '../lib/mockData';
import { Search, MapPin, Phone, Clock, Star, ExternalLink, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Directory() {
  const [search, setSearch] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('Hammasi');

  const categories = ['Hammasi', 'Restoran', 'Kafe', 'Xizmatlar', 'Go\'zallik saloni', 'Sog\'liqni saqlash', 'Ta\'lim'];

  const filteredBusinesses = MOCK_BUSINESSES.filter(biz => {
    const matchesSearch = biz.name.toLowerCase().includes(search.toLowerCase()) || 
                         biz.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'Hammasi' || biz.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <header className="space-y-8 bg-zinc-900 text-white p-12 rounded-[2.5rem] relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 scale-150">
          <MapPin size={400} fill="white" />
        </div>
        
        <div className="relative z-10 space-y-6">
          <h1 className="font-display text-5xl md:text-7xl font-black italic uppercase tracking-tighter">Xizmatlar mundarijasi</h1>
          <p className="text-zinc-400 font-medium max-w-xl italic">Yangiyul shahridagi eng yaxshi maskanlar, restoranlar va xizmat ko'rsatish markazlarini shu erdan topasiz.</p>
          
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500" size={24} />
              <input 
                type="text" 
                placeholder="Nima qidirayapsiz? (Masalan: 'shashlik' yoki 'sartarosh')"
                className="w-full pl-16 pr-6 py-6 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-600 focus:bg-white/10 transition-all outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 px-8 py-5 rounded-2xl font-bold transition-all text-sm uppercase tracking-wide border-2 ${
              activeCategory === cat 
                ? 'bg-brand-orange border-brand-orange text-white shadow-xl shadow-brand-orange/20' 
                : 'bg-white border-zinc-100 text-zinc-400 hover:border-zinc-200 hover:bg-zinc-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredBusinesses.map((biz) => (
            <motion.div
              layout
              key={biz.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-card overflow-hidden group flex flex-col h-full hover:shadow-2xl transition-all border-none"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={biz.imageUrl}
                  alt={biz.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl font-black text-brand-orange text-xs uppercase tracking-widest">
                  {biz.category}
                </div>
                <div className="absolute top-4 right-4 bg-zinc-900 text-white px-3 py-2 rounded-xl flex items-center gap-1.5 font-bold text-sm">
                  <Star size={16} className="text-amber-400" fill="currentColor" />
                  {biz.rating}
                </div>
              </div>
              
              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="font-display text-3xl font-black italic uppercase tracking-tighter group-hover:text-brand-orange transition-colors">
                    {biz.name}
                  </h3>
                  <p className="text-zinc-500 text-sm font-medium italic leading-relaxed">
                    {biz.description}
                  </p>
                  
                  <div className="space-y-3 pt-4 border-t border-zinc-100">
                    <div className="flex items-start gap-3 text-zinc-600 text-sm font-medium">
                      <MapPin size={18} className="text-brand-orange flex-shrink-0" />
                      {biz.address}
                    </div>
                    <div className="flex items-center gap-3 text-zinc-600 text-sm font-bold">
                      <Phone size={18} className="text-brand-orange flex-shrink-0" />
                      {biz.phone}
                    </div>
                    <div className="flex items-center gap-3 text-zinc-600 text-sm font-medium">
                      <Clock size={18} className="text-brand-orange flex-shrink-0" />
                      {biz.workingHours}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-6">
                   <button className="flex-1 bg-zinc-50 text-brand-orange py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-100 transition-colors">
                    <ExternalLink size={18} />
                    Profilni ko'rish
                  </button>
                  <button className="w-14 h-14 bg-brand-orange text-white rounded-xl flex items-center justify-center hover:bg-brand-orange-dark transition-colors shadow-lg shadow-brand-orange/20">
                    <MessageCircle size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredBusinesses.length === 0 && (
        <div className="text-center py-32 bg-zinc-50 rounded-[3rem] border-4 border-dashed border-zinc-100 italic space-y-4">
           <Search size={64} className="mx-auto text-zinc-200" />
           <p className="text-zinc-400 font-bold text-xl uppercase tracking-tighter">Bunday maskan topilmadi.</p>
           <button 
            onClick={() => { setSearch(''); setActiveCategory('Hammasi'); }}
            className="text-brand-orange font-bold uppercase tracking-widest hover:underline"
           >
             Barcha maskanlarni ko'rish
           </button>
        </div>
      )}
    </div>
  );
}
