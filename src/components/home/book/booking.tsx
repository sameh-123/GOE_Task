import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Booking() {
  return (
    <section className="container my-10 grid grid-cols-2 rounded-4xl text-black">
      <div className="md:col-span-1 md:h-full col-span-2 bg-[#BFDBC9] md:rounded-tl-4xl md:rounded-bl-4xl rounded-t-4xl md:rounded-t-none p-10 flex flex-col gap-5 justify-center">
        <h1 className="sm:text-5xl text-3xl font-semibold">
          Ready to Book Your Next Adventure?
        </h1>
        <p className="sm:text-2xl text-xl">
          Get exclusive deals and immersive previews with our smart booking
          platform.
        </p>

        <Link
          href="/booking"
          className="text-white bg-green rounded-4xl py-4 sm:px-20 px-10 w-fit text-lg font-semibold hover:bg-green/80"
        >
          Book now
        </Link>
      </div>

      <Image
        src="/booking.jpeg"
        alt="booking"
        width={1000}
        height={1000}
        className="md:col-span-1 sm:h-full col-span-2 object-cover md:rounded-tr-4xl md:rounded-br-4xl rounded-b-4xl md:rounded-b-none"
      />
    </section>
  );
}
