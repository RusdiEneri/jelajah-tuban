import Link from "next/link";
const itineraries = [["1 DAY", "The Highlights"], ["2 DAYS", "Coastal & Culture"], ["3 DAYS", "The Deep Dive"]] as const;
export function ItineraryPreview() { return <section aria-labelledby="itinerary-title" data-section="itinerary-preview"><h2 id="itinerary-title" className="font-heading">Plan your journey</h2>{itineraries.map(([duration, title]) => <article key={duration}><p>{duration}</p><h3>{title}</h3><p>A curated Tuban route will be available here.</p><Link href="/itinerary">VIEW DETAILS</Link></article>)}</section>; }
