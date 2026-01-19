const PixelWriter = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Hair */}
    <rect x="10" y="3" width="12" height="4" fill="#F59E0B"/>
    <rect x="9" y="5" width="14" height="3" fill="#F59E0B"/>
    
    {/* Head */}
    <rect x="10" y="7" width="12" height="10" fill="#FBBF24"/>
    <rect x="11" y="8" width="10" height="8" fill="#FDE68A"/>
    
    {/* Glasses */}
    <rect x="11" y="10" width="4" height="3" fill="#374151"/>
    <rect x="17" y="10" width="4" height="3" fill="#374151"/>
    <rect x="15" y="11" width="2" height="1" fill="#374151"/>
    <rect x="12" y="11" width="2" height="1" fill="#60A5FA"/>
    <rect x="18" y="11" width="2" height="1" fill="#60A5FA"/>
    
    {/* Smile */}
    <rect x="14" y="14" width="4" height="1" fill="#1F2937"/>
    
    {/* Neck */}
    <rect x="14" y="17" width="4" height="2" fill="#FBBF24"/>
    
    {/* Body/sweater */}
    <rect x="8" y="19" width="16" height="12" fill="#10B981"/>
    <rect x="9" y="20" width="14" height="10" fill="#34D399"/>
    
    {/* Collar */}
    <rect x="12" y="19" width="8" height="3" fill="#10B981"/>
    <rect x="14" y="19" width="4" height="2" fill="#FDE68A"/>
    
    {/* Pen in hand */}
    <rect x="22" y="22" width="2" height="8" fill="#6B7280"/>
    <rect x="22" y="29" width="2" height="2" fill="#1F2937"/>
    <rect x="21" y="21" width="4" height="2" fill="#FDE68A"/>
    
    {/* Paper */}
    <rect x="4" y="24" width="8" height="6" fill="#F3F4F6"/>
    <rect x="5" y="25" width="6" height="1" fill="#9CA3AF"/>
    <rect x="5" y="27" width="5" height="1" fill="#9CA3AF"/>
  </svg>
);

export default PixelWriter;
