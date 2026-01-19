const PixelResearcher = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Hair */}
    <rect x="10" y="3" width="12" height="3" fill="#F59E0B"/>
    <rect x="9" y="5" width="14" height="3" fill="#FBBF24"/>
    <rect x="8" y="6" width="3" height="4" fill="#FBBF24"/>
    <rect x="21" y="6" width="3" height="4" fill="#FBBF24"/>
    
    {/* Head */}
    <rect x="10" y="7" width="12" height="10" fill="#FBBF24"/>
    <rect x="11" y="8" width="10" height="8" fill="#FDE68A"/>
    
    {/* Eyes */}
    <rect x="12" y="10" width="2" height="2" fill="#1F2937"/>
    <rect x="18" y="10" width="2" height="2" fill="#1F2937"/>
    <rect x="12" y="10" width="1" height="1" fill="#FFFFFF"/>
    <rect x="18" y="10" width="1" height="1" fill="#FFFFFF"/>
    
    {/* Smile */}
    <rect x="14" y="14" width="4" height="1" fill="#1F2937"/>
    
    {/* Neck */}
    <rect x="14" y="17" width="4" height="2" fill="#FBBF24"/>
    
    {/* Lab coat */}
    <rect x="7" y="19" width="18" height="12" fill="#F3F4F6"/>
    <rect x="8" y="20" width="16" height="10" fill="#FFFFFF"/>
    
    {/* Lab coat details */}
    <rect x="15" y="20" width="2" height="8" fill="#E5E7EB"/>
    <rect x="10" y="21" width="3" height="2" fill="#3B82F6"/>
    
    {/* Test tube in hand */}
    <rect x="23" y="18" width="3" height="10" fill="#60A5FA"/>
    <rect x="24" y="19" width="1" height="7" fill="#93C5FD"/>
    <rect x="23" y="25" width="3" height="3" fill="#10B981"/>
    <rect x="22" y="17" width="5" height="2" fill="#6B7280"/>
    
    {/* Beaker */}
    <rect x="2" y="22" width="6" height="7" fill="#60A5FA"/>
    <rect x="3" y="23" width="4" height="5" fill="#93C5FD"/>
    <rect x="3" y="26" width="4" height="2" fill="#A78BFA"/>
    <rect x="1" y="21" width="8" height="2" fill="#6B7280"/>
    
    {/* Bubbles */}
    <rect x="4" y="24" width="1" height="1" fill="#FFFFFF"/>
    <rect x="6" y="25" width="1" height="1" fill="#FFFFFF"/>
  </svg>
);

export default PixelResearcher;
