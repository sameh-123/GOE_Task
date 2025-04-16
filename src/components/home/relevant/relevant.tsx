import { Relevant } from '@/utils/types';
import img1 from '@/images/relevants/img1.jpeg';
import img2 from '@/images/relevants/img2.png';
import img3 from '@/images/relevants/img3.jpeg';
import Title from '@/components/shared/title';
import RelevantSwiper from './relevant-swiper';
const relevants: Relevant[] = [
  {
    id: '1',
    location: 'Soma Bay',
    hotel: 'Kempinski Hotel Soma Bay',
    price: 214,
    rate: 4.7,
    reviews: 1274,
    image: img1,
  },
  {
    id: '2',
    location: 'Cairo',
    hotel: 'JW Marriott Hotel Cairo',
    price: 194,
    rate: 4.6,
    reviews: 2264,
    image: img2,
  },
  {
    id: '3',
    location: 'Luxor',
    hotel: 'Jolie ville Hotel Luxor',
    price: 300,
    rate: 3.0,
    reviews: 5000,
    image: img3,
  },
  {
    id: '4',
    location: 'Soma Bay',
    hotel: 'Kempinski Hotel Soma Bay',
    price: 214,
    rate: 4.7,
    reviews: 1274,
    image: img1,
  },
  {
    id: '5',
    location: 'Cairo',
    hotel: 'JW Marriott Hotel Cairo',
    price: 194,
    rate: 4.6,
    reviews: 2264,
    image: img2,
  },
];
export default function Relevants() {
  return (
    <section className="container py-8">
      <Title>The Most Relevant</Title>
      <RelevantSwiper relevants={relevants}/>
    </section>
  );
}
