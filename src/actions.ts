import { WordDTO } from './dtos';
import axios, { AxiosResponse } from 'axios';
import { useDispatch } from 'react-redux';
import { wordSlice } from './wordSlice';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '@reduxjs/toolkit/query';

async function fetchAllWords(filter?: string) {
  const url = filter ? `http://localhost:3000/word?filter=${encodeURIComponent(filter)}` : 'http://localhost:3000/word';
  const response = await axios.get<WordDTO[]>(url)
  const words = response.data;
  return words;
}

export const fetchWordsAction = (searchedWord?: string): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
  try {
    const words = await fetchAllWords(searchedWord);
    dispatch(wordSlice.actions.replace(words))
  } catch (error) {
    console.log('error')
    console.log(error)
    console.log('busted')
  }
}