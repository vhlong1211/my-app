import React from 'react';

class ClickState extends React.Component{
    constructor(props){
        super(props)
        this.state={
            celeb:'Emma'
        }
        
        this.clickHandler=this.clickHandler.bind(this)

    
    }
    clickHandler(){
        this.setState(
            {celeb:'Zara'}
        )
    }

    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>Click</button>
        <div>{this.state.celeb}</div>

            </div>
        )
    }
}
export default ClickState;