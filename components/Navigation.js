import { VStack, IconButton, Tooltip, Image, Button } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { RiBroadcastFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { RiFileList3Fill } from "react-icons/ri";
import { BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

function Navigation() {
  const menus = [
    {
      name: "Home",
      icon: <AiFillHome size={20} />,
    },
    {
      name: "Live Stream",
      icon: <RiBroadcastFill size={20} />,
    },
    {
      name: "Multi Room",
      icon: <HiUsers size={20} />,
    },
    {
      name: "Room List",
      icon: <RiFileList3Fill size={20} />,
    },
    {
      name: "About",
      icon: <BsInfoCircleFill size={20} />,
    },
  ];

  return (
    <VStack
      p={6}
      w="full"
      h="full"
      justifyContent="space-between"
      alignItems="center"
    >
      <VStack gap={10}>
        <Image
          py="3"
          borderRadius="lg"
          src="https://media.discordapp.net/attachments/1108380195175551047/1111706299273592842/Group_42_1.png?width=906&height=906"
        />
        {menus.map((menu, idx) => (
          <Link key={idx} href="/">
            <Button variant="link">
              <Tooltip label={menu.name} placement="right">
                <IconButton
                  color={menu.name === "Home" ? "teal.500" : "gray.500"}
                  icon={menu.icon}
                  aria-label={menu.name}
                />
              </Tooltip>
            </Button>
          </Link>
        ))}
      </VStack>
    </VStack>
  );
}

export default Navigation;
