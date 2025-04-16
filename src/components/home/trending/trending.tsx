import Title from '@/components/shared/title';
import { Trend } from '@/utils/types';
import img1 from '@/images/trends/img1.jpeg';
import img2 from '@/images/trends/img2.jpeg';
import img3 from '@/images/trends/img3.jpeg';
import TrendingSwiper from './trending-swiper';
const trends: Trend[] = [
  {
    id: '1',
    location: 'Soma Bay',
    description: 'Kempinski Hotel Soma Bay',
    image: img1,
    color: '#FC8E50',
  },
  {
    id: '2',
    location: 'Cairo',
    description: 'JW Marriott Hotel Cairo',
    image: img2,
    color: '#6497C4',
  },
  {
    id: '3',
    location: 'Luxor',
    description: 'Jolie ville Hotel Luxor',
    image: img3,
    color: '#BB5050',
  },
  {
    id: '4',
    location: 'Soma Bay',
    description: 'Kempinski Hotel Soma Bay',
    image: img1,
    color: '#FC8E50',
  },
  {
    id: '5',
    location: 'Cairo',
    description: 'JW Marriott Hotel Cairo',
    image: img2,
    color: '#6497C4',
  },
];
export default function Trending() {
  return (
    <section className="container py-10">
      <Title>Trending Destinations</Title>
      <TrendingSwiper trendings={trends} />
    </section>
  );
}
