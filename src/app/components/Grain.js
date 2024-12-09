const Grain = ({ 
    opacity = 0.75, 
    blendMode = 'multiply',
    className = ''
  }) => {
    return (
      <div
        className={`pointer-events-none fixed inset-0 ${className}`}
        style={{
          opacity,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.0' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: blendMode
        }}
      />
    );
  };

  export default Grain;