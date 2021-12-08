import { Flex, Box, Heading } from "@chakra-ui/react";
import RoomList from "./RoomList";

function Home({roomList}) {
  return (
    <Flex w="full" flexDirection="column">
      <Box p="6" mt="2">
        <Heading as='h3' mb="6" color="gray.700">JKT48 SHOWROOM</Heading>
        <RoomList roomList={roomList} />
      </Box>
    </Flex>
  );
}

export default Home;

