import React from 'react';
import { BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';
import {
  createBrowserRouter
} from "react-router-dom";
import NotFound from './components/notfound/notfound';
import Layout from './components/layout/layout';
import {ProductsNew} from './components/products/products';
import Search from './components/search/search';
/*
import Admin from './components/admin/admin';
import Contact from './components/contact/contact';
import {Products,ProductsNew} from './components/products/products'; */
import Profile from './components/auth/profile';
import Chat from './components/chatbot/chatbot';

/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "search",
        element: <Search />,
        index:true,
        loader: ({ request, params })=>{
          
          fetch(
        `/fake/api/teams/${params.teamId}.json`,
          { signal: request.signal }
          )
                    return "venugopal"
        },
        action : async ({ params, request }) => {
          let formData = await request.formData();
          return fakeUpdateSong(params.songId, formData);
        }
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "newproduct",
        element: <ProductsNew />
       
      },
      {
        path: "contact",
        element: <Contact />,
        loader: ({ Contact, params })=>{
          console.log("Contact :"+ params);
        }
      },
      {
        path: "admin",
        element: <Admin />
       
      },
      {
        path: "chat",
        element: <Chat />
      },
      {
        path: "user/:id",
        element: <Profile />,
        loader: ({ request, params })=>{
          console.log(params.teamId); // "hotspur"
          return "venugopal";
        },
        action: ({params})=> { 
               console.log("This is Route action")
              },
        errorElement: <NotFound/>
      },
      {
        path : "*",
        element : <NotFound></NotFound>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
       <BrowserRouter basename='/'>
         <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();