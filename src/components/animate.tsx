// import React from "react";
import Lottie from "react-lottie";
import { lottie } from "../common/interface";

const animate = ({ loop, autoplay, animation, width, height }: lottie) => {
  const defaultOptions = {
    loop: loop,
    autoplay: autoplay,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};

export default animate;
