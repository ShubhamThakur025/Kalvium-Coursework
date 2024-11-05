import { createContext, useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import Child1 from './component/Child1';

export const theme = React.createContext()

function App() {
  const [state, setState] = useState(true)
  const handleToggle = () => {
    setState(state => !state)
  }
  return (
    <>
      <theme.Provider value={state}>
        <button onClick={handleToggle}>Toggle</button>
        <Child1/>
      </theme.Provider>
    </>

  )
}

export default App;
