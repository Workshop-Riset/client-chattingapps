import React from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { IoMdContacts } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { BiConversation } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import socket from '../socket';

export default function NavigationBar() {
  const menus = [
    { name: "contact", link: "/contact", icon: IoMdContacts },
    { name: "conversation", link: "/conversation", icon: BiConversation },
    { name: "profile", link: "/profile", icon: FaUser },
    { name: "Add Contact", link: "/room-chat", icon: IoMdContacts },
  ];
  const navigate = useNavigate()
  const handleLogout = () => {
    socket.disconnect()
    localStorage.removeItem('access_token')
    navigate('/login')
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Chatting</Navbar.Brand>
          <Nav className="me-auto">
            {menus.map((menu, index) => (
              <Nav.Link key={index} href={menu.link}>
                <span style={{ marginRight: '5px' }}>{menu.name.charAt(0).toUpperCase() + menu.name.slice(1)}</span>
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <Button onClick={handleLogout} variant='danger'>Logout</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
