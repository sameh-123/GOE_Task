import { Trend } from '@/utils/types';
import Image from 'next/image';
import Link from 'next/link';

export default function TrendCard({ trend }: { trend: Trend }) {
  const { location, description, image, id, color } = trend;
  return (
    <div className="bg-white p-8 h-96 sm:w-120 w-full group rounded-4xl relative flex flex-col justify-between overflow-hidden">
      {/* image  */}
      <Image
        src={image}
        alt={location}
        width={1000}
        height={1000}
        className="w-full h-full object-cover absolute inset-0 rounded-4xl group-hover:scale-110 transition-all duration-2000"
      />

      <div
        style={{
          backgroundImage: `linear-gradient(140deg, ${color} , transparent)`,
        }}
        className="w-full h-full absolute inset-0 rounded-4xl"
      ></div>

      {/* details */}

      <article className="flex flex-col gap-2 z-10">
        <h1 className="sm:text-5xl text-3xl font-semibold text-ellipsis line-clamp-1">
          {location}
        </h1>
        <p className="sm:text-3xl text-xl">{description}</p>
      </article>

      <Link
        href={`/hotels/${id}`}
        className="bg-white text-black font-semibold py-3 px-5 rounded-4xl w-fit text-xl z-10 hover:bg-slate-300 transition-all"
      >
        See Hotels
      </Link>
    </div>
  );
}
