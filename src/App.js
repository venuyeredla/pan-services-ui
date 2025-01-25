import React, { useEffect } from 'react';
import { useNavigate,useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useUser } from './context/userContext';
import './App.css';
import Layout from './components/layout/layout';
import SignIn from './components/auth/login';
import {Products,ProductsNew} from './components/search/products';
import Search from './components/search/search';
import NotFound from './components/notfound/notfound';
import Admin from './components/admin/admin';
import Contact from './components/contact/contact';
import Profile from './components/auth/profile';
import Chat from './components/chatbot/chatbot';

const App =() => {
  const navigate = useNavigate();
  const location = useLocation();
//  const { hasSession, user, login, logout, loading, error } = useUser();
    const { hasSession } = useUser();
    useEffect(()=>{
      console.log("Checking for authentication...")
      //console.log(location.pathname)
      if (location.pathname!=="/login"){
         if (!hasSession){
             console.log("Unauthorized access...");
             navigate("/login");
             return
          } 
      }
    });
    
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Search />}/>
            <Route path="login" element={<SignIn/>} errorElement={<NotFound/>} />
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
