import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TubanMap } from "@/components/map/tuban-map";
export function MapSection() { return <section id="map" className="page-section map-section" aria-labelledby="map-title"><div className="map-grid"><div className="map-copy"><p className="eyebrow">Navigate</p><h2 id="map-title" className="headline">Explore Tuban</h2><p className="copy">Chart your own course through centuries of history and miles of coastline. Use our interactive map to uncover hidden gems and plan your perfect itinerary.</p><Link className="editorial-link" href="/wisata">Open Interactive Map <ArrowUpRight size={16} /></Link></div><TubanMap /></div></section>; }
