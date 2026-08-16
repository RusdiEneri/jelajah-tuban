import { notFound } from "next/navigation";
import { DestinationGallery } from "@/components/destination/destination-gallery";
import { DestinationHero } from "@/components/destination/destination-hero";
import { DestinationInfo } from "@/components/destination/destination-info";
import { destinations } from "@/data/destinations";

export default async function DestinationPage({ params }: PageProps<"/wisata/[slug]">) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) notFound();
  return <main><DestinationHero destination={destination} /><DestinationInfo destination={destination} /><DestinationGallery gallery={destination.gallery} /></main>;
}
