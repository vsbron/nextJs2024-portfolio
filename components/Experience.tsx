import { workExperience } from "@/data";

import Section from "./ui/Section";
import { Button } from "./ui/MovingBorder";
import Image from "next/image";

function Experience() {
  return (
    <Section>
      <h2 className="heading">
        My <span className="text-purple">work experience</span>
      </h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(5000 + Math.random() * 5000)}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col sm:flex-row sm:items-center py-8 px-10 lg:p-8 md:p-10 sm:py-6 sm:px-8 gap-5">
              <div className="relative w-16 lg:w-32 md-w-20 aspect-square">
                <Image src={card.thumbnail} alt={card.thumbnail} fill />
              </div>
              <div className="lg:ms-5">
                <h3 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h3>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.description}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
