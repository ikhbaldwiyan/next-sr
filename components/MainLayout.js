import { Flex } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

import React from "react";

const MainLayout = ({ children }) => {
  return (
    <Flex bg="gray.100">
      <Flex maxW="80px" h="full" w="full">
        <Navigation />
      </Flex>
      <Flex as="main" h="full" w="full" bg="gray.300" p="8">
        {children}
      </Flex>
    </Flex>
  );
};

export default MainLayout;
