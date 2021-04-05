import React, { useState } from 'react';
import './App.css';
import ItemList from './ItemList';

const App = () => {
  const [userInput, setUserInput] = useState('');    // This state is to store the input text from the user in a controlled manner.
  const [todoList, setTodoList] = useState([]);     //  This is to store the list of task in an array state which is used for rendering.

  // To bound the value of input with the single source of truth.
  const feedingData = (e) => {
    setUserInput(e.target.value)
  };

  // To store the list of tasks in the array. This function will be called when add button will be clicked.
  const addItem = () => {
    setTodoList((prevList) => {
      return [...prevList, userInput];
    });
    setUserInput('');     //  To clear the input area after adding the current text.
  };

  // To remove a particular task, when it is completed or of no use.
  const removeItem = (id) => {
    setTodoList((prevList) => {
      // This will filter all elements which are not equal to the id need to be deleted.
      return prevList.filter((element, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="heading">
            <h1>ToDo List</h1>
          </div>
          <div className="entry">
            {/* Input field for user */}
            <input type="text" placeholder="Add Something" value={userInput} onChange={feedingData} />
            <button onClick={addItem} className="addbutton">+</button>
          </div>

          <ol>
            {todoList.map((listValue, index) => {
              return <ItemList
                key={index}
                id={index}
                text={listValue}
                remove={removeItem}
              />
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;
