import * as React from "react";

import Card from "./Card.jsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="flex gap-8">
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card
            img="/images/card1.svg"
            desc="A social platform integrating real-time community rewards over Twitch & YouTube."
          />
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card
            img="/images/card2.svg"
            desc="A creator agency analyzing 250 hours of content every day on behalf of leading brands."
          />
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card
            img="/images/card3.svg"
            desc="A game studio embedding AI Agents to capture insights from every player session."
          />
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card
            img="/images/card1.svg"
            desc="A social platform integrating real-time community rewards over Twitch & YouTube."
          />
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card
            img="/images/card2.svg"
            desc="A creator agency analyzing 250 hours of content every day on behalf of leading brands."
          />
        </CarouselItem>

        <CarouselItem className="pr-8 md:basis-1/2 lg:basis-1/3">
          <Card
            img="/images/card3.svg"
            desc="A game studio embedding AI Agents to capture insights from every player session."
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
