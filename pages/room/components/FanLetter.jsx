import React from "react";
import getDate from "../../../utils/getDate";
import { Box, Flex, Heading, Text, Avatar, Divider } from "@chakra-ui/react";

export default function FanLetter({ room }) {
  const isDivider = (idx) => {
    if (idx !== 2) {
      return <Divider mb="2" />;
    }
  };

  return (
    <Box>
      <Box
        p="6"
        w="400px"
        borderWidth="1px"
        bgGradient="linear(to-l, teal.500, gray.600)"
        borderRadius="lg"
        color="white"
      >
        <Heading paddingTop="0px" as="h6" fontSize="24" mb={4}>
          Fan Letter
        </Heading>
        <Divider mb="4" />
        <Text fontSize="md" fontWeight="semibold" lineHeight="short">
          {room.recommend_comment_list != null
            ? room.recommend_comment_list.map((item, idx) => (
                <Box key={idx}>
                  <Flex>
                    <Avatar size="md" src={item.user.image} mr="2" mt="2" />
                    <Text fontWeight="bold" mt="2" fontSize="20">
                      {item.user.name}
                      <p
                        style={{
                          fontWeight: "400",
                          fontSize: 13,
                          color: "#CBD5E0",
                          marginTop: 2,
                        }}
                      >
                        {getDate(item.created_at)}
                      </p>
                    </Text>
                  </Flex>
                  <Flex py="3">
                    <Text py="3">
                      <p>{item.comment}</p>
                    </Text>
                  </Flex>
                  {isDivider(idx)}
                </Box>
              ))
            : "No Message"}
        </Text>
      </Box>
    </Box>
  );
}
