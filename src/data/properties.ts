import villaImage from '../assets/images/prop_1_villa_1793216238028.jpg';
import penthouseImage from '../assets/images/prop_2_penthouse_1793216237206.jpg';
import estateImage from '../assets/images/prop_3_estate_1793216237788.jpg';
import loftImage from '../assets/images/prop_4_loft_1793216238092.jpg';
import suburbanImage from '../assets/images/prop_5_suburban_1793216238166.jpg';
import condoImage from '../assets/images/prop_6_condo_1793216238215.jpg';

export interface Property {
  id: string;
  title: string;
  type: 'Buy' | 'Rent';
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  description: string;
  imageUrl: string;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Minimalist Villa',
    type: 'Buy',
    location: 'Coastal Heights, CA',
    price: '$2,450,000 (SAMPLE)',
    bedrooms: 4,
    bathrooms: 3.5,
    area: '3,200 sqft',
    description: 'A stunning coastal villa with floor-to-ceiling windows and panoramic ocean views. Perfect for those who value privacy and modern architecture.',
    imageUrl: villaImage,
  },
  {
    id: '2',
    title: 'Urban Penthouse Studio',
    type: 'Rent',
    location: 'Downtown Core, NY',
    price: '$4,200/mo (SAMPLE)',
    bedrooms: 1,
    bathrooms: 1,
    area: '850 sqft',
    description: 'High-rise living at its finest. This urban sanctuary features high ceilings, premium finishes, and easy access to the city hub.',
    imageUrl: penthouseImage,
  },
  {
    id: '3',
    title: 'Countryside Family Estate',
    type: 'Buy',
    location: 'Rolling Hills, VT',
    price: '$1,850,000 (SAMPLE)',
    bedrooms: 5,
    bathrooms: 4,
    area: '4,500 sqft',
    description: 'Spacious and serene estate surrounded by lush greenery. Ideal for families seeking a peaceful escape without sacrificing comfort.',
    imageUrl: estateImage,
  },
  {
    id: '4',
    title: 'Contemporary Loft Apartment',
    type: 'Rent',
    location: 'Art District, IL',
    price: '$3,100/mo (SAMPLE)',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,400 sqft',
    description: 'Spacious open-concept loft in the heart of the art district. Features exposed brick, industrial styling, and abundant natural light.',
    imageUrl: loftImage,
  },
  {
    id: '5',
    title: 'Luxury Suburban Home',
    type: 'Buy',
    location: 'Maplewood, OH',
    price: '$950,000 (SAMPLE)',
    bedrooms: 4,
    bathrooms: 3,
    area: '2,800 sqft',
    description: 'A beautifully crafted suburban residence with an expansive backyard and top-tier amenities. Perfect for modern family life.',
    imageUrl: suburbanImage,
  },
  {
    id: '6',
    title: 'Chic Boutique Condo',
    type: 'Buy',
    location: 'West End, BC',
    price: '$1,200,000 (SAMPLE)',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,100 sqft',
    description: 'Thoughtfully designed boutique condo with bespoke interiors and proximity to premium shopping and dining.',
    imageUrl: condoImage,
  },
];

export const locations = [
  { id: 'l1', name: 'Coastal Heights, CA', imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop' },
  { id: 'l2', name: 'Downtown Core, NY', imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=600&auto=format&fit=crop' },
  { id: 'l3', name: 'Rolling Hills, VT', imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop' },
];

export const agents = [
    { id: 'a1', name: 'Sarah Jenkins', title: 'Senior Property Advisor', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
    { id: 'a2', name: 'Mark Thompson', title: 'Luxury Estate Specialist', imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' },
];

