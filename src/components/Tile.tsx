import type { Cell } from '../utils/\bmoveMapLogic';

export const Tile = ({ value }: TileProps) => {
  const tileClasses = [
    'flex justify-center items-center w-20 h-20 rounded-full text-3xl font-bold shadow-md',
    value === 0 ? 'bg-[#e8e0d4]' : '',
    value === 2 ? 'bg-[#feeed8] text-[#756d64]' : '',
    value === 4 ? 'bg-[#f9e1c2] text-[#756d64]' : '',
    value === 8 ? 'bg-[#ffaa75] text-white' : '',
    value === 16 ? 'bg-[#ff9260] text-white' : '',
    value === 32 ? 'bg-[#fa835c] text-white' : '',
    value === 64 ? 'bg-[#ff582e] text-white' : '',
    value === 128 ? 'bg-[#f2d14c] text-white' : '',
  ].join(' ');

  return <div className={tileClasses}>{value === 0 ? '0' : value}</div>;
};

type TileProps = {
  value: Cell;
};
