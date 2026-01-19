const PixelDesigner = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Beret */}
    <rect x="10" y="2" width="14" height="3" fill="#8B5CF6"/>
    <rect x="9" y="4" width="14" height="3" fill="#A78BFA"/>
    <rect x="22" y="3" width="3" height="2" fill="#8B5CF6"/>
    
    {/* Hair */}
    <rect x="10" y="6" width="12" height="2" fill="#1F2937"/>
    
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
    
    {/* Body/smock */}
    <rect x="8" y="19" width="16" height="12" fill="#F3F4F6"/>
    <rect x="9" y="20" width="14" height="10" fill="#E5E7EB"/>
    
    {/* Paint splashes on smock */}
    <rect x="10" y="22" width="3" height="2" fill="#EF4444"/>
    <rect x="15" y="24" width="2" height="3" fill="#3B82F6"/>
    <rect x="19" y="21" width="2" height="2" fill="#10B981"/>
    <rect x="12" y="26" width="2" height="2" fill="#FBBF24"/>
    
    {/* Paint brush in hand */}
    <rect x="23" y="18" width="2" height="10" fill="#92400E"/>
    <rect x="22" y="16" width="4" height="3" fill="#6B7280"/>
    <rect x="22" y="15" width="4" height="2" fill="#EF4444"/>
    
    {/* Palette */}
    <rect x="2" y="22" width="6" height="5" fill="#92400E"/>
    <rect x="3" y="23" width="1" height="1" fill="#EF4444"/>
    <rect x="5" y="23" width="1" height="1" fill="#3B82F6"/>
    <rect x="4" y="25" width="1" height="1" fill="#FBBF24"/>
    <rect x="6" y="24" width="1" height="1" fill="#10B981"/>
  </svg>
);

export default PixelDesigner;
