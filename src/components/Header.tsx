export const Header = ({ score }: HeaderProps) => {
  return (
    <>
      <div className="text-5xl font-bold text-green-800 mb-4">128 Game</div>
      <div className="flex flex-col items-center bg-white rounded-lg shadow-md mx-auto w-48 text-xl font-bold">
        <span className="text-lg">score</span>
        <span className="flex flex-col items-center bg-white rounded-lg shadow-md mx-auto w-48 text-xl font-bold">
          {score}
        </span>
      </div>
    </>
  );
};

type HeaderProps = {
  score: number;
};
