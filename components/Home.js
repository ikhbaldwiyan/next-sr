import { Flex, Box, Heading } from "@chakra-ui/react";
import RoomList from "./RoomList";
import RoomLives from "./RoomLives";

function Home({roomList, roomLives}) {
  return (
    <Flex w="full" flexDirection="column">
      <Box p="6" mt="2">
        <Heading as='h3' mb="6" color="gray.600">JKT48 SHOWROOM</Heading>
        <RoomLives roomLives={roomLives} />
        <RoomList roomList={roomList} />
      </Box>
    </Flex>
  );
}

export default Home;

