'use client';
import { setCookie } from '@/utils/handle-cookies';
// import Link from 'next/link';

export default function Auth() {
  return (
    <div className="flex items-center gap-4 text-xl">
      {/* just simulating the action of sign in but the actual code should containt the below links */}
      <button
        onClick={async () => {
          await setCookie('token', '1');
        }}
        className="bg-secondary rounded-xl px-8 py-2 hover:bg-secondary/70 cursor-pointer"
      >
        Login
      </button>
      <button
        onClick={async () => {
          await setCookie('token', '1');
        }}
        className="bg-secondary rounded-xl px-8 py-2 hover:bg-secondary/70 cursor-pointer"
      >
        Sign Up
      </button>

      {/* <Link
        href="/login"
        className="bg-secondary rounded-xl px-8 py-2 hover:bg-secondary/70 cursor-pointer"
      >
        Login
      </Link>
      <Link
        href="/signup"
        className="bg-secondary rounded-xl px-8 py-2 hover:bg-secondary/70 cursor-pointer"
      >
        Sign Up
      </Link> */}
    </div>
  );
}
