import { Flex } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

import React from "react";

const MainLayout = ({ children }) => {
  return (
    <Flex bg="gray.100">
      <Flex maxW="60px" h="full" w="full">
        <Navigation />
      </Flex>
      <Flex
        as="main"
        h="full"
        w={{ base: "max-content", md: "full" }}
        bg="gray.300"
        p={{ base: "6", md: "8" }}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default MainLayout;
