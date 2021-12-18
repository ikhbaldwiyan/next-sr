import { Box,  Flex, Heading } from "@chakra-ui/react";
import MainLayout from "../../components/MainLayout";
import Biodata from "./components/Biodata";
import FanLetter from "./components/FanLetter";
import ImageProfile from "./components/ImageProfile";

const RoomDetail = ({ room }) => {
  return (
    <MainLayout>
      <Flex p="6" direction={['column', 'column', 'row', 'row']}>
        <Flex>
          <Box>
            <Heading as='h5' fontSize="28" py="4" color="gray.700">{room.main_name}</Heading>
            <ImageProfile room={room} />
            <Biodata room={room} />
          </Box>
        </Flex>
        <Flex mt="2" p={[null, null, '8', '8']}>
          <Box>
            <FanLetter room={room} />
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
