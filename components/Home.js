import { Flex, Box, Heading } from "@chakra-ui/react";
import RoomList from "./RoomList";
import RoomLives from "./RoomLives";

function Home({ roomList, roomLives, roomTrainee }) {
  return (
    <Flex w="full" flexDirection="column">
      <Box mt="2">
        <Heading as="h3" mb="6" color="gray.700">
          JKT48 SHOWROOM
        </Heading>
        <RoomLives roomLives={roomLives} />
        <RoomList roomList={roomList} title="Room List" />
        <RoomList roomList={roomTrainee} title="Room Trainee" />
      </Box>
    </Flex>
  );
}

export default Home;
