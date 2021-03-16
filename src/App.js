// Import du CSS et de REACT
import './App.css';
import {useState} from 'react'
import List from './List.js';
// ----------------------------------------------------------------------------------------------------------------------------------------------------- //

// import React from 'react';

function App() {

  let[currentItem,setCurrentItem] = useState(null);
  let [itemList,updateItemList] = useState([]);

  let onChangeHandler = e => {
    setCurrentItem(e.target.value);
  };

  let addItemToList = () =>{
    updateItemList([...itemList,{item: currentItem, key: Date.now() }]);
    setCurrentItem("")
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='Wrapper'>
          <div className='Input-wrapper'>
            <input value={currentItem} onChange={onChangeHandler}/>
            <button onClick={addItemToList}>+</button>
          </div>
          <List itemList={itemList}/>
        </div>
      </header>
    </div>
  );
}

export default App;