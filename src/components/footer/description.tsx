import Image from 'next/image'
import Link from 'next/link';
import MainNav from '../header/main-nav';

export default function Description() {
  return (
    <div className='flex flex-col gap-8'>
      <Image
        src="/logo1.png"
        alt="goe logo"
        width={1000}
        height={1000}
        className="w-40"
      />
      <p className='text-4xl max-w-2xl'>Lorem, Ipsum Lorem, Ipsum Lorem, Ipsum or less</p>
      <Link href="#" className='bg-secondary py-2 px-6 rounded-4xl text-xl w-fit hover:bg-secondary/80'>Discover More</Link>
      <MainNav/>
    </div>
  );
}
