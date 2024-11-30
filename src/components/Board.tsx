import { useEffect } from 'react';

import { failedCheck, successCheck } from '../utils/gameLogic.ts';
import {
  addRandomTile,
  type Map2048,
  moveMapIn2048Rule,
} from '../utils/\bmoveMapLogic.ts';
import type { stateProps } from '../utils/types.ts';
import { Tile } from './Tile.tsx';

export const Board = ({ state, setState }: stateProps) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    let moved: { result: Map2048; isMoved: boolean; score: number };

    if (state.isFailed || state.isSuccess) return;

    switch (e.key) {
      case 'ArrowLeft':
        moved = moveMapIn2048Rule(state.board, 'left');
        break;
      case 'ArrowDown':
        moved = moveMapIn2048Rule(state.board, 'down');
        break;
      case 'ArrowRight':
        moved = moveMapIn2048Rule(state.board, 'right');
        break;
      case 'ArrowUp':
        moved = moveMapIn2048Rule(state.board, 'up');
        break;
      default:
        return;
    }

    if (!moved.isMoved) {
      failedCheck({ state, setState });
      return;
    }

    const newBoard = addRandomTile(moved.result);
    const newScore = state.score + moved.score;

    setState((prevState) => ({
      ...prevState,
      board: newBoard,
      score: newScore,
    }));

    successCheck({ state: { ...state, board: newBoard }, setState });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <>
      <div className="w-96 h-96 grid grid-cols-4 grid-rows-4 bg-green-300 m-auto gap-3 rounded-lg p-3">
        {state.board.map((row, rowIdx) =>
          row.map((value, colIdx) => (
            <Tile key={10 * rowIdx + colIdx} value={value} />
          )),
        )}
      </div>
    </>
  );
};
