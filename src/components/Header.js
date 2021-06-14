import { NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";

export default function Header() {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <NavLink to="/">Dapp</NavLink>
            <HStack as={"nav"} spacing={4} display={{ md: "flex" }}>
              <NavLink to="/Login">Login</NavLink>
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <Button onClick={toggleColorMode}>Switch Mode Color</Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <NavLink to="/Account">
                  <MenuItem>Account</MenuItem>
                </NavLink>
                <NavLink to="/Transfert">
                  <MenuItem>Transfert</MenuItem>
                </NavLink>
                <MenuDivider />
                <MenuItem>Deconnect</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
