import type { Destination } from "@/types/destination";
export function DestinationHero({ destination }: { destination: Destination }) { return <section><p>{destination.category}</p><h1 className="font-heading">{destination.name}</h1></section>; }
