const categories = ["Pantai", "Alam", "Sejarah", "Religi", "Kuliner"];
export function Categories() { return <section aria-labelledby="categories-title" data-section="categories"><h2 id="categories-title" className="font-heading">Explore by category</h2><div>{categories.map((category) => <span key={category}>{category}</span>)}</div></section>; }
