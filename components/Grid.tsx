import { gridItems } from "@/data";

import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import Section from "./ui/Section";

function Grid() {
  // Returned JSX
  return (
    <Section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </Section>
  );
}

export default Grid;
