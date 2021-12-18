import React from 'react'
import { FaUser, FaAddressCard } from "react-icons/fa";
import { Box, Image, Flex, Text, Button, Link } from "@chakra-ui/react";

export default function ImageProfile({ room }) {
  return (
    <Box p="3" w="380px" borderWidth="1px" bgGradient='linear(to-l, teal.500, gray.700)' borderRadius="lg" color="white">
      <Image borderRadius="md" src={room.image} />
      <Text ml="1" mt="2" fontSize="xl" fontWeight="semibold" lineHeight="short">
        {room.main_name}
      </Text>
      <Flex mt="2" align="center" textAlign="center">
        <Box ml="1" as={FaAddressCard} color="gray.300" fontSize={15} />
        <Text ml="1" fontSize="sm">
          <b> Room Level: {room.room_level}</b>
        </Text>
        <Box ml="4" as={FaUser} color="gray.300" fontSize={12} />
        <Text ml="1" fontSize="sm">
          <b> Followers: {room.follower_num}</b>
        </Text>
      </Flex>
      <Flex direction="column" py="4">
        <Link href={room.share_url_live} isExternal>
          <Button color="teal" w="full">Open Showroom</Button>
        </Link>
        {room.is_onlive ? (
          <Button mt="4" colorScheme="green" color="white" w="full">Online</Button>
        ) : (
          <Button mt="4" colorScheme="red" color="white" w="full">Offline</Button>
        )}
      </Flex>
    </Box>
  )
}
