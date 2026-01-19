const PixelSchool = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Flag pole */}
    <rect x="15" y="1" width="2" height="6" fill="#6B7280"/>
    
    {/* Flag */}
    <rect x="17" y="1" width="6" height="4" fill="#EF4444"/>
    <rect x="18" y="2" width="4" height="2" fill="#DC2626"/>
    
    {/* Roof */}
    <rect x="8" y="5" width="16" height="3" fill="#92400E"/>
    <rect x="6" y="7" width="20" height="2" fill="#78350F"/>
    <rect x="4" y="9" width="24" height="2" fill="#92400E"/>
    
    {/* Clock/bell tower */}
    <rect x="13" y="7" width="6" height="4" fill="#FDE68A"/>
    <rect x="14" y="8" width="4" height="2" fill="#FBBF24"/>
    <rect x="15" y="8" width="2" height="1" fill="#1F2937"/>
    
    {/* Main building */}
    <rect x="4" y="11" width="24" height="18" fill="#FDE68A"/>
    <rect x="5" y="12" width="22" height="16" fill="#FEF3C7"/>
    
    {/* Door */}
    <rect x="13" y="20" width="6" height="9" fill="#92400E"/>
    <rect x="14" y="21" width="4" height="7" fill="#78350F"/>
    <rect x="17" y="24" width="1" height="2" fill="#FBBF24"/>
    
    {/* Steps */}
    <rect x="11" y="27" width="10" height="2" fill="#9CA3AF"/>
    <rect x="10" y="29" width="12" height="2" fill="#6B7280"/>
    
    {/* Left window */}
    <rect x="6" y="14" width="5" height="5" fill="#60A5FA"/>
    <rect x="7" y="15" width="3" height="3" fill="#93C5FD"/>
    <rect x="8" y="14" width="1" height="5" fill="#92400E"/>
    <rect x="6" y="16" width="5" height="1" fill="#92400E"/>
    
    {/* Right window */}
    <rect x="21" y="14" width="5" height="5" fill="#60A5FA"/>
    <rect x="22" y="15" width="3" height="3" fill="#93C5FD"/>
    <rect x="23" y="14" width="1" height="5" fill="#92400E"/>
    <rect x="21" y="16" width="5" height="1" fill="#92400E"/>
    
    {/* Bushes */}
    <rect x="1" y="26" width="6" height="5" fill="#10B981"/>
    <rect x="2" y="25" width="4" height="2" fill="#34D399"/>
    <rect x="25" y="26" width="6" height="5" fill="#10B981"/>
    <rect x="26" y="25" width="4" height="2" fill="#34D399"/>
  </svg>
);

export default PixelSchool;
