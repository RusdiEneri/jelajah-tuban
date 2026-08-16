import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Destination } from "@/types/destination";
export function DestinationCard({ destination }: { destination: Destination }) { return <article className="destination-card"><div className="destination-image"><Image src={destination.coverImage!} alt={destination.name} fill sizes="(max-width: 767px) 100vw, 50vw" /></div><div className="destination-content"><p className="eyebrow">{destination.category}</p><h3>{destination.name}</h3><Link className="editorial-link" href={`/wisata/${destination.slug}`}>Discover <ArrowUpRight size={15} /></Link></div></article>; }
