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

export default function OriginalImageMosaic({ images, handleClick, max = 3 }) {
  return (
    <RowsPhotoAlbum
      photos={images}
      render={{ image: renderNextImage }}
      onClick={handleClick}
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