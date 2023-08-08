import { Container, HStack, Heading } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <HStack>
      <Container maxWidth="container.xl" paddingY={5}>
        <Heading size="lg">Game-Hub</Heading>
      </Container>
    </HStack>
  );
};

export default NavBar;
