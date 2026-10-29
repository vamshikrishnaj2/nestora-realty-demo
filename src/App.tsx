/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useState} from 'react';
import DemoNotice from './components/DemoNotice';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyCard from './components/PropertyCard';
import LocationsSection from './components/LocationsSection';
import WhyNestoraSection from './components/WhyNestoraSection';
import AgentsSection from './components/AgentsSection';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import {properties, Property} from './data/properties';
import PropertyModal from './components/PropertyModal';

export default function App() {
  const [filter, setFilter] = useState<'All' | 'Buy' | 'Rent'>('All');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const filteredProperties = filter === 'All' 
    ? properties 
    : properties.filter(p => p.type === filter);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <DemoNotice />
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="properties" className="px-6 py-16 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Featured Properties</h2>
          <div className="flex gap-2">
            {(['All', 'Buy', 'Rent'] as const).map(f => (
                <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-lg ${filter === f ? 'bg-slate-900 text-white' : 'bg-slate-100'}`}>
                    {f}
                </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} onViewDetails={setSelectedProperty} />
          ))}
        </div>
      </section>
      <section id="locations">
        <LocationsSection />
      </section>
      <section id="about">
        <WhyNestoraSection />
      </section>
      <section id="agents">
        <AgentsSection />
      </section>
      <section id="contact">
        <EnquiryForm />
      </section>
      <Footer />
      <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
    </div>
  );
}
