import React from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  Coins, 
  Gift, 
  Users, 
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Globe
} from 'lucide-react';

export default function Donations() {
  const charities = [
    {
      title: 'Yangiyul tuman shifoxonasi uchun',
      description: 'Eng zarur meditsina uskunalari va bemorlar uchun qo\'shimcha qulayliklar yaratish uchun ehson guruhi.',
      goal: 50000000,
      current: 12400000,
      image: 'https://picsum.photos/seed/hospital/800/600'
    },
    {
      title: 'Kam ta\'minlangan oilalarga yordam',
      description: 'Ramadan ehsonlari doirasida oziq-ovqat va issiq kiyim-kechak jamg\'armasi.',
      goal: 25000000,
      current: 18750000,
      image: 'https://picsum.photos/seed/help/800/600'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      <section className="bg-brand-orange py-32 text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <Heart size={600} fill="white" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="font-display text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
              Ehsonlar & <span className="text-zinc-900">Donatlar</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto opacity-90">
              Yaxshilik qilish uchun kichik qadam ham katta natija beradi. Birgalikda Yangiyulni yaxshilaylik.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl flex items-center gap-3 border border-white/20">
              <ShieldCheck size={24} />
              <span className="font-bold">Xavfsiz to'lov tizimi</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl flex items-center gap-3 border border-white/20">
              <Globe size={24} />
              <span className="font-bold">100% shaffoflik</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {charities.map((item, idx) => {
          const progress = Math.round((item.current / item.goal) * 100);
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card flex flex-col h-full hover:shadow-2xl transition-all"
            >
              <div className="h-64 rounded-t-2xl overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl font-black text-brand-orange">
                  {progress}%
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-black leading-tight uppercase italic font-display">{item.title}</h3>
                  <p className="text-zinc-600 font-medium leading-relaxed">{item.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-full h-3 bg-zinc-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${progress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-brand-orange"
                    />
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Yig'ilgan</span>
                      <p className="font-display text-2xl font-black text-brand-orange">
                        {item.current.toLocaleString()} <span className="text-sm">so'm</span>
                      </p>
                    </div>
                    <div className="space-y-1 text-right">
                      <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Maqsad</span>
                      <p className="font-bold text-zinc-900">
                        {item.goal.toLocaleString()} so'm
                      </p>
                    </div>
                  </div>
                  
                  <button className="w-full bg-zinc-950 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brand-orange group transition-colors">
                    Hozir ehson qilish
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      <section className="bg-zinc-50 py-24">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="font-display text-4xl font-black uppercase italic tracking-tight">Donator bo'lish qanday foyda beradi?</h2>
            <p className="text-zinc-600 font-medium">Sizning yordamingiz shaffoflik bilan sarflanadi va biz saytimizda har bir sentning hisobotini berib boramiz.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-3xl space-y-4 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
                <Coins size={24} />
              </div>
              <h4 className="font-bold">Shaffoflik</h4>
              <p className="text-sm text-zinc-500">Barcha moliyaviy hisobotlar ochiq holda e'lon qilinadi.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl space-y-4 shadow-sm">
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center">
                <Heart size={24} />
              </div>
              <h4 className="font-bold">Bevosita yordam</h4>
              <p className="text-sm text-zinc-500">Ehsonlar kerakli manzilga kechikmasdan etib boradi.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl space-y-4 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                <Users size={24} />
              </div>
              <h4 className="font-bold">Hamjamiyat</h4>
              <p className="text-sm text-zinc-500">Yangiyul faollari bilan birga harakat qilamiz.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
