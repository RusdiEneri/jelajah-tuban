import { notFound } from "next/navigation";
import { DestinationGallery } from "@/components/destination/destination-gallery";
import { DestinationHero } from "@/components/destination/destination-hero";
import { DestinationInfo } from "@/components/destination/destination-info";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { destinations } from "@/data/destinations";

export function generateStaticParams() {
  return destinations.map(({ slug }) => ({ slug }));
}

export default async function DestinationPage({ params }: PageProps<"/wisata/[slug]">) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) notFound();
  return (
    <>
      <Navbar />
      <main>
        <DestinationHero destination={destination} />
        <DestinationInfo destination={destination} />
        <DestinationGallery gallery={destination.gallery} />
      </main>
      <Footer />
    </>
  );
}
