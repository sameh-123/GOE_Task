'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

import { Discover } from '@/utils/types';
import DiscoverCard from './discover-card';

export default function DiscoverSwiper({
  discovers,
}: {
  discovers: Discover[];
}) {
  return (
    <Swiper
      navigation={true}
      slidesPerView={'auto'}
      spaceBetween={30}
      centeredSlides={true}
      breakpoints={{
        500: {
          centeredSlides: false,
        },
      }}
      scrollbar={{ draggable: true }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      loop={true}
      className="mySwiper text-center"
    >
      {discovers.map((discover) => (
        <SwiperSlide key={discover.id} className="max-w-fit">
          <DiscoverCard discover={discover} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
