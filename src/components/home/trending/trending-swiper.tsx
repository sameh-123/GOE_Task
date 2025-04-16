'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

import { Trend } from '@/utils/types';
import TrendCard from './trending-card';

export default function TrendingSwiper({ trendings }: { trendings: Trend[] }) {
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
      className="mySwiper"
    >
      {trendings.map((trending) => (
        <SwiperSlide key={trending.id} className="max-w-fit">
          <TrendCard trend={trending} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
