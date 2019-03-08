import React, { Component } from 'react';
import './App.css';
import SmurfListView from './SmurfListView';
import SmurfForm from './NewSmurfForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfListView />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
