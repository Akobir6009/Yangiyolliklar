import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Directory from './pages/Directory';
import Reels from './pages/Reels';
import Ads from './pages/Ads';
import Donations from './pages/Donations';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col pt-16">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/directory" element={<Directory />} />
              <Route path="/reels" element={<Reels />} />
              <Route path="/ads" element={<Ads />} />
              <Route path="/donations" element={<Donations />} />
            </Routes>
          </main>
          <footer className="bg-zinc-900 text-white py-12 px-4 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center text-white font-bold text-lg transform -rotate-12">
                    Y
                  </div>
                  <span className="font-display text-xl font-black tracking-tighter uppercase">
                    YANGIYO'LLIKLAR
                  </span>
                </div>
                <p className="text-zinc-400 text-sm">
                  Yangiyul shahri va tumani hayoti haqidagi eng tezkor va xolis yangiliklar portali.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Bo'limlar</h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li><Link to="/news" className="hover:text-brand-orange">Yangiliklar</Link></li>
                  <li><Link to="/reels" className="hover:text-brand-orange">Reels</Link></li>
                  <li><Link to="/directory" className="hover:text-brand-orange">Xizmatlar</Link></li>
                  <li><Link to="/ads" className="hover:text-brand-orange">E'lonlar taxtasi</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Ma'lumot</h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li><Link to="/about" className="hover:text-brand-orange">Biz haqimizda</Link></li>
                  <li><Link to="/contact" className="hover:text-brand-orange">Aloqa</Link></li>
                  <li><Link to="/ads/create" className="hover:text-brand-orange">Reklama berish</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Obuna bo'ling</h4>
                <a 
                   href="https://t.me/yangiyolliklar" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-[#0088cc] text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  Telegramga o'tish
                </a>
              </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
              &copy; {new Date().getFullYear()} YANGIYO'LLIKLAR. Barcha huquqlar himoyalangan.
            </div>
          </footer>
        </div>
      </Router>
    </LanguageProvider>
  );
}
