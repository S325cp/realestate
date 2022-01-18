import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': 'e397a7ca0cmshb893425ced0ad6ap1a0ac7jsn88862d36adc6' ,
    },
  });
    
  return data;
}