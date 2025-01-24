import React from 'react';

/*
    Life cycle methdos 
    1. Mounting
        

    2. Updating
        1. New props, 2. setStage 3. forceUpdate()

        

    3. Unmounting
       
*/
class Footer extends React.Component {
    /*
    constructor(props){
        super(props)
    } */
    componentDidMount(){

    }
    componentDidUpdate(){

    }

    componentWillUnmount(){

    }

    render() {
      return (
        <div className='footer'>
          <b> Copyright @Venugopal Reddy </b>
        </div>
      );
    }
  }

export default Footer;

