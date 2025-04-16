import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ReactNode, useState } from 'react';

export default function PopoverContainer({
  triggerComponent,
  contentComponent,
  close,
}: {
  triggerComponent: ReactNode;
  contentComponent: ReactNode;
  close: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{triggerComponent}</PopoverTrigger>
      <PopoverContent
        onClick={() => {
          if (close) setOpen(false);
        }}
        align="start"
        alignOffset={-10}
        sideOffset={50}
        className="min-w-90 w-fit backdrop-blur-sm bg-grey/80 rounded-4xl p-0 overflow-hidden border-none"
      >
        {contentComponent}
      </PopoverContent>
    </Popover>
  );
}
