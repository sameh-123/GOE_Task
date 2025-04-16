'use client';
import { Dispatch, SetStateAction } from 'react';
import { TbUsers } from 'react-icons/tb';
import CountInputField from './count-input-field';
import PopoverContainer from '@/components/shared/popover-container';
type Props = {
  adults: number;
  setAdults: Dispatch<SetStateAction<number>>;
  childs: number;
  setChilds: Dispatch<SetStateAction<number>>;
  rooms: number;
  setRooms: Dispatch<SetStateAction<number>>;
};
export default function CountInput({
  adults,
  childs,
  rooms,
  setAdults,
  setChilds,
  setRooms,
}: Props) {
  const triggerComponent = (
    <div className="flex items-center gap-3 cursor-pointer w-fit">
      <TbUsers size={30} className="text-secondary size-8" />
      <div className="md:text-2xl text-lg flex items-center gap-1 mg:gap-0">
        <div className="md:w-8 w-4 text-center">{adults}</div> Adults,{' '}
        <div className="md:w-8 w-4 text-center">{childs}</div> Child,{' '}
        <div className="md:w-8 w-4 text-center">{rooms}</div> Rooms
      </div>
    </div>
  );

  const contentComponent = (
    <div className=" text-white p-5">
      <CountInputField
        count={adults}
        setCount={setAdults}
        type={'Adults'}
        description="Age 18 or above"
        canIncrease={adults + childs < 16}
        canDecrease={adults > 1}
      />
      <CountInputField
        count={childs}
        setCount={setChilds}
        type={'Child'}
        description="Under 18"
        canIncrease={adults + childs < 16}
        canDecrease={childs > 0}
      />
      <CountInputField
        count={rooms}
        setCount={setRooms}
        type={'Rooms'}
        canIncrease={true}
        canDecrease={rooms > 1}
      />
      <div className="p-5 text-sm text-white/70">
        You can search for up to 16 travelers
      </div>
    </div>
  );

  return (
    <PopoverContainer
      triggerComponent={triggerComponent}
      contentComponent={contentComponent}
      close={false}
    />
  );
}
