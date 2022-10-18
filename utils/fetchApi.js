import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': "544816569dmsh3d9ccaa4340c6aap16bdc3jsnf687f01f0a7c" ,
        },
    });
        
    return data;
}