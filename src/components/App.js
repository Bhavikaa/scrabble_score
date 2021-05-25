import React from 'react';
import WordCreate from './words/WordCreate';
import WordScore from './words/WordScore';
import PlayerList from './players/PlayerList';

const App = () => {
  return (
    <div className="ui container">
            <WordCreate />
            <WordScore />
            <PlayerList />
    </div>
  );
};

export default App;
