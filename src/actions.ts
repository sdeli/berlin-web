import { WordDTO } from './dtos';
import axios, { AxiosResponse } from 'axios';
import { useDispatch } from 'react-redux';
import { wordSlice } from './wordSlice';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '@reduxjs/toolkit/query';

// const ENDPOINT = '/words';

async function fetchAllWords() {
  const response = await axios.get<AxiosResponse<WordDTO[]>>('http://localhost:3000/word')
  console.log('response')
  console.log(response);
  const words = response.data.data;
  return words;
}

export const fetchWordsAction = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
  console.log('fetchWordsAction')
  try {
    const words = await fetchAllWords();
    console.log('words')
    console.log(words)
    dispatch(wordSlice.actions.replace(words))
  } catch (error) {
    console.log('error')
    console.log(error)
    console.log('busted')
  }
}