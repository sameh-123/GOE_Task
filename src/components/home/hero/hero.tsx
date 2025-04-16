import Image from 'next/image';
import { RiTelegram2Fill } from 'react-icons/ri';
import ExploreForm from './(explore)/explore-form';
import { getCookie } from '@/utils/handle-cookies';

export default async function Hero() {
  const isAuth = await getCookie('token');
  const name = isAuth ? 'Sameh' : '';
  return (
    <section className="relative h-svh flex items-center">
      <Image
        src="/hero.png"
        alt="hero background"
        width={2000}
        height={2000}
        className="h-full w-full object-cover absolute inset-0 -z-2"
      />
      <div className="w-full h-full absolute inset-0 bg-black/50 -z-1"></div>

      <div className="container">
        <h1 className="text-4xl flex items-center gap-2">
          <RiTelegram2Fill size={40} className="fill-white" />
          <span>Egypt</span>
        </h1>

        <p className="lg:text-6xl text-4xl font-semibold my-2">
          Hey {name || ''}!
        </p>
        <p className="lg:text-6xl text-4xl font-semibold my-2">
          Tell us where you want to stay
        </p>

        <p className="text-4xl">Book 450+ Curated Egyptian Hotels</p>

        <ExploreForm />
      </div>
    </section>
  );
}
