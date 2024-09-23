export const Header = ({ score }: HeaderProps) => {
  return (
    <>
      <div className="title">128 Game</div>
      <div className="score-container">
        <span className="text">score</span>
        <span className="score">{score}</span>
      </div>
    </>
  );
};

type HeaderProps = {
  score: number;
};
