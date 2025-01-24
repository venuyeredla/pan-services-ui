import React, { useEffect, useState,useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import './chatbot.css';

const Chat =()=> {
     let websockeUrl="ws://localhost:2024/chat";
     const [sendMsg, setSendMsg] = useState("");
     let [messages,setMessages]=useState([])
     let websocket = useRef(()=>{   
      let websocket =new WebSocket(websockeUrl)
      console.log("connecting to websocekt.")
      websocket.onopen = function(e) {
        console.log("onopen callback and subscribing to a topic");
       // websocket.send(JSON.stringify({"command": "subscribe","identifier":"{\"channel\":\"/topic/greetings\"}"}))
        websocket.send("Hi from onopen")
      };
      
      websocket.onmessage = function(event) {
        console.log("onmessage callback and subscribing to a topic");
        setMessages(prevMessages => [...prevMessages, event.data]);
      };
      
      websocket.onclose = function(event) {
        if (event.wasClean) {
            console("onclose callback : "+event.reason);
        //  alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
        } else {
          // e.g. server process killed or network down
          // event.code is usually 1006 in this case
          console.log("onclose callback :Connection died ");
        }
      };
      
      websocket.onerror = function(error) {
        console.log("onclose callback :Connection died ");
      };
      return websocket;
     });

    useEffect(()=>{
       
    },[websockeUrl])
    
    const handleSubmit = (event) => {
            event.preventDefault();
            console.log("Sending message to ws");
            setMessages(prevMessages => [...prevMessages, sendMsg]);
            websocket.send(sendMsg) 
    }

  return (
    <div>
    <b>This is Chat application page!  </b>
    <br />
    <div className='chatBox'>
            <Form onSubmit={handleSubmit}>
            <InputGroup size="sm" className="mb-3">
            <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" type="text" value={sendMsg}  onChange={(e) => setSendMsg(e.target.value)}/>
            </InputGroup>
            <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    </div>
    <div className='chat_history'>
        <h6>Chat history</h6>
        <ul>
        {messages.map((msg,idx) => (
          <li key={idx} >{msg}</li>
        ))}
        </ul>
    </div>
    </div>
  );
}



  export default Chat;