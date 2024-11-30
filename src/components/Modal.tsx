import { resetGame } from '../utils/gameLogic';
import type { stateProps } from '../utils/types';

export const Modal = ({ state, setState }: stateProps) => {
  const onClick = () => {
    resetGame(setState);
  };

  if (state.isSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
        <div className="bg-white p-5 rounded-lg shadow-lg text-center text-5xl font-bold">
          <div>128!</div>
          <div className="text-2xl mt-2">score: {state.score}</div>
          <button
            onClick={onClick}
            className="mt-5 mb-5 px-5 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600"
          >
            Restart
          </button>
        </div>
      </div>
    );
  }

  if (state.isFailed) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
        <div className="bg-white p-5 rounded-lg shadow-lg text-center text-5xl font-bold">
          <div>Failed</div>
          <button
            onClick={onClick}
            className="mt-5 mb-5 px-5 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600"
          >
            Try Again?
          </button>
        </div>
      </div>
    );
  }

  return null;
};
