import {agents} from '../data/properties';

export default function AgentsSection() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Agents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {agents.map((agent) => (
          <div key={agent.id} className="flex gap-6 items-center p-6 border border-slate-200 rounded-xl">
            <img src={agent.imageUrl} alt={agent.name} className="w-24 h-24 rounded-full object-cover" />
            <div>
              <h3 className="text-xl font-semibold">{agent.name}</h3>
              <p className="text-slate-600">{agent.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
