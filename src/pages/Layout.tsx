import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Container maxWidth="1920px">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
