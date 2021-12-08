import { Box, SimpleGrid, Image, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

function RoomList({roomList}) {
  return (
    <>
      <Heading fontSize="28" as='h5' mb="6" color="gray.700">Room List</Heading>
      <SimpleGrid minChildWidth="300px" columns={4} spacingX="10px" spacingY="20px">
        {roomList.map((item, idx) => (
          <Box key={idx} bg="teal.400" width="300px" height="230px" borderRadius="xl" bgGradient='linear(to-l, teal.400, gray.600)'>
            <Image borderTopLeftRadius="8" borderTopRightRadius="8" src={item.image_url} />
            <Link href={`room/${item.id}`}>
              <Text p="3" ml='2' color="gray.100" fontSize="24" fontWeight="bold" cursor="pointer">
                {item.url_key.substr(6) + ' JKT48'}
              </Text>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}

export default RoomList;
