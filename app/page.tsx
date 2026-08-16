import { Categories } from "@/components/home/categories";
import { FeaturedDestinations } from "@/components/home/featured-destinations";
import { FinalCta } from "@/components/home/final-cta";
import { Hero } from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import { ItineraryPreview } from "@/components/home/itinerary-preview";
import { MapSection } from "@/components/home/map-section";
import { StorySection } from "@/components/home/story-section";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return <><Navbar /><main><Hero /><Intro /><FeaturedDestinations /><Categories /><MapSection /><StorySection /><ItineraryPreview /><FinalCta /></main><Footer /></>;
}
