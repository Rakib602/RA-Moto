import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useContextBase from '../../pages/hooks/useContextbase';
import './Header.css';

const Header = () => {
  const {user,logOut} =useContextBase();
    return (
        <div className="container pb-5">
            <Navbar className="navbar" bg="black" variant="dark" fixed="top" collapseOnSelect expand="lg">
    <Container  className="">
    <Navbar.Brand  className="text-danger logo">RA-MOTO</Navbar.Brand>
    
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link  className="text-light fw-bold link" as={Link} to="/home">Home</Nav.Link>
      <Nav.Link  className="text-light fw-bold link" as={Link} to="/allbikes">All Bikes</Nav.Link>
      {
        user?.email && <Nav.Link  className="text-light fw-bold link" as={Link} to="/dashboard">My DashBoard</Nav.Link>
      }

 {
   user.email ? 
   <Navbar.Text>
     
     <button onClick={logOut} className="btn btn-primary">Log Out</button>
     
     <Image className="ms-3" style={{width:30}} src={user.photoURL} roundedCircle />
   </Navbar.Text>
   
   :
   <Nav.Link className="btn btn-primary text-light" as={Link} to="/login">Login</Nav.Link>
 }
 {
   user?.email &&  <Navbar.Text className="ms-3 text-light fw-bold" >{user.displayName}</Navbar.Text>
 }
      
      
      </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;