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
  // Transform the images array to match what react-photo-album expects
  const transformedImages = images.map(img => ({
    src: img.src,  // Keep the src for the lightbox
    width: img.width,
    height: img.height,
    photo: img.src  // This is what renderNextImage uses
  }));

  return (
    <RowsPhotoAlbum
      photos={transformedImages}
      render={{ image: renderNextImage }}
      onClick={({ photo }) => handleClick(photo.src)}
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