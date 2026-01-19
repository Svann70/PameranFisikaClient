import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PixelButton } from '@/components/PixelButton';
import { StarField } from '@/components/StarField';
import { ArrowLeft } from 'lucide-react';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="game-screen min-h-screen p-4 md:p-8">
      <StarField />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 font-pixel text-[10px] text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </button>

          <h1 className="font-pixel text-lg md:text-xl text-primary text-shadow-pixel">
            Tentang
          </h1>

          <div className="w-16" />
        </div>

        {/* Main content */}
        <div className="space-y-6">
          {/* Project description */}
          <div className="pixel-box animate-fade-in">
            <h2 className="font-pixel text-[12px] text-secondary mb-4">🎮 Proyek Ini</h2>
            <p className="font-game text-xl text-foreground leading-relaxed">
              Website interaktif ini dibuat sebagai bagian dari pameran fisika SMA 
              untuk membantu siswa mempelajari Teori Relativitas Khusus Einstein 
              dengan cara yang menyenangkan dan mudah dipahami.
            </p>
          </div>

          {/* Purpose */}
          <div className="pixel-box animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="font-pixel text-[12px] text-accent mb-4">🎯 Misi Kami</h2>
            <p className="font-game text-xl text-foreground leading-relaxed">
              Kami percaya bahwa belajar fisika harus menjadi petualangan! Melalui 
              interaksi seperti game dan penjelasan yang ramah, kami bertujuan membuat 
              konsep kompleks menjadi mudah dipahami dan diingat.
            </p>
          </div>

          {/* Topics covered */}
          <div className="pixel-box animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="font-pixel text-[12px] text-primary mb-4">📚 Yang Akan Dipelajari</h2>
            <ul className="font-game text-lg text-foreground space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary">▸</span>
                Postulat Pertama Einstein - Hukum fisika di kerangka inersia
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">▸</span>
                Postulat Kedua Einstein - Kecepatan cahaya yang konstan
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">▸</span>
                Transformasi Lorentz - Dilatasi waktu dan kontraksi panjang
              </li>
            </ul>
          </div>

          {/* School info */}
          <div className="pixel-box animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="font-pixel text-[12px] text-pixel-pink mb-4">🏫 Info Sekolah</h2>
            <div className="font-game text-xl text-foreground space-y-1">
              <p>SMA 2 Setu</p>
              <p className="text-muted-foreground">Kelas XII - 2026</p>
            </div>
          </div>

          {/* Credits */}
          <div className="pixel-box animate-slide-up text-center" style={{ animationDelay: '0.4s' }}>
            <p className="font-game text-lg text-muted-foreground">
              @ivanderdniel
            </p>
            <p className="font-pixel text-[8px] text-muted-foreground mt-2">
              © 2026 Tim Petualangan Fisika
            </p>
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

export default AboutPage;
