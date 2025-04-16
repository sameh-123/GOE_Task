'use client';
import PopoverContainer from '@/components/shared/popover-container';
import { Dispatch, SetStateAction } from 'react';
import { MdOutlineLocationOn } from 'react-icons/md';

export const locations = [
  {
    value: 'cairo',
    title: 'Cairo',
    label: 'Egypt',
  },
  {
    value: 'alexandria',
    title: 'Alexandria',
    label: 'Egypt',
  },
  {
    value: 'hurghada',
    title: 'Hurghada',
    label: 'Egypt',
  },
  {
    value: 'giza',
    title: 'Giza',
    label: 'Egypt',
  },
  {
    value: 'mansoura',
    title: 'Mansoura',
    label: 'Egypt',
  },
];
type Props = {
  location: number;
  setLocation: Dispatch<SetStateAction<number>>;
};
export default function LocationInput({ location, setLocation }: Props) {
  const triggerComponent = (
    <div className="flex items-center gap-3 cursor-pointer w-fit">
      <MdOutlineLocationOn size={30} className="text-secondary size-8" />
      <div className="md:text-2xl text-lg">
        {locations[location].title}, {locations[location].label}
      </div>
    </div>
  );

  const contentComponent = (
    <div className=" text-white max-h-80 overflow-y-auto no-scrollbar cursor-pointer">
      {locations.map((location, index) => (
        <div
          key={location.value}
          className="flex items-center gap-3 p-4 hover:bg-white/10"
          onClick={() => setLocation(index)}
        >
          <div className="bg-white p-3 rounded-2xl">
            <MdOutlineLocationOn size={30} className="text-black size-8" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">{location.title}</h1>
            <p>city in {location.label}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <PopoverContainer
      triggerComponent={triggerComponent}
      contentComponent={contentComponent}
      close={true}
    />
  );
}
