import './index.css';

import { useEffect, useState } from 'react';

import { Board } from './components/Board.tsx';
import { Controller } from './components/Controller.tsx';
import { Header } from './components/Header.tsx';
import { Modal } from './components/Modal.tsx';
import { initBoard } from './utils/\bmoveMapLogic.ts';
import type { State } from './utils/types.ts';

function App() {
  const [gameState, setGameState] = useState<State>(() => {
    const savedState = localStorage.getItem('gameState');
    if (savedState != null) {
      return JSON.parse(savedState) as State;
    }
    return {
      score: 0,
      board: initBoard(),
      isSuccess: false,
      isFailed: false,
    };
  });

  useEffect(() => {
    localStorage.setItem('gameState', JSON.stringify(gameState));
  }, [gameState]);

  return (
    <div className="min-h-screen bg-[#ceead9] p-8 text-center box-border">
      <Header score={gameState.score}></Header>
      <Controller setState={setGameState}></Controller>
      <Board state={gameState} setState={setGameState}></Board>
      <Modal state={gameState} setState={setGameState}></Modal>
    </div>
  );
}

export default App;
