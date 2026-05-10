
const Logo = ({ className = "size-8" }: { className?: string }) => {
  return (
    <div className={`${className} relative flex items-center justify-center -translate-y-0.5`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_10px_rgba(0,242,255,0.3)]">
        <defs>
          <linearGradient id="tf-shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f2ff" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>
        
        {/* The Precise TF Shield Silhouette */}
        <path 
          d="M20 30 H80 L75 40 H55 V50 H75 L70 60 H55 V85 L50 92 L45 85 V40 H25 L20 30 Z" 
          stroke="url(#tf-shield-grad)" 
          strokeWidth="2.5" 
          strokeLinejoin="round"
          className="transition-all duration-500"
        />
        
        {/* Inner detail lines if any */}
        <path 
          d="M50 40 V85" 
          stroke="url(#tf-shield-grad)" 
          strokeWidth="1.5" 
          strokeOpacity="0.5"
        />
      </svg>
    </div>
  );
};

export default Logo;
