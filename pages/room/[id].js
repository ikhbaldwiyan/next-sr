import { useEffect, useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { baseUrl } from "../../utils/api";

import MainLayout from "../../components/MainLayout";
import RoomTableList from "./components/RoomTableList";
import Biodata from "./components/Biodata";
import FanLetter from "./components/FanLetter";
import ImageProfile from "./components/ImageProfile";

const RoomDetail = ({ room, roomList, roomLives, id }) => {
  const [rooms, setRooms] = useState(room);
  const [roomId, setRoomId] = useState(id);

  useEffect(() => {
    async function getRoomProfile() {
      const res = await fetch(`${baseUrl}/rooms/profile/${roomId}`);
      const data = await res.json();
      data && setRooms(data);
    }

    getRoomProfile();
    window.scrollTo(0, 0);
  }, [roomId]);

  return (
    <MainLayout>
      <Flex flexDirection="column">
        <Flex px="6" py="2">
          <Heading as="h5" fontSize="28" py="4" color="gray.700">
            {rooms.main_name}
          </Heading>
        </Flex>
        <Flex w="full" px="6" direction={["column", "column", "row", "row"]}>
          <Flex>
            <Box w={{ base: "380px", "2xl": "450px" }}>
              <ImageProfile room={rooms} />
              <Biodata room={rooms} />
            </Box>
          </Flex>
          <Flex
            w={{ base: "420px", "2xl": "520px" }}
            px={[null, null, "4", "4"]}
          >
            <FanLetter room={rooms} />
          </Flex>
          <Flex w={{ base: "360px", "2xl": "400px" }}>
            <RoomTableList
              roomList={roomList}
              roomLives={roomLives}
              setRoomId={setRoomId}
            />
          </Flex>
        </Flex>
      </Flex>
    </MainLayout>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`${baseUrl}/rooms/profile/${params.id}/profile`);
  const room = await res.json();

  const rooms = await fetch(`${baseUrl}/rooms`);
  const roomList = await rooms.json();

  const onLives = await fetch(`${baseUrl}/rooms/onlives`);
  const roomLives = await onLives.json();

  return {
    props: {
      room,
      roomList,
      roomLives,
      id: params.id,
    },
  };
}

export default RoomDetail;
