"use client"
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function AddToWishlist({
  id,
  isLiked,
}: {
  id: string;
  isLiked: boolean | undefined;
}) {
  const handleAddToWishlist = () => {
    // logic to add to wishlist
    console.log(id);
  };
  return (
    <button
      onClick={handleAddToWishlist}
      className="bg-white size-10 rounded-full flex items-center justify-center border border-secondary cursor-pointer"
    >
      {isLiked ? (
        <FaHeart size={25} className="fill-secondary" />
      ) : (
        <FaRegHeart size={25} className="fill-black" />
      )}
    </button>
  );
}
