import './App.css';

import { useEffect, useState } from 'react';

import { Board } from './components/Board.tsx';
import { Controller } from './components/Controller.tsx';
import { Header } from './components/Header.tsx';
import { Modal } from './components/Modal.tsx';
import { initBoard, type State } from './utils.ts';

function App() {
  const [state, setState] = useState<State>(() => {
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
    localStorage.setItem('gameState', JSON.stringify(state));
  }, [state]);

  return (
    <>
      <Header score={state.score}></Header>
      <Controller setState={setState}></Controller>
      <Board state={state} setState={setState}></Board>
      <Modal state={state} setState={setState}></Modal>
    </>
  );
}

export default App;
