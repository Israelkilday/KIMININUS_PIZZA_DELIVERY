"use client";

import Image from "next/image";
import "animate.css";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const Banner = () => {
  return (
    <section className="bg-primary bg-pattern pt-16 lg:min-h-[768px] lg:pt-7">
      <div className="container mx-auto flex min-h-[768px] items-center justify-center">
        <MouseParallaxContainer
          globalFactorX={0.4}
          globalFactorY={0.3}
          className="flex w-full flex-col items-center justify-between lg:h-[670px] lg:flex-row"
        >
          <MouseParallaxChild factorX={0.1} factorY={0.2}>
            <div className="flex flex-1 flex-col items-center px-6 text-center text-white lg:flex-row lg:text-left">
              <div className="flex-1">
                <h1 className="mt-24 animate-slide font-bangers text-6xl drop-shadow-md md:mt-10 lg:mt-0 lg:text-[80px]">
                  A verdadeira pizza napo
                  <br /> onde você estiver!
                </h1>
              </div>
            </div>
          </MouseParallaxChild>

          <MouseParallaxChild factorX={0.2} factorY={0.3} className="relative">
            <div className="flex flex-1 flex-col items-center px-6 text-center lg:flex-row lg:text-left">
              <div className="flex max-w-sm flex-1 animate-rotation justify-end lg:max-w-max">
                <Image
                  src={"/pizza-banner.png"}
                  width={440}
                  height={548}
                  alt="pizza_banner"
                  priority={true}
                />
              </div>
            </div>

            <MouseParallaxChild
              factorX={0.2}
              factorY={0.3}
              className="absolute left-4 top-6 hidden lg:flex"
            >
              <Image
                src={"/chilli-1.png"}
                width={160}
                height={84}
                alt="chilli_image_1"
                priority={true}
              />
            </MouseParallaxChild>

            <MouseParallaxChild
              factorX={0.4}
              factorY={0.4}
              className="absolute left-4 top-16 hidden lg:flex"
            >
              <Image
                src={"/chilli-2.png"}
                width={130}
                height={84}
                alt="chilli_image_2"
                priority={true}
              />
            </MouseParallaxChild>

            <MouseParallaxChild
              factorX={0.5}
              factorY={0.5}
              className="absolute -left-24 top-80 hidden lg:flex"
            >
              <Image
                src={"/garlic-1.png"}
                width={84}
                height={72}
                alt="chilli_image_2"
                priority={true}
              />
            </MouseParallaxChild>

            <MouseParallaxChild
              factorX={0.3}
              factorY={0.6}
              className="absolute -left-8 top-[22rem] hidden lg:flex"
            >
              <Image
                src={"/garlic-2.png"}
                width={100}
                height={72}
                alt="garlic-2_image_2"
                priority={true}
              />
            </MouseParallaxChild>

            <MouseParallaxChild
              factorX={0.4}
              factorY={1}
              className="absolute -left-20 top-96 hidden lg:flex"
            >
              <Image
                src={"/garlic-3.png"}
                width={100}
                height={72}
                alt="garlic-3_image_3"
                priority={true}
              />
            </MouseParallaxChild>

            <MouseParallaxChild
              factorX={0.2}
              factorY={0.2}
              className="absolute left-12 top-80 hidden lg:flex"
            >
              <Image
                src={"/leaves.png"}
                width={180}
                height={72}
                alt="leaves"
                priority={true}
              />
            </MouseParallaxChild>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  );
};

export default Banner;
