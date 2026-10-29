export default function Hero() {
  return (
    <section className="relative px-6 py-20 md:py-32 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-2xl text-wrap balance">
        Find a place that fits your life.
      </h1>
      <p className="text-lg text-slate-600 mb-10 max-w-lg">
        Explore homes and properties through a simpler property discovery experience.
      </p>
      <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex flex-col md:flex-row gap-4 w-full max-w-4xl">
        <input type="text" placeholder="Location" className="flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-slate-200" />
        <input type="text" placeholder="Property type" className="flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-slate-200" />
        <input type="text" placeholder="Budget" className="flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-slate-200" />
        <input type="text" placeholder="Bedrooms" className="flex-1 px-4 py-2" />
        <button onClick={() => alert('Search functionality is a demo feature. In production, this would filter the properties list.')} className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
          Search
        </button>
      </div>
    </section>
  );
}
