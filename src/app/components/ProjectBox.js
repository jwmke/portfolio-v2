import Grain from "./Grain";

const ProjectBox = ({ 
  title,
  description,
  tags,
  link,
  className = '',
  size = 42,
}) => {
  const outerClipPath = `polygon(
    0 0,
    calc(100% - ${size}px) 0,
    100% ${size}px,
    100% 100%,
    0 100%
  )`;

  const innerClipPath = `polygon(
    1px 1px,
    calc(100% - ${size + 1}px) 1px,
    calc(100% - 1px) ${size + 1}px,
    calc(100% - 1px) calc(100% - 1px),
    1px calc(100% - 1px)
  )`;

  return (
    <div className={`relative ${className} w-52`}>
      {/* Border container */}
      <div
        className="absolute inset-0 bg-white "
        style={{
          clipPath: outerClipPath,
        }}
      >
        {/* Inner dark container */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: innerClipPath,
            backgroundColor: 'rgb(31, 31, 31)'
          }}
        >
          {/* Grain effect */}
          <Grain opacity={0.5} 
              blendMode="soft-light" 
              className="absolute !fixed:none" />
        </div>
      </div>
      
      <a href={link ? link : "/"} target="_blank" referrerPolicy="noopener noreferrer">
        <div
          className="relative z-10 h-[5.95rem] hover:bg-teal-700 duration-75 transition-colors"
          style={{ clipPath: outerClipPath }}
        >
          <div className="px-2 py-1">
            <h2 className="text-[.825rem] font-bold mb-1 text-white mt-0.5">{title}</h2>
            
            <div className="mb-2 mt-0.5 h-[1px] w-8 bg bg-white"/>

            <p className="text-[.55rem] mb-1.5 text-white pr-4">{description}</p>
            
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-1.5 py-[1px] bg-white text-black  font-extrabold text-[.5rem]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectBox;