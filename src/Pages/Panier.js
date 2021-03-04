import { DeleteIcon } from '@chakra-ui/icons';
import {
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Stack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { CartContext } from '../App';
const Panier = () => {
  const { cart, dispatch } = useContext(CartContext);

  const handleAlert = () => {
    if (cart.length > 0) {
      alert('Votre panier: ' + JSON.stringify(cart));
    } else {
      alert('Votre panier est vide.');
    }
  };

  const handleRemoveFromCart = payload => {
    dispatch({ type: 'DELETE_FROM_CART', payload });
  };

  return (
    <Container mt="20" textAlign="center">
      <Heading as="h1">Votre panier:</Heading>
      <Stack mt="5" spacing="5">
        {cart.map(cartItem => (
          <Flex justify="space-between" alignItems="center">
            <Heading as="h2" size="md" key={cartItem.title}>
              {cartItem.title}
            </Heading>
            <IconButton
              onClick={() => handleRemoveFromCart(cartItem)}
              icon={<DeleteIcon />}
              size="sm"
              colorScheme="red"
            />
          </Flex>
        ))}
      </Stack>
      <Button type="submit" colorScheme="teal" mt="10" onClick={handleAlert}>
        Alert le contenu
      </Button>
    </Container>
  );
};

export default Panier;
