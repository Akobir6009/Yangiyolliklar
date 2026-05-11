import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  TrendingUp, 
  Search, 
  MapPin, 
  Phone, 
  Clock,
  Star,
  ChevronRight,
  LayoutGrid,
  Eye,
  MessageCircle,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { NewsCard } from '../components/NewsCard';
import { PollWidget } from '../components/PollWidget';
import { ReelPlayer } from '../components/ReelPlayer';
import { MOCK_NEWS, MOCK_REELS, MOCK_BUSINESSES, MOCK_POLL } from '../lib/mockData';
import { useLanguage } from '../context/LanguageContext';
import { formatDate } from '../lib/utils';

export default function Home() {
  const { language } = useLanguage();

  const labels: Record<string, any> = {
    uz: {
      heroTitle: 'YANGIYO\'LLIKLAR BILAN HAQIQIY YANGILIKLAR',
      heroSub: 'Yangiyul shahri va tumanidagi eng so\'nggi voqealar, xizmatlar va qiziqarli lahzalar barchasi bir joyda.',
      latestNews: 'So\'nggi yangiliklar',
      reels: 'Yangiyul Reels',
      directory: 'Yaqin atrofdagi xizmatlar',
      viewAll: 'Hammasini ko\'rish',
      searchPlaceholder: 'Restoran, salon yoki xizmatni qidiring...',
    },
    en: {
      heroTitle: 'REAL NEWS WITH YANGIYO\'LLIKLAR',
      heroSub: 'Latest events, services and interesting moments in Yangiyul city and district all in one place.',
      latestNews: 'Latest News',
      reels: 'Yangiyul Reels',
      directory: 'Nearby Services',
      viewAll: 'View All',
      searchPlaceholder: 'Search for restaurants, salons or services...',
    },
    ru: {
      heroTitle: 'РЕАЛЬНЫЕ НОВОСТИ С YANGIYO\'LLIKLAR',
      heroSub: 'Последние события, услуги и интересные моменты города Янгиюль и района в одном месте.',
      latestNews: 'Последние новости',
      reels: 'Янгиюль Reels',
      directory: 'Услуги поблизости',
      viewAll: 'Посмотреть все',
      searchPlaceholder: 'Ищите рестораны, салоны или услуги...',
    }
  };

  const t = labels[language];
  const mainNews = MOCK_NEWS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Bento Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-6 gap-6 min-h-[1400px] md:h-[1200px]">
        
        {/* Main News Hero (Col 1-2, Row 1-3) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 md:row-span-3 glass-card relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
          <img 
            src={mainNews.imageUrl} 
            alt={mainNews.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-0 left-0 p-10 z-20 space-y-4">
            <span className="bg-brand-orange text-white text-[10px] font-black px-3 py-1 rounded uppercase tracking-[0.2em] inline-block">
              Dolzarb
            </span>
            <Link to={`/news/${mainNews.id}`}>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter uppercase italic hover:text-brand-orange transition-colors">
                {mainNews.title}
              </h2>
            </Link>
            <p className="text-zinc-300 text-sm md:text-base font-medium line-clamp-2 max-w-xl">
              {mainNews.content}
            </p>
          </div>
        </motion.div>

        {/* Reels Sidebar (Col 3, Row 1-4) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-1 md:row-span-4 glass-card bg-zinc-950 border-4 border-brand-orange/20 relative"
        >
          <ReelPlayer reel={MOCK_REELS[0]} />
        </motion.div>

        {/* Directory Search (Col 4, Row 1-2) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-1 md:row-span-2 bg-brand-orange p-8 rounded-[2.5rem] text-white shadow-xl shadow-brand-orange/20 flex flex-col justify-between"
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter leading-none">Xizmatlar Qidiruvi</h3>
            <p className="text-sm font-medium opacity-80 italic">Restoranlar, do'konlar va shifoxonalar...</p>
          </div>
          <div className="space-y-3">
             <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl flex items-center gap-3 border border-white/20 text-sm font-bold">
               <Search size={18} />
               Oltin Vodiy Restorani
             </div>
             <Link to="/directory" className="block text-center text-xs font-black uppercase tracking-widest bg-white/20 p-3 rounded-xl border border-white/10 hover:bg-white/30 transition-colors">
               Barchasini ko'rish
             </Link>
          </div>
        </motion.div>

        {/* Weather/Status (Col 4, Row 3) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-1 md:row-span-1 glass-card p-6 flex items-center justify-between"
        >
          <div className="space-y-1">
            <div className="text-4xl font-black italic tracking-tighter">32°</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Peshin: 12:48</div>
          </div>
          <div className="text-right">
            <div className="text-xs font-black uppercase text-zinc-400 tracking-widest">Yangiyo'l</div>
            <div className="text-sm font-bold">Quyoshli</div>
          </div>
        </motion.div>

        {/* Poll Section (Col 1, Row 4-5) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-1 md:row-span-2 bg-indigo-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <TrendingUp size={120} />
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] opacity-60">So'rovnoma</h4>
            <p className="text-xl font-bold leading-tight">{MOCK_POLL.question}</p>
          </div>
          <div className="space-y-2">
            <button className="w-full bg-white/10 border border-white/20 p-3 rounded-xl text-left text-xs font-bold hover:bg-white/20 transition-colors">
              {MOCK_POLL.options[0].label}
            </button>
            <button className="w-full bg-white/10 border border-white/20 p-3 rounded-xl text-left text-xs font-bold hover:bg-white/20 transition-colors">
              {MOCK_POLL.options[1].label}
            </button>
            <Link to="/" className="block text-[10px] font-black uppercase tracking-widest text-indigo-300 pt-2 hover:underline">
              Jami: {MOCK_POLL.totalVotes} kishi
            </Link>
          </div>
        </motion.div>

        {/* Ads Billboard (Col 2, Row 4-5) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="md:col-span-1 md:row-span-2 bg-yellow-400 rounded-[2.5rem] p-8 relative overflow-hidden group"
        >
          <span className="absolute top-6 right-6 bg-black text-white text-[10px] font-black px-3 py-1 rounded lowercase tracking-widest">
            e'lon
          </span>
          <div className="h-full flex flex-col justify-between text-black">
            <div className="font-display text-3xl font-black italic leading-none uppercase tracking-tighter">
              TILLA BALIQ <br />MAHSULOTLARI
            </div>
            <div>
              <p className="text-black/60 text-xs font-bold font-sans">Yangi tutilgan baliqlar, hamyonbop narxlarda!</p>
              <div className="mt-4 font-black flex items-center gap-2">
                <Phone size={18} />
                99 123-45-67
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini Feed (Col 4, Row 4-6) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="md:col-span-1 md:row-span-3 glass-card p-8 flex flex-col"
        >
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 mb-6">So'nggi xabarlar</h4>
          <div className="space-y-6 flex-1">
            {MOCK_NEWS.map(news => (
              <Link key={news.id} to={`/news/${news.id}`} className="block group border-b border-zinc-100 pb-4 last:border-none">
                <div className="text-[10px] font-black text-brand-orange uppercase tracking-widest mb-1">
                  {formatDate(news.createdAt)}
                </div>
                <div className="text-sm font-bold leading-tight group-hover:text-brand-orange transition-colors">
                  {news.title}
                </div>
              </Link>
            ))}
          </div>
          <Link to="/news" className="text-brand-orange text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 pt-6 border-t border-zinc-50 group hover:gap-4 transition-all">
            Barchasi
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Donation Mini (Col 1, Row 6) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="md:col-span-1 md:row-span-1 bg-emerald-500 rounded-[2.5rem] p-6 text-white flex items-center gap-4 group cursor-pointer hover:bg-emerald-600 transition-colors"
        >
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Heart size={24} fill="white" />
          </div>
          <div>
            <div className="text-sm font-black uppercase tracking-tighter">Ehson Qilish</div>
            <div className="text-[10px] opacity-70 font-bold uppercase tracking-widest">Ko'mak bering</div>
          </div>
        </motion.div>

        {/* Social Bar (Col 2-3, Row 6) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="md:col-span-2 md:row-span-1 bg-slate-900 rounded-[2.5rem] p-8 flex items-center justify-between text-white"
        >
          <div className="flex -space-x-3">
             {[1,2,3,4].map(v => (
               <div key={v} className="w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] font-black">
                 {v === 4 ? '+5' : ''}
               </div>
             ))}
          </div>
          <div className="hidden sm:block text-xs font-medium uppercase tracking-widest opacity-60">
            Ayni damda <span className="text-brand-orange font-black">128 kishi</span> saytda
          </div>
          <button className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
            CHATGA QO'SHILISH
          </button>
        </motion.div>

      </div>

      {/* Telegram Link Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex items-center justify-center gap-3 text-zinc-400 font-bold text-[10px] uppercase tracking-[0.4em] py-12"
      >
        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        Telegram LIVE: @yangiyolliklar
      </motion.div>
    </div>
  );
}
