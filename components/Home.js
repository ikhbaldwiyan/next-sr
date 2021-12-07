import { Flex, Box, Heading, SimpleGrid, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

function Home({room}) {
  return (
    <Flex w="full" flexDirection="column">
      <Box p="6" mt="2">
        <Heading as='h3' mb="6" color="gray.700">JKT48 SHOWROOM</Heading>
        <SimpleGrid columns={4} spacingX="30px" spacingY="20px">
          {room.map((item, idx) => (
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
      </Box>
    </Flex>
  );
}

export default Home;

