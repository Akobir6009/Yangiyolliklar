import React from 'react';
import { MOCK_NEWS } from '../lib/mockData';
import { NewsCard } from '../components/NewsCard';
import { Search, Filter } from 'lucide-react';

export default function News() {
  const [search, setSearch] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('Hammasi');

  const categories = ['Hammasi', 'Jamiyat', 'Iqtisodiyot', 'Sport', 'Siyosat', 'Sog\'liqni saqlash'];

  const filteredNews = MOCK_NEWS.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(search.toLowerCase()) || 
                         news.content.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'Hammasi' || news.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <header className="space-y-6">
        <h1 className="font-display text-5xl md:text-7xl font-black italic uppercase tracking-tighter">Yangiliklar feedi</h1>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-3xl border border-zinc-100 shadow-sm">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <input 
              type="text" 
              placeholder="Yangiliklarni qidirish..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-zinc-50 border-none focus:ring-2 focus:ring-brand-orange transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-1 md:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-6 py-4 rounded-2xl font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20' 
                    : 'bg-zinc-50 text-zinc-500 hover:bg-zinc-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="news-grid">
        {filteredNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
      
      {filteredNews.length === 0 && (
        <div className="text-center py-20 bg-zinc-50 rounded-3xl border-2 border-dashed border-zinc-200">
          <p className="text-zinc-500 font-medium">Bunday yangilik topilmadi.</p>
        </div>
      )}
    </div>
  );
}
