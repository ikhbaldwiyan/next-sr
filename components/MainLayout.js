import { Flex, HStack } from '@chakra-ui/react';
import Navigation from '../components/Navigation';

import React from 'react';

const MainLayout = ({children}) => {
  return (
    <HStack h="100vh" spacing={0}>
      <Flex as="nav" maxW={16} h="full" w="full" bg="gray.100">
        <Navigation />
      </Flex>
      <Flex as="main" h="full" w="full" bg="gray.300">
        {children}
      </Flex>
    </HStack>
  );
};

export default MainLayout;
