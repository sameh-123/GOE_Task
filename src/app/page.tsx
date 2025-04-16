import Booking from '@/components/home/book/booking';
import Discovers from '@/components/home/discover/discover';
import Hero from '@/components/home/hero/hero';
import Relevants from '@/components/home/relevant/relevant';
import Trending from '@/components/home/trending/trending';
import WhyUs from '@/components/home/why-us/why-us';

export default function Home() {
  return (
    <main className='space-y-8'>
      <Hero />
      <Relevants />
      <Discovers />
      <WhyUs />
      <Trending />
      <Booking />
    </main>
  );
}
