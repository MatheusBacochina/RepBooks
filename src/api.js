import axios from 'axios';

export const Api = {
    api: async function(input, max, start){
       const datas = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=${max}&startIndex=${start}`)
       const response = datas;
       return response;
    }
}