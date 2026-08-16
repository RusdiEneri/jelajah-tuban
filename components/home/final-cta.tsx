import Link from "next/link";
import Image from "next/image";
export function FinalCta() { return <section className="final-cta" aria-labelledby="cta-title"><div className="final-image"><Image src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=2200&q=85" alt="Sunset over a tropical coast" fill sizes="100vw" /></div><div className="final-content"><h2 id="cta-title" className="display">YOUR TUBAN STORY STARTS HERE.</h2><Link className="hero-primary" href="/wisata">Start Exploring</Link></div></section>; }
