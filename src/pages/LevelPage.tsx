import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SlidePresenter } from '@/components/SlidePresenter';
import { QuizModal } from '@/components/QuizModal';
import { PixelButton } from '@/components/PixelButton';
import { StarField } from '@/components/StarField';
import { useGame } from '@/contexts/GameContext';
import { ArrowLeft } from 'lucide-react';

import trainImage from '@/assets/level1-train.png';
import lightImage from '@/assets/level2-light.png';
import rocketImage from '@/assets/level3-rocket.png';
import professorImage from '@/assets/professor-pixel.png';

interface Slide {
  title: string;
  content: string;
}

interface LevelData {
  title: string;
  slides: Slide[];
  image: string;
  quiz: {
    question: string;
    options: string[];
    correctIndex: number;
  }[];
}

const levelData: Record<string, LevelData> = {
  '1': {
    title: "Postulat 1 Einstein",
    image: trainImage,
    slides: [
      {
        title: "Postulat Pertama Einstein",
        content: "Hukum-hukum fisika berlaku sama di semua kerangka acuan inersia."
      },
      {
        title: "Makna Kerangka Inersia",
        content: "Kerangka inersia adalah kerangka yang bergerak lurus beraturan atau diam."
      },
      {
        title: "Konsekuensi",
        content: "Tidak ada percobaan fisika yang bisa menentukan apakah kita benar-benar diam atau bergerak lurus."
      },
      {
        title: "Contoh",
        content: "Di dalam kereta yang bergerak stabil, bola yang dilempar ke atas tetap jatuh ke tangan."
      },
      {
        title: "Kesimpulan",
        content: "Tidak ada gerak mutlak, semua gerak bersifat relatif."
      }
    ],
    quiz: [
      {
        question: "Apa yang dimaksud dengan kerangka acuan inersia?",
        options: [
          "Kerangka yang berputar",
          "Kerangka yang bergerak lurus beraturan atau diam",
          "Kerangka yang dipercepat",
          "Kerangka yang diam saja"
        ],
        correctIndex: 1
      },
      {
        question: "Menurut Postulat 1 Einstein, hukum fisika...",
        options: [
          "Berbeda di setiap kerangka acuan",
          "Sama di semua kerangka inersia",
          "Hanya berlaku di Bumi",
          "Berubah seiring waktu"
        ],
        correctIndex: 1
      }
    ]
  },
  '2': {
    title: "Postulat 2 Einstein",
    image: lightImage,
    slides: [
      {
        title: "Postulat Kedua Einstein",
        content: "Kecepatan cahaya di ruang hampa selalu sama untuk semua pengamat."
      },
      {
        title: "Nilai Kecepatan Cahaya",
        content: "c = 3 × 10⁸ meter per detik."
      },
      {
        title: "Makna Fisik",
        content: "Kecepatan cahaya tidak bergantung pada gerak sumber atau pengamat."
      },
      {
        title: "Konsekuensi",
        content: "Waktu dapat melambat dan panjang dapat memendek."
      },
      {
        title: "Kesimpulan",
        content: "Cahaya adalah batas kecepatan tertinggi di alam semesta."
      }
    ],
    quiz: [
      {
        question: "Berapa kecepatan cahaya di ruang hampa?",
        options: [
          "3 × 10⁶ m/s",
          "3 × 10⁷ m/s",
          "3 × 10⁸ m/s",
          "3 × 10⁹ m/s"
        ],
        correctIndex: 2
      },
      {
        question: "Menurut Postulat 2, kecepatan cahaya...",
        options: [
          "Berubah tergantung kecepatan sumber",
          "Selalu sama untuk semua pengamat",
          "Lebih cepat saat sumber bergerak",
          "Hanya konstan di Bumi"
        ],
        correctIndex: 1
      }
    ]
  },
  '3': {
    title: "Transformasi Lorentz",
    image: rocketImage,
    slides: [
      {
        title: "Transformasi Lorentz",
        content: "Transformasi Lorentz menghubungkan waktu dan posisi pada dua kerangka bergerak."
      },
      {
        title: "Faktor Gamma",
        content: "γ = 1 / √(1 − v² / c²)"
      },
      {
        title: "Dilatasi Waktu",
        content: "Semakin besar kecepatan, waktu akan berjalan lebih lambat."
      },
      {
        title: "Kontraksi Panjang",
        content: "Panjang benda memendek searah arah gerak."
      },
      {
        title: "Kesimpulan",
        content: "Ruang dan waktu menyatu menjadi ruang-waktu."
      }
    ],
    quiz: [
      {
        question: "Apa yang terjadi pada waktu saat kecepatan mendekati kecepatan cahaya?",
        options: [
          "Waktu berjalan lebih cepat",
          "Waktu berjalan lebih lambat",
          "Waktu tetap sama",
          "Waktu berhenti sepenuhnya"
        ],
        correctIndex: 1
      },
      {
        question: "Kontraksi panjang terjadi pada arah...",
        options: [
          "Tegak lurus gerak",
          "Searah gerak",
          "Semua arah",
          "Tidak ada arah"
        ],
        correctIndex: 1
      },
      {
        question: "Faktor gamma (γ) digunakan untuk menghitung...",
        options: [
          "Kecepatan cahaya",
          "Dilatasi waktu dan kontraksi panjang",
          "Massa benda",
          "Jarak tempuh"
        ],
        correctIndex: 1
      }
    ]
  }
};

const LevelPage = () => {
  const { levelId } = useParams<{ levelId: string }>();
  const navigate = useNavigate();
  const { completeLevel, isLevelUnlocked } = useGame();

  const [showQuiz, setShowQuiz] = useState(false);

  const level = levelData[levelId || '1'];
  const levelNum = parseInt(levelId || '1');

  // Redirect if level is locked
  if (!isLevelUnlocked(levelNum)) {
    navigate('/map');
    return null;
  }

  const handleSlidesComplete = () => {
    setShowQuiz(true);
  };

  const handleQuizComplete = (passed: boolean) => {
    if (passed) {
      completeLevel(levelNum);
    }
    setShowQuiz(false);
    navigate('/map');
  };

  return (
    <div className="game-screen min-h-screen p-4 md:p-8">
      <StarField />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/map')}
            className="flex items-center gap-2 font-pixel text-[10px] text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </button>

          <div className="pixel-badge">
            Level {levelNum}
          </div>
        </div>

        {/* Level title */}
        <h1 className="font-pixel text-sm md:text-lg text-primary text-center mb-6 text-shadow-pixel animate-fade-in">
          {level.title}
        </h1>

        {/* Slide presenter */}
        <SlidePresenter
          slides={level.slides}
          levelImage={level.image}
          professorImage={professorImage}
          onComplete={handleSlidesComplete}
        />

        {/* Quiz modal */}
        {showQuiz && (
          <QuizModal
            questions={level.quiz}
            onComplete={handleQuizComplete}
            levelTitle={level.title}
          />
        )}

        {/* Footer */}
        <div className="text-center mt-6">
          <PixelButton variant="secondary" size="sm" onClick={() => navigate('/map')}>
            ◀ Keluar
          </PixelButton>
        </div>
      </div>
    </div>
  );
};

export default LevelPage;
