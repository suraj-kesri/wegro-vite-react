import React from "react";
import "./image.css";

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt = "Wegro product photograph",
  className,
}) => {
  return (
    <div className={`image-section ${className || ""}`}>
      <img src={src} alt={alt} className="balcony-image" />
    </div>
  );
};

export default Image;

