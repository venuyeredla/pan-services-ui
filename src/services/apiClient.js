import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";
import Cookies from 'js-cookie';

  function getJwtToken(){
    return Cookies.get("jwtToken")
  }
  // Add a request interceptor
  axios.interceptors.request.use(
    config => {
      const token = getJwtToken();
      if (token) {
        config.headers['Authorization'] = 'Bearer ' + getJwtToken()
      }
      // config.headers['Content-Type'] = 'application/json';
      return config
    },
    error => {
      Promise.reject(error)
    }
  )

axios.interceptors.response.use(
  response => {
    return response
  },
  function (error) {
   // const originalRequest = error.config
    if (
      error.response.status === 401 /* &&
      originalRequest.url === 'http://127.0.0.1:3000/v1/auth/token' */
    ) {
      let navigate=useNavigate();
      navigate("/login");
      return Promise.reject(error)
    }
   /*
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshToken =  getJwtToken();//localStorageService.getRefreshToken()
      return axios
        .post('/auth/token', {
          refresh_token: refreshToken
        })
        .then(res => {
          if (res.status === 201) {
            //localStorageService.setToken(res.data)
            //axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorageService.getAccessToken()
            return axios(originalRequest)
          }
        })
    }
        */
    return Promise.reject(error)
  }
);
 
 async function Login(credentials){
  console.log("Submitting login request");
  var body={ 'username': credentials.username, 'password':credentials.password };
    var httpResponse =await fetch('/api/v1/auth/signin', {
     method: 'post',
     headers: {'Content-Type':'application/json'},
        body:JSON.stringify(body)
     });
     var res=await httpResponse.json()
     return res;
}

const SignUP = (UserInfo)=>{
  return true;
}

const useFetch = (url) => {
  const [data, setData] = useState(null);
 
  useEffect(() => {
    const headers = { 'Authorization': 'Bearer my-token' };
    fetch(url, { headers })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};


 function getProducts() {
  try {
    console.log("Debugging axios");
    return axios.get('/api/v1/product/getproducts');
  } catch (error) {
    console.error(error);
  }
}


   function getQuotes(){
     let quotes=[];
        quotes.push({h:"Quote -1",q:"I don't want do this job-1"});
        quotes.push({h:"Quote -2",q:"I don't want do this job-2"});
        quotes.push({h:"Quote -3",q:"I don't want do this job-3"});
        return quotes
   }

  /*   const instance = axios.create({
    baseURL: '/api/v1',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  }); */

export { 
    Login,
    SignUP,
    getProducts,
    getProductsNew,
    getQuotes,
    useFetch
}