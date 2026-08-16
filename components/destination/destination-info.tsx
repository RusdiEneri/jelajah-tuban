import type { Destination } from "@/types/destination";
export function DestinationInfo({ destination }: { destination: Destination }) { return <section><p>{destination.description ?? "Details coming soon."}</p><dl><dt>Opening hours</dt><dd>{destination.openingHours ?? "To be confirmed"}</dd><dt>Ticket price</dt><dd>{destination.ticketPrice ?? "To be confirmed"}</dd></dl></section>; }
