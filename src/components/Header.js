import React from 'react';
import { Navbar, Nav, Form, NavDropdown, FormControl,Button } from 'react-bootstrap';
class Header extends React.Component{
    render(){
        return(
            <div>
             <Navbar bg="light" expand="lg">
               <Navbar.Brand href="#home">CodersX</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Rank</Nav.Link>
                    <NavDropdown title="Course" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Javascript</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">HTML</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">CSS</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">MacLenin</NavDropdown.Item>
                    </NavDropdown>
                 </Nav>
                    <Form inline>
                       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                       <Button variant="outline-success">Search</Button>
                    </Form>
               </Navbar.Collapse>
             </Navbar>
            </div>
        )
    }
}

export default Header