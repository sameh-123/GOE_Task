'use client';
import { deleteCookie } from '@/utils/handle-cookies';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ProfileLinks() {
  const activePath = usePathname();

  const handleLogOut = async () => {
    //logic to handle log out
    await deleteCookie('token');
    console.log('log out');
  };
  return (
    <div className="flex flex-col gap-4 text-2xl  *:hover:text-secondary">
      <Link
        href="/profile"
        className={`${activePath == '/' ? 'text-secondary' : ''}`}
      >
        Profile
      </Link>
      <Link
        href="/deals"
        className={`${activePath == '/deals' ? 'text-secondary' : ''}`}
      >
        Saved deals
      </Link>
      <Link
        href="/invite"
        className={`${activePath == '/invite' ? 'text-secondary' : ''}`}
      >
        Invite friends
      </Link>
      <Link
        href="/settings"
        className={`${activePath == '/settings' ? 'text-secondary' : ''}`}
      >
        Settings
      </Link>
      <button
        onClick={handleLogOut}
        className="text-red-500 font-normal w-fit cursor-pointer"
      >
        Log out
      </button>
    </div>
  );
}
