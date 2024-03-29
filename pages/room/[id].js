import { useEffect, useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { baseUrl } from "../../utils/api";

import MainLayout from "../../components/MainLayout";
import RoomTableList from "./components/RoomTableList";
import Biodata from "./components/Biodata";
import FanLetter from "./components/FanLetter";
import ImageProfile from "./components/ImageProfile";
import Live from "./components/Stream/Live";

const RoomDetail = ({ room, roomList, roomLives, id }) => {
  return room?.is_onlive ? (
    <Live id={id} room={room} roomList={roomList} roomLives={roomLives} />
  ) : (
    <MainLayout>
      <Flex flexDirection="column">
        <Flex>
          <Heading as="h5" pt="3" pb="4" fontSize="28" color="gray.700">
            {room?.main_name}
          </Heading>
        </Flex>
        <Flex w="full" direction={["column", "column", "row", "row"]} gap="1">
          <Flex>
            <Box w={{ base: "380px", "2xl": "450px" }}>
              <ImageProfile room={room} />
              <Biodata room={room} />
            </Box>
          </Flex>
          <Flex
            w={{ base: "400px", "2xl": "520px" }}
            px={[null, null, "4", "4"]}
          >
            <FanLetter room={room} />
          </Flex>
          <Flex w={{ base: "360px", "2xl": "400px" }}>
            <RoomTableList roomList={roomList} roomLives={roomLives} />
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
