"use client";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const Banner = () => {
  return (
    <section className="bg-primary bg-pattern pt-16 lg:min-h-[768px] lg:pt-16">
      <div className="container mx-auto flex min-h-[768px] items-center justify-center">
        <MouseParallaxContainer
          globalFactorX={0.4}
          globalFactorY={0.3}
          className="flex w-full flex-col items-center justify-between lg:flex-row"
        >
          {/* text */}
          <MouseParallaxChild factorX={0.1} factorY={0.2}>
            <div className="flex flex-1 flex-col items-center px-6 text-center text-white lg:flex-row lg:text-left">
              <div>Best pizza in town </div>

              <h1 className="font-bangers text-6xl drop-shadow-md lg:text-8xl">
                Pizza perfection <br /> in every bite
              </h1>
            </div>
          </MouseParallaxChild>

          {/* images */}
          <MouseParallaxChild factorX={0.2} factorY={0.3}>
            <div>{/* image */}</div>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  );
};

export default Banner;
