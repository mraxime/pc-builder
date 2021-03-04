import { Container, Heading, Text } from '@chakra-ui/react';

const Accueil = () => {
  return (
    <Container fontSize="xl" minH="100vh" mt="20" textAlign="center">
      <Heading as="h1">Accueil</Heading>
      <Text mt="5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </Container>
  );
};

export default Accueil;
