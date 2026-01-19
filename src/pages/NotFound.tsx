import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { PixelButton } from '@/components/PixelButton';
import { StarField } from '@/components/StarField';

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="game-screen min-h-screen flex flex-col items-center justify-center p-4">
      <StarField />
      
      <div className="relative z-10 text-center">
        <div className="text-8xl mb-6 animate-bounce-pixel">🚀</div>
        
        <h1 className="font-pixel text-4xl md:text-6xl text-destructive mb-4 text-shadow-pixel">
          404
        </h1>
        
        <h2 className="font-pixel text-lg md:text-xl text-foreground mb-6">
          Lost in Space!
        </h2>
        
        <p className="font-game text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! It seems you've traveled too far into the universe. 
          This page doesn't exist in our dimension.
        </p>
        
        <PixelButton onClick={() => navigate('/')}>
          ◀ Return Home
        </PixelButton>
      </div>
    </div>
  );
};

export default NotFound;
