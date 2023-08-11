import { Container, HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <Container maxWidth="1920px">
      <HStack>
        <Link to="/">
          <Image src={logo} boxSize="60px" objectFit="cover" />
        </Link>
        <SearchInput />
      </HStack>
    </Container>
  );
};

export default NavBar;
