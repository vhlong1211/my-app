import React,{Component} from 'react'
import { Navbar, Nav} from  'react-bootstrap';

// const dang = [
//   { icon: 'https://cdn.hyperdev.com/drag-in-files.svg?v=1477153069954', label: 'Home' },
//   { icon: 'https://cdn.hyperdev.com/click-me.svg?v=1477239469954', label: 'Links' },
//   { icon: 'https://cdn.hyperdev.com/paste-me.svg?v=1477325869954', label: 'Dang' },
//   { icon: 'https://cdn.glitch.com/9626bd34-22d2-4fe2-89ba-067450afc7f0%2FScreen%20Shot%202017-04-06%20at%2018.44.47.png?v=1491500694325', label: 'Home' },
// ]

export default class TabMenu extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Tab-Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

