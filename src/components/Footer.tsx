export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-slate-200 text-center text-slate-500 text-sm">
      <div className="flex justify-center gap-6 mb-6">
        <a href="#properties" className="hover:text-slate-900 transition-colors">Buy/Rent</a>
        <a href="#locations" className="hover:text-slate-900 transition-colors">Locations</a>
        <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
        <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
      </div>
      <p>&copy; 2026 Nestora Realty. All rights reserved.</p>
      <p className="mt-2 text-xs">Fictional demonstration for portfolio purposes only.</p>
    </footer>
  );
}
