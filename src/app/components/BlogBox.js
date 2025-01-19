import Grain from "./Grain";

const BlogBox = ({ 
  full_title,
  tag_line,
  link,
  external = false,
  className = '',
  size = 24,
  mobile = false
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
    <div className={`relative ${className}`}>
      {/* Border container */}
      <div
        className="absolute inset-0 bg-white"
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
        />
      </div>
      
      <a href={link ? link : "/"} target={external ? "_blank" : ""} referrerPolicy="noopener noreferrer">
        <div
          className="relative z-10 hover:bg-teal-700 hover:cursor-ne-resize duration-75 transition-colors p-2"
          style={{ clipPath: outerClipPath }}
        >
          <div className="space-y-0.5">
            <div className={`${mobile ? "mr-4 text-[.95rem]" : "text-xl"} font-bold`}>
              <p className="text-white">
                {full_title}
              </p>
            </div>
            <div className={`${mobile ? "font-thin" : ""} text-[.7rem] text-teal-100`}>
              <p>
                {tag_line}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogBox;