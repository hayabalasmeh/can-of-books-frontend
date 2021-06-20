import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './header.css';
import LogoutButton from './logoutButton';
// import { useAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    return(
      
      <Navbar className= 'potato'collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
         <div className='nav'>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
          <LogoutButton />
          </div>
      </Navbar>
    )
  }
}

export default Header;
