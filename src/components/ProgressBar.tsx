import React from 'react';
import { useGame } from '@/contexts/GameContext';

export function ProgressBar() {
  const { getProgress } = useGame();
  const { completed, total } = getProgress();
  const percentage = (completed / total) * 100;

  return (
    <div className="w-full max-w-xs">
      <div className="flex justify-between items-center mb-2">
        <span className="font-pixel text-[10px] text-foreground">Progres</span>
        <span className="font-pixel text-[10px] text-primary">{completed}/{total}</span>
      </div>
      <div className="pixel-progress">
        <div 
          className="pixel-progress-fill" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
