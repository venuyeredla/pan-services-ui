import React, { useState} from 'react';
import { useNavigate } from "react-router";
import { useUser } from '../../context/userContext';
//import { useParams } from 'react-router';
import './login.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
//import Cookies from 'js-cookie';

function SignIn(props) {
    const [creds, setCreds]=useState({"username":"venugopal@ecom.com","password":"ecom#24"});
    //const { hasSession, user, login, logout, loading, error } = useUser();
    const { hasSession,login} = useUser();
    const navigate = useNavigate();

    function handleLoginSubmit(event){
      event.preventDefault()
      login(creds);
      if (hasSession){
        navigate("/search");
      }
    }

    function  onChnageUser(event) {
      setCreds({...creds, username:event.target.value})
      console.log("")
    }
    function  onChangePassword(event) {
      setCreds({...creds, password:event.target.value})
      console.log("")
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
          <Form.Control type="text" name="email"  defaultValue={creds.username} placeholder="Enter id..." onChange={onChnageUser} />
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"  defaultValue={creds.password}  placeholder="Enter password..." onChange={onChangePassword} />
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