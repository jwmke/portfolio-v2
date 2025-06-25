import Lightbox from "react-spring-lightbox";

const CustomLightBox = ({
    images,
    currentIndex,
    setCurrentIndex,
    isOpen,
    onClose
  }) => {

    const gotoPrevious = () =>
      currentIndex > 0 && setCurrentIndex(currentIndex - 1);
  
    const gotoNext = () =>
      currentIndex + 1 < images.length &&
      setCurrentIndex(currentIndex + 1);
  
    return (
      <Lightbox
        isOpen={isOpen}
        onPrev={gotoPrevious}
        onNext={gotoNext}
        images={images}
        currentIndex={currentIndex}
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
            />
          );
        }}
      />
    )
};

export default CustomLightBox;