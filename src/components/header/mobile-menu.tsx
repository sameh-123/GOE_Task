import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';

import { CgMenu } from 'react-icons/cg';
import LangSwitch from './lang-switcher';
import { BiCart, BiHeart } from 'react-icons/bi';
import ProfileLinks from './profile-links';
import { cookies } from 'next/headers';

export default async function MobileMenue() {
  const cookie = await cookies();
  const isLogged = cookie.get('token')?.value;
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer" asChild>
        <CgMenu size={30} className="fill-secondary text-secondary lg:hidden" />
      </SheetTrigger>
      <SheetContent className="border-none outline-0 ring-0 p-5">
        <SheetHeader className="*:focus-visible:outline-0 *:focus-visible:ring-0 *:focus-visible:border-none">
          <SheetTitle>
            <Link href="/">
              <Image
                src="/logo2.png"
                alt="logo"
                width={1000}
                height={1000}
                className="w-40 mt-10"
              />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="p-3 flex flex-col gap-10">
          {isLogged ? (
            <div className="text-2xl font-semibold flex flex-col gap-5 *:hover:text-secondary">
              <Link href="/cart" className="flex items-center gap-1">
                <BiCart size={35} className="hover:fill-secondary" /> Cart
              </Link>
              <Link href="/whishlist" className="flex items-center gap-1">
                <BiHeart size={33} className="hover:fill-secondary" /> Wishlist
              </Link>
            </div>
          ) : null}

          <LangSwitch />

          {isLogged ? (
            <ProfileLinks />
          ) : (
            <div className="text-2xl font-semibold flex flex-col gap-5 *:hover:text-secondary">
              <Link href="/login">Login</Link>
              <Link href="/signup">Sign Up</Link>
            </div>
          )}
        </div>
        <SheetFooter className="self-center">
          <Image
            src="/logo1.png"
            alt="main logo"
            width={2000}
            height={2000}
            className="w-50"
          />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
