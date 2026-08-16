import Link from "next/link";
import type { Destination } from "@/types/destination";
export function DestinationCard({ destination }: { destination: Destination }) { return <article><p>{destination.category}</p><h3>{destination.name}</h3><p>{destination.description ?? "Destination details are being prepared."}</p><Link href={`/wisata/${destination.slug}`}>View destination</Link></article>; }
