'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

import { Relevant } from '@/utils/types';
import RelevantCard from './relevant-card';

export default function RelevantSwiper({
  relevants,
}: {
  relevants: Relevant[];
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
      className="mySwiper"
    >
      {relevants.map((relevant) => (
        <SwiperSlide key={relevant.id} className="max-w-fit">
          <RelevantCard relevant={relevant} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
