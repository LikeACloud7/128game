import { resetGame, type stateProps } from '../utils.ts';

export const Modal = ({ state, setState }: stateProps) => {
  const onClick = () => {
    resetGame(setState);
  };

  if (state.isSuccess) {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <div>128!</div>
          <div>score: {state.score}</div>
          <button onClick={onClick}>Restart</button>
        </div>
      </div>
    );
  }

  if (state.isFailed) {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <div>Failed</div>
          <button onClick={onClick}>Try Again?</button>
        </div>
      </div>
    );
  }

  return null;
};
