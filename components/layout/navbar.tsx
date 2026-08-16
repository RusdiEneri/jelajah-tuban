import Link from "next/link";
import { Menu, Search } from "lucide-react";
const links = [["/wisata", "Destinasi"], ["/wisata", "Jelajah"], ["/itinerary", "Itinerary"], ["/tentang", "Tentang"]] as const;
export function Navbar() { return <header><nav className="site-nav" aria-label="Navigasi utama"><Link href="/" className="wordmark">JELAJAH TUBAN</Link><div className="nav-links">{links.map(([href, label]) => <Link key={label} href={href}>{label}</Link>)}</div><button className="search-button circle-button" type="button" aria-label="Cari destinasi"><Search size={16} /></button><Link className="explore-button" href="/wisata">Explore</Link><button className="mobile-menu circle-button" type="button" aria-label="Buka menu"><Menu size={19} /></button></nav></header>; }
