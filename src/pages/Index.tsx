import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PixelButton } from '@/components/PixelButton';
import { StarField } from '@/components/StarField';
import { useGame } from '@/contexts/GameContext';
import pixelMascot from '@/icons/pixel-mascot.svg'

const Index = () => {
  const navigate = useNavigate();
  const { gameState } = useGame();

  return (
    <div className="game-screen flex flex-col items-center justify-center min-h-screen p-4">
      <StarField />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Title */}
        <div className="mb-8 animate-fade-in">
          <h1 className="font-pixel text-xl md:text-3xl text-primary mb-3 text-shadow-pixel leading-relaxed">
            RELATIVITAS
          </h1>
          <h2 className="font-pixel text-lg md:text-2xl text-foreground text-shadow-pixel leading-relaxed">
            EINSTEIN
          </h2>
          <h3 className="font-pixel text-sm md:text-lg text-secondary mt-2 text-shadow-pixel">
            PETUALANGAN FISIKA
          </h3>
        </div>

        {/* Mascot */}
        <div className="mb-8 animate-float flex flex-col items-center">
          <img src={pixelMascot} alt="Mascot" className="w-32 h-32 md:w-40 md:h-40 object-contain" />
          <p className="font-game text-xl text-foreground mt-4">
            Selamat datang, calon fisikawan!
          </p>
        </div>

        {/* Badges display */}
        {gameState.badges.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-6 animate-slide-up">
            {gameState.badges.map(badge => (
              <span key={badge} className="pixel-badge">
                🏅 {badge}
              </span>
            ))}
          </div>
        )}

        {/* Menu buttons */}
        <div className="flex flex-col gap-4 items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <PixelButton size="lg" onClick={() => navigate('/map')}>
            ▶ Mulai
          </PixelButton>

          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <PixelButton size="md" variant="secondary" onClick={() => navigate('/map')}>
              Materi
            </PixelButton>
            <PixelButton size="md" variant="secondary" onClick={() => navigate('/group')}>
              Kelompok
            </PixelButton>
            <PixelButton size="md" variant="secondary" onClick={() => navigate('/about')}>
              Tentang
            </PixelButton>
          </div>
        </div>

        {/* Footer hint */}
        <p className="font-game text-lg text-muted-foreground mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Tekan MULAI untuk memulai petualangan ruang dan waktu!
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-4 left-4 font-pixel text-[8px] text-muted-foreground">
        v1.0
      </div>
      <div className="absolute bottom-4 right-4 font-pixel text-[8px] text-muted-foreground">
        ivanderdniel@2026
      </div>
    </div>
  );
};

export default Index;
