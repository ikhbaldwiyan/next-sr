import Link from "next/link";
import { Flex, Box, SimpleGrid, Image, Heading, Text } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

function RoomLives({ roomLives }) {
  return (
    roomLives?.data?.length !== 0 && (
      <>
        <Heading fontSize="28" as="h5" mb="6" color="gray.700">
          Room Lives
        </Heading>
        <SimpleGrid
          minChildWidth="300px"
          columns={4}
          spacingX="10px"
          spacingY="20px"
          mb="4"
        >
          {roomLives?.data?.map((item, idx) => (
            <Box
              key={idx}
              bg="teal.400"
              width={{ base: '300px', md: "350px", "2xl": "320px" }}
              height={{ base: '230px', md: "260px", "2xl": "240px" }}
              borderRadius="xl"
              bgGradient="linear(to-l, red.500, red.700)"
            >
              <Image
                borderTopLeftRadius="8"
                borderTopRightRadius="8"
                src={item.image.replace("_s.jpeg", "_m.jpeg")}
              />
              <Link href={`room/${item.room_id}`}>
                <Flex p="3">
                  <Text
                    ml="2"
                    color="gray.100"
                    fontSize={{base: "xl", md: "24"}}
                    fontWeight="bold"
                    cursor="pointer"
                  >
                    {item.room_url_key.substr(6) + " JKT48"}
                  </Text>
                  <Text>
                    <Box
                      ml="10"
                      mt="3"
                      as={FaUser}
                      color="gray.100"
                      fontSize={15}
                    />
                  </Text>
                  <Text
                    ml="1"
                    mt="2"
                    color="gray.100"
                    fontSize="16"
                    fontWeight="bold"
                  >
                    {item.view_num}
                  </Text>
                </Flex>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </>
    )
  );
}

export default RoomLives;
