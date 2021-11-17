import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faUserPlus, faHeart, faHome } from '@fortawesome/free-solid-svg-icons'
import Create from './Create'
import List from './List'
import Search from './Search'
import Cart from './Cart'
import './style.css'
export default class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Router>
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">

              <Nav.Link href="#List"><Link className="my-navbar" to="/List" style={{ textDecoration: 'none', color: 'white' }}>LIST</Link>
              </Nav.Link>
              <Nav.Link href="#Create"><Link className="my-navbar" to="/Create" style={{ textDecoration: 'none', color: 'white' }} >CREATE</Link>
              </Nav.Link>
              <Nav.Link href="#Search"><Link className="my-navbar" to="/Search" style={{ textDecoration: 'none', color: 'white' }} >SEARCH</Link>
              </Nav.Link>

              <Nav.Link href="#Cart"><Link className="my-navbar" to="/Cart" style={{ textDecoration: 'none', color: 'white',margin:'1050px'}}><FontAwesomeIcon icon={faCartPlus} style={{ fontSize: '30px' }} /></Link>
              </Nav.Link>
            </Nav>
          </Navbar>
          <Route path="/List" component={List} />
          <Route path="/Create" component={Create} />
          <Route path="/Search" component={Search} />
          <Route path="/Cart" component={Cart} />

        </Router>
      </div>
    );
  }
}