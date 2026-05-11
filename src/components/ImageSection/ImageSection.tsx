import React from 'react';
import './ImageSection.css';

interface ImageSectionProps {
  src: string;
  alt?: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({
  src,
  alt = "Nurch smart green railing product view",
}) => {
  return (
    <div className="image-section">
      <img src={src} alt={alt} className="image-section-img" />
    </div>
  );
};

export default ImageSection;
