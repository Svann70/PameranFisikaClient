import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface GameState {
  completedLevels: number[];
  currentLevel: number;
  badges: string[];
}

interface GameContextType {
  gameState: GameState;
  completeLevel: (level: number) => void;
  resetProgress: () => void;
  isLevelUnlocked: (level: number) => boolean;
  getProgress: () => { completed: number; total: number };
}

const defaultState: GameState = {
  completedLevels: [],
  currentLevel: 1,
  badges: [],
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, setGameState] = useState<GameState>(() => {
    const saved = localStorage.getItem('physicsGame');
    return saved ? JSON.parse(saved) : defaultState;
  });

  useEffect(() => {
    localStorage.setItem('physicsGame', JSON.stringify(gameState));
  }, [gameState]);

  const completeLevel = (level: number) => {
    setGameState(prev => {
      const newCompleted = prev.completedLevels.includes(level)
        ? prev.completedLevels
        : [...prev.completedLevels, level];
      
      const newBadges = [...prev.badges];
      
      if (newCompleted.length === 1 && !newBadges.includes('Pemula Relativitas')) {
        newBadges.push('Pemula Relativitas');
      }
      if (newCompleted.length === 3 && !newBadges.includes('Penjelajah Fisika')) {
        newBadges.push('Penjelajah Fisika');
      }

      return {
        ...prev,
        completedLevels: newCompleted,
        currentLevel: Math.max(prev.currentLevel, level + 1),
        badges: newBadges,
      };
    });
  };

  const resetProgress = () => {
    setGameState(defaultState);
  };

  const isLevelUnlocked = (level: number) => {
    if (level === 1) return true;
    return gameState.completedLevels.includes(level - 1);
  };

  const getProgress = () => ({
    completed: gameState.completedLevels.length,
    total: 3,
  });

  return (
    <GameContext.Provider value={{ gameState, completeLevel, resetProgress, isLevelUnlocked, getProgress }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
