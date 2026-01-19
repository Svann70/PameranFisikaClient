const PixelLeader = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Crown */}
    <rect x="10" y="1" width="2" height="3" fill="#FBBF24"/>
    <rect x="15" y="0" width="2" height="4" fill="#FBBF24"/>
    <rect x="20" y="1" width="2" height="3" fill="#FBBF24"/>
    <rect x="9" y="4" width="14" height="3" fill="#FBBF24"/>
    <rect x="10" y="5" width="12" height="2" fill="#F59E0B"/>
    {/* Crown gems */}
    <rect x="12" y="5" width="2" height="1" fill="#EF4444"/>
    <rect x="15" y="5" width="2" height="1" fill="#3B82F6"/>
    <rect x="18" y="5" width="2" height="1" fill="#10B981"/>
    
    {/* Hair */}
    <rect x="10" y="7" width="12" height="3" fill="#92400E"/>
    
    {/* Head */}
    <rect x="10" y="9" width="12" height="10" fill="#FBBF24"/>
    <rect x="11" y="10" width="10" height="8" fill="#FDE68A"/>
    
    {/* Eyes */}
    <rect x="12" y="12" width="3" height="3" fill="#1F2937"/>
    <rect x="17" y="12" width="3" height="3" fill="#1F2937"/>
    <rect x="13" y="13" width="1" height="1" fill="#FFFFFF"/>
    <rect x="18" y="13" width="1" height="1" fill="#FFFFFF"/>
    
    {/* Smile */}
    <rect x="13" y="16" width="6" height="2" fill="#1F2937"/>
    <rect x="14" y="16" width="4" height="1" fill="#EF4444"/>
    
    {/* Neck */}
    <rect x="14" y="19" width="4" height="2" fill="#FBBF24"/>
    
    {/* Body/suit */}
    <rect x="8" y="21" width="16" height="10" fill="#1E3A8A"/>
    <rect x="9" y="22" width="14" height="8" fill="#3B82F6"/>
    
    {/* Tie */}
    <rect x="14" y="21" width="4" height="2" fill="#EF4444"/>
    <rect x="15" y="23" width="2" height="5" fill="#EF4444"/>
    <rect x="14" y="27" width="4" height="2" fill="#DC2626"/>
  </svg>
);

export default PixelLeader;
