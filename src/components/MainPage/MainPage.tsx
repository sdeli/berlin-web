import React, { useState } from 'react';
import WordFuzzySearch from '../WordFuzzySearch/WordFuzzySearch';
import viteLogo from '../../assets/vite.svg'
import reactLogo from '../../assets/react.svg'

// import styles from './MainPage.css';

export interface MainPageProps {
  prop?: string;
}

export function MainPage({prop = 'default value'}: MainPageProps) {
  const [count, setCount] = useState(0)

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
