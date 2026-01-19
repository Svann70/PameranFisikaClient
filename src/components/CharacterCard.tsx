import React from 'react';

interface CharacterCardProps {
  name: string;
  role: string;
  avatar: string;
}

export function CharacterCard({ name, role, avatar }: CharacterCardProps) {
  // Check if avatar is an image URL (contains file extension or starts with data:)
  const isImageUrl = avatar.includes('.svg') || avatar.includes('.png') || avatar.includes('.jpg') || avatar.includes('.webp') || avatar.startsWith('data:');

  return (
    <div className="character-card hover:border-primary transition-colors">
      <div className="text-5xl mb-3 flex items-center justify-center">
        {isImageUrl ? (
          <img src={avatar} alt={name} className="w-12 h-12 object-contain" />
        ) : (
          avatar
        )}
      </div>
      <h3 className="font-pixel text-[10px] text-foreground mb-1">{name}</h3>
      <p className="font-game text-lg text-primary">{role}</p>
    </div>
  );
}
