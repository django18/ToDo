import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoForm from './ToDoAddForm/ToDoForm';
import ToDoItem from './ToDoListItem/ToDoItem';

class App extends Component {
  render() {
    return (
      <div className="App p-3">
        <ToDoForm />
        <div class="card-columns">
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
        </div>
      </div>
    );
  }
}

export default App;
