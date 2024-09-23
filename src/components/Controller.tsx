import { resetGame, type State } from '../utils.ts';

type ControllerProps = {
  setState: React.Dispatch<React.SetStateAction<State>>;
};

export const Controller = ({ setState }: ControllerProps) => {
  const onClick = () => {
    resetGame(setState);
  };

  return (
    <>
      <button onClick={onClick}>new game</button>
    </>
  );
};
