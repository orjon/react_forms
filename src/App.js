import React from 'react';
import CardList from './CardList';
import CardForm from './CardForm';
import './App.scss';

function App() {
  let devMode=0;
  return (
    <div className={`App ${devMode && 'devMode'}`}>
      <div className={`Header ${devMode && 'devMode'}`}>
        <h1>React Forms</h1>
      </div>
      <div className={`Main ${devMode && 'devMode'}`}>
        <CardList
          devMode={devMode}
          cardHeader='Shopping List'
          cardSubHeader='Items'/>
        <CardForm 
          devMode={devMode}/>
      </div>

    </div>
  );
}

export default App;
