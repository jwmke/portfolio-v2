const CyberGrid = ({ children }) => {
    return (
      <div className="relative overflow-hidden w-full h-full">
        {/* Radial gradient overlay */}
        <div 
          className="absolute inset-0 z-10 w-full h-full"
          style={{
            background: `
              radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 20%, rgb(0, 0, 0, 1) 100%),
              url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.0' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
            `,
            opacity: 0.2,
            mixBlendMode: "multiply"
          }}
        />
        
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
            className="absolute inset-0 w-full h-full"
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
  
          {/* Content container */}
          <div className="relative z-20 w-full h-full">
            {children}
          </div>
        </div>
      </div>
    );
  };

  export default CyberGrid;