import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectWords } from '../../redux/wordSlice';
import { useAppDispatch } from '../../hooks';
import { fetchWordsAction } from '../../redux/wordActions';

export default function WordFuzzySearch() {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchWordsAction())
  }, [])

  const words = useSelector(selectWords);
  
  const wordsList = words.words.map((word) => {
    return <li key={word.ID}>{word.title} -- {word.description}</li>
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(event.target.value);
    dispatch(fetchWords(inputValue));
  };

  // useEffect(() => {
  // }, [inputValue, dispatch]);

  return (
  <div>WordFuzzySearch: 
    <input type="text"
        value={inputValue}
        onChange={handleInputChange} />
    <p>Variable value: {inputValue}</p>
    <ul>
      {wordsList}
    </ul>
  </div>
  )
}
