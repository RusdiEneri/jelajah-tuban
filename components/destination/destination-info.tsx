import type { Destination } from "@/types/destination";
export function DestinationInfo({ destination }: { destination: Destination }) { return <section><p>{destination.description}</p><dl><dt>Opening hours</dt><dd>{destination.openingHours}</dd><dt>Ticket price</dt><dd>{destination.ticketPrice}</dd></dl></section>; }
