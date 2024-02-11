import { useState, useEffect } from "react";
import { progresiveImage } from "../common/interface";

const ProgressiveImage = ({ lowResSrc, highResSrc, alt, className }: progresiveImage) => {
  const [imageSrc, setImageSrc] = useState(lowResSrc);

  useEffect(() => {
    const highResImage = new Image();
    highResImage.src = highResSrc;

    highResImage.onload = () => {
      setImageSrc(highResSrc);
    };
  }, [highResSrc]);

  return <img src={imageSrc} alt={alt} className={className} loading="lazy" />;
};

export default ProgressiveImage;
