import { Discover } from '@/utils/types';
import Image from 'next/image';

export default function DiscoverCard({ discover }: { discover: Discover }) {
  const { location, image, id } = discover;
  return (
    <div className="bg-white h-75 w-60 group rounded-4xl relative flex items-end overflow-hidden">
      <Image
        src={image}
        alt={location}
        width={1000}
        height={1000}
        className="w-full h-full object-cover absolute inset-0 rounded-4xl group-hover:scale-110 transition-all duration-2000"
      />
      <div className='w-full h-full absolute inset-0 rounded-4xl bg-black/30'></div>

      <div className="p-5 z-10 text-2xl font-bold">{location}</div>
    </div>
  );
}
