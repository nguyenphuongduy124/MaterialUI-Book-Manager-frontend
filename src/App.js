import React from 'react';
import './App.scss';
import MyComponents from './components/MyComponents/MyComponents';
import MyTheme from './theme/index';

function App(props) {
  return (
    <MyTheme>
      <div className="App">
        <MyComponents />
      </div>
    </MyTheme>
  );
}

export default App;
