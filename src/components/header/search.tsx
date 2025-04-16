'use client';

import * as React from 'react';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { MdOutlineLocationOn } from 'react-icons/md';

const locations = [
  {
    value: 'Cairo',
    label: 'city in Egypt',
  },
  {
    value: 'Alexandria',
    label: 'city in Egypt',
  },
  {
    value: 'Hurghada',
    label: 'city in Egypt',
  },
  {
    value: 'Giza',
    label: 'city in Egypt',
  },
  {
    value: 'Mansoura',
    label: 'city in Egypt',
  },
];

export default function Search() {
  const [open, setOpen] = React.useState(false);
  const [changed, setChanged] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <>
      {open && (
        <div className="backdrop-blur-xs w-screen h-svh absolute inset-0 z-10"></div>
      )}
      <Popover open={open} modal onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="size-10  items-center justify-center rounded-full bg-secondary/8 hidden md:flex cursor-pointer">
            <PiMagnifyingGlassBold size={25} className="fill-secondary" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] p-0 bg-transparent outline-0 border-none ring-0">
          <Command className="bg-transparent outline-0 border-none ring-0">
            <CommandInput
              placeholder="Search"
              className="bg-grey rounded-4xl text-white !text-2xl outline-0 border-none ring-0"
              onValueChange={(s) => {
                if (s == '' && changed == true) setChanged(false);
                else if (s != '' && changed == false) setChanged(true);
              }}
            />
            <CommandList className="bg-grey rounded-3xl mt-5 no-scrollbar">
              <CommandEmpty className="text-secondary font-semibold p-5 text-center">
                No Locations found.
              </CommandEmpty>
              <CommandGroup heading={changed ? 'Locations' : 'Most popular'}>
                {locations.map((location, index) => (
                  <CommandItem
                    className={`${index > 20 ? 'hidden' : ''}`}
                    key={location.value}
                    value={location.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? '' : currentValue);
                      setOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded-2xl">
                        <MdOutlineLocationOn
                          size={30}
                          className="text-black size-6"
                        />
                      </div>
                      <div>
                        <h1 className="text-lg">{location.value}</h1>
                        <p>{location.label}</p>
                      </div>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}
