const PixelTeam = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left person */}
    {/* Head */}
    <rect x="3" y="6" width="6" height="6" fill="#FBBF24"/>
    <rect x="4" y="7" width="4" height="4" fill="#FDE68A"/>
    {/* Eyes */}
    <rect x="4" y="8" width="1" height="1" fill="#1F2937"/>
    <rect x="7" y="8" width="1" height="1" fill="#1F2937"/>
    {/* Body */}
    <rect x="2" y="12" width="8" height="8" fill="#3B82F6"/>
    <rect x="3" y="13" width="6" height="6" fill="#60A5FA"/>
    
    {/* Center person (front) */}
    {/* Head */}
    <rect x="12" y="4" width="8" height="8" fill="#FBBF24"/>
    <rect x="13" y="5" width="6" height="6" fill="#FDE68A"/>
    {/* Hair */}
    <rect x="12" y="3" width="8" height="2" fill="#92400E"/>
    {/* Eyes */}
    <rect x="14" y="7" width="2" height="2" fill="#1F2937"/>
    <rect x="18" y="7" width="2" height="2" fill="#1F2937"/>
    {/* Smile */}
    <rect x="15" y="10" width="4" height="1" fill="#1F2937"/>
    {/* Body */}
    <rect x="10" y="12" width="12" height="10" fill="#10B981"/>
    <rect x="11" y="13" width="10" height="8" fill="#34D399"/>
    
    {/* Right person */}
    {/* Head */}
    <rect x="23" y="6" width="6" height="6" fill="#FBBF24"/>
    <rect x="24" y="7" width="4" height="4" fill="#FDE68A"/>
    {/* Eyes */}
    <rect x="24" y="8" width="1" height="1" fill="#1F2937"/>
    <rect x="27" y="8" width="1" height="1" fill="#1F2937"/>
    {/* Body */}
    <rect x="22" y="12" width="8" height="8" fill="#8B5CF6"/>
    <rect x="23" y="13" width="6" height="6" fill="#A78BFA"/>
    
    {/* Ground/base */}
    <rect x="1" y="22" width="30" height="2" fill="#4B5563"/>
  </svg>
);

export default PixelTeam;
