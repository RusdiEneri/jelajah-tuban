import Link from "next/link";
const links = [["/wisata", "Destinasi"], ["/wisata", "Jelajah"], ["/itinerary", "Itinerary"], ["/tentang", "Tentang"]] as const;
export function Navbar() { return <header><nav aria-label="Navigasi utama"><Link href="/" className="font-heading">JELAJAH TUBAN</Link><div>{links.map(([href, label]) => <Link key={label} href={href}>{label}</Link>)}</div><button type="button" aria-label="Cari destinasi">Search</button><Link href="/wisata">Explore</Link><button type="button" aria-label="Buka menu">Menu</button></nav></header>; }
