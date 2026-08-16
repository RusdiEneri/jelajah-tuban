import type { Destination } from "@/types/destination";
export function DestinationGallery({ gallery }: Pick<Destination, "gallery">) { return <section aria-label="Destination gallery">{gallery.length ? `${gallery.length} gallery images` : "Gallery coming soon"}</section>; }
