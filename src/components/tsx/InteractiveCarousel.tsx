import * as React from "react";

import Card from "./Card.jsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const mql = window.matchMedia("(width <= 640px)");

export default function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: mql.matches ? "center" : "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="lg:max-w-auto flex gap-2 *:max-w-[80%] lg:gap-8">
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
            img="/images/card4.svg"
            desc="A Prediction Market seeking robust real-time data feeds to scale their consumer app."
          />
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card
            img="/images/card5.svg"
            desc="Video game studios enabling community building analytics with zero integration."
          />
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card
            img="/images/card6.svg"
            desc="A marketing agency building automated real-time brand influencer matching."
          />
        </CarouselItem>

        <CarouselItem className="pr-2 md:basis-1/2 lg:basis-1/3">
          <Card
            img="/images/card1.svg"
            desc="A social platform integrating real-time community rewards over Twitch & YouTube."
          />
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
