import { Box, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Box as="nav" padding="3">
      <HStack fontSize="2xl" spacing="10" justify="center">
        <Link to="/">Home</Link>
        <Link to="/boutique">Boutique</Link>
        <Link to="/panier">Panier</Link>
      </HStack>
    </Box>
  );
};

export default NavBar;
