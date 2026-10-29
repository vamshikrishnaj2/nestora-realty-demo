import {locations} from '../data/properties';

export default function LocationsSection() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Explore Our Locations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {locations.map((loc) => (
          <div key={loc.id} className="relative group rounded-xl overflow-hidden h-64">
            <img src={loc.imageUrl} alt={loc.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 flex items-end p-6">
              <h3 className="text-white text-xl font-semibold">{loc.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
