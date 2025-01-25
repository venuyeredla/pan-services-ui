import {React, useState} from 'react';
import { Outlet } from 'react-router-dom';
import './layout.css';
import Header from './header';
import Footer from './footer';
   
const  Layout= () => {

    const [query] = useState("*:*");
        return (
          <>
            <div className="application">
                <Header/>
                <div className='content'>
                  <Outlet />
                </div> 
                <div className='footer'>
                    <Footer></Footer>
              </div>
            </div>
        </>
    );
}

export default Layout;