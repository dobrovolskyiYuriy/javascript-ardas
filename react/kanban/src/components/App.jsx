import React from 'react';
import Store from '../store';

import './App.css';
import Header from './Header';
import Board from './Board';

function App() {
  return (
    <Store>
      <div className='app'>
        <Header />
        <Board />
      </div>
    </Store>
  );
}

export default App;