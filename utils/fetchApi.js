// import axios from "axios";
 export const baseUrl = 'https://bayut.p.rapidapi.com' 

// const options = {
//   method: 'GET',
//   url: 'https://bayut.p.rapidapi.com/agencies/list',
// params: {query: 'patriot', hitsPerPage: '25', page: '0', lang: 'en'},
//   headers: {
 
// };   'X-RapidAPI-Key': '63a673aa5emsh9645f106902d5fep17b130jsnb53f8784fe04',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }

export const fetchApi = async (url) => {
    const response = await fetch(url, {
        method: 'GET', 
        headers: {
    'X-RapidAPI-Key': '63a673aa5emsh9645f106902d5fep17b130jsnb53f8784fe04',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
    })
  const data = response.json();
   console.log(data)
    return data;
   
}

