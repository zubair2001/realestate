import axios from 'axios'

export const baseUrl="bayut.p.rapidapi.com"

export const fetchApi = async(url)=>{
    const {data} = await axios.get((url),{headers:{
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': '544816569dmsh3d9ccaa4340c6aap16bdc3jsnf687f01f0a7c'
    }
});
return data;
}