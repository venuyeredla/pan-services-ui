import {useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import {  Row,Col,Button, Collapse } from 'react-bootstrap';
import logo from '../../assets/ecommerce.png';

const Header = (props)=> {
    const searchInputRef = useRef(null);
    const [cookies, setCookie, removeCookie] = useCookies(['user-session']);
     const navigate = useNavigate();

    function logOut(event) {
      removeCookie("jwtToken");
      navigate("/login")
   }
    function handleSubmit(event) {
       event.preventDefault()
       console.log(`Query: ${searchInputRef.current.value}`)
       props.callback(searchInputRef.current.value)
    }
   return (
       <div id="navbar">
          <div>
             <Link to="/"><img src={logo} width='30px' height="30px" alt="Logo" />
               <span className='logoText'> Ecommerce </span>
             </Link>
             <Link to="/products">Products</Link>
             <Link to="/admin">Admin</Link>
             <Link to="/contact">Contact</Link>
          </div>
         <div className='search-box'>   
         <Form  onSubmit={handleSubmit}>
             <Row>
               <Col xs lg="2">
               <Form.Select aria-label="Default select example">
                   <option>Categories</option>
                   <option value="1">Electronics</option>
                   <option value="2">Furniture</option>
                   <option value="3">Books</option>
             </Form.Select>
               </Col>
               <Col>
               <Form.Control type="text" name="query"   placeholder="Your query"   ref={searchInputRef} />
               </Col>
               <Col>
               <Button variant="secondary" type='submit'>search</Button>{' '}
               </Col>
             </Row>
           </Form>

         </div>
         <span className='profile'>
           <Link to="/user/venugopal">Cart</Link>
           <Link to="/chat">Chat</Link>
           <Link to="/user/venugopal">Notes</Link>
           <Link to="/user/venugopal">Profile</Link>
           <Button onClick={()=>{
              logOut();
           }}>Logout</Button>
        
         </span>
     </div>
     );
 }
 export default Header;