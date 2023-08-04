export const baseUrl = 'https://bayut.p.rapidapi.com' 


export const fetchApi = async (url) => {
    const response = await fetch(url, {
        method: 'GET', 
     headers: {
    'X-RapidAPI-Key': 'c6603b80c5mshd184f1f5d7a9d7bp19e1f4jsnaf103052fb70',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
    })
  const data = response.json();
   console.log(data)
    return data;
   
}

