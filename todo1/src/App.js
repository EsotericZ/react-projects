import logo from './logo.svg';
import './App.css';
import React from 'react';

import ToDoList from './ToDoList';
import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    list: [
      'task1',
      'task2',
      'task3',
    ],
  }
  render() {
    return (
      <div>
        <ToDoList list={this.state.list} />
      </div>
    );
  }
}

export default App;