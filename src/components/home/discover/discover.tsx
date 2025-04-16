import { Discover } from '@/utils/types';
import img1 from '@/images/discovers/img1.jpeg';
import img2 from '@/images/discovers/img2.jpeg';
import img3 from '@/images/discovers/img3.jpeg';
import img4 from '@/images/discovers/img4.jpeg';
import img5 from '@/images/discovers/img5.jpeg';
import img6 from '@/images/discovers/img6.jpeg';
import Title from '@/components/shared/title';
import DiscoverSwiper from './discover-swiper';
const discovers: Discover[] = [
  {
    id: '1',
    location: 'Red Sea',
    image: img1,
  },
  {
    id: '2',
    location: 'Soma Bay',
    image: img2,
  },
  {
    id: '3',
    location: 'Giza',
    image: img3,
  },
  {
    id: '4',
    location: 'Nile',
    image: img4,
  },
  {
    id: '5',
    location: 'Nabq Bay',
    image: img5,
  },
  {
    id: '6',
    location: 'Cairo',
    image: img6,
  },
  {
    id: '7',
    location: 'Cairo',
    image: img2,
  },
];
export default function Discovers() {
  return (
    <section className="container py-8">
      <Title>Dicover New Places</Title>
      <DiscoverSwiper discovers={discovers} />
    </section>
  );
}
