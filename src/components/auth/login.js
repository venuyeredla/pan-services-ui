import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router';
import PropTypes from 'prop-types'
import './login.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
//import Cookies from 'js-cookie';
import { Login } from '../../services/apiClient';

function SignIn(props) {
    const [user, setUser]=useState({});
    const [cookies, setCookie, removeCookie] = useCookies(['user-session']);
    const navigate = useNavigate();
    
    useEffect(()=>{
      user.username="venugopal@ecom.com";
      user.password="ecom#24";
    })
  
    function handleLoginSubmit(event){
        event.preventDefault()
       Login( user.username,user.password)
       .then((authResponse) => {
           console.log(authResponse)
           const currentTime = new Date();
           const expirationTime = new Date(currentTime); // Important: Create a copy!
           expirationTime.setHours(currentTime.getHours() + 1);
           var options={
            expires: expirationTime
           }
           setCookie("jwtToken",authResponse.jwtToken, options)
           navigate("/search");

       })
       .catch((error) => {
          console.error(error);
        });
    }

    function  handleChange(event) {
      console.log("")
       // this.setState({value: event.target.value});
    }
  
    function gotoSignUp(event) {
        navigate("/signup");
    }
    
    return (
      <div>
        <div style={{width:"60%",float:"left"}}></div> 
        <div style={{width:"35%",float:"right"}}>
        <Form onSubmit={handleLoginSubmit}>
      <Row className="mb-3">
        <label>Please sign in.</label>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" name="email" value={user.username} placeholder="Enter id..." onChange={handleChange} />
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={user.password}  placeholder="Enter password..."/>
        </Form.Group>
        </Row>
      <Button type='submit' variant="primary">Submit</Button>{' '}
      <Button variant="info" onClick={gotoSignUp}>Sign up</Button>{' '}
      </Form>
  
        </div>
      </div>
     
    );
  }
  

  export default SignIn;