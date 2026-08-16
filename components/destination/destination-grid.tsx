import type { Destination } from "@/types/destination";
import { DestinationCard } from "./destination-card";
export function DestinationGrid({ destinations }: { destinations: Destination[] }) { return <div className="destination-grid">{destinations.map((destination) => <DestinationCard key={destination.id} destination={destination} />)}</div>; }
