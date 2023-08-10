import { Container, HStack, Heading } from '@chakra-ui/react';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack>
      <Container maxWidth="1920px" paddingY={5}>
        <HStack>
          <Heading size="lg" whiteSpace="nowrap">
            Game-Hub
          </Heading>
          <SearchInput />
        </HStack>
      </Container>
    </HStack>
  );
};

export default NavBar;
