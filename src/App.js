import React from 'react';

import './App.css';
import Persons from './containers/Persons';

function App() {
  return (
    <div className="App">
      <h3>React Redux Assignment</h3>
      <ol>
        <li>A GitHub link to your application which is using Redux.</li>
        <li>Also, please explain in free form (based on attached image) how basic Redux flow works.</li>
      </ol>
      <Persons />
    </div>
  );
}

export default App;
