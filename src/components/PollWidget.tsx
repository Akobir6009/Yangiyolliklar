import React from 'react';
import { motion } from 'motion/react';
import { BarChart2 } from 'lucide-react';
import { Poll } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const PollWidget: React.FC<{ poll: Poll }> = ({ poll: initialPoll }) => {
  const [poll, setPoll] = React.useState(initialPoll);
  const [voted, setVoted] = React.useState(false);
  const { language } = useLanguage();

  const handleVote = (index: number) => {
    if (voted) return;
    const newOptions = [...poll.options];
    newOptions[index].votes += 1;
    setPoll({
      ...poll,
      options: newOptions,
      totalVotes: poll.totalVotes + 1
    });
    setVoted(true);
  };

  const labels: Record<string, any> = {
    uz: { title: 'So\'rovnoma', votes: 'ovozlar', votedMsg: 'Rahmat! Sizning ovozingiz qabul qilindi.' },
    en: { title: 'Poll', votes: 'votes', votedMsg: 'Thank you! Your vote has been recorded.' },
    ru: { title: 'Опрос', votes: 'голосов', votedMsg: 'Спасибо! Ваш голос учтен.' }
  };

  return (
    <div className="bg-zinc-900 text-white p-8 rounded-3xl space-y-6 shadow-2xl shadow-zinc-900/40">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center">
          <BarChart2 size={20} />
        </div>
        <h3 className="font-bold text-xl">{labels[language].title}</h3>
      </div>
      
      <p className="font-medium text-lg leading-snug">{poll.question}</p>
      
      <div className="space-y-3">
        {poll.options.map((option, idx) => {
          const percentage = Math.round((option.votes / poll.totalVotes) * 100);
          return (
            <button
              key={idx}
              disabled={voted}
              onClick={() => handleVote(idx)}
              className="w-full relative h-12 rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700 disabled:cursor-default group"
            >
              {voted && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  className="absolute inset-0 bg-brand-orange/20"
                />
              )}
              <div className="absolute inset-0 px-4 flex items-center justify-between text-sm font-medium">
                <span className={voted ? 'text-white' : 'group-hover:text-brand-orange transition-colors'}>
                  {option.label}
                </span>
                {voted && <span className="text-brand-orange font-bold text-base">{percentage}%</span>}
              </div>
            </button>
          );
        })}
      </div>
      
      <div className="flex justify-between items-center text-xs font-medium text-zinc-500 pt-2">
        <span>{poll.totalVotes} {labels[language].votes}</span>
        {voted && <span className="text-emerald-400">{labels[language].votedMsg}</span>}
      </div>
    </div>
  );
};
