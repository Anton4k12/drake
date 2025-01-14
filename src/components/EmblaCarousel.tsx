import React, { type ReactNode } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Children } from "react";
import type { EmblaOptionsType } from "embla-carousel";
import { cn } from "./utils";

type EmblaCarouselProps = {
  options: EmblaOptionsType;
  children: ReactNode;
};

const EmblaCarousel = (props: EmblaCarouselProps) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla lg:hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {Children.map(props.children, (child) => (
            <div className="embla__slide">
              <div className="embla__slide__number">{child}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* <div>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div> */}

        <div className="flex items-center justify-center gap-2.5 pt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                "size-2.5 rounded-full bg-white/20",
                index === selectedIndex && "bg-white/80",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
