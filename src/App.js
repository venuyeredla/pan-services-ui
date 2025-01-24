import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/layout/layout';
import SignIn from './components/auth/login';
import {Products,ProductsNew} from './components/products/products';
import Search from './components/search/search';
import NotFound from './components/notfound/notfound';
import Admin from './components/admin/admin';
import Contact from './components/contact/contact';
import Profile from './components/auth/profile';
import Chat from './components/chatbot/chatbot';

const App =() => {

  const [cookies, setCookie, removeCookie] = useCookies(['user-session']);
  const navigate = useNavigate();

    useEffect(()=>{
        if ( !(cookies && cookies.jwtToken)) {
          console.log("User session doesn't exist.... Redirecting to login page");
          navigate("login");
        }
      var roles=["READ", "Rigth"]
       // localStorage.setItem('roles', JSON.stringify(roles));
       // sessionStorage.setItem("roles",JSON.stringify(roles));
       // document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
        console.log("App component loading only one time ")
    },[]);

    /*
    1. Usered not logged in it has to login page for any URL
    2. User session timeout also should go loging page.
    3. After sucessfull authentication needto store the token.
    4. For each and every api request must have authentication header with valid token. 
    5. session storage, localstorage, cookies.
    */

    return (
     
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Search />}/>
            <Route path="login" element={<SignIn />} errorElement={<NotFound/>} />
            <Route path="search" element={<Search />} />
            <Route path="products" element={<Products />} />
            <Route path="newproduct" element={<ProductsNew />} />
            <Route path="contact" element={<Contact />} />
            <Route path="admin" element={<Admin />} />
            <Route path="chat" element={<Chat />} />
            <Route path="user/:id" element={<Profile />} loader={({params}) => {
                  console.log(params.teamId); // "hotspur"
              }}  action={({params})=> { 
                  console.log("This is Route action")
              }} errorElement={<NotFound/>} />
              <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
}

export default App;
