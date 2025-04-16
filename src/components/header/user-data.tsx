import React from 'react';
import ImageFallback from '../shared/image-fallback';
import { BiCart, BiHeart } from 'react-icons/bi';
import ProfileMenu from './profile-menu';

export default function UserData({
  userImage,
}: {
  userImage: string | null | undefined;
}) {
  return (
    <div className="flex items-center xl:gap-8 gap-4 text-xl">
      |
      <div className="flex items-center gap-2">
        <BiHeart size={30} className="hover:fill-secondary" />
        <BiCart size={30} className="hover:fill-secondary" />
      </div>
      <ProfileMenu userImage={userImage} />
    </div>
  );
}
