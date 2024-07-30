import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectWords } from '../../wordSlice';
import { useAppDispatch } from '../../hooks';
import { fetchWordsAction } from '../../actions';

export interface WordFuzzySearchProps {
  prop?: string;
}

export default function WordFuzzySearch({prop = 'default value  '}: WordFuzzySearchProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchWordsAction())
  }, [])

  const words = useSelector(selectWords);
  console.log('words comp')
  console.log(words)
  const wordsList = words.map((word) => {
    return <li key={word.ID}>{word.title} -- {word.description}</li>
  })

  return (
  <div>WordFuzzySearch {prop}
    <input type="text" />
    <ul>
      {wordsList}
    </ul>
  </div>
  )
}
