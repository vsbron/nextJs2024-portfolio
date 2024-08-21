import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

import { projects } from "@/data";

import { PinContainer } from "./ui/PinContainer";
import Section from "./ui/Section";

function RecentProjects() {
  // Returned JSX
  return (
    <Section id="projects">
      <h2 className="heading">
        A small selection of{" "}
        <span className="text-purple">Recent Projects</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-8 max-md:-translate-y-7 max-md:-mb-7">
        {projects.map(({ id, title, description, img, iconLists, link }) => (
          <div
            key={id}
            className="flex items-center justify-center w-[90vw] sm:w-[570px] h-[30rem] sm:h-[36rem] lg:h-[38rem]"
          >
            <PinContainer href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image fill src="/bg.png" alt="bg-img" />
                </div>
                <div className="absolute aspect-[450/302] h-[290px] md:h-[335px] z-10 -bottom-7 md:bottom-0">
                  <Image src={img} fill alt={title} />
                </div>
              </div>
              <h3 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h3>
              <p className="lg:text-xl lg:font-normal fonr-light text-sm line-clamp-2">
                {description}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, i) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-start items-center relative"
                      style={{ transform: `translateX(-${5 * i * 2}px)` }}
                    >
                      <Image fill src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#cbacf9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default RecentProjects;
