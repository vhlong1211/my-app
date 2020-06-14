import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header.js';
import Loginform from './components/Loginform.js'
import TabMenu from './components/Menu.js'
import Render from './components/Render.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  constructor(){
    super();
    this.myFav=['End Game','The Dark Knight','San','Sab']
  }
  render(){
    return(
      
      <div>
        <Header />
        <Loginform />
        <TabMenu />
        {this.myFav.map((movi)=>
          <Render title={movi} />
        )}
        
      </div>
    )
  }
}

export default App;
