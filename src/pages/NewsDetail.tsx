import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Eye, Share2, MessageCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { MOCK_NEWS } from '../lib/mockData';
import { formatDate } from '../lib/utils';
import { useContent } from '../hooks/useContent';
import { useLanguage } from '../context/LanguageContext';

export default function NewsDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const news = MOCK_NEWS.find(item => item.id === id);

  if (!news) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Maqola topilmadi</h2>
        <Link to="/news" className="text-brand-orange hover:underline mt-4 inline-block">Yangiliklarga qaytish</Link>
      </div>
    );
  }

  const { text: title, isTranslating: titleTranslating } = useContent(news.title);
  const { text: content, isTranslating: contentTranslating } = useContent(news.content);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <Link 
        to="/news" 
        className="inline-flex items-center gap-2 text-zinc-500 font-bold hover:text-brand-orange transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Orqaga qaytish
      </Link>

      <article className="space-y-8">
        <header className="space-y-6">
          <div className="flex items-center gap-4">
             <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {news.category}
            </span>
            <div className="flex items-center gap-4 text-zinc-400 text-sm font-medium">
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {formatDate(news.createdAt)}
              </span>
              <span className="flex items-center gap-1">
                <Eye size={16} />
                {news.views}
              </span>
            </div>
          </div>

          <h1 className={`font-display text-4xl md:text-6xl font-black italic uppercase leading-[0.9] tracking-tighter ${titleTranslating ? 'animate-pulse text-zinc-100' : ''}`}>
            {title}
          </h1>
        </header>

        <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={news.imageUrl} 
            alt={news.title} 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
        </div>

        <div className={`prose prose-lg max-w-none prose-brand text-zinc-700 leading-relaxed ${contentTranslating ? 'animate-pulse text-zinc-200' : ''}`}>
           <ReactMarkdown>{content}</ReactMarkdown>
        </div>

        <div className="pt-12 border-t border-zinc-100 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-2">
            {news.tags?.map(tag => (
              <span key={tag} className="text-xs bg-zinc-100 text-zinc-500 font-bold px-4 py-2 rounded-full cursor-default hover:bg-zinc-200 transition-colors">
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-zinc-100 text-zinc-600 px-6 py-3 rounded-xl font-bold hover:bg-zinc-200 transition-all active:scale-95">
              <Share2 size={20} />
              Ulashish
            </button>
            <button className="flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-orange-dark shadow-xl shadow-brand-orange/20 transition-all active:scale-95">
              <MessageCircle size={20} />
              Izohlar
            </button>
          </div>
        </div>
      </article>

      {/* Suggested News Section */}
      <section className="pt-20 space-y-8">
        <h3 className="font-display text-3xl font-black italic uppercase tracking-tighter">O'xshash yangiliklar</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MOCK_NEWS.filter(n => n.id !== id).slice(0, 2).map(item => (
            <div key={item.id} className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img src={item.imageUrl} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-orange px-2 py-1 rounded">
                  {item.category}
                </span>
                <Link to={`/news/${item.id}`} className="block font-bold text-xl leading-tight hover:text-brand-orange transition-colors">
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
