import React, { useState, useEffect } from 'react';
import { PixelButton } from './PixelButton';

interface DialogueBoxProps {
  dialogues: string[];
  characterName: string;
  onComplete: () => void;
}

export function DialogueBox({ dialogues, characterName, onComplete }: DialogueBoxProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const currentDialogue = dialogues[currentIndex];

  useEffect(() => {
    setDisplayedText('');
    setIsTyping(true);
    let index = 0;

    const interval = setInterval(() => {
      if (index < currentDialogue.length) {
        setDisplayedText(currentDialogue.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [currentDialogue]);

  const handleNext = () => {
    if (isTyping) {
      setDisplayedText(currentDialogue);
      setIsTyping(false);
    } else if (currentIndex < dialogues.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const isLastDialogue = currentIndex === dialogues.length - 1 && !isTyping;

  return (
    <div className="dialogue-box animate-slide-up">
      <div className="flex items-start gap-4">
        {/* Character avatar */}
        <div className="flex-shrink-0 w-16 h-16 pixel-box bg-muted flex items-center justify-center">
          <span className="text-3xl">👨‍🔬</span>
        </div>

        <div className="flex-1 min-h-[80px]">
          <p className="font-pixel text-[10px] text-primary mb-2">{characterName}</p>
          <p className="font-game text-xl leading-relaxed text-foreground">
            {displayedText}
            {isTyping && <span className="typewriter-cursor" />}
          </p>
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <span className="font-pixel text-[8px] text-muted-foreground self-center">
          {currentIndex + 1}/{dialogues.length}
        </span>
        <PixelButton
          size="sm"
          variant={isLastDialogue ? 'accent' : 'primary'}
          onClick={handleNext}
        >
          {isTyping ? 'Skip' : isLastDialogue ? 'Quiz Time!' : 'Next ▶'}
        </PixelButton>
      </div>
    </div>
  );
}
