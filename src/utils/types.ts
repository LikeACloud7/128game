import type { Map2048 } from './\bmoveMapLogic';

export type State = {
  score: number;
  board: Map2048;
  isSuccess: boolean;
  isFailed: boolean;
};
export type stateProps = {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
};
