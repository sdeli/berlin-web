import React, { useState } from 'react';
import WordFuzzySearch from '../WordFuzzySearch/WordFuzzySearch';
import viteLogo from '../../assets/vite.svg'
import reactLogo from '../../assets/react.svg'
import { selectIsAuth } from '../../redux/authSlice';
import { useSelector } from 'react-redux';

export function MainPage() {
  const [count, setCount] = useState(0)
  const isAuth = useSelector(selectIsAuth);

  console.log('selectIsAuth MainPage')
  console.log(isAuth)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <List onClick={clickButton}></List> */}
      <WordFuzzySearch></WordFuzzySearch>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on t11he Vite and React logos to learn more
      </p>
    </>
  )}
