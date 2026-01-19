import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/contexts/GameContext';
import { Lock } from 'lucide-react';

interface LevelCardProps {
  level: number;
  title: string;
  icon: string;
  route: string;
}

export function LevelCard({ level, title, icon, route }: LevelCardProps) {
  const navigate = useNavigate();
  const { isLevelUnlocked, gameState } = useGame();
  
  const unlocked = isLevelUnlocked(level);
  const completed = gameState.completedLevels.includes(level);

  const handleClick = () => {
    if (unlocked) {
      navigate(route);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`level-card ${!unlocked ? 'locked' : ''} ${completed ? 'completed' : ''}`}
    >
      <div className="relative">
        {/* Level number */}
        <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary flex items-center justify-center border-2 border-background">
          <span className="font-pixel text-[10px] text-primary-foreground">{level}</span>
        </div>

        {/* Icon */}
        <div className="text-5xl text-center py-4 animate-float">
          {icon}
        </div>

        {/* Lock overlay */}
        {!unlocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/50">
            <Lock className="w-8 h-8 text-muted-foreground" />
          </div>
        )}

        {/* Completed badge */}
        {completed && (
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent flex items-center justify-center border-2 border-background animate-bounce-pixel">
            <span className="text-lg">⭐</span>
          </div>
        )}
      </div>

      <h3 className="font-pixel text-[8px] text-center mt-2 text-foreground leading-relaxed">
        {title}
      </h3>

      {unlocked && !completed && (
        <p className="font-game text-sm text-center text-primary mt-1">
          ▶ Mulai
        </p>
      )}

      {completed && (
        <p className="font-game text-sm text-center text-accent mt-1">
          ✓ Selesai
        </p>
      )}
    </div>
  );
}
