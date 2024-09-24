import type { Cell } from '../utils.ts';

export const Tile = ({ value }: TileProps) => {
  const tileName =
    'tile tile-' + String(value !== null && value <= 128 ? value : 0);
  return <div className={tileName}>{value === 0 ? '0' : value}</div>;
};

type TileProps = {
  value: Cell;
};
