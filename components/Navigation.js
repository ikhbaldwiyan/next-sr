import { VStack, IconButton, Tooltip, Image, Button } from "@chakra-ui/react";
import { AiFillHome } from 'react-icons/ai';
import { RiBroadcastFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { RiFileList3Fill } from "react-icons/ri";
import { BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

function Navigation() {

  const menus = [
    {
      name: 'Home',
      icon: <AiFillHome />
    },
    {
      name: 'Live Stream',
      icon: <RiBroadcastFill />
    },
    {
      name: 'Multi Room',
      icon: <HiUsers />
    },
    {
      name: 'Room List',
      icon: <RiFileList3Fill />
    },
    {
      name: 'About',
      icon: <BsInfoCircleFill />
    },
  ]

  return (
    <VStack p={6} justifyContent="space-between" alignItems="center" w="full" h="full">
      <VStack>
        <Image src="https://jkt48.com/images/oglogo.png" borderRadius="full" py="3" />
        {menus.map((menu, idx) => (
          <Link href="/">
            <Button variant="link">
              <Tooltip key={idx} label={menu.name} placement="right">
                  <IconButton color={menu.name === 'Home' ? 'teal.500' : 'gray.500' } icon={menu.icon} aria-label={menu.name} />
              </Tooltip>
            </Button>
          </Link>
        ))}
      </VStack>
    </VStack>
  );
}

export default Navigation;
