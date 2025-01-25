import {useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useUser } from '../../context/userContext';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

import logo from '../../assets/ecommerce.png';

const Header = (props)=> {
   // const { hasSession, user, login, logout, loading, error } = useUser();
    const { hasSession,logout} = useUser();
    const searchInputRef = useRef(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    function closeSession(){
      console.log("Ending session..")
      logout();
      if (!hasSession){
        navigate("/login")
      }
    }

   return (
       <div id="navbar">
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Servcies provided</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <ul>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/contact">Contact</Link></li>
           </ul>
          </Offcanvas.Body>
       </Offcanvas>

          <div>
             <a>  <Button variant="primary" onClick={handleShow}> Canvas </Button> </a>
             <Link to="/"><img src={logo} width='30px' height="30px" alt="Logo" />
             <span className='logoText'> Ecommerce </span>
             </Link>
            
          </div>
         <div className='search-box'>   
       

         </div>
         <span className='profile'>
          
           <Link to="/user/venugopal">Cart</Link>
           <Link to="/chat">Chat</Link>
           <Link to="/user/venugopal">Notes</Link>
           <Link to="/user/venugopal">Profile</Link>
           <Button onClick={closeSession}>Logout</Button>
        
         </span>
     </div>
     );
 }
 export default Header;