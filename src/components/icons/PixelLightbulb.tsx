const PixelLightbulb = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Glow rays */}
    <rect x="15" y="1" width="2" height="3" fill="#FDE68A"/>
    <rect x="5" y="8" width="3" height="2" fill="#FDE68A"/>
    <rect x="24" y="8" width="3" height="2" fill="#FDE68A"/>
    <rect x="7" y="3" width="2" height="2" fill="#FDE68A"/>
    <rect x="23" y="3" width="2" height="2" fill="#FDE68A"/>
    
    {/* Bulb top */}
    <rect x="10" y="4" width="12" height="4" fill="#FBBF24"/>
    <rect x="8" y="6" width="16" height="8" fill="#FBBF24"/>
    <rect x="9" y="5" width="14" height="10" fill="#FDE68A"/>
    
    {/* Bulb middle */}
    <rect x="10" y="14" width="12" height="4" fill="#FBBF24"/>
    <rect x="11" y="15" width="10" height="2" fill="#FDE68A"/>
    
    {/* Filament */}
    <rect x="14" y="8" width="4" height="6" fill="#F59E0B"/>
    <rect x="13" y="9" width="2" height="4" fill="#D97706"/>
    <rect x="17" y="9" width="2" height="4" fill="#D97706"/>
    
    {/* Base/screw */}
    <rect x="11" y="18" width="10" height="2" fill="#6B7280"/>
    <rect x="12" y="20" width="8" height="2" fill="#4B5563"/>
    <rect x="11" y="22" width="10" height="2" fill="#6B7280"/>
    <rect x="12" y="24" width="8" height="2" fill="#4B5563"/>
    <rect x="13" y="26" width="6" height="2" fill="#374151"/>
    <rect x="14" y="28" width="4" height="2" fill="#1F2937"/>
  </svg>
);

export default PixelLightbulb;
