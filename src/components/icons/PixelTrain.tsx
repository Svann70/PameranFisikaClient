const PixelTrain = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Smoke */}
    <rect x="6" y="2" width="3" height="3" fill="#9CA3AF"/>
    <rect x="4" y="4" width="2" height="2" fill="#D1D5DB"/>
    <rect x="9" y="3" width="2" height="2" fill="#D1D5DB"/>
    
    {/* Chimney */}
    <rect x="7" y="5" width="4" height="5" fill="#1F2937"/>
    <rect x="6" y="5" width="6" height="2" fill="#374151"/>
    
    {/* Main body */}
    <rect x="4" y="10" width="20" height="12" fill="#EF4444"/>
    <rect x="5" y="11" width="18" height="10" fill="#DC2626"/>
    
    {/* Cabin */}
    <rect x="18" y="8" width="8" height="14" fill="#3B82F6"/>
    <rect x="19" y="9" width="6" height="12" fill="#60A5FA"/>
    
    {/* Windows */}
    <rect x="7" y="12" width="4" height="4" fill="#FBBF24"/>
    <rect x="8" y="13" width="2" height="2" fill="#FDE68A"/>
    <rect x="13" y="12" width="4" height="4" fill="#FBBF24"/>
    <rect x="14" y="13" width="2" height="2" fill="#FDE68A"/>
    <rect x="20" y="10" width="4" height="5" fill="#FBBF24"/>
    <rect x="21" y="11" width="2" height="3" fill="#FDE68A"/>
    
    {/* Cow catcher */}
    <rect x="2" y="18" width="4" height="4" fill="#6B7280"/>
    <rect x="1" y="20" width="2" height="2" fill="#4B5563"/>
    
    {/* Base */}
    <rect x="3" y="22" width="24" height="3" fill="#1F2937"/>
    
    {/* Wheels */}
    <rect x="5" y="25" width="6" height="6" fill="#374151"/>
    <rect x="6" y="26" width="4" height="4" fill="#1F2937"/>
    <rect x="7" y="27" width="2" height="2" fill="#6B7280"/>
    
    <rect x="15" y="25" width="6" height="6" fill="#374151"/>
    <rect x="16" y="26" width="4" height="4" fill="#1F2937"/>
    <rect x="17" y="27" width="2" height="2" fill="#6B7280"/>
    
    <rect x="23" y="26" width="4" height="4" fill="#374151"/>
    <rect x="24" y="27" width="2" height="2" fill="#1F2937"/>
  </svg>
);

export default PixelTrain;
