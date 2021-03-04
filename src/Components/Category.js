import { ChevronDownIcon } from '@chakra-ui/icons';
import { Collapse, Flex, Heading, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import Products from './Products';

const Category = ({ title, products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleProducts = () => setIsOpen(!isOpen);

  return (
    <>
      <Flex justify="space-between">
        <Heading>{title}</Heading>
        <IconButton
          onClick={toggleProducts}
          bg="transparent"
          aria-label={`show all ${title}`}
          size="lg"
          icon={
            <ChevronDownIcon
              w="6"
              h="6"
              transition={'all .15s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
            />
          }
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Products products={products} />
      </Collapse>
    </>
  );
};

export default Category;
