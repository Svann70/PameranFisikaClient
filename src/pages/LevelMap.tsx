import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PixelButton } from '@/components/PixelButton';
import { ProgressBar } from '@/components/ProgressBar';
import { LevelCard } from '@/components/LevelCard';
import { StarField } from '@/components/StarField';
import { ArrowLeft } from 'lucide-react';

const levels = [
  {
    level: 1,
    title: "Postulat 1 Einstein",
    icon: '🚂',
    route: '/level/1',
  },
  {
    level: 2,
    title: "Postulat 2 Einstein",
    icon: '💡',
    route: '/level/2',
  },
  {
    level: 3,
    title: 'Transformasi Lorentz',
    icon: '🚀',
    route: '/level/3',
  },
];

const LevelMap = () => {
  const navigate = useNavigate();

  return (
    <div className="game-screen min-h-screen p-4 md:p-8">
      <StarField />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 font-pixel text-[10px] text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </button>

          <h1 className="font-pixel text-lg md:text-xl text-primary text-shadow-pixel">
            Pilih Level
          </h1>

          <ProgressBar />
        </div>

        {/* Map description */}
        <div className="pixel-box mb-8 animate-fade-in">
          <p className="font-game text-xl text-foreground text-center">
            🗺️ Jelajahi misteri Relativitas Khusus Einstein!
          </p>
          <p className="font-game text-lg text-muted-foreground text-center mt-2">
            Selesaikan setiap level untuk membuka petualangan berikutnya.
          </p>
        </div>

        {/* Level path */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 z-0">
            <div 
              className="h-full bg-primary transition-all duration-500"
              style={{ width: '0%' }}
            />
          </div>

          {/* Level cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {levels.map((level, index) => (
              <div 
                key={level.level}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <LevelCard {...level} />
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 font-game text-lg">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary" />
            <span className="text-muted-foreground">Terbuka</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-muted" />
            <span className="text-muted-foreground">Terkunci</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">⭐</span>
            <span className="text-muted-foreground">Selesai</span>
          </div>
        </div>

        {/* Back button */}
        <div className="text-center mt-8">
          <PixelButton variant="secondary" onClick={() => navigate('/')}>
            ◀ Menu Utama
          </PixelButton>
        </div>
      </div>
    </div>
  );
};

export default LevelMap;
