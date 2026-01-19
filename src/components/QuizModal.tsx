import React, { useState } from 'react';
import { PixelButton } from './PixelButton';

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
}

interface QuizModalProps {
  questions: Question[];
  onComplete: (allCorrect: boolean) => void;
  levelTitle: string;
}

export function QuizModal({ questions, onComplete, levelTitle }: QuizModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctIndex;

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setIsAnswered(true);
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleFinish = () => {
    const allCorrect = correctAnswers >= Math.ceil(questions.length / 2);
    onComplete(allCorrect);
  };

  if (showResult) {
    const passed = correctAnswers >= Math.ceil(questions.length / 2);
    
    return (
      <div className="fixed inset-0 bg-background/90 flex items-center justify-center z-50 p-4">
        <div className="pixel-box max-w-md w-full text-center animate-scale-in">
          <div className="text-6xl mb-4">{passed ? '🏆' : '📚'}</div>
          <h2 className="font-pixel text-lg text-primary mb-2">
            {passed ? 'Level Selesai!' : 'Coba Lagi!'}
          </h2>
          <p className="font-game text-xl text-foreground mb-4">
            Jawaban benar: {correctAnswers}/{questions.length}
          </p>
          
          {passed && (
            <div className="pixel-badge mb-4">
              ⭐ {levelTitle}
            </div>
          )}

          <PixelButton onClick={handleFinish} variant={passed ? 'primary' : 'secondary'}>
            {passed ? 'Lanjutkan' : 'Ulangi'}
          </PixelButton>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background/90 flex items-center justify-center z-50 p-4">
      <div className="pixel-box max-w-lg w-full animate-scale-in">
        <div className="flex justify-between items-center mb-4">
          <span className="font-pixel text-[10px] text-secondary">Kuis!</span>
          <span className="font-pixel text-[8px] text-muted-foreground">
            {currentQuestion + 1}/{questions.length}
          </span>
        </div>

        <h3 className="font-game text-2xl text-foreground mb-6">{question.question}</h3>

        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={isAnswered}
              className={`w-full p-4 text-left font-game text-lg transition-all border-4 ${
                isAnswered
                  ? index === question.correctIndex
                    ? 'bg-primary/20 border-primary text-primary'
                    : index === selectedAnswer
                    ? 'bg-destructive/20 border-destructive text-destructive'
                    : 'bg-muted border-border text-muted-foreground'
                  : selectedAnswer === index
                  ? 'bg-secondary/20 border-secondary text-secondary'
                  : 'bg-muted border-border text-foreground hover:border-secondary'
              }`}
              style={{ boxShadow: 'var(--shadow-pixel-sm)' }}
            >
              <span className="font-pixel text-[10px] mr-3">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </button>
          ))}
        </div>

        <div className="flex justify-end gap-3">
          {!isAnswered ? (
            <PixelButton 
              onClick={handleSubmit} 
              disabled={selectedAnswer === null}
              variant="accent"
            >
              Jawab
            </PixelButton>
          ) : (
            <PixelButton onClick={handleNext} variant="primary">
              {currentQuestion < questions.length - 1 ? 'Lanjut ▶' : 'Lihat Hasil'}
            </PixelButton>
          )}
        </div>
      </div>
    </div>
  );
}
