import Image from "next/image";
import type { Destination } from "@/types/destination";

export function DestinationHero({
  destination,
}: {
  destination: Destination;
}) {
  return (
    <section className="destination-hero">
      <Image
        src={destination.coverImage}
        alt={destination.name}
        fill
        sizes="100vw"
      />
      <div className="destination-hero-content">
        <p>{destination.category}</p>
        <h1 className="font-heading">{destination.name}</h1>
      </div>
    </section>
  );
}
