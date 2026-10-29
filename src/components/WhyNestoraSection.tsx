export default function WhyNestoraSection() {
  const benefits = [
    { title: 'Personalized Service', desc: 'We tailor our search process to your specific lifestyle requirements.' },
    { title: 'Market Expertise', desc: 'Deep knowledge of local market dynamics and property values.' },
    { title: 'Streamlined Process', desc: 'Efficiency from search to settlement, minimizing stress.' },
  ];
  return (
    <section className="px-6 py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Why Nestora Realty</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="p-8 bg-white border border-slate-200 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">{b.title}</h3>
              <p className="text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
