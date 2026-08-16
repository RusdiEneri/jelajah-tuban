import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Destination } from "@/types/destination";
export function DestinationCard({ destination }: { destination: Destination }) { return <article className="destination-card"><div className="destination-image"><Image src={destination.coverImage} alt={destination.name} fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw" /></div><div className="destination-content"><p className="eyebrow">{destination.category}</p><h3>{destination.name}</h3><p className="destination-description">{destination.description}</p><p className="location-indicator"><MapPin size={14} aria-hidden="true" /> Tuban, East Java</p><Link className="editorial-link" href={`/wisata/${destination.slug}`}>Explore destination <ArrowUpRight size={15} /></Link></div></article>; }
