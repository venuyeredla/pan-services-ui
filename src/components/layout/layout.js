import React from 'react';
import { Outlet } from 'react-router-dom';
import './layout.css';
import {useState } from 'react';
import Header from './header';
import Footer from './footer';

import QueryContext from '../../context/contex';
   
const  Layout= () => {
     const [query, setQuery] = useState({"query":"*:*","category":"Default","show":false});
     const handleQueryChange=(query)=>{
        alert("Layout query"+query)
        setQuery({... query, show:true})
      }
        return (
        <div className="application">
          <QueryContext.Provider value={query}>
            <Header callback={handleQueryChange}/>
            <div className='content'>
              <Outlet />
            </div> 
            <div className='footer'>
                <Footer></Footer>
           </div>
           </QueryContext.Provider> 
        </div>
    );
}

export default Layout;