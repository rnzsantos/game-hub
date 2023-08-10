import { Container, Heading, Text } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <React.Fragment>
      <NavBar />
      <Container maxWidth="container.xl">
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? 'The page does not exists'
            : 'Something failed'}
        </Text>
      </Container>
    </React.Fragment>
  );
};

export default ErrorPage;
