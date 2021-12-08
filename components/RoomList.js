import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

function RoomList({roomList}) {
  return (
    <SimpleGrid columns={4} spacingX="30px" spacingY="20px">
      {roomList.map((item, idx) => (
        <Box key={idx} bg="teal.400" width="180" height="250" borderRadius="xl" bgGradient='linear(to-l, teal.400, gray.600)'>
          <Image borderTopLeftRadius="8" borderTopRightRadius="8" src={item.image_url} />
          <Link href={`room/${item.id}`}>
            <Text p="3" ml='2' color="gray.100" fontSize="24" fontWeight="bold" cursor="pointer">
              {item.url_key.substr(6) + ' JKT48'}
            </Text>
          </Link>
        </Box>
      ))}
    </SimpleGrid>  
  );
}

export default RoomList;
