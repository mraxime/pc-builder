import { AddIcon } from '@chakra-ui/icons';
import {
  Badge,
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
  StackDivider,
  useToast,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { CartContext } from '../App';

const Products = ({ products }) => {
  const { cart, dispatch } = useContext(CartContext);
  const toast = useToast(); // Alert hook

  const handleAddToCart = payload => {
    //checks if the provided product is already in the cart
    if (!cart.includes(payload)) {
      dispatch({ type: 'ADD_TO_CART', payload });
      toast({
        title: `${payload.title} a été ajouté`,
        status: 'success',
        duration: 2500,
      });
    } else {
      toast({
        title: `${payload.title} est déjà dans le panier`,
        status: 'error',
        duration: 2500,
      });
    }
  };

  return (
    <Stack
      w="90%"
      mx="auto"
      spacing="2rem"
      mt="1.5rem"
      divider={<StackDivider borderColor="gray.200" />}
    >
      {products.map(product => (
        <Stack key={product.title}>
          <Flex justify="space-between">
            <Heading size="md">{product.title}</Heading>
            <IconButton
              onClick={() => handleAddToCart(product)}
              icon={<AddIcon />}
              colorScheme="teal"
              size="xs"
            />
          </Flex>
          <HStack spacing="5">
            {product.infos.map(info => (
              <Badge colorScheme="purple" key={info}>
                {info}
              </Badge>
            ))}
          </HStack>
        </Stack>
      ))}
    </Stack>
  );
};

export default Products;
