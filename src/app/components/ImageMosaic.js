import PhotoAlbum from "react-photo-album";
import NextJsImage from "./NextJsImage";
import Image from "next/image";

const ImageMosaic = ({ images, handleClick }) => {
    // Calculate rows and their relative widths based on aspect ratios
    const rows = [];
    for (let i = 0; i < images.length; i += 3) {
      rows.push(images.slice(i, i + 3));
    }
  
    return (
      <div className="w-full">
        {rows.map((row, rowIndex) => {
          // Calculate aspect ratios for this row
          const aspectRatios = row.map(img => img.width / img.height);
          // Sum of aspect ratios determines relative widths
          const totalAspectRatio = aspectRatios.reduce((sum, ratio) => sum + ratio, 0);
          
          return (
            <div key={rowIndex} className="flex w-full gap-4 mb-4">
              {row.map((photo, photoIndex) => {
                const aspectRatio = aspectRatios[photoIndex];
                // Calculate relative width as a percentage of the total width
                const relativeWidth = `${(aspectRatio / totalAspectRatio) * 100}%`;
                
                return (
                  <div 
                    key={photo.src}
                    className="relative cursor-pointer"
                    style={{
                      width: relativeWidth,
                      // Set a consistent height for the row, width will scale based on aspect ratio
                      height: '300px'
                    }}
                    onClick={() => handleClick({ index: rowIndex * 3 + photoIndex })}
                  >
                    <Image
                      src={photo.src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 33vw"
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };
  
export default ImageMosaic;