import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './contact.css';
import 'bootstrap/dist/css/bootstrap.css'


function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}





class Contact extends React.Component {
    render() {
      return (
        <div> 
          <div className='accordwidth'>
            <BasicExample/>
          </div>
           
        </div>

      );
    }
  }

  export default Contact;