const CyberGrid = ({ children }) => {
    return (
      <div className="relative overflow-hidden w-full h-full">
        {/* Radial gradient overlay */}
        <div 
          className="absolute inset-0 z-10 w-full h-full"
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(31, 31, 31, 0.3) 30%, rgb(31, 31, 31, 1) 100%)'
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