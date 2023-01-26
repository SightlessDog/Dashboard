import React, { useRef, useState } from "react";

interface GifProps {
  still: string;
  animated: string;
  width?: string;
  height?: string;
  playSound: any;
  stop: any;
}

const Gif: React.FC<GifProps> = ({
  still,
  animated,
  width,
  height,
  playSound,
  stop,
}) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);

  function handleMouseEnter() {
    imgRef.current!.src = animated;
    setIsHovering(true);
    playSound();
  }

  function handleMouseLeave() {
    imgRef.current!.src = still;
    setIsHovering(false);
    stop();
  }

  return (
    <img
      ref={imgRef}
      src={still}
      alt="Animated Gif"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: width,
        height: height,
      }}
    />
  );
};

export default Gif;
