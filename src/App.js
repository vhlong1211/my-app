import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header.js';
import Loginform from './components/Loginform.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  render(){
    return(
      
      <div>
        <Header />
        <Loginform />
        
      </div>
    )
  }
}

export default App;
