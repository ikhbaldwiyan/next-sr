import React from 'react'
import { Box, Text } from "@chakra-ui/react";
import formatDescription from "../../../utils/formatDescription";

export default function Biodata({ room }) {
  return (
    <Box mt="2" p="3" w="400px" borderWidth="1px" bgGradient='linear(to-l, teal.400, gray.600)' borderRadius="lg" color="white">
      <Text mt={2} fontSize="md" fontWeight="semibold" lineHeight="short">
        <div dangerouslySetInnerHTML={{__html: room.description && formatDescription(room)}}></div>
      </Text>
    </Box>
  )
}
