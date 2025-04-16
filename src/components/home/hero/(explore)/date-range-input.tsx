'use client';

import {  format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

import { Dispatch, SetStateAction } from 'react';
import PopoverContainer from '@/components/shared/popover-container';
type Props = {
  date: DateRange | undefined;
  setDate: Dispatch<SetStateAction<DateRange | undefined>>;
};
export default function DateRangeInput({ date, setDate }: Props) {
  const triggerComponent = (
    <Button
      id="date"
      className={cn(
        'w-fit justify-start text-left font-normal bg-transparent md:text-2xl text-lg hover:bg-transparent cursor-pointer',
        !date && 'text-muted-foreground'
      )}
    >
      <CalendarIcon className="size-6 text-secondary" />
      {date?.from ? (
        date.to ? (
          <>
            {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
          </>
        ) : (
          format(date.from, 'LLL dd, y')
        )
      ) : (
        <span>Pick a date</span>
      )}
    </Button>
  );

  const contentComponent = (
    <Calendar
      // initialFocus
      mode="range"
      defaultMonth={date?.from}
      selected={date}
      onSelect={setDate}
      numberOfMonths={2}
      // className='w-[800px] '
    />
  );
  return (
    <PopoverContainer
      triggerComponent={triggerComponent}
      contentComponent={contentComponent}
      close={false}
    />
  );
}
