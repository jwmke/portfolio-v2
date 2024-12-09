const Grain = ({ 
    opacity = 0.75, 
    blendMode = 'multiply',
    className = ''
  }) => {
    return (
      <div
        className={`pointer-events-none absolute z-30 ${className}`}
        style={{
          opacity,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.0' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: blendMode
        }}
      />
    );
  };
  
const SecondCyberGrid = ({ children, darkness = 37.5 }) => {
  // Ensure darkness is between 0 and 255
  const safeValue = Math.max(0, Math.min(255, darkness));
  
  return (
    <div className="relative overflow-hidden w-full h-full rounded-[50%]">
      {/* Grid container */}
      <div className="relative w-full h-full">
        {/* Horizontal lines */}
        <div 
          className="absolute inset-0 w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(0deg, 
                transparent 0%,
                rgba(6, 182, 212, 0.15) 1%,
                rgba(6, 182, 212, 0.15) 5%,
                transparent 4%
              )`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Vertical lines */}
        <div 
          className="absolute inset-[36px] w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(90deg, 
                transparent 0%,
                rgba(6, 182, 212, 0.15) 1%,
                rgba(6, 182, 212, 0.15) 5%,
                transparent 4%
              )`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Enhanced radial gradient overlay */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, 
              transparent 0%, 
              rgba(${safeValue}, ${safeValue}, ${safeValue}, 0.5) 30%, 
              rgb(${safeValue}, ${safeValue}, ${safeValue}) 70%
            )`,
            opacity: 1
          }}
        />

        {/* Content container */}
        <div className="relative z-20 w-full h-full">
          {children}
        </div>
        
        <Grain opacity={0.05} className="z-30"/>
      </div>
    </div>
  );
};

export default SecondCyberGrid;