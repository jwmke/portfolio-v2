import Lightbox from "react-spring-lightbox";

const OriginalCustomLightBox = ({
    images,
    currentImageIndex,
    setCurrentIndex,
    isOpen,
    onClose
  }) => {

    const gotoPrevious = () =>
      currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);
  
    const gotoNext = () =>
      currentImageIndex + 1 < images.length &&
      setCurrentIndex(currentImageIndex + 1);
  
    return (
      <Lightbox
        isOpen={isOpen}
        onPrev={gotoPrevious}
        onNext={gotoNext}
        images={images}
        currentIndex={currentImageIndex}
        style={{ background: "rgba(0, 0, 0, .7)" }}
        onClose={onClose}
        singleClickToZoom
        renderImageOverlay={() => {
          return (
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                left: 0,
                display: "flex",
                justifyContent: "center",
                color: "#379683",
                fontSize: "1.5em",
                padding: 3,
                fontFamily: "Times New Roman, Times, serif",
              }}
            >
              {images[currentImageIndex] && images[currentImageIndex].title}
            </div>
          );
        }}
      />
    )
};

export default OriginalCustomLightBox;