import { DestinationCard } from "@/components/destination/destination-card";
import { destinations } from "@/data/destinations";
const featuredSlugs = ["pantai-boom", "goa-akbar", "makam-sunan-bonang", "klenteng-kwan-sing-bio"];
export function FeaturedDestinations() { const featured = destinations.filter((destination) => featuredSlugs.includes(destination.slug)); return <section aria-labelledby="featured-title" data-section="featured-destinations"><h2 id="featured-title" className="font-heading">Featured destinations</h2><div>{featured.map((destination) => <DestinationCard key={destination.id} destination={destination} />)}</div></section>; }
