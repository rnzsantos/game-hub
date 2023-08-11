import { Container, HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <Container maxW="1920px" py={5}>
      <HStack>
        <Link to="/">
          <Image src={logo} boxSize="50px" fit="cover" />
        </Link>
        <SearchInput />
      </HStack>
    </Container>
  );
};

export default NavBar;
