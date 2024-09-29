import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'; // Import hooks

function App() {
  // Access the count value from the Redux store
  const count = useSelector((state) => state.count);
  
  // Get the dispatch function to send actions
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Tasbih Counter</h1>
      <p>Count: {count}</p>
      
      <button onClick={() => dispatch({ type: 'INCREMENT' })}><i class="fa-solid fa-plus"></i></button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}><i class="fa-solid fa-minus"></i></button>
      <p>Reset</p>
      <button onClick={() => dispatch({ type: 'RESET' })}><i class="fa-solid fa-rotate-right"></i></button>

      <footer className="footer">
        © {new Date().getFullYear()} Muhamad Arhum. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
