import { Container, HStack, Heading } from '@chakra-ui/react';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <Container maxW="1920px" py={5}>
      <HStack>
        <Heading size="lg" whiteSpace="nowrap">
          Game-Hub
        </Heading>
        <SearchInput />
      </HStack>
    </Container>
  );
};

export default NavBar;
