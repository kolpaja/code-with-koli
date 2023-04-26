import axios from 'axios'
export const fetcher = async (url,options = {}) =>{
  let response;
  if(!options){
    response  = await axios(url)
  }else{
    response  = await axios(url, options)
  }
  const data = await response.data
  return data;
}