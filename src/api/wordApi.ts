import { WordDTO } from '../dto';
import axios from 'axios';

export async function fetchAllWords(filter?: string) {
  const url = filter ? `http://localhost:3000/word?filter=${encodeURIComponent(filter)}` : 'http://localhost:3000/word';
  const response = await axios.get<WordDTO[]>(url)
  const words = response.data;
  return words;
}