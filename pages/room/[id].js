import { Box, Image, Flex, Heading, Text, Avatar, Divider, Button, Link } from "@chakra-ui/react";
import { FaUser, FaAddressCard } from "react-icons/fa";
import MainLayout from "../../components/MainLayout";
import formatDescription from "../../utils/formatDescription";

const RoomDetail = ({ room }) => {

  const ImageProfile = () => (
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
        ): (
          <Button mt="4" colorScheme="red" color="white" w="full">Offline</Button>
        )}
      </Flex>
    </Box>
  )

  const Biodata = () => (
    <Box mt="2" p="3" w="380px" borderWidth="1px" bgGradient='linear(to-l, teal.400, gray.600)' borderRadius="lg" color="white">
      <Text mt={2} fontSize="md" fontWeight="semibold" lineHeight="short">
        <div dangerouslySetInnerHTML={{__html: room.description && formatDescription(room)}}></div>
      </Text>
    </Box>
  )

  const FanLetter = () => (
    <Box>
      <Heading mt="4" as='h6' fontSize="24" color="gray.700">Fan Letter</Heading>
      <Box mt="2" p="6" w="380px" borderWidth="1px" bgGradient='linear(to-l, teal.500, gray.600)' borderRadius="lg" color="white">
        <Text fontSize="md" fontWeight="semibold" lineHeight="short">
          {room.recommend_comment_list != null ?
            room.recommend_comment_list.map((item, idx) => (
              <Box key={idx}>
                <Flex>
                  <Avatar size="md" src={item.user.image} mr="2" mt="2" />
                  <Text fontWeight="bold" mt="4" fontSize="20">
                    {item.user.name}
                  </Text>
                </Flex>
                <Flex py="3">
                  <Text py="3">
                    <p>{item.comment}</p>
                  </Text>
                </Flex>
                <Divider mb="2"/>
              </Box>
            )
          ) : (
            'No Message'
          )}
        </Text>
      </Box>
    </Box>
  )

  return (
    <MainLayout>
      <Flex p="6" direction={['column', 'column', 'row', 'row']}>
        <Flex>
          <Box>
            <Heading as='h5' fontSize="28" py="4" color="gray.700">{room.main_name}</Heading>
            <ImageProfile />
            <Biodata />
          </Box>
        </Flex>
        <Flex mt="2" p={[null, null, '8', '8']}>
          <Box>
            <FanLetter />
          </Box>
        </Flex>
      </Flex>
    </MainLayout>
  );
}

export async function getServerSideProps({params}) {
  const res = await fetch(`https://jkt48-showroom-api.vercel.app/api/rooms/profile/${params.id}`)
  const data = await res.json()

  return { props: { room: data } }
}

export default RoomDetail;
