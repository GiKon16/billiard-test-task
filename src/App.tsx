import { useState } from 'react';
import './App.css'
import Board from './components/board/Board';
import Help from './components/help/Help';

function App() {
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(true);
  return (
    <>
      <Board />
      {
        isHelpOpen &&
        <Help 
          closeHelp={ () => setIsHelpOpen(false) }/>
      }
      <button className={ 'open-button' } onClick={ () => setIsHelpOpen(true) }>информация</button>
    </>
  )
}

export default App
