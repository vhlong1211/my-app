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
    this.myFav=[{title:'End Game',isComplete:true},{title:'The Dark Knight',isComplete:true},{title:'San',isComplete:false},{title:'Sab',isComplete:false}]
  }
  render(){
    return(
      
      <div>
        <Header />
        <Loginform />
        <TabMenu />
        {this.myFav.map((movi,index)=>
          <Render key={index} stt={movi} />
        )}
        
      </div>
    )
  }
}

export default App;
