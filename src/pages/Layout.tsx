import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Container maxW="1920px" mt={5}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
