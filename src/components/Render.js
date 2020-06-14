import React from 'react';
import { ListGroup} from  'react-bootstrap';
class Render extends React.Component{
    render(){
        return(
            <div>
                <ListGroup>
                    <ListGroup.Item>{this.props.title}</ListGroup.Item>
                </ListGroup>

            </div>
        )
    }
}
export default Render