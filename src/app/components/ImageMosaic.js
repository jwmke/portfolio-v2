"use client";

import Image from "next/image";
import {
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";

function renderNextImage(
  { alt = "", title, sizes },
  { photo, width, height },
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}

export default function ImageMosaic({ images, handleClick, max = 3 }) {
  // If no full-width images, use original simple logic
  if (!images.some(img => img.full)) {
    const transformedImages = images.map((img, index) => ({
      src: img.src,
      width: img.width,
      height: img.height,
      photo: img.src,
      index: index
    }));

    return (
      <RowsPhotoAlbum
        photos={transformedImages}
        render={{ image: renderNextImage }}
        onClick={({ photo }) => handleClick(photo.photo)}
        rowConstraints={{maxPhotos: max}}
        sizes={{
          size: "1168px",
          sizes: [
            { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
          ],
        }}
      />
    );
  }

  // For full-width images, render each image/group manually
  const elements = [];
  let currentGroup = [];

  const addGroup = () => {
    if (currentGroup.length === 0) return;
    
    const groupPhotos = currentGroup.map((img) => ({
      src: img.src,
      width: img.width,
      height: img.height,
      photo: img.src,
      index: img.globalIndex
    }));

    elements.push(
      <div key={`group-${elements.length}`} className="mb-4">
        <RowsPhotoAlbum
          photos={groupPhotos}
          render={{ image: renderNextImage }}
          onClick={({ photo }) => handleClick({ index: photo.index })}
          rowConstraints={{maxPhotos: max}}
          sizes={{
            size: "1168px",
            sizes: [
              { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
            ],
          }}
        />
      </div>
    );
    currentGroup = [];
  };

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    
    if (image.full) {
      // Add any pending group
      addGroup();
      
      // Add full-width image
      elements.push(
        <div key={`full-${i}`} className="mb-4">
          <div
            className="relative w-full cursor-pointer"
            style={{ aspectRatio: `${image.width} / ${image.height}` }}
            onClick={() => handleClick({ index: i })}
          >
            <Image
              fill
              src={image.src}
              alt={`Image ${i + 1}`}
              className="object-cover rounded-lg"
              sizes="(max-width: 1200px) calc(100vw - 32px), 1168px"
            />
          </div>
        </div>
      );
    } else {
      // Add to group (filter out custom properties to avoid React warnings)
      currentGroup.push({ 
        src: image.src,
        width: image.width,
        height: image.height,
        globalIndex: i 
      });
    }
  }

  // Add final group
  addGroup();

  return <div>{elements}</div>;
}