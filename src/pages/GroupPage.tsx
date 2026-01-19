import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CharacterCard } from '@/components/CharacterCard';
import { PixelButton } from '@/components/PixelButton';
import { StarField } from '@/components/StarField';
import { ArrowLeft } from 'lucide-react';

const teamMembers = [
  { name: 'Anggota 1', role: 'Ketua Kelompok', avatar: '👨‍🎓' },
  { name: 'Anggota 2', role: 'Penulis Konten', avatar: '👩‍🎓' },
  { name: 'Anggota 3', role: 'Desainer', avatar: '🧑‍🎨' },
  { name: 'Anggota 4', role: 'Pengembang', avatar: '👨‍💻' },
  { name: 'Anggota 5', role: 'Peneliti', avatar: '👩‍🔬' },
  { name: 'Anggota 6', role: 'Presenter', avatar: '🧑‍🏫' },
];

const GroupPage = () => {
  const navigate = useNavigate();

  return (
    <div className="game-screen min-h-screen p-4 md:p-8">
      <StarField />

      <div className="relative z-10 max-w-4xl mx-auto">
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
            Tim Kami
          </h1>

          <div className="w-16" />
        </div>

        {/* Description */}
        <div className="pixel-box mb-8 animate-fade-in">
          <p className="font-game text-xl text-foreground text-center">
            👥 Kenali tim hebat di balik petualangan fisika ini!
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CharacterCard {...member} />
            </div>
          ))}
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

export default GroupPage;
