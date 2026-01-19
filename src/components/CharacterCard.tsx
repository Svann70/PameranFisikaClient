import React from 'react';

interface CharacterCardProps {
  name: string;
  role: string;
  avatar: string;
}

export function CharacterCard({ name, role, avatar }: CharacterCardProps) {
  return (
    <div className="character-card hover:border-primary transition-colors">
      <div className="text-5xl mb-3">{avatar}</div>
      <h3 className="font-pixel text-[10px] text-foreground mb-1">{name}</h3>
      <p className="font-game text-lg text-primary">{role}</p>
    </div>
  );
}
