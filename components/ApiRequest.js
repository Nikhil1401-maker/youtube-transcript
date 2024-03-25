import axios from "axios";

const requestOptions = {
  method: 'GET',
  url: 'https://youtube-mp36.p.rapidapi.com/dl',
  params: {},
  headers: {
    'X-RapidAPI-Key': 'f2d233b368msh382d60856fd6c38p1d0cf0jsn43c91d24248d',
    'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
  }
};

const fetchApi = async (id) => {
  requestOptions.params = { id };
  const response = await axios.request(requestOptions)
  return response;
}

export { fetchApi };