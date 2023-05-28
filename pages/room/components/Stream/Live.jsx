import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { baseUrl } from "../../../../utils/api";

import MainLayout from "../../../../components/MainLayout";
import Streaming from ".";
import RoomTableList from "../RoomTableList";
import Comment from "./Comment";

const Live = ({ room, roomList, roomLives, id }) => {
  const [rooms, setRooms] = useState(room);
  const [roomId, setRoomId] = useState(id);
  const [url, setUrl] = useState([]);

  useEffect(() => {
    async function getRoomProfile() {
      const res = await fetch(`${baseUrl}/rooms/profile/${roomId}`);
      const data = await res.json();
      data && setRooms(data);
    }

    getRoomProfile();
    window.scrollTo(0, 0);
  }, [roomId]);

  useEffect(() => {
    try {
      async function getUrl() {
        const res = await fetch(`${baseUrl}/lives/stream/${roomId}/stream`);
        const data = await res.json();
        data && setUrl(data[0]?.url);
      }
      getUrl()
    } catch (error) {
      console.log(error);
    }
  }, [roomId]);

  return (
    <MainLayout>
      <Flex flexDirection="column">
        <Flex
          w="full"
          direction={["column", "column", "row", "row"]}
          gap={{ base: "0", md: "6" }}
        >
          <Flex flexDirection="column">
            <Box w={{ base: "100%", md: "760px", "2xl": "900px" }}>
              <Streaming url={url} />
            </Box>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "lg", md: "28px" }}
              py="4"
              color="gray.700"
            >
              {rooms.main_name}
            </Text>
          </Flex>
          <Flex w={{ base: "100%", md: "380px", "2xl": "400px" }}>
            <Comment roomId={id} />
            {/* <RoomTableList
              roomList={roomList}
              roomLives={roomLives}
              setRoomId={setRoomId}
            /> */}
          </Flex>
        </Flex>
      </Flex>
    </MainLayout>
  );
};

export default Live;
