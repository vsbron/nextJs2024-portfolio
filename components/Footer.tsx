import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";

import MagicButton from "./ui/MagicButton";

function Footer() {
  // Returned JSX
  return (
    <footer className="w-full pt-20 pb-10 md:mb-5" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <div className="relative h-[1200px]">
          <Image
            src="/footer-grid.svg"
            alt="Grid"
            className="opacity-60"
            fill
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h2>
        <p className="text-white-200 mb-14 md:mb-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:dummy@email.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col-reverse justify-between items-center gap-6">
        <p className=" text-xs md:text-sm font-light text-center md:text-left">
          Copyright &copy;2024 John.
          <br />
          All rights reserved.
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a href={profile.url} target="_blank" key={profile.id}>
              <span className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg backdrop-saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-black-300 transition-all duration-300">
                <Image
                  src={profile.img}
                  alt={profile.name}
                  width={20}
                  height={20}
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
