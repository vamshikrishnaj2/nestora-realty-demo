import {Property} from '../data/properties';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyModal({property, onClose}: PropertyModalProps) {
  if (!property) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="float-right text-slate-500 hover:text-slate-900">Close</button>
        <img src={property.imageUrl} alt={property.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <h2 className="text-3xl font-bold mb-2">{property.title}</h2>
        <p className="text-lg text-slate-600 mb-4">{property.location} · {property.type}</p>
        <p className="text-2xl font-bold text-slate-900 mb-6">{property.price}</p>
        <div className="grid grid-cols-3 gap-4 mb-6 text-sm text-slate-600">
            <div><strong>Beds:</strong> {property.bedrooms}</div>
            <div><strong>Baths:</strong> {property.bathrooms}</div>
            <div><strong>Area:</strong> {property.area}</div>
        </div>
        <p className="text-slate-700 leading-relaxed mb-8">{property.description}</p>
        <button className="w-full py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
            Enquire About This Property
        </button>
      </div>
    </div>
  );
}
