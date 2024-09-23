import './App.css';

import { Board } from './components/Board.tsx';
import { Controller } from './components/Controller.tsx';
import { Header } from './components/Header.tsx';


function App() {

  return (
    <>
      <Header></Header>
      <Controller></Controller>
      <Board></Board>
    </>
  );
}

export default App;
