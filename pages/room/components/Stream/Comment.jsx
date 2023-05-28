import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { baseUrl } from "../../../../utils/api";

const Comment = ({ roomId }) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    async function getComments() {
      try {
        const response = await axios.get(
          `${baseUrl}/lives/comments/${roomId}/comment`
        );
        const comments = response.data;
        setTimeout(() => {
          setComment(comments);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    }
    getComments();
  }, [roomId, comment]);

  return (
    <Box p="4" bgColor="gray.600" borderRadius="md" overflow="scroll" h="700px">
      <VStack align="stretch" spacing={2}>
        {comment.length > 0 ? (
          comment.map(
            (item, idx) =>
              item?.comment?.length != "2" &&
              item?.comment?.length != "1" && (
                <Box key={idx} p={4} bg="gray.200" borderRadius="md">
                  <Text
                    alignItems="center"
                    display="flex"
                    color="gray.500"
                    gap="1"
                    fontWeight="medium"
                    fontSize="18px"
                  >
                    <Image
                      src={item.avatar_url}
                      width={{base: "25px", md:"35px"}}
                      alt={item.name}
                      className="mr-2 mb-1"
                    />
                    {item.name}
                  </Text>
                  <Text mt="1">{item.comment}</Text>
                </Box>
              )
          )
        ) : (
          <Box w="500px" p={4} bg="gray.200" borderRadius="md">
            <Text
              alignItems="center"
              display="flex"
              color="gray.500"
              gap="1"
              fontWeight="medium"
              fontSize="17px"
            >
              <img width="25" className="mr-2 mb-1" />
              Admin
            </Text>
            <p>Loading</p>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Comment;
