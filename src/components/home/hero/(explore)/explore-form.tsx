'use client';
import Link from 'next/link';
import CountInput from './(count-input)/count-input';
import LocationInput from './location-input';
import DateRangeInput from './date-range-input';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { addDays } from 'date-fns';

import { locations } from './location-input';

export default function ExploreForm() {
  const [location, setLocation] = useState(0);

  const [adults, setAdults] = useState(1);
  const [childs, setChilds] = useState(0);
  const [rooms, setRooms] = useState(1);

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 1),
  });
  return (
    <div className="w-full flex flex-col md:flex-row items-center flex-wrap justify-center lg:gap-10 gap-5 backdrop-blur-sm bg-white/25 py-5 px-5 rounded-md xl:rounded-[200px] mt-10">
      <LocationInput location={location} setLocation={setLocation} />
      <DateRangeInput date={date} setDate={setDate} />
      <CountInput
        adults={adults}
        setAdults={setAdults}
        childs={childs}
        setChilds={setChilds}
        rooms={rooms}
        setRooms={setRooms}
      />

      {/* add the logic of exploring using the provided data here (momken nesta5dem button w ne5aleha form)*/}
      <Link
        href={`/explore?location=${locations[location].value}`}
        className="px-8 py-5 bg-green rounded-4xl lg:text-xl text-lg hover:bg-green/70"
      >
        Explore Stays
      </Link>
    </div>
  );
}
