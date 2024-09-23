import './App.css';

import { useState } from 'react';

import { Board } from './components/Board.tsx';
import { Controller } from './components/Controller.tsx';
import { Header } from './components/Header.tsx';
import { Modal } from './components/Modal.tsx';
import { initBoard, type State } from './utils.ts';

function App() {
  const [state, setState] = useState<State>({
    score: 0,
    board: initBoard(),
    isSuccess: false,
    isFailed: false,
  });

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
