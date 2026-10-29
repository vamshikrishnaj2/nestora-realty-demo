import {Property} from '../data/properties';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

export default function PropertyCard({property, onViewDetails}: PropertyCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-48 object-cover"
        referrerPolicy="no-referrer"
        onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22200%22%20fill%3D%22%23f1f5f9%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22sans-serif%22%20font-size%3D%2216%22%20fill%3D%22%2394a3b8%22%20text-anchor%3D%22middle%22%3EImage%20Unavailable%3C%2Ftext%3E%3C%2Fsvg%3E';
        }}
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900 mb-1">{property.title}</h3>
        <p className="text-sm text-slate-500 mb-2">{property.location} · {property.type}</p>
        <p className="text-lg font-bold text-slate-900 mb-4">{property.price}</p>
        <div className="text-sm text-slate-600 flex gap-4">
          <span>{property.bedrooms} Beds</span>
          <span>{property.bathrooms} Baths</span>
          <span>{property.area}</span>
        </div>
        <button onClick={() => onViewDetails(property)} className="mt-6 w-full text-center px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}
