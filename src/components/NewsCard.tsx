import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Clock } from 'lucide-react';
import { NewsPost } from '../types';
import { formatDate } from '../lib/utils';
import { useContent } from '../hooks/useContent';
import { motion } from 'motion/react';

export const NewsCard: React.FC<{ news: NewsPost }> = ({ news }) => {
  const { text: title, isTranslating: titleTranslating } = useContent(news.title);
  const { text: excerpt, isTranslating: excerptTranslating } = useContent(news.content.slice(0, 100) + '...');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden group hover:shadow-xl transition-all"
    >
      <Link to={`/news/${news.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={news.imageUrl}
            alt={news.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-brand-orange text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
              {news.category}
            </span>
          </div>
        </div>
        
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-4 text-zinc-400 text-xs">
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {formatDate(news.createdAt)}
            </span>
            <span className="flex items-center gap-1">
              <Eye size={14} />
              {news.views}
            </span>
          </div>
          
          <h3 className={`font-bold text-lg leading-tight group-hover:text-brand-orange transition-colors ${titleTranslating ? 'animate-pulse bg-zinc-100 rounded text-transparent' : ''}`}>
            {title}
          </h3>
          
          <p className={`text-zinc-600 text-sm line-clamp-2 ${excerptTranslating ? 'animate-pulse bg-zinc-100 rounded text-transparent' : ''}`}>
            {excerpt}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};
