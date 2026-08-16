import { DestinationListing } from "@/components/destination/destination-listing";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { destinations } from "@/data/destinations";

export default function WisataPage() {
  return <><Navbar /><main className="listing-page"><header className="listing-hero"><p className="eyebrow">Explore Tuban</p><h1 className="display">Places Worth Remembering</h1><p>Find places worth remembering. Discover the rich history and natural beauty of coastal Tuban.</p></header><DestinationListing destinations={destinations} /></main><Footer /></>;
}
