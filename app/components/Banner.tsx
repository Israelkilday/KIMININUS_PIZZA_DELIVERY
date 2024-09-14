"use client";

import Image from "next/image";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const Banner = () => {
  return (
    <section className="bg-primary bg-pattern pt-16 lg:min-h-[720px] lg:pt-12">
      <div className="container mx-auto flex min-h-[720px] items-center justify-center">
        <MouseParallaxContainer
          globalFactorX={0.4}
          globalFactorY={0.3}
          className="flex w-full flex-col items-center justify-between lg:flex-row"
        >
          {/* text */}
          <MouseParallaxChild factorX={0.1} factorY={0.2}>
            <div className="flex flex-1 flex-col items-center px-6 text-center text-white lg:flex-row lg:text-left">
              <div className="flex-1">
                <div className="font-bangers text-[32px] uppercase text-white">
                  Best pizza in town
                </div>

                <h1 className="font-bangers text-6xl drop-shadow-md lg:text-7xl">
                  Pizza perfection <br /> in every bite
                </h1>
              </div>
            </div>
          </MouseParallaxChild>

          {/* images */}
          <MouseParallaxChild factorX={0.2} factorY={0.3} className="relative">
            <div>
              {/* image */}
              <div>
                <Image
                  src={"/pizza-banner.png"}
                  width={440}
                  height={548}
                  alt="pizza_banner"
                  priority={true}
                />
              </div>
            </div>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  );
};

export default Banner;
