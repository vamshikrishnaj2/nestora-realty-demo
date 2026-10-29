export default function Navbar() {
  return (
    <header className="flex items-center justify-between gap-8 px-6 py-4 border-b border-slate-200">
      <a href="/" className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0">
        Nestora Realty
      </a>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
        <a href="#properties" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Buy</a>
        <a href="#properties" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Rent</a>
        <a href="#properties" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Projects</a>
        <a href="#locations" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Locations</a>
        <a href="#contact" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Contact</a>
      </nav>
      <div className="flex items-center gap-3 shrink-0">
        <a href="#properties" className="px-4 py-2 text-xs font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0">
          Find a Property
        </a>
      </div>
    </header>
  );
}
