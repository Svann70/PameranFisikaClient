const PixelBook = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Book spine */}
    <rect x="4" y="4" width="4" height="24" fill="#1E40AF"/>
    <rect x="5" y="5" width="2" height="22" fill="#3B82F6"/>
    
    {/* Book cover */}
    <rect x="8" y="3" width="20" height="26" fill="#3B82F6"/>
    <rect x="9" y="4" width="18" height="24" fill="#60A5FA"/>
    
    {/* Page edges */}
    <rect x="8" y="6" width="2" height="20" fill="#F3F4F6"/>
    
    {/* Pages inside */}
    <rect x="10" y="5" width="16" height="22" fill="#FFFFFF"/>
    <rect x="11" y="6" width="14" height="20" fill="#F9FAFB"/>
    
    {/* Text lines */}
    <rect x="12" y="8" width="10" height="1" fill="#9CA3AF"/>
    <rect x="12" y="10" width="12" height="1" fill="#9CA3AF"/>
    <rect x="12" y="12" width="8" height="1" fill="#9CA3AF"/>
    <rect x="12" y="14" width="11" height="1" fill="#9CA3AF"/>
    <rect x="12" y="16" width="12" height="1" fill="#9CA3AF"/>
    <rect x="12" y="18" width="9" height="1" fill="#9CA3AF"/>
    <rect x="12" y="20" width="12" height="1" fill="#9CA3AF"/>
    <rect x="12" y="22" width="7" height="1" fill="#9CA3AF"/>
    
    {/* Bookmark */}
    <rect x="22" y="3" width="3" height="8" fill="#EF4444"/>
    <rect x="22" y="10" width="1" height="2" fill="#EF4444"/>
    <rect x="24" y="10" width="1" height="2" fill="#EF4444"/>
    
    {/* Book decoration */}
    <rect x="5" y="7" width="1" height="2" fill="#FBBF24"/>
    <rect x="5" y="12" width="1" height="2" fill="#FBBF24"/>
    <rect x="5" y="17" width="1" height="2" fill="#FBBF24"/>
    <rect x="5" y="22" width="1" height="2" fill="#FBBF24"/>
  </svg>
);

export default PixelBook;
