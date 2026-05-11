import React from 'react';
import { motion } from 'motion/react';
import { Play, Eye, Heart } from 'lucide-react';
import { Reel } from '../types';

export const ReelPlayer: React.FC<{ reel: Reel }> = ({ reel }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative aspect-[9/16] bg-black rounded-3xl overflow-hidden group shadow-2xl">
      <video
        ref={videoRef}
        src={reel.videoUrl}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
      />
      
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent cursor-pointer flex items-center justify-center"
        onClick={togglePlay}
      >
        {!isPlaying && (
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-100 group-hover:scale-110 transition-transform">
            <Play fill="white" size={32} />
          </div>
        )}
      </div>

      <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 pointer-events-none">
        <h3 className="font-bold text-lg drop-shadow-md">{reel.title}</h3>
        <div className="flex items-center gap-6 text-xs font-bold drop-shadow-md">
          <span className="flex items-center gap-1.5">
            <Eye size={16} />
            {reel.views}
          </span>
          <span className="flex items-center gap-1.5">
            <Heart size={16} />
            {reel.likes}
          </span>
        </div>
      </div>
    </div>
  );
};
