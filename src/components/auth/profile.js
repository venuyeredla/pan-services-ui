import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types'
import './profile.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Cookies from 'js-cookie';
import { Login } from '../../services/apiClient';

function SignUp(props) {

    const [user] =useState({user:{email:"venugopal" }})

    function handleFormSubmit(event){
      event.preventDefault()
      console.log("Form submitted"+ user)
    }

  function  handleChange(event) {
    
     // this.setState({value: event.target.value});
    }

  return (
    <Form onSubmit={handleFormSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email"  value={user.email} placeholder="Enter email" onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <span>{props.num1}</span>
    </Form>
  );
}

SignUp.propTypes={
  num1: PropTypes.number
}

const Profile = () => {
  const params= useParams()
  const [loggedin, setLoggedin]=useState(false)
  const [user, setUser]=useState({"name":"venugopal"})


  function updateLoginStatus(){
    setLoggedin(true)
  }

  useEffect( () => {
    let userid=Cookies.get("user-id")
    console.log("User id "+userid)
    setLoggedin(false);
   
  },[])
      return (
        <div> 
          <b>Sign up! {user.name} </b>
          <h2>{params.id}</h2>
          <div className='formWidth'>
          <SignUp num1="2"></SignUp>
          </div>
        </div>

      );
  }
  export default Profile;