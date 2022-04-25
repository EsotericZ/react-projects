import './App.css';
import React from 'react';

import ToDoList from './ToDoList';
import SubmitForm from './SubmitForm';

class App extends React.Component {
  state = {
    list: [
      'task1',
      'task2',
      'task3',
    ],
  };

  handleDelete = (index) => {
    const newArray = [...this.state.list];
    newArray.splice(index, 1);
    this.setState({list: newArray});
  }

  addItem = (item) => {
    this.setState({list: [...this.state.list, item]});
  }

  render() {
    return (
      <div>
        <ToDoList list={this.state.list} remove={this.handleDelete} addItem={this.addItem} />
        <SubmitForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;