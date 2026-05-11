import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  Home, 
  Newspaper, 
  Video, 
  MapPin, 
  LayoutGrid, 
  Menu, 
  X, 
  Heart,
  Globe,
  Bell
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { path: '/', label: 'Asosiy', icon: Home },
  { path: '/news', label: 'Yangiliklar', icon: Newspaper },
  { path: '/reels', label: 'Reels', icon: Video },
  { path: '/directory', label: 'Xizmatlar', icon: MapPin },
  { path: '/ads', label: 'E-elonlar', icon: LayoutGrid },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  const labels: Record<string, any> = {
    uz: { donate: 'Ehson', lang: 'Til' },
    en: { donate: 'Donate', lang: 'Language' },
    ru: { donate: 'Донат', lang: 'Язык' }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[70px] items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-[#FF6321] text-white font-black text-2xl px-3 py-1 rounded-lg tracking-tighter transform -rotate-2">
              Y
            </div>
            <span className="font-display text-2xl font-black tracking-tighter uppercase hidden sm:block">
              YANGIYO'LLIKLAR
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors hover:text-brand-orange ${
                    isActive ? 'text-brand-orange' : 'text-slate-400'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex bg-slate-100 rounded-full p-1 border border-slate-200">
              {(['uz', 'ru', 'en'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 text-xs font-black rounded-full transition-all ${
                    language === lang 
                      ? 'bg-white shadow-sm text-brand-orange' 
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <Link
              to="/donations"
              className="hidden sm:flex items-center gap-2 bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-brand-orange/20 hover:bg-brand-orange-dark transition-all scale-100 active:scale-95"
            >
              <Heart size={16} />
              {labels[language].donate}
            </Link>

            <button className="md:hidden text-zinc-600" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-zinc-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 text-lg font-semibold text-zinc-600"
                >
                  <item.icon />
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-zinc-100">
                 <Link
                  to="/donations"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 bg-brand-orange text-white w-full py-4 rounded-xl font-bold"
                >
                  <Heart />
                  {labels[language].donate}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
