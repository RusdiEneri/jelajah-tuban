"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { Destination } from "@/types/destination";
import { DestinationGrid } from "./destination-grid";

const filters = ["ALL", "PANTAI", "ALAM", "SEJARAH", "RELIGI", "KULINER"] as const;
type Filter = (typeof filters)[number];

const filterTerms: Record<Exclude<Filter, "ALL">, string[]> = {
  PANTAI: ["pantai"],
  ALAM: ["alam", "goa", "air terjun", "pemandian"],
  SEJARAH: ["sejarah", "bersejarah"],
  RELIGI: ["religi"],
  KULINER: ["kuliner"],
};

function matchesFilter(destination: Destination, filter: Filter) {
  if (filter === "ALL") return true;
  const category = destination.category.toLocaleLowerCase("id-ID");
  return filterTerms[filter].some((term) => category.includes(term));
}

export function DestinationListing({ destinations }: { destinations: Destination[] }) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<Filter>("ALL");
  const filteredDestinations = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("id-ID");
    return destinations.filter((destination) => {
      const searchable = [destination.name, destination.category, destination.description].join(" ").toLocaleLowerCase("id-ID");
      return matchesFilter(destination, activeFilter) && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeFilter, destinations, query]);

  const clearFilters = () => { setQuery(""); setActiveFilter("ALL"); };

  return <section className="destination-listing">
    <div className="listing-controls">
      <label className="search-field"><Search size={18} aria-hidden="true" /><span className="sr-only">Search destinations</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search destinations..." /></label>
      <div className="filter-rail" aria-label="Filter destinations">{filters.map((filter) => <button className={activeFilter === filter ? "filter-button is-active" : "filter-button"} key={filter} type="button" onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}>{filter}</button>)}</div>
    </div>
    <p className="result-count">{filteredDestinations.length} {filteredDestinations.length === 1 ? "destination" : "destinations"}</p>
    {filteredDestinations.length ? <DestinationGrid destinations={filteredDestinations} /> : <div className="empty-state"><p className="eyebrow">No Destinations Found</p><p>Try another keyword or category.</p><button type="button" className="editorial-link" onClick={clearFilters}>Clear Filters</button></div>}
  </section>;
}
