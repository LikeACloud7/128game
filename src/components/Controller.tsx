import { resetGame } from '../utils/gameLogic';
import type { State } from '../utils/types';

type ControllerProps = {
  setState: React.Dispatch<React.SetStateAction<State>>;
};

export const Controller = ({ setState }: ControllerProps) => {
  const onClick = () => {
    resetGame(setState);
  };

  return (
    <>
      <button
        onClick={onClick}
        className="mt-5 mb-5 px-5 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600"
      >
        new game
      </button>
    </>
  );
};
