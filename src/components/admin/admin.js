import React from 'react';
import './admin.css';

class Admin extends React.Component {

  componentDidMount(){
      //this.state.xyz="venugopal"
      console.log("Compoenent mounted")
      
  }
  componentDidUpdate(){

  }
  componentWillUnmount(){

  }

    render() {
      return (
        <div> 
          <b>This is Admin page!  </b>
        </div>

      );
    }
  }
  export default Admin;