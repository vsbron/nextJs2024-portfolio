import Image from "next/image";

import { companies, testimonials } from "@/data";

import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import Section from "./ui/Section";

function Clients() {
  // Returned JSX
  return (
    <Section id="testimonials">
      <h2 className="heading">
        Kind words from <span className="text-purple">Satisfied clients</span>
      </h2>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <div className="relative md:w-10 w-5 aspect-square">
                <Image src={img} fill alt={name} />
              </div>
              <div className="relative md:w-24 w-20 aspect-auto">
                <Image src={nameImg} fill alt={name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Clients;
