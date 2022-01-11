import React from 'react';

import Board from './Board.jsx';
import Hand from './Hand.jsx';

const App = props => {
  return (
    <div className="App">
      <p> Hello World </p>
      <Board/>
      <Hand/>
    </div>
  );
};

export default App;