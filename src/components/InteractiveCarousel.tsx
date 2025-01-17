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
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card
              img="/images/card1.svg"
              desc="A social platform integrating real-time community rewards over Twitch & YouTube."
            />
          </div>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card
              img="/images/card2.svg"
              desc="A social platform integrating real-time community rewards over Twitch & YouTube."
            />
          </div>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card
              img="/images/card3.svg"
              desc="A social platform integrating real-time community rewards over Twitch & YouTube."
            />
          </div>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card
              img="/images/card1.svg"
              desc="A social platform integrating real-time community rewards over Twitch & YouTube."
            />
          </div>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card
              img="/images/card2.svg"
              desc="A social platform integrating real-time community rewards over Twitch & YouTube."
            />
          </div>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card
              img="/images/card3.svg"
              desc="A social platform integrating real-time community rewards over Twitch & YouTube."
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
