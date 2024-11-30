import { type Direction, initBoard, moveMapIn2048Rule } from './\bmoveMapLogic';
import type { State, stateProps } from './types';

export const successCheck = ({ state, setState }: stateProps) => {
  if (state.board.some((row) => row.includes(128))) {
    setState({
      ...state,
      isSuccess: true,
    });
    return;
  }
};

export const failedCheck = ({ state, setState }: stateProps) => {
  const allDirection: Direction[] = [
    'up',
    'down',
    'left',
    'right',
  ] as Direction[];

  const canMoveInAnyDirection = allDirection.some((dir) => {
    const { isMoved: canMove } = moveMapIn2048Rule(state.board, dir);
    return canMove;
  });

  if (!canMoveInAnyDirection) {
    setState({
      ...state,
      isFailed: true,
    });
    return;
  }
};

export const resetGame = (
  setState: React.Dispatch<React.SetStateAction<State>>,
) => {
  setState({
    score: 0,
    board: initBoard(),
    isSuccess: false,
    isFailed: false,
  });
};
