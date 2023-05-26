import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { RiLiveFill } from "react-icons/ri";

export default function RoomTableList({ roomList, roomLives, setRoomId }) {
  return (
    <Box height="680px" overflowY="auto">
      <Table
        size="md"
        borderRadius="md"
        colorScheme="gray"
        bgGradient="linear(to-r, gray.500, gray.700)"
        color="white"
      >
        <Thead height="70px">
          <Tr>
            <Th fontSize="md" color="white">
              Image
            </Th>
            <Th fontSize="md" color="white">
              Name
            </Th>
            <Th fontSize="md" color="white">
              Room
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {roomLives.length &&
            roomLives?.map((item, idx) => (
              <Tr key={idx}>
                <Td>
                  <Image borderRadius="xl" src={item.image} />
                </Td>
                <Td>
                  <b>{item.room_url_key.slice(6)}</b> <br />
                  <Button backgroundColor="red.500" mt="2">
                    Live
                  </Button>
                </Td>
                <Td>
                  <Button
                    mt="6"
                    onClick={() => setRoomId(item.room_id)}
                    colorScheme="teal"
                  >
                    <RiLiveFill />
                  </Button>
                </Td>
              </Tr>
            ))}
          {roomList.map((item, idx) => (
            <Tr key={idx}>
              <Td>
                <Image borderRadius="xl" src={item.image_url} />
              </Td>
              <Td>
                <Text fontSize="md" fontWeight="semibold">
                  {item.url_key.slice(6)}
                </Text>
              </Td>
              <Td>
                <Button onClick={() => setRoomId(item.id)} colorScheme="teal">
                  <RiLiveFill />
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
