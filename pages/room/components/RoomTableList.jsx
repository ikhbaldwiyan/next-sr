import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, Image, Button } from '@chakra-ui/react'

export default function RoomTableList({roomList, roomLives, setRoomId}) {
  return (
    <Table mt="5" borderRadius="md" size="md" colorScheme="gray"  bgGradient='linear(to-r, gray.500, gray.700)' color="white">
      <Thead>
        <Tr>
          <Th color="white">Image</Th>
          <Th color="white">Name</Th>
          <Th color="white">Room</Th>
        </Tr>
      </Thead>
      <Tbody>
        {roomLives.map((item, idx) => (
          <Tr key={idx}>
            <Td><Image borderRadius="xl" src={item.image} /></Td>
            <Td><b>{item.room_url_key.slice(6)}</b> <br />
              <Button backgroundColor="red.500" mt="2">Live</Button>
            </Td>
            <Td>
              <Button onClick={() => setRoomId(item.room_id)} mt="6" colorScheme="teal">See</Button> 
            </Td>
          </Tr>
        ))}
        {roomList.map((item, idx) => (
          <Tr key={idx}>
            <Td><Image borderRadius="xl" src={item.image_url} /></Td>
            <Td><b>{item.url_key.slice(6)}</b></Td>
            <Td>
              <Button onClick={() => setRoomId(item.id)} colorScheme="teal">See</Button> 
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
