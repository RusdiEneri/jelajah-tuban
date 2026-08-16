import { DestinationGrid } from "@/components/destination/destination-grid";
import { destinations } from "@/data/destinations";

export default function WisataPage() {
  return <main><h1 className="font-heading">Destinasi Tuban</h1><DestinationGrid destinations={destinations} /></main>;
}
