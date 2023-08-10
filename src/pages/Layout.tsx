import { Container } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Container maxWidth="container.xl">
        <Outlet />
      </Container>
    </React.Fragment>
  );
};

export default Layout;
