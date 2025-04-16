import { Dispatch, SetStateAction } from 'react';

type Props = {
  type: string;
  description?: string;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  canIncrease: boolean;
  canDecrease: boolean;
};
export default function CountInputField({
  type,
  description,
  count,
  setCount,
  canIncrease,
  canDecrease,
}: Props) {
  return (
    <div className="p-5 flex items-center justify-between gap-2">
      <div>
        <div className="font-semibold text-xl">{type}</div>
        {description ? <div className='text-white/70 text-sm'>{description}</div> : null}
      </div>

      <div className="flex items-center gap-2">
        <button
          disabled={!canDecrease}
          className="rounded-full size-8 text-secondary text-2xl focus-visible:outline-0 focus-within:ring-0 border border-white/30 cursor-pointer disabled:cursor-not-allowed disabled:border  disabled:border-white/30 disabled:text-white/20"
          onClick={(e) => {
            e.stopPropagation();
            setCount(count - 1);
          }}
        >
          -
        </button>
        <span className="text-2xl w-10 text-center">{count}</span>
        <button
          disabled={!canIncrease}
          className="rounded-full size-8 text-secondary text-2xl border focus-visible:outline-0 focus-within:ring-0 border-white/30 cursor-pointer disabled:cursor-not-allowed disabled:border disabled:border-white/30 disabled:text-white/20"
          onClick={(e) => {
            e.stopPropagation();
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
