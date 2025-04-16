'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
// bg - [#EBDDBD];
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      disabled={{ before: new Date() }}
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col lg:flex-row gap-8 items-center',
        month: 'flex flex-col gap-4',
        caption: 'flex justify-center pt-1 relative items-center w-full',
        caption_label: 'text-2xl font-semibold text-white',
        nav: 'flex items-center gap-1',
        nav_button: cn(
          'x bg-transparent p-0 text-white  hover:opacity-100'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-x-1',
        head_row: 'flex',
        head_cell: 'text-white rounded-md md:w-10 w-8 md:mx-2 mx-1 font-normal text-sm',
        row: 'flex w-full mt-2',
        cell: cn(
          'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-transparent [&:has([aria-selected].day-range-end)]:rounded-r-md',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md'
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'md:size-10 size-8 p-0 sm:text-xl text-lg bg-white !opacity-100 md:m-2 m-1 text-black border border-secondary font-normal aria-selected:opacity-100'
        ),
        day_range_start:
          'day-range-start  aria-selected:bg-[#EBDDBD] aria-selected:text-yellow-700 !border-0 aria-selected:opacity-100',
        day_range_end:
          'day-range-end aria-selected:bg-[#EBDDBD] aria-selected:text-yellow-700 !border-0 aria-selected:opacity-100',
        day_selected:
          'bg-[#EBDDBD] text-green hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        day_outside:
          'day-outside text-muted-foreground aria-selected:text-muted-foreground invisible',
        day_disabled:
          '!bg-[#DAD2CA] !text-grey !opacity-100 !hover:cursor-not-allowed !border-0',
        day_range_middle:
          'aria-selected:bg-[#EBDDBD]  aria-selected:text-yellow-700 !border-0',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn('size-6', className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn('size-6', className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
