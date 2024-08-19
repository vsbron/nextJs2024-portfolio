"use client";
import { useState } from "react";
import Lottie from "react-lottie";
import { IoCopyOutline } from "react-icons/io5";

import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeGrid } from "./GridGlobe";
import MagicButton from "./MagicButton";

import { cn } from "@/lib/utils";
import animationData from "@/data/confetti.json";
import Image from "next/image";

// Component from Aceternity UI
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  // State for copied email
  const [copied, setCopied] = useState(false);

  // Stack lists
  const leftStack = ["React.js", "Next.js", "TypeScript"];
  const rightStack = ["Tailwind", "GSAP", "Supabase"];

  // Default options for Lottie component
  const lottieDefaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  // Click handler for copying email
  const handleCopy = () => {
    navigator.clipboard.writeText("dummy@email.com");
    setCopied(true);
  };

  // Returned JSX
  return (
    <div
      className={`row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 justify-between flex flex-col space-y-4 border border-white/[0.1] ${className}`}
      style={{
        background: "rgb(4,7,29)",
        backgroundImage:
          "linear-gradient(90deg, rgb(4,7,29) 0%, rgb(12,14,35) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <div
              className={`${imgClassName} ${
                id === 1
                  ? "aspect-[689/541] h-[354px]"
                  : id === 4
                  ? "aspect-[351/180] h-[180px]"
                  : id === 5 && "aspect-[500/383] h-[294px]"
              }`}
            >
              <Image src={img} className={` object-cover`} fill alt={img} />
            </div>
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <div
              className={`relative ${
                id === 4
                  ? "aspect-[104/48] h-[96px]"
                  : id === 5
                  ? "aspect-[117/60] w-[100%]"
                  : ""
              }`}
            >
              <Image
                src={spareImg}
                className="object-cover"
                fill
                alt={spareImg}
              />
            </div>
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={`${titleClassName} group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10`}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && <GlobeGrid />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {leftStack.map((item) => (
                  <span
                    key={item}
                    className="py-2 px-3 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center  bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                {rightStack.map((item) => (
                  <span
                    key={item}
                    className="py-2 px-3 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center  bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0 pointer-events-none`}>
                <Lottie options={lottieDefaultOptions} />
              </div>
              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161831]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
