import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { WordDTO, WordMeta, WordSources } from '../dto';

// Define a type for the slice state
export interface Word {
  ID: string;
  source?: WordSources;
  originalUrl?: string;
  description: string | null;
  title: string | null;
  discoveredAt?: Date;
  meta?: WordMeta;
}

export interface WordState {
  words: Word[]
}

// Define the initial state using that type
export const initialState: WordState = {
  words: [
    {
      description: 'some description 113',
      title: 'some title',
      ID: '11'
    },
    {
      description: 'some description 44',
      title: 'some title2',
      ID: '12'
    },
    {
      description: 'some description 555',
      title: 'some title3',
      ID: '13'
    },
    {
      description: 'some description  666',
      title: 'some title4',
      ID: '14'
    }
  ],
}

export const wordSlice = createSlice({
  name: 'words',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    replace: (state: WordState, action: PayloadAction<WordDTO[]>) => {
      console.log('action')
      console.log(action)
      state.words = action.payload.map((wordDto) => {
        const word: Word = {
          description: wordDto.description,
          title: wordDto.title,
          ID: wordDto.ID,
        }

        return word;
      });
    },
  },
})

export const { replace } = wordSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectWords = (state: RootState) => state.words

export default wordSlice.reducer