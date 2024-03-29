import { Box, SimpleGrid, Image, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

function RoomList({ roomList, title }) {
  return (
    <>
      <Heading fontSize="28" as="h5" py="3" color="gray.700">
        {title}
      </Heading>
      <SimpleGrid
        minChildWidth="300px"
        columns={4}
        spacingX="10px"
        spacingY="20px"
      >
        {roomList.map((item, idx) => (
          <Box
            key={idx}
            bg="teal.400"
            width={{ base: "300px", md: "350px", "2xl": "320px" }}
            height={{ base: "230px", md: "260px", "2xl": "240px" }}
            borderRadius="xl"
            bgGradient="linear(to-l, teal.400, gray.600)"
          >
            <Image
              borderTopLeftRadius="8"
              borderTopRightRadius="8"
              src={
                item?.image_url?.replace("m.jpeg", "l.jpeg") ??
                item?.image?.replace("m.jpeg", "l.jpeg") ??
                item.image_l
              }
            />
            <Link href={`room/${item.id ?? item.room_id}`}>
              <Text
                p="3"
                ml="2"
                color="gray.100"
                fontSize="24"
                fontWeight="bold"
                cursor="pointer"
              >
                {item.url_key
                  ? item?.url_key?.substr(6) + " JKT48"
                  : item?.room_url_key?.substr(6) + " JKT48"}
              </Text>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}

export default RoomList;
