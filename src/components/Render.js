import React from 'react';
import { ListGroup} from  'react-bootstrap';
import './Render.css';
class Render extends React.Component{
    
    render(){
        let clName='fav'
            if(this.props.stt.isComplete===true){
                clName+=' fav-complete'
            }
        return(
            <div className={clName}>
                <ListGroup>
                    <ListGroup.Item>{this.props.stt.title}</ListGroup.Item>
                </ListGroup>

            </div>
        )
    }
}
export default Render