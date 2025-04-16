import AddToWishlist from '@/components/shared/add-to-wishlist';
import { Relevant } from '@/utils/types';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

export default function RelevantCard({ relevant }: { relevant: Relevant }) {
  const { location, hotel, price, rate, reviews, image, isLiked, id } =
    relevant;
  return (
    <div className="bg-white h-96 sm:w-120 w-full rounded-4xl">
      {/* image , location and wishlist */}
      <div className="w-full h-3/4 relative">
        <Image
          src={image}
          alt={hotel}
          width={1000}
          height={1000}
          className="w-full h-full object-cover absolute inset-0 rounded-4xl z-0"
        />
        <div className="relative z-10 p-5 flex items-center justify-between">
          <h2 className="bg-white text-black px-4 py-2 rounded-4xl w-fit">
            {location}
          </h2>
          <AddToWishlist isLiked={isLiked} id={id} />
        </div>
      </div>

      {/* details */}

      <article className="p-5 text-black flex justify-between">
        <div className="max-w-2/3">
          <h2 className="text-lg font-semibold text-ellipsis line-clamp-1">
            {hotel}
          </h2>
          <p>From ${price} per person</p>
        </div>

        <div className="flex items-center">
          <FaStar size={25} className="fill-secondary" />
          <span className='font-semibold'>{rate}</span>({reviews})
        </div>
      </article>
    </div>
  );
}
