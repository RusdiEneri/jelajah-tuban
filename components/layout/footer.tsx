import Link from "next/link";
const groups = [["Explore", [["/wisata", "Destinasi"], ["/wisata", "Jelajah"], ["/itinerary", "Itinerary"]]], ["About", [["/tentang", "Tentang"], ["mailto:hello@jelajahtuban.id", "Contact"]]], ["Legal", [["/privacy", "Privacy Policy"], ["/terms", "Terms of Service"]]]] as const;
export function Footer() { return <footer><p className="font-heading">JELAJAH TUBAN</p>{groups.map(([title, links]) => <section key={title}><h2>{title}</h2>{links.map(([href, label]) => <Link key={label} href={href}>{label}</Link>)}</section>)}</footer>; }
