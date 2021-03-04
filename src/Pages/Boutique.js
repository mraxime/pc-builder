import { Container, Heading, Stack, StackDivider } from '@chakra-ui/react';
import Category from '../Components/Category';
import data from '../utils/data';

const Boutique = () => {
  return (
    <Container fontSize="xl">
      <Heading as="h1" mt="20" textAlign="center">
        PC Builder
      </Heading>
      <Stack
        w="full"
        maxW="50rem"
        mt="16"
        mb="20"
        spacing="1.5rem"
        divider={<StackDivider borderColor="gray.200" />}
      >
        {Object.keys(data).map(category => (
          <Category title={category} products={data[category]} key={category} />
        ))}
      </Stack>
    </Container>
  );
};

export default Boutique;
