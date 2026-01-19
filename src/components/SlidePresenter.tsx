import React, { useState } from 'react';
import { PixelButton } from './PixelButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  title: string;
  content: string;
}

interface SlidePresenterProps {
  slides: Slide[];
  onComplete: () => void;
  levelImage: string;
}

export function SlidePresenter({ slides, onComplete, levelImage }: SlidePresenterProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slide = slides[currentSlide];
  const isLastSlide = currentSlide === slides.length - 1;
  const isFirstSlide = currentSlide === 0;

  const handleNext = () => {
    if (isAnimating) return;
    
    if (isLastSlide) {
      onComplete();
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev + 1);
        setIsAnimating(false);
      }, 200);
    }
  };

  const handlePrev = () => {
    if (isAnimating || isFirstSlide) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(prev => prev - 1);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <div className="space-y-6">
      {/* Illustration */}
      <div className="pixel-box animate-fade-in">
        <div className="aspect-video flex items-center justify-center overflow-hidden">
          <img 
            src={levelImage} 
            alt="Level illustration"
            className="max-w-full max-h-full object-contain"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
      </div>

      {/* Slide content box */}
      <div 
        className={`pixel-box transition-all duration-200 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
      >
        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => !isAnimating && setCurrentSlide(index)}
              className={`w-3 h-3 border-2 transition-all ${
                index === currentSlide 
                  ? 'bg-primary border-primary' 
                  : index < currentSlide 
                  ? 'bg-primary/50 border-primary/50' 
                  : 'bg-muted border-border'
              }`}
            />
          ))}
        </div>

        {/* Slide title */}
        <h2 className="font-pixel text-xs md:text-sm text-secondary text-center mb-4">
          {slide.title}
        </h2>

        {/* Slide content */}
        <div className="min-h-[100px] flex items-center justify-center">
          <p className="font-game text-xl md:text-2xl text-foreground text-center leading-relaxed px-4">
            {slide.content}
          </p>
        </div>

        {/* Slide counter */}
        <p className="font-pixel text-[8px] text-muted-foreground text-center mt-4">
          Slide {currentSlide + 1} / {slides.length}
        </p>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-4">
        <PixelButton
          variant="secondary"
          size="md"
          onClick={handlePrev}
          disabled={isFirstSlide}
          className={isFirstSlide ? 'opacity-50 cursor-not-allowed' : ''}
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Kembali
        </PixelButton>

        <PixelButton
          variant={isLastSlide ? 'accent' : 'primary'}
          size="md"
          onClick={handleNext}
        >
          {isLastSlide ? 'Mulai Kuis!' : 'Lanjut'}
          {!isLastSlide && <ChevronRight className="w-4 h-4 ml-1" />}
        </PixelButton>
      </div>
    </div>
  );
}
